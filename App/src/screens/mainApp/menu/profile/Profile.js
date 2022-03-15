import {
  React,
} from '../../../../imports/all_RnComponents';
import {FrontPage, EditProfile} from '../../../../imports/all_files';
import {Stack} from '../../../../navigation/create/CreateNavigation';

const Profile = ({navigation}) => {
  return (
    <Stack.Navigator
      screenOptions={{
        // animation: 'slide_from_right',
        presentation: 'modal',
        headerShadowVisible: false,
      }}>
      <Stack.Screen
        name="frontPage"
        component={FrontPage}
        options={{
          headerTitle: '@WinningPower',
        }}
      />
      <Stack.Screen
        name="editProfile"
        component={EditProfile}
        options={{
          headerTitle: 'Edit Profile',
        }}
      />
    </Stack.Navigator>
  );
};

export default Profile;
