import React from 'react';
import {Alert, Linking} from 'react-native';
import {Layout, Box, Text} from '../../Components';
import ImageSlider from './components/ImageSlider';

const Home = () => {
  const openLink = (url: string) => {
    Linking.canOpenURL(url)
      .then(async supported => {
        await Linking.openURL(url).catch(err =>
          console.error('Failed to open URL:', err),
        );
      })
      .catch(err => console.error('Error checking URL support', err));
  };

  return (
    <Layout>
      <Box marginVertical={'m'}>
        {/* Image Slider Section */}
        <ImageSlider />
      </Box>

      {/* Text variations Section */}
      <Box marginVertical={'l'}>
        <Text variant={'header'} fontSize={35} color={'red'}>
          Netaq for E-Solutions
        </Text>
        <Text variant={'subHeader'}>Netaq for E-Solutions</Text>
        <Text variant={'content'}>Netaq for E-Solutions</Text>
        <Text onPress={() => openLink('https://netaq.ae/')} variant={'link'}>
          Netaq for E-Solutions
        </Text>
      </Box>
    </Layout>
  );
};

export default Home;
