import {
  View,
  Animated,
  ActivityIndicator,
  StyleProp,
  ImageStyle,
} from 'react-native';
import React, {useState} from 'react';
import {useAnimation} from '../hooks/useAnimation';

// Clase 216: hacemos un componente para hacer efecto fade in cuando se carga una imagen
// Clase 217: definirmos el style que recibe uma Img para poder recibirlos como Prop
interface Props {
  uri: string;
  style?: StyleProp<ImageStyle>;
}

const FadeInImage = ({uri, style}: Props) => {
  const {opacity, fadeIn} = useAnimation();
  const [isLoading, setIsLoading] = useState(true);

  const finishLoading = () => {
    setIsLoading(false);
    fadeIn();
  };

  return (
    <View style={{justifyContent: 'center', alignItems: 'center'}}>
      {isLoading && (
        <ActivityIndicator
          style={{position: 'absolute'}}
          color="grey"
          size={30}
        />
      )}
      <Animated.Image
        source={{uri}}
        onLoadEnd={finishLoading}
        style={{
          //   width: '100%',
          //   height: 400,
          ...(style as any),
          opacity,
        }}
      />
    </View>
  );
};

export default FadeInImage;
