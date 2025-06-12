import React from 'react';
import { Text, TouchableOpacity, View } from 'react-native';
import { Rocket, Calendar, CheckCircle2, XCircle, HelpCircle } from 'lucide-react-native';

type LaunchCardProps = {
  launch: {
    name: string;
    rocket?: string;
    date_utc: string;
    success?: boolean | null;
  };
  onPress: () => void;
};

const getStatus = (success: boolean | null | undefined) => {
  if (success === true)
    return { label: 'Éxito', color: '#16a34a', icon: <CheckCircle2 size={16} color="#16a34a" /> };
  if (success === false)
    return { label: 'Fallido', color: '#dc2626', icon: <XCircle size={16} color="#dc2626" /> };
  return { label: 'Desconocido', color: '#52525b', icon: <HelpCircle size={16} color="#52525b" /> };
};

export const LaunchCard = ({ launch, onPress }: LaunchCardProps) => {
  const status = getStatus(launch.success);

  return (
    <TouchableOpacity
      className="mb-4 rounded-2xl bg-white p-4 shadow-md"
      onPress={onPress}
      activeOpacity={0.9}>
      <Text className="mb-1 text-xl font-semibold text-black">{launch.name}</Text>

      <View className="mb-1 flex-row items-center gap-2 space-x-2">
        <Rocket size={16} color="#555" />
        <Text className="text-sm text-gray-700">Cohete: {launch.rocket || 'Desconocido'}</Text>
      </View>

      <View className="mb-1 flex-row items-center gap-2 space-x-2">
        <Calendar size={16} color="#555" />
        <Text className="text-sm text-gray-700">
          Fecha: {new Date(launch.date_utc).toLocaleDateString()}
        </Text>
      </View>

      <View className="flex-row items-center gap-2 space-x-2">
        {status.icon}
        <Text className="text-sm" style={{ color: status.color }}>
          Estado: {status.label}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
