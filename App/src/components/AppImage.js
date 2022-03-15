import {React, StyleSheet, TouchableOpacity} from '../imports/all_RnComponents';
import {Avatar} from '../imports/all_packages';

export default AppImage = ({
  clustered,
  onPress,
  source = require('../assets/1.jpg'),
  size
}) => {
  return (
    <>
      <TouchableOpacity onPress={onPress}>
        <Avatar.Image size={size} source={source} style={clustered ? styles.image : null} />
      </TouchableOpacity>
    </>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
  },
  image: {
    marginLeft: -10,
  },
});
