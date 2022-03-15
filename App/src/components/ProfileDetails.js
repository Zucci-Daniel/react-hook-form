import {
  React,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from '../imports/all_RnComponents';
import {Avatar, Subheading} from '../imports/all_packages';
import {colors, universalPadding, brandFont} from '../config/config';

export default function ProfileDetails({
  username = 'Afams Val',
  name = '@victory_lap',
  brief,
  onPress,
  extraStyle,
  extraNamesWrapperStyle,
  extraUserNameStyle,
  extraNameStyles,
  useDarkUserName,
  useDarkName,
  showBorder = false,
  noPadding = false,
  readOnly = false,
}) {
  return (
    <View
      style={[
        styles.container,
        {borderBottomColor: !showBorder && 'transparent'},
        extraStyle,
      ]}>
      <Avatar.Image
        style={styles.image}
        size={200}
        source={require('../../src/assets/1.jpg')}
      />
      <View style={[styles.wrapper, extraNamesWrapperStyle]}>
        <Subheading
          style={[
            styles.name,
            {color: useDarkUserName && colors.hairLineColor},
            extraUserNameStyle,
          ]}>
          {username}
        </Subheading>
        <Subheading
          style={[
            styles.occupation,
            // {color: useDarkName && colors.hairLineColor},
            extraNameStyles,
          ]}>
          {name.toUpperCase()}
        </Subheading>
        <Subheading
          style={[
            styles.desc,
            {color: useDarkName && colors.hairLineColor},
            extraNameStyles,
          ]}>
          {brief}
        </Subheading>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    borderWidth: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.hairLineColor,
    position: 'relative',
    marginBottom: universalPadding / 3,
  },
  image: {
    height: 200,
    width: 200,
    marginBottom: universalPadding / 3,
  },
  name: {
    fontSize: 25,
    color: colors.pureWhite,
    fontFamily: brandFont.medium,
  },
  occupation: {
    fontSize: 14,
    fontFamily: brandFont.medium,
    marginVertical: 10,
  },
  desc: {
    fontSize: 13,
    color: colors.pureWhite,
    fontFamily: brandFont.medium,
    lineHeight: 20,
  },
});
