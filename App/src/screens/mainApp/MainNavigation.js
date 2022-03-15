import {
  React,
  StyleSheet,
  useState,
} from '../../imports/all_RnComponents';
import {
  Home,
  Notification,
  Menu,
  ButtonText,
} from '../../imports/all_files';
import {Ionicons} from '../../imports/all_packages';
import {BottomTab} from '../../navigation/create/CreateNavigation';
import {
  universalPadding,
  tabBarBottomConfig,
  colors,
  brandFont,
  height,
} from '../../config/config';
import AppTabButton from '../../components/AppTabButton';
import {useContext} from 'react';
import {SignUpInfoContext} from './../forms/signUpInfoContext';

const InsideApp = ({navigation}) => {
  const {user} = useContext(SignUpInfoContext);
  console.log(user.firstName, ' hey');

  const [currentRoute, setCurrentRoute] = useState('home');
  const handleRouteChange = (destination, routeName) => {
    setCurrentRoute(routeName);
    return navigation.navigate(destination);
  };

  return (
    <BottomTab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarInactiveTintColor: colors.pureWhite,
        tabBarActiveBackgroundColor: colors.pureWhite,
        tabBarStyle: {...tabBarBottomConfig},
        tabBarHideOnKeyboard: true,
        animation: 'slide_from_right',
        headerTintColor: 'gray',
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: colors.brandColor,
          borderBottomColor: 'transparent',
          shadowColor: 'transparent',
        },
        headerTitleStyle: {
          fontFamily: brandFont.medium,
          fontSize: 13,
          fontWeight: '700',
        },
      }}>
      <BottomTab.Screen
        name="home"
        component={Home}
        options={({route}) => ({
          headerRight: () => (
            <ButtonText title="Create A Post!" onPress={() => null} />
          ),
          tabBarButton: ({color, size}) => (
            <AppTabButton
              isActive={currentRoute === route.name ? true : false}
              onPress={() => handleRouteChange('home', route.name)}>
              <Ionicons
                name="home-outline"
                color={currentRoute === route.name ? colors.brandBg : color}
                size={20}
              />
            </AppTabButton>
          ),
          headerShown: true,
          title: `WELCOME! ${user.lastName.toUpperCase()}`,
        })}
      />

      <BottomTab.Screen
        name="notification"
        component={Notification}
        options={({route}) => ({
          tabBarButton: ({color, size}) => (
            <AppTabButton
              isActive={currentRoute === route.name ? true : false}
              onPress={() => handleRouteChange('notification', route.name)}>
              <Ionicons
                name="notifications-outline"
                color={currentRoute === route.name ? colors.brandBg : color}
                size={20}
              />
            </AppTabButton>
          ),

          tabBarBadge: 77,
          tabBarBadgeStyle: {
            backgroundColor: 'red',
            height: 25,
            width: 25,
            borderRadius: 25,
            fontSize: 10,
            fontWeight: 'bold',
          },
          headerRight: () => <ButtonText title="mark all as read" />,
          headerTitle: 'Notifications',
        })}
      />
      <BottomTab.Screen
        name="menu"
        component={Menu}
        options={({route}) => ({
          tabBarButton: ({color, size}) => (
            <AppTabButton
              isActive={currentRoute === route.name ? true : false}
              onPress={() => handleRouteChange('menu', route.name)}>
              <Ionicons
                name="menu-sharp"
                color={
                  currentRoute === route.name ? colors.hairLineColor : color
                }
                size={20}
              />
            </AppTabButton>
          ),
          headerShown: false,
        })}
      />
    </BottomTab.Navigator>
  );
};

export default InsideApp;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
