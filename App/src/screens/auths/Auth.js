import {React} from '../../imports/all_RnComponents';
import {SignUp, Login,ForgotPasswordStack} from '../../imports/all_files';
import {Stack } from '../../navigation/create/CreateNavigation';

const Auth = () => {
  return (
    <Stack.Navigator screenOptions={{headerShown:false}}>
      <Stack.Screen name="signUp" component={SignUp} />
      <Stack.Screen name="login" component={Login} />
      <Stack.Screen name="forgotPassword" component={ForgotPasswordStack} />
    </Stack.Navigator>
  );
};

export default Auth;

