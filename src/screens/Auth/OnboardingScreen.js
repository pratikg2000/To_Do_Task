// import React, {useState, useRef} from 'react';
// import {
//   View,
//   Text,
//   StyleSheet,
//   Image,
//   Dimensions,
//   TouchableOpacity,
//   StatusBar,
// } from 'react-native';
// import PagerView from 'react-native-pager-view';
// import * as Animatable from 'react-native-animatable';
// import Icon from 'react-native-vector-icons/Ionicons';

// const {width} = Dimensions.get('window');

// const OnboardingScreen = ({navigation}) => {
//   const pagerRef = useRef(null);
//   const [currentPage, setCurrentPage] = useState(0);

//   const slides = [
//     {
//       id: '1',
//       title: 'Discover Beauty Products',
//       description:
//         'Explore a wide range of high-quality beauty products tailored for you.',
//       image: require('../../assets/images/glowkart-logo.png'),
//     },
//     {
//       id: '2',
//       title: 'Personalized Recommendations',
//       description:
//         'Get beauty advice and product suggestions based on your preferences.',
//       image: require('../../assets/images/glowkart-logo.png'),
//     },
//     {
//       id: '3',
//       title: 'Enjoy Exclusive Offers',
//       description:
//         'Unlock special discounts and deals on your favorite beauty items.',
//       image: require('../../assets/images/glowkart-logo.png'),
//     },
//   ];

//   const renderSlide = ({item}) => (
//     <View style={styles.slide}>
//       <View style={styles.imageContainer}>
//         <Animatable.Image
//           animation="fadeIn"
//           duration={1000}
//           source={item.image}
//           style={styles.slideImage}
//           resizeMode="contain"
//         />
//       </View>
//       <View style={styles.textContainer}>
//         <Text style={styles.slideTitle}>{item.title}</Text>
//         <Text style={styles.slideDescription}>{item.description}</Text>
//       </View>
//     </View>
//   );

//   const handleNext = () => {
//     if (currentPage < slides.length - 1) {
//       pagerRef.current.setPage(currentPage + 1);
//     } else {
//       navigation.replace('Login');
//     }
//   };

//   const handleSkip = () => {
//     navigation.replace('Login');
//   };

//   const renderDots = () => (
//     <View style={styles.dotsContainer}>
//       {slides.map((_, index) => (
//         <View
//           key={index}
//           style={[styles.dot, currentPage === index && styles.activeDot]}
//         />
//       ))}
//     </View>
//   );

//   const renderButtons = () => (
//     <View style={styles.buttonsContainer}>
//       {currentPage < slides.length - 1 ? (
//         <TouchableOpacity style={styles.skipButton} onPress={handleSkip}>
//           <Text style={styles.skipButtonText}>Skip</Text>
//         </TouchableOpacity>
//       ) : (
//         <View style={{flex: 1}} />
//       )}
//       <TouchableOpacity style={styles.nextButton} onPress={handleNext}>
//         <Text style={styles.nextButtonText}>
//           {currentPage < slides.length - 1 ? 'Next' : 'Get Started'}
//         </Text>
//         <Icon
//           name="arrow-forward-outline"
//           size={20}
//           color="#FFFFFF"
//           style={{marginLeft: 5}}
//         />
//       </TouchableOpacity>
//     </View>
//   );

//   return (
//     <View style={styles.container}>
//       <StatusBar backgroundColor="#FADACD" barStyle="dark-content" />
//       <PagerView
//         ref={pagerRef}
//         style={styles.pagerView}
//         initialPage={0}
//         onPageSelected={event => setCurrentPage(event.nativeEvent.position)}>
//         {slides.map(slide => (
//           <View key={slide.id} style={styles.page}>
//             {renderSlide({item: slide})}
//           </View>
//         ))}
//       </PagerView>
//       {renderDots()}
//       {renderButtons()}
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#FFFFFF',
//   },
//   pagerView: {
//     flex: 1,
//     width: '100%',
//   },
//   page: {
//     flex: 1,
//     width: '100%',
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
//   slide: {
//     width: '100%',
//     flex: 1,
//     justifyContent: 'flex-start',
//     alignItems: 'center',
//   },
//   imageContainer: {
//     width: '100%',
//     height: undefined,
//     aspectRatio: 1, // Adjust this based on your image aspect ratio
//   },
//   slideImage: {
//     width: '100%',
//     height: '100%',
//   },
//   textContainer: {
//     paddingHorizontal: 30,
//     marginTop: 20,
//     width: '100%',
//   },
//   slideTitle: {
//     fontSize: 24,
//     color: '#333333',
//     fontFamily: 'Poppins-Bold',
//     textAlign: 'center',
//     marginBottom: 15,
//   },
//   slideDescription: {
//     fontSize: 16,
//     color: '#666666',
//     textAlign: 'center',
//     lineHeight: 24,
//   },
//   dotsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'center',
//     alignItems: 'center',
//     marginBottom: 30,
//   },
//   dot: {
//     width: 10,
//     height: 10,
//     borderRadius: 5,
//     backgroundColor: '#D9D9D9',
//     marginHorizontal: 5,
//   },
//   activeDot: {
//     backgroundColor: '#FF4F81',
//     width: 20,
//   },
//   buttonsContainer: {
//     flexDirection: 'row',
//     justifyContent: 'space-between',
//     alignItems: 'center',
//     paddingHorizontal: 30,
//     marginBottom: 40,
//   },
//   skipButton: {
//     paddingVertical: 10,
//     paddingHorizontal: 20,
//   },
//   skipButtonText: {
//     color: '#333333',
//     fontSize: 16,
//   },
//   nextButton: {
//     backgroundColor: '#FF4F81',
//     borderRadius: 25,
//     paddingVertical: 12,
//     paddingHorizontal: 25,
//     flexDirection: 'row',
//     alignItems: 'center',
//     shadowColor: '#FF4F81',
//     shadowOffset: {width: 0, height: 4},
//     shadowOpacity: 0.3,
//     shadowRadius: 8,
//     elevation: 5,
//   },
//   nextButtonText: {
//     color: '#FFFFFF',
//     fontSize: 16,
//     fontFamily: 'Poppins-SemiBold',
//   },
// });

// export default OnboardingScreen;

// src/screens/Auth/OnboardingScreen.js

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
      navigation.replace('Login');
    }
  };

  const handleSkip = () => {
    navigation.replace('Login');
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
