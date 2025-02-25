import React, {useEffect, useState} from 'react';
import {
  View,
  Image,
  ActivityIndicator,
  StyleSheet,
  Dimensions,
} from 'react-native';
import Swiper from 'react-native-swiper';
import {Get} from '../../../Services/axios';

// Define types
interface ImageData {
  id: number;
  url: string;
}

const ImageSlider: React.FC = () => {
  const [images, setImages] = useState<ImageData[]>([]);
  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    const fetchImages = async () => {
      try {
        const response = await Get('search?query=nature&per_page=5');
        const fetchedImages = response.data.photos.map((photo: any) => ({
          id: photo.id,
          url: photo.src.landscape, // Using landscape images
        }));
        setImages(fetchedImages);
      } catch (error) {
        console.error('Error fetching images:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchImages();
  }, []);

  if (loading) {
    return (
      <ActivityIndicator size="large" color="#0000ff" style={styles.loader} />
    );
  }

  return (
    <View style={styles.container}>
      <Swiper autoplay autoplayTimeout={3} showsPagination loop>
        {images.map(image => (
          <View key={image.id} style={styles.slide}>
            <Image source={{uri: image.url}} style={styles.image} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

const {width, height} = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    height: height * 0.4, // Adjust height as needed
  },
  loader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slide: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  image: {
    width: '100%',
    height: '100%',
    resizeMode: 'cover',
  },
});

export default ImageSlider;
