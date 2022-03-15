import {
  React,
  StyleSheet,
  View,
  Text,
  TouchableOpacity,
  ScrollView,
} from '../imports/all_RnComponents';
import {universalPadding} from '../config/config';
import {Touchable} from 'react-native';

export default AppScrollView = ({children,extraStyle}) => {
  return (
    <View style={[styles.container,extraStyle]}>
      <ScrollView contentContainerStyle={styles.view}>{children}</ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: '100%',
    width: '100%',
  },
  view: {
    padding: universalPadding / 7,
  },
});
