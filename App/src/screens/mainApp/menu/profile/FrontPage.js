import {
  React,
  StyleSheet,
  View,
  Text,
  Button,
} from '../../../../imports/all_RnComponents';
import {
  LeaderBoardPane,
  ProfilePane,
  AppButton,
  WinsAndGames,
  Title,
  SMHandle,
  Ig,
  Twitter,
  Fb,
  ProfileDetails,
} from '../../../../imports/all_files';
import {Stack} from '../../../../navigation/create/CreateNavigation';
import {universalPadding, colors} from '../../../../config/config';
import {useContext} from 'react';
import {SignUpInfoContext} from './../../../forms/signUpInfoContext';

const FrontPage = ({
  navigation,
  status = 'never have i lost any game, defeated 22games',
}) => {
  const {user} = useContext(SignUpInfoContext);

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

  return (
    <View style={styles.container}>
      <ProfileDetails
        username={`${firstName} ${lastName}`}
        name={`${department} | ${level}Level`}
        brief={`Hi! i'm a student of ${school} university, currently in ${level}Level, my birthdate is ${birthdate} and i'm a ${gender}`}
        readOnly
        noPadding
        extraNamesWrapperStyle={styles.extraNamesWrapperStyle}
        useDarkUserName
        useDarkName
        showBorder={false}
      />

      <View style={styles.socialHandlerWrapper}>
        <Title Title={`SOCIAL HANDLERS`} extraTitleStyle={styles.extra} />
        <SMHandle logo={<Ig />} handle="@afams_val" />
        <SMHandle logo={<Twitter />} handle="@afams_vasl" />
        <SMHandle logo={<Fb />} handle="@afams_val" />
      </View>
      <AppButton
        title="edit your profile"
        wideButton
        extraStyles={styles.buttonStyles}
        mode="contained"
        // titleColor={colors.brandBg}
        onPress={() => navigation.navigate('editProfile')}
      />
    </View>
  );
};

export default FrontPage;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: universalPadding / 2,
    backgroundColor: colors.pureWhite,
  },
  socialHandlerWrapper: {
    flex: 0.8,
    alignItems: 'flex-start',
    justifyContent: 'space-evenly',
  },
  extra: {
    marginBottom: 0,
    padding: 0,
    fontSize: 15,
  },
  buttonStyles: {
    margin: universalPadding / 6,
  },
});
