import React, {useEffect, useState} from 'react';
import {View} from 'react-native';
import AppButton from './../../components/AppButton';
import AppInputField from './../../components/form-components/AppInputField';
import {useFormContext} from 'react-hook-form';

const FormSection1 = ({navigation}) => {
  const handleContinue = () => navigation.navigate('formSection2');

  const {
    control,
    formState: {errors, isValid},
  } = useFormContext();



  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#010101',
      }}>
      <AppInputField
        control={control}
        name="firstName"
        label={'first name'}
        required={{
          required: 'fill this f** field MF!!',
          minLength: {value: 4, message: 'must be more than 4'},
        }}
      />

      <AppButton
        disabled={!isValid}
        onPress={handleContinue}
        title="continue"
      />
    </View>
  );
};

export default FormSection1;
