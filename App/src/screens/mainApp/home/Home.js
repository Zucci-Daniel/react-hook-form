import {
  React,
  StyleSheet,
  View,
  FlatList,
} from '../../../imports/all_RnComponents';
import {SponsorPost} from '../../../imports/all_files';
import {universalPadding, colors} from '../../../config/config';

const Home = ({navigation}) => {
  const data = [`mc`, `henessy`, `coca`, 4, 5, 6];
  // const data = [`mc`];

  return (
    <View style={styles.container}>
      <FlatList
        data={data}
        keyExtractor={item => item}
        renderItem={({item}) => (
          <SponsorPost
            mini={false}
            source={require(`../../../assets/henessy.jpg`)}
            company="maggi"
          />
        )}
      />
    </View>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: colors.pureWhite,
  },
  heading: {
    padding: universalPadding / 6,
    textAlign: 'center',
    fontSize: 14,
  },
});
