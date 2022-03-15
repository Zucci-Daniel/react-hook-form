import {React, StyleSheet, View} from '../imports/all_RnComponents';
import {universalPadding, width, height} from '../config/config';

export default InputsGroup = ({extraStyles, children}) => {
  return <View style={[styles.group, extraStyles]}>{children}</View>;
};

const styles = StyleSheet.create({
  group: {
    paddingVertical: universalPadding, 
  },
});
