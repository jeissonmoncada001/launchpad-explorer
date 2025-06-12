import React, { useState, useMemo } from 'react';
import { View, Text, FlatList, ActivityIndicator, TextInput, TouchableOpacity } from 'react-native';
import { useLaunches } from '../hooks/useLaunches';
import { LaunchCard } from '../components/LaunchCard';
import { router } from 'expo-router';
import { sortAndFilterLaunches } from '../utils/sortAndFilter';

export const PastLaunchesScreen = () => {
  const { launches, loading } = useLaunches();
  const [search, setSearch] = useState('');
  const [order, setOrder] = useState<'asc' | 'desc'>('desc');
  const [filterStatus, setFilterStatus] = useState<'all' | 'success' | 'failed'>('all');

  const filteredLaunches = useMemo(() => {
    return sortAndFilterLaunches(launches, { search, order, filterStatus });
  }, [launches, search, order, filterStatus]);

  if (loading) {
    return (
      <View className="flex-1 items-center justify-center bg-black">
        <ActivityIndicator size="large" color="#00ffcc" />
        <Text className="mt-4 text-white">Cargando lanzamientos...</Text>
      </View>
    );
  }

  return (
    <View className="flex-1 bg-black px-4 pt-10">
      <TextInput
        className="mb-4 rounded-xl bg-gray-800 px-4 py-3 text-white placeholder:text-gray-400"
        placeholder="Buscar misión o cohete..."
        placeholderTextColor="#666"
        value={search}
        onChangeText={setSearch}
      />

      <View className="mb-4 flex-row justify-between gap-4 space-x-2">
        <TouchableOpacity
          className={`flex-1 items-center rounded-xl py-3 ${
            order === 'asc' ? 'bg-indigo-600' : 'bg-gray-700'
          }`}
          onPress={() => setOrder(order === 'asc' ? 'desc' : 'asc')}>
          <Text className="font-medium text-white">{order === 'asc' ? 'Fecha ↑' : 'Fecha ↓'}</Text>
        </TouchableOpacity>

        {['all', 'success', 'failed'].map((status) => (
          <TouchableOpacity
            key={status}
            className={`flex-1 items-center rounded-xl py-3 ${
              filterStatus === status ? 'bg-emerald-600' : 'bg-gray-700'
            }`}
            onPress={() => setFilterStatus(status as any)}>
            <Text className="font-medium capitalize text-white">
              {status === 'all' ? 'Todos' : status === 'success' ? 'Éxito' : 'Fallido'}
            </Text>
          </TouchableOpacity>
        ))}
      </View>

      <FlatList
        data={filteredLaunches}
        keyExtractor={(item) => item.id}
        showsVerticalScrollIndicator={false}
        className="pb-10"
        renderItem={({ item }) => (
          <LaunchCard
            launch={item}
            onPress={() =>
              router.push({
                pathname: '/launch-detail',
                params: { id: item.id },
              })
            }
          />
        )}
        ListEmptyComponent={
          <Text className="mt-10 text-center text-gray-400">No se encontraron lanzamientos.</Text>
        }
      />
    </View>
  );
};
