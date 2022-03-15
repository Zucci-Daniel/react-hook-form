import {
  React,
  StyleSheet,
  View,
  Text,
  Button,
} from '../../../imports/all_RnComponents';
import {ProfilePane, config, MenuItem} from '../../../imports/all_files';
import {colors, universalPadding, menuIconSize} from '../../../config/config';
import {useContext} from 'react';
import {SignUpInfoContext} from './../../forms/signUpInfoContext';

const MenuList = ({navigation}) => {
  const {user} = useContext(SignUpInfoContext);

  return (
    <View style={styles.container}>
      <ProfilePane
        username={`${user.firstName} ${user.lastName}`}
        name={`${user.department} | ${user.level}Level`}
        onPress={() => navigation.navigate('profile')}
      />
      <MenuItem
        onPress={() => null}
        title="roommates deals"
        iconName="camera"
      />
      <MenuItem
        onPress={() => alert('log her out asap')}
        title="log out"
        iconName="logout"
      />
    </View>
  );
};

export default MenuList;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.brandBg,
    position: 'relative',
    padding: universalPadding / 4,
  },
});
