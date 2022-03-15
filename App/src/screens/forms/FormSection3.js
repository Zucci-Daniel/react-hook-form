import React from 'react';
import {View} from 'react-native';
import AppButton from './../../components/AppButton';

const FormSection3 = ({navigation}) => {
  const handleContinue = () => navigation.navigate('formSection4');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#010101',
      }}>
      <AppButton onPress={handleContinue} title="continue4" />
    </View>
  );
};

export default FormSection3;
