import {
  React,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
} from '../imports/all_RnComponents';
import {Headline, Subheading, Badge, Button} from '../imports/all_packages';
import {universalPadding, width, sMargin, colors} from '../config/config';

export default AppTabButton = ({children, text, onPress,background,isActive}) => {
  return (
    <Button
      mode="contained"
      onPress={onPress}
      style={[
        styles.button,
        {backgroundColor: isActive ? colors.pureWhite : colors.hairLineColor},
      ]}
      contentStyle={styles.innerButton}
      accessibilityRole="link">
      {children}
    </Button>
  );
};

const styles = StyleSheet.create({
  button: {
    flex: 1,
    borderWidth: 0,
  },
  innerButton: {
    height: '100%',
    width: '100%',
  },
});
