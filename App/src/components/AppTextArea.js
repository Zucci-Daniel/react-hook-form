import {React, StyleSheet, View, Text} from '../imports/all_RnComponents';
import {Textarea} from '../imports/all_packages';
import {universalPadding, width, sMargin, colors} from '../config/config';

export default AppTextArea = ({onChange, placeHolder, showShadow = true}) => {
  const shadow = {
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,

    elevation: 4,
  };

  return (
    <Textarea
      containerStyle={[styles.textareaContainer, showShadow ? shadow : null]}
      style={styles.textarea}
      onChangeText={onChange}
      defaultValue={null}
      maxLength={120}
      placeholder={placeHolder}
      placeholderTextColor={'gray'}
      underlineColorAndroid={'transparent'}
    />
  );
};

const styles = StyleSheet.create({
  textareaContainer: {
    padding: universalPadding / 4,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor:colors.hairLineGray
  },
  textarea: {
    fontSize: 16,
    color: '#000',
    fontWeight: '300',
  },
});
