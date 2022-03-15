import {Headline, Subheading, BottomSheet} from '../imports/all_packages';
import {universalPadding, width, sMargin, colors} from '../config/config';
import {useRef, React} from 'react';
import {Text, View, StyleSheet, SafeAreaView} from 'react-native';
import AppButton from './AppButton';

export default AppBottomSheet = ({
  buttonExtrastyle,
  buttonTitle,
  children,
  useDefaultExperience = true,
  showDragIcon,
  customSheetRef,
  height = 600,
  draggable = true,
  buttonColor,
  onPullDown,
  shouldOverScroll = true,
}) => {
  const bottomSheet = useRef(null);
  const showSheet = () => bottomSheet.current.show();
  return (
    <SafeAreaView>
      {useDefaultExperience && (
        <>
          <AppButton
            onPress={() => showSheet()}
            title={buttonTitle}
            extraStyles={buttonExtrastyle}
            wideButton
            buttonColor={buttonColor}
          />
          <BottomSheet
            draggable={draggable}
            hasDraggableIcon
            ref={bottomSheet}
            height={height}>
            {children}
          </BottomSheet>
        </>
      )}
      {useDefaultExperience == false && (
        <>
          <BottomSheet
            hasDraggableIcon={showDragIcon}
            ref={customSheetRef}
            draggable={draggable}
            height={height}>
            <View
              style={{
                padding: universalPadding / 4,
                backgroundColor: 'transparent',
              }}>
              {children}
            </View>
          </BottomSheet>
        </>
      )}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: universalPadding,
    alignItems: 'center',
  },
  balance: {
    color: colors.brandBg,
    fontWeight: 'bold',
    textTransform: 'capitalize',
    fontSize: 30,
  },
});
