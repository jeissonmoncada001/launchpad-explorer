import { Stack, router } from 'expo-router';
import { ArrowLeft, Rocket } from 'lucide-react-native';
import { TouchableOpacity, Text, View } from 'react-native';
import { UpcomingLaunchesScreen } from '../src/screens/UpcomingLaunchesScreen';

const UpcomingLaunches = () => {
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
                Próximos lanzamientos
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
      <UpcomingLaunchesScreen />
    </>
  );
};

export default UpcomingLaunches;
