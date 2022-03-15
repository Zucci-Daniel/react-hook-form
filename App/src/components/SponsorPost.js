import {
  React,
  StyleSheet,
  View,
  Image,
  Text,
  TouchableOpacity,
} from '../imports/all_RnComponents';
import {Subheading, MaterialIcons} from '../imports/all_packages';
// import {} from '../imports/all_files';
import {
  universalPadding,
  colors,
  height,
  width,
  menuIconSize,
} from '../config/config';

const SponsorPost = ({
  source = require('../assets/1.jpg'),
  company = 'Jumia',
  desc = 'Lorem ipsum dolor sit amet conss ewer red resd ewe elit.',
  onPressAd,
  mini = true,
  number = 1,
}) => {
  return (
    <TouchableOpacity activeOpacity={mini ? 0.9 : 1} onPress={onPressAd}>
      <View style={styles.post}>
        <View style={styles.headerArea}>
          <View style={styles.logoContainer}>
            <Image source={source} style={styles.img} />
          </View>
          <View style={styles.companyName}>
            <Text style={styles.name}>blueTribe</Text>
          </View>
          <TouchableOpacity>
            <MaterialIcons name="more-vert" color={colors.hairLineColor} size={menuIconSize} />
          </TouchableOpacity>
        </View>
        <View style={styles.postArea}>
          <Image source={source} style={styles.img} />
        </View>
        <View style={styles.descriptionArea}>
          <Text style={styles.desc}>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Reiciendis
            error, odit venia
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export default SponsorPost;

const styles = StyleSheet.create({
  post: {
    height: height / 1.4,
    width: width,
    backgroundColor: colors.pureWhite,

    marginBottom: universalPadding / 2,
    flex: 1,
    alignContent: 'space-between',
    borderBottomWidth:StyleSheet.hairlineWidth,
    borderBottomColor:'whitesmoke'
  },
  headerArea: {
    padding: universalPadding / 4,
    alignItems: 'center',
    height: '10%',
    width: '100%',
    backgroundColor: colors.pureWhite,
    flexDirection: 'row',
    justifyContent: 'center',
  },
  postArea: {
    height: '80%',
    width: '100%',
    backgroundColor: 'transparent',
  },
  descriptionArea: {
    padding: universalPadding / 4,

    height: '10%',
    width: '100%',
    backgroundColor: 'transparent',
  },
  logoContainer: {
    width: 60,
    height: 60,
    backgroundColor: 'transparent',
    borderRadius: 50,
    overflow: 'hidden',
  },
  companyName: {
    width: '80%',
    height: '100%',
    backgroundColor: 'transparent',
    justifyContent: 'center',
    paddingHorizontal: universalPadding / 8,
  },
  name: {
    color: colors.hairLineColor,
    fontWeight: '700',
    textTransform:'uppercase'
  },
  desc: {
    color: '#002e63',
    fontWeight: '500',
  },
  img: {
    width: '100%',
    height: '100%',
  },
});
