import {
  React,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
} from '../imports/all_RnComponents';
import {Avatar, Subheading} from '../imports/all_packages';
import {WinsAndGames, AppImage} from '../imports/all_files';
import {colors, universalPadding, brandFont} from '../config/config';

export default function ProfilePane({
  username = 'Afams Val',
  name = '@victory_lap',
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
  showWinsAndGame = false,
}) {
  return (
    <TouchableOpacity
      onPress={onPress}
      activeOpacity={readOnly ? 1 : 0.2}
      style={noPadding ? null : styles.TouchableOpacity}>
      {showWinsAndGame && (
        <WinsAndGames
          extraStyles={styles.extraWinsAndGamesStyles}
          extraWinStyles={styles.wins}
          extraGameStyles={styles.games}
        />
      )}

      <View
        style={[
          styles.container,
          {borderBottomColor: !showBorder && 'transparent'},
          extraStyle,
        ]}>
        {/* <Avatar.Image
          style={styles.image}
          size={150}
          source={require('../../src/assets/1.jpg')}
        /> */}
        <AppImage size={100} />
        <View style={[styles.wrapper, extraNamesWrapperStyle]}>
          <Subheading
            style={[
              styles.Subheading,
              {color: useDarkUserName && colors.hairLineColor},
              extraUserNameStyle,
            ]}>
            {username}
          </Subheading>
          <Subheading
            style={[
              styles.SuperSubHeading,
              {color: useDarkName && colors.hairLineColor},
              extraNameStyles,
            ]}>
            {name}
          </Subheading>
        </View>
      </View>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  TouchableOpacity: {
    paddingVertical: universalPadding / 3,
  },
  container: {
    backgroundColor: 'transparent',
    height: undefined,
    alignItems: 'flex-end',
    flexDirection: 'row',
    paddingVertical: universalPadding / 2,
    borderWidth: 0,
    borderBottomWidth: StyleSheet.hairlineWidth,
    borderBottomColor: colors.hairLineColor,
    position: 'relative',
  },
  image: {
    height: 150,
    width: 150,
  },
  wrapper: {
    flex: 1,
  },
  Subheading: {
    fontSize: 25,
    color: colors.pureWhite,
    marginHorizontal: universalPadding / 3,
    fontFamily: brandFont.medium,
  },
  SuperSubHeading: {
    fontSize: 14,
    color: colors.pureWhite,
    fontFamily: brandFont.medium,
    marginHorizontal: universalPadding / 3,
  },
  extraWinsAndGamesStyles: {
    position: 'absolute',
    right: 0,
    fontSize: 14,
  },
  wins: {
    fontSize: 16,
  },
  games: {
    fontSize: 16,
  },
});
