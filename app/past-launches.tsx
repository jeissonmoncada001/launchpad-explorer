import { Stack, router } from 'expo-router';
import { ArrowLeft, Rocket } from 'lucide-react-native';
import { TouchableOpacity, Text, View } from 'react-native';
import { PastLaunchesScreen } from '../src/screens/PastLaunchesScreen';

const PastLaunches = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerStyle: { backgroundColor: '#000' },
          headerTintColor: 'white',
          headerTitleAlign: 'center',
          headerTitle: () => (
            <View style={{ flexDirection: 'row', alignItems: 'center', gap: 6 }}>
              <Rocket size={18} color="white" />
              <Text style={{ color: 'white', fontSize: 18, fontWeight: '600' }}>
                Lanzamientos pasados
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
      <PastLaunchesScreen />
    </>
  );
};

export default PastLaunches;
