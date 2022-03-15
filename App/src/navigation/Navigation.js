import {React} from '../imports/all_RnComponents';
import {MainNavigation} from '../imports/all_files';
import {Stack, Nav_Container as NavContainer} from './create/CreateNavigation';
import Welcome from './../screens/forms/Welcome';
import Confirmation from './../screens/auths/Confirmation';
import Register from './../screens/auths/Register';
import FormStack from './../screens/forms/FormStack';

const Navigation = () => {
  return (
    <NavContainer>
      <Stack.Navigator
        initialRouteName={'formStack'}
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Group>
          <Stack.Screen name="register" component={Register} />
          <Stack.Screen name="confirmation" component={Confirmation} />
        </Stack.Group>

        <Stack.Screen name="formStack" component={FormStack} />

        <Stack.Group>
          <Stack.Screen
            name="mainNavigation"
            component={MainNavigation}
            options={{
              headerShown: false,
              title: 'Posts',
              headerBackVisible: false,
              headerShadowVisible: false,
            }}
          />
        </Stack.Group>
      </Stack.Navigator>
    </NavContainer>
  );
};

export default Navigation;
