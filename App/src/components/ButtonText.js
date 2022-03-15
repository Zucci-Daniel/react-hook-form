import {
  React,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from '../imports/all_RnComponents';
import {Headline, Subheading} from '../imports/all_packages';
import {universalPadding, width, sMargin, colors,brandFont} from '../config/config';

export default ButtonText = ({onPress, title = 'title'}) => {
  return (
    <TouchableOpacity
      onPress={onPress}
      style={{paddingHorizontal: universalPadding / 4}}>
      <Text style={{color: colors.brandBg,fontFamily:brandFont.medium,fontWeight:'bold'}}>{title}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: universalPadding,
    alignItems: 'center',
    
  },
});
