// import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { DefaultTheme, Provider as PaperProvider, TextInput } from 'react-native-paper'
import Login from './src/screens/Login'

const myTheme = {
  ...DefaultTheme,
  roundness: 2,
  colors: {
    ...DefaultTheme.colors,
    primary: '#2d2c45',
    accent: '#3d3b3b',
    // background: "black"
  },
};
// <PaperProvider theme={theme}></PaperProvider>

export default function App() {
  return (
    <PaperProvider theme={myTheme}>
      <Login/>
    </PaperProvider>
  );
}
