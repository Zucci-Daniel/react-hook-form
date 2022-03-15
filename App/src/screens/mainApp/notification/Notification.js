import {
  React,
  StyleSheet,
  View,
  ScrollView,
} from '../../../imports/all_RnComponents';
import {commonFunctions, config, NoticeBox} from '../../../imports/all_files';
// import {Text as PaperText} from '../../../imports/all_packages';
import {universalPadding} from '../../../config/config';
// import {} from '../../navigation/create/CreateNavigation';
import SwipeActionList from 'react-native-swipe-action-list';

const Notification = () => {
  //this is dummy function and will be removed later, it was solely for testing purposes!😉
      const dummyToast = () => {
        commonFunctions.showToast('failed', 'attempted withdrawal failed due to insufficient balance','error');
      };

  return (
    <View style={styles.container}>
      <ScrollView>
        <NoticeBox onPress={dummyToast} />
        <NoticeBox />
        <NoticeBox />
        <NoticeBox />
        <NoticeBox seen={true} />
        <NoticeBox onPress={dummyToast} />
        <NoticeBox onPress={dummyToast} />
        <NoticeBox onPress={dummyToast} />
        <NoticeBox onPress={dummyToast} />
        <NoticeBox onPress={dummyToast} />
        <NoticeBox onPress={dummyToast} />
        <NoticeBox />
        <NoticeBox />
        <NoticeBox />
        <NoticeBox />
        <NoticeBox />
        <NoticeBox onPress={dummyToast} />
        <NoticeBox onPress={dummyToast} />
        <NoticeBox onPress={dummyToast} />
        <NoticeBox onPress={dummyToast} />
        <NoticeBox onPress={dummyToast} />
        <NoticeBox onPress={dummyToast} />
        <NoticeBox />
        <NoticeBox />
        <NoticeBox />
      </ScrollView>
    </View>
  );
};

export default Notification;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
