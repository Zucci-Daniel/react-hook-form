import {
  React,
  StyleSheet,
  View,
  useEffect,
  useState,
} from '../../imports/all_RnComponents';
import {
  AppInput,
  InputsGroup,
  AppButton,
  FormTitle,
  Link,
  Lock,
  commonFunctions,
} from '../../imports/all_files';
import {colors, width, height, universalPadding} from '../../config/config';
//firebase auth service
import auth from '@react-native-firebase/auth';

const Confirmation = ({navigation, route, choiceOfAlert = 'Phone Number'}) => {
  //don't bother checking if theres a number or not, users wont get here if they dont add a number.
  const {phoneNumber} = route.params;
  //hold the state until firebase connects finishe...
  const [initializing, setInitializing] = useState(true);
  const [user, setUser] = useState();
  // If null, no SMS has been sent
  const [confirm, setConfirm] = useState(null);

  const [code, setCode] = useState('');

  const signInWithPhone = async () => {
    try {
      const confirmation = await auth().signInWithPhoneNumber(phoneNumber);
      setConfirm(confirmation);
      //if verified, navigation.navigate('mainNavigation')
    } catch (error) {
      commonFunctions.showToast('failed', error.message, 'error');
    }
  };

  function onAuthStateChangedCallBack(user) {
    console.log('auth is running');
    if (user) {
      setUser(user);
      console.log(
        'there is user, ',
        user,
        ' the state user, => ',
        phoneNumber,
      );
      //to prevent going back to login screen
      navigation.navigate('formStack');
      return navigation.reset({
        index: 0,
        routes: [{name: 'formStack'}],
      });
      /////////
    } else
      console.log(user, ' doesnt match, => ', phoneNumber);
  }
  useEffect(() => {
    signInWithPhone();
  }, []);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChangedCallBack);
    return subscriber; // unsubscribe on unmount
  }, []);

  ///called on manual click
  const verifyPhoneNumber = async () => {
    console.log(code, ' state code');
    try {
      await confirm.confirm(code);
    } catch (error) {
      console.log('Invalid code.');
    }
  };

  return (
    <View style={styles.container}>
      <View style={styles.padLock}>
        <Lock />
      </View>
      <FormTitle
        title={''}
        subheading={`Enter the code sent to your ${choiceOfAlert}`}
      />
      <InputsGroup>
        <AppInput
          keyboardType="number-pad"
          label="Enter Code"
          onChangeText={text => {
            console.log(text, ' your text');
            setCode(text);
          }}
        />
      </InputsGroup>
      <AppButton
        disabled={confirm !== null ? false : true}
        title="Verify"
        wideButton
        onPress={verifyPhoneNumber}
      />
      <Link text={'re-send code'} onPress={() => signInWithPhone()} />
      <Link
        text={'edit phone number'}
        onPress={() => navigation.navigate('register')}
      />
    </View>
  );
};

export default Confirmation;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: colors.brandColor,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: universalPadding,
  },
  padLock: {
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
});
