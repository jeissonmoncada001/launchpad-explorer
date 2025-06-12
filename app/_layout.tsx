import '../global.css';
import React from 'react';
import { Slot, Stack } from 'expo-router';
import { SafeAreaProvider } from 'react-native-safe-area-context';

export default function Layout() {
  return (
    <SafeAreaProvider>
      <Stack>
        <Slot />
      </Stack>
    </SafeAreaProvider>
  );
}
