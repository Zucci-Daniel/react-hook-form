import {
  React,
  StyleSheet,
  View,
  ScrollView,
} from '../../../../imports/all_RnComponents';
import {
  AppButton,
  config,
  AppTextArea,
  AppInput2,
} from '../../../../imports/all_files';
import {Avatar, IconButton, Colors} from '../../../../imports/all_packages';
import {SignUpInfoContext} from '../../../forms/signUpInfoContext';
import {useContext, useState} from 'react';

const {universalPadding, colors} = config;

const EditProfile = ({navigation}) => {
  const {user, setUser} = useContext(SignUpInfoContext);
  const {
    firstName,
    lastName,
    department,
    level,
    school,
    typeOfStudent,
    gender,
    birthdate,
  } = user;

  const [fullNames, setFullNames] = useState({
    firstName,
    lastName,
  });

  const handleUpdate = () => {
    setUser({
      ...user,
      firstName: fullNames.firstName,
      lastName: fullNames.lastName,
    });
    return navigation.goBack(1);
  };

  return (
    <View style={styles.container}>
      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.wrapper}>
          <Avatar.Image
            style={styles.image}
            source={require('../../../../assets/1.jpg')}
            size={150}
          />
          <IconButton
            icon="camera"
            color={colors.hairLineColor}
            size={60}
            style={styles.iconButton}
            onPress={() => console.log('Pressed')}
          />
        </View>
        <View style={styles.inputWrapper}>
          <AppInput2
            value={fullNames.firstName}
            showIcon={false}
            placeholder={'first name'}
            onChange={text => setFullNames({...fullNames, firstName: text})}
          />
          <AppInput2
            value={fullNames.lastName}
            showIcon={false}
            placeholder="last name"
            onChange={text => setFullNames({...fullNames, lastName: text})}
          />
          <AppTextArea
            showShadow={false}
            placeHolder={'click to write a short note about your status'}
          />

          <AppInput2 iconName="logo-instagram" />
          <AppInput2 iconName="logo-twitter" />
          <AppInput2 iconName="logo-facebook" />
        </View>

        <View style={styles.inputWrapper}>
          <AppInput2
            iconName="mail-open-outline"
            placeholder="Register email"
          />
        </View>
        <AppButton wideButton title="update" onPress={handleUpdate} />
      </ScrollView>
    </View>
  );
};

export default EditProfile;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  scrollView: {
    padding: universalPadding / 2,
    alignItems: 'center',
  },
  wrapper: {
    position: 'relative',
  },
  iconButton: {
    position: 'absolute',
    bottom: -40,
    right: 25,
  },
  inputWrapper: {
    width: '100%',
    marginTop: universalPadding,
  },
});
