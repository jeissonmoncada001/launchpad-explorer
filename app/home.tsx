import { Stack } from 'expo-router';
import { HomeScreen } from '../src/screens/HomeScreen';

const Home = () => {
  return (
    <>
      <Stack.Screen
        options={{
          headerShown: false,
        }}
      />
      <HomeScreen />
    </>
  );
};
export default Home;
