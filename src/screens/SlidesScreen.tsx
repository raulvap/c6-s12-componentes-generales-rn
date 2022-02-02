import React, {useContext, useRef, useState} from 'react';
import {useNavigation} from '@react-navigation/native';
import {StackScreenProps} from '@react-navigation/stack';
import {
  View,
  Text,
  SafeAreaView,
  ImageSourcePropType,
  Dimensions,
  Image,
  StyleSheet,
  TouchableOpacity,
  Animated,
} from 'react-native';
import Carousel, {Pagination} from 'react-native-snap-carousel';
import Icon from 'react-native-vector-icons/Ionicons';
import {ThemeContext} from '../context/themeContext/ThemeContext';
import {useAnimation} from '../hooks/useAnimation';

const {width: screenWidth} = Dimensions.get('window');

interface Slide {
  title: string;
  desc: string;
  img: ImageSourcePropType;
}

const items: Slide[] = [
  {
    title: 'Titulo 1',
    desc: 'Ea et eu enim fugiat sunt reprehenderit sunt aute quis tempor ipsum cupidatat et.',
    img: require('../assets/slide-1.png'),
  },
  {
    title: 'Titulo 2',
    desc: 'Anim est quis elit proident magna quis cupidatat culpa labore Lorem ea. Exercitation mollit velit in aliquip tempor occaecat dolor minim amet dolor enim cillum excepteur. ',
    img: require('../assets/slide-2.png'),
  },
  {
    title: 'Titulo 3',
    desc: 'Ex amet duis amet nulla. Aliquip ea Lorem ea culpa consequat proident. Nulla tempor esse ad tempor sit amet Lorem. Velit ea labore aute pariatur commodo duis veniam enim.',
    img: require('../assets/slide-3.png'),
  },
];

interface Props extends StackScreenProps<any, any> {}

const SlidesScreen = ({navigation}: Props) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const isVisible = useRef(false);

  const {opacity, fadeIn} = useAnimation();
  const {
    theme: {colors},
  } = useContext(ThemeContext);

  const renderItem = (item: Slide) => {
    return (
      <View
        style={{
          flex: 1,
          backgroundColor: colors.background,
          borderRadius: 5,
          padding: 20,
          justifyContent: 'center',
        }}>
        <Image
          source={item.img}
          style={{
            width: 350,
            height: 400,
            resizeMode: 'center',
          }}
        />
        <Text style={{...stylesComp.title, color: colors.primary}}>
          {item.title}
        </Text>
        <Text style={{...stylesComp.subtitle, color: colors.text}}>
          {item.desc}
        </Text>
      </View>
    );
  };

  const handleIndex = (index: number) => {
    setActiveIndex(index);
    if (index == items.length - 1) {
      isVisible.current = true;
      setTimeout(() => {
        fadeIn(1000);
      }, 500);
    }
  };

  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: colors.background,
        paddingTop: 50,
      }}>
      <Carousel
        // ref={    }}
        data={items}
        renderItem={({item}: any) => renderItem(item)}
        sliderWidth={screenWidth}
        itemWidth={screenWidth}
        onSnapToItem={index => handleIndex(index)}
        layout="default"
      />

      <Animated.View
        style={{
          opacity,
        }}>
        <TouchableOpacity
          onPress={() => {
            if (isVisible.current) {
              navigation.navigate<any>('HomeScreen');
            }
          }}
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            alignItems: 'center',
            alignSelf: 'center',
            borderRadius: 10,
            width: 135,
            height: 45,
            backgroundColor: colors.primary,
          }}>
          <Text style={{color: colors.text, fontWeight: 'bold'}}>Entrar</Text>
          <Icon name="chevron-forward-outline" size={30} color="white" />
        </TouchableOpacity>
      </Animated.View>

      <Pagination
        dotsLength={items.length}
        activeDotIndex={activeIndex}
        dotStyle={{
          width: 10,
          height: 10,
          borderRadius: 10,
          backgroundColor: colors.primary,
        }}
      />
    </SafeAreaView>
  );
};

const stylesComp = StyleSheet.create({
  title: {
    fontSize: 30,
    fontWeight: 'bold',
  },
  subtitle: {
    fontSize: 16,
  },
});

export default SlidesScreen;
