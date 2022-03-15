import {React, StyleSheet, View, Text} from '../../../imports/all_RnComponents';
import {Profile, MenuList, config} from '../../../imports/all_files';
import {Stack} from '../../../navigation/create/CreateNavigation';

const {colors, brandFont} = config;

const Menu = () => {
  //this "might" be a stack navigation, so be prepared!
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        headerTintColor: colors.hairLineColor,
        headerShadowVisible: false,
        animation: 'slide_from_right',
        headerTitleStyle: {
          fontFamily: brandFont.medium,
        },
      }}>
      <Stack.Screen name="menuList" component={MenuList} />
      <Stack.Screen name="profile" component={Profile} />
    </Stack.Navigator>
  );
};

export default Menu;
