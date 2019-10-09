import React from 'react';
import PropTypes from 'prop-types';
import {StyleSheet, View} from 'react-native';
import LottieView from 'lottie-react-native';
import Loader from './3-dot-load';
import zeitgoldTheme from "../../../../../native-base-theme/variables/zeitgoldTheme";

const Loading = (props) => {
  const { custom, color } = props;
  let style = { paddingTop: 6 };

  if (custom) {
    style = {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    };
  }

  return (
    <View style={style}>
      <LottieView
          autoPlay
          style={{width:50, height:15}}
          source={Loader}
      />
    </View>
  );
};


Loading.propTypes = {
  color: PropTypes.string.isRequired,
  custom: PropTypes.bool,
};

Loading.defaultProps = {
  custom: false,
};

export default Loading;
