import React, {JSX} from 'react';
import {ThemeProvider} from '@shopify/restyle';
import theme from '@/Theme/';
import Route from '@/Services/navigation/navigation';
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
