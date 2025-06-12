import { router } from 'expo-router';
import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import { Rocket } from 'lucide-react-native';

export const HomeScreen = () => {
  return (
    <View className="flex-1 items-center justify-center bg-black px-6">
      {/* Hero Section */}
      <View className="mb-10 items-center">
        <Rocket size={48} color="white" />
        <Text className="mt-4 text-3xl font-bold text-white">Explorador Espacial</Text>
        <Text className="mt-2 text-center text-gray-400">
          Consulta los lanzamientos pasados y futuros de SpaceX
        </Text>
      </View>

      {/* Botones de navegación */}
      <View className="w-full gap-5 space-y-4">
        <TouchableOpacity
          className="items-center rounded-xl bg-indigo-600 py-4 shadow-md"
          onPress={() => router.push('past-launches')}>
          <Text className="text-lg font-semibold text-white">🚀 Lanzamientos Pasados</Text>
        </TouchableOpacity>

        <TouchableOpacity
          className="items-center rounded-xl bg-emerald-500 py-4 shadow-md"
          onPress={() => router.push('upcoming-launches')}>
          <Text className="text-lg font-semibold text-white">🌕 Próximos Lanzamientos</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};
