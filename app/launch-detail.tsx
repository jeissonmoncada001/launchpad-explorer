import { router, Stack } from 'expo-router';
import { LaunchDetailScreen } from '../src/screens/LaunchDetailScreen';
import { TouchableOpacity, Text, View } from 'react-native';
import { ArrowLeft, Rocket } from 'lucide-react-native';

const LaunchDetail = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitle: () => (
            <View className="flex-row items-center gap-2 space-x-2">
              <Rocket size={18} color="white" />
              <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
                Detalles del lanzamiento
              </Text>
            </View>
          ),
          headerLeft: () => (
            <TouchableOpacity onPress={() => router.back()}>
              <ArrowLeft size={22} color="white" />
            </TouchableOpacity>
          ),
        }}
      />
      <LaunchDetailScreen />
    </>
  );
};

export default LaunchDetail;
