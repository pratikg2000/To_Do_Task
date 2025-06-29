import React, {useState, useRef} from 'react';
import {
  View,
  Text,
  Image,
  Dimensions,
  TouchableOpacity,
  StatusBar,
} from 'react-native';
import PagerView from 'react-native-pager-view';
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/Ionicons';
import styles from '../styles/OnboardingScreenStyles';

const {width} = Dimensions.get('window');

const OnboardingScreen = ({navigation}) => {
  const pagerRef = useRef(null);
  const [currentPage, setCurrentPage] = useState(0);

  const slides = [
    {
      id: '1',
      title: 'Discover Beauty Products',
      description:
        'Explore a wide range of high-quality beauty products tailored for you.',
      image: require('../../assets/images/glowkart-logo.png'),
    },
    {
      id: '2',
      title: 'Personalized Recommendations',
      description:
        'Get beauty advice and product suggestions based on your preferences.',
      image: require('../../assets/images/glowkart-logo.png'),
    },
    {
      id: '3',
      title: 'Enjoy Exclusive Offers',
      description:
        'Unlock special discounts and deals on your favorite beauty items.',
      image: require('../../assets/images/glowkart-logo.png'),
    },
  ];

  const renderSlide = ({item}) => (
    <View style={styles.slide}>
      <View style={styles.imageContainer}>
        <Animatable.Image
          animation="fadeIn"
          duration={1000}
          source={item.image}
          style={styles.slideImage}
          resizeMode="contain"
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.slideTitle}>{item.title}</Text>
        <Text style={styles.slideDescription}>{item.description}</Text>
      </View>
    </View>
  );

  const handleNext = () => {
    if (currentPage < slides.length - 1) {
      pagerRef.current.setPage(currentPage + 1);
    } else {
      navigation.replace('LoginScreen');
    }
  };

  const handleSkip = () => {
    navigation.replace('LoginScreen');
  };

  const renderDots = () => (
    <View style={styles.dotsContainer}>
      {slides.map((_, index) => (
        <View
          key={index}
          style={[styles.dot, currentPage === index && styles.activeDot]}
        />
      ))}
    </View>
  );

  const renderButtons = () => (
    <View style={styles.buttonsContainer}>
      {currentPage < slides.length - 1 ? (
        <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
          <Text style={styles.skipButtonText}>Skip</Text>
        </TouchableOpacity>
      ) : (
        <View style={{flex: 1}} />
      )}
      <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
        <Text style={styles.nextButtonText}>
          {currentPage < slides.length - 1 ? 'Next' : 'Get Started'}
        </Text>
        <Icon
          name="arrow-forward-outline"
          size={20}
          color="#FFFFFF"
          style={{marginLeft: 5}}
        />
      </TouchableOpacity>
    </View>
  );

  return (
    <View style={styles.container}>
      <StatusBar backgroundColor="#FADACD" barStyle="dark-content" />
      <PagerView
        ref={pagerRef}
        style={styles.pagerView}
        initialPage={0}
        onPageSelected={event => setCurrentPage(event.nativeEvent.position)}>
        {slides.map(slide => (
          <View key={slide.id} style={styles.page}>
            {renderSlide({item: slide})}
          </View>
        ))}
      </PagerView>
      {renderDots()}
      {renderButtons()}
    </View>
  );
};

export default OnboardingScreen;
