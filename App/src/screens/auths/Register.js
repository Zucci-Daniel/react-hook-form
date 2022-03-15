import {
  React,
  useState,
  StyleSheet,
  View,
  useRef,
} from '../../imports/all_RnComponents';
import {
  AppInput,
  InputsGroup,
  AppButton,
  FormTitle,
  Link,
} from '../../imports/all_files';
import {PhoneInput} from '../../imports/all_packages';

import {colors, width, height, universalPadding} from '../../config/config';

const Register = ({navigation}) => {
  ///
  const [value, setValue] = useState('');
  const [formattedValue, setFormattedValue] = useState('');
  const [valid, setValid] = useState(false);
  const [showMessage, setShowMessage] = useState(false);
  const phoneInput = useRef(null);

  ///

  const handleSubmit = () =>
    navigation.navigate('confirmation', {phoneNumber: formattedValue});

  return (
    <View style={styles.container}>
      <FormTitle title={'Enter Phone Number'} subheading="" />
      <InputsGroup>
        <PhoneInput
          ref={phoneInput}
          defaultValue={value}
          defaultCode="NG"
          layout="first"
          onChangeText={text => {
            setValue(text);
          }}
          onChangeFormattedText={text => {
            setFormattedValue(text);
          }}
          withDarkTheme
          withShadow
          autoFocus
        />
      </InputsGroup>
      <AppButton
        wideButton
        disabled={value.length > 10 ? false : true}
        title="Send Verification Code"
        // onPress={() => navigation.navigate('confirmation')}
        onPress={handleSubmit}
      />
    </View>
  );
};

export default Register;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    width: width,
    backgroundColor: colors.brandColor,
    alignContent: 'center',
    justifyContent: 'center',
    paddingHorizontal: universalPadding,
  },
});
