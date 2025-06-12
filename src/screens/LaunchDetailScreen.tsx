import React from 'react';
import { Text, Image, ScrollView, ActivityIndicator, SafeAreaView, View } from 'react-native';
import { useLocalSearchParams } from 'expo-router';
import { useLaunchDetails } from '../hooks/useLaunchDetails';

export const LaunchDetailScreen = () => {
  const { id } = useLocalSearchParams<{ id: string }>();
  const { launch, launchpad, payloads, loading } = useLaunchDetails(id!);

  if (loading || !launch) return <ActivityIndicator className="flex-1 bg-black" color="white" />;

  return (
    <SafeAreaView className="flex-1 bg-black">
      <ScrollView className="pt-0">
        <View className="px-4 pt-6">
          <Text className="mt-4 text-lg font-semibold text-white">Plataforma de lanzamiento:</Text>
          <Text className="ml-2 mt-1 text-gray-300">{launchpad?.name || 'Desconocida'}</Text>

          <Text className="mt-4 text-lg font-semibold text-white">Payloads asociados:</Text>
          {payloads.length === 0 ? (
            <Text className="ml-2 mt-1 text-gray-300">Ninguno</Text>
          ) : (
            payloads.map((payload) => (
              <Text key={payload.id} className="ml-2 mt-1 text-gray-300">
                {payload.name}
              </Text>
            ))
          )}

          <Text className="mt-4 text-lg font-semibold text-white">Imágenes:</Text>
          {launch.links?.flickr?.original?.length > 0 ? (
            launch.links.flickr.original.map((img: string, idx: number) => (
              <Image
                key={idx}
                source={{ uri: img }}
                className="my-2 h-52 w-full rounded-lg"
                resizeMode="cover"
              />
            ))
          ) : (
            <Text className="ml-2 mt-1 text-gray-300">No hay imágenes disponibles.</Text>
          )}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};
