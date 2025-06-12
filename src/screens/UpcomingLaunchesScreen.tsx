import React from 'react';
import { View, Text, FlatList, ActivityIndicator } from 'react-native';
import { useLaunches } from '../hooks/useLaunches';

export const UpcomingLaunchesScreen = () => {
  const { launches, loading } = useLaunches();

  const upcomingLaunches = launches.filter((l) => new Date(l.date_utc) > new Date());

  if (loading) return <ActivityIndicator className="flex-1 bg-black" color="white" />;

  return (
    <FlatList
      data={upcomingLaunches}
      keyExtractor={(item) => item.id}
      className="bg-black p-4"
      renderItem={({ item }) => (
        <View className="mb-4 rounded-xl bg-gray-800 p-4 shadow-sm">
          <Text className="mb-1 text-lg font-bold text-white">{item.name}</Text>
          <Text className="text-gray-300">🚀 Rocket: {item.rocket}</Text>
          <Text className="text-gray-400">
            📅 Fecha: {new Date(item.date_utc).toLocaleDateString()}
          </Text>
        </View>
      )}
      ListEmptyComponent={
        <Text className="mt-8 text-center text-gray-400">No hay próximos lanzamientos.</Text>
      }
    />
  );
};
