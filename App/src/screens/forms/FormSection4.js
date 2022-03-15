import React from 'react';
import {View} from 'react-native';
import AppButton from './../../components/AppButton';

const FormSection4 = ({navigation}) => {
  const handleContinue = () => alert('alert');

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        backgroundColor: '#010101',
      }}>
      <AppButton onPress={handleContinue} title="finished" />
    </View>
  );
};

export default FormSection4;
