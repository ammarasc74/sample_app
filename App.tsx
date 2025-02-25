import React, {JSX} from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme from './src/Theme/';
import Route from './src/Services/navigation/navigation';
import {SafeAreaView} from 'react-native';

function App(): JSX.Element {
  return (
    <SafeAreaView style={{flex: 1}}>
      <ThemeProvider theme={theme}>
        <Route />
      </ThemeProvider>
    </SafeAreaView>
  );
}

export default App;
