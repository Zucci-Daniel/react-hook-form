import React from 'react';
import {View} from 'react-native';
import AppButton from './../../components/AppButton';
import AppInputField from './../../components/form-components/AppInputField';
import {useForm, useFormContext} from 'react-hook-form';
import Link from './../../components/Link';

const FormSection2 = ({navigation}) => {
  // const handleContinue = () => navigation.navigate('formSection3');

  const {
    control,
    formState: {errors},
    getValues,
    handleSubmit,
  } = useFormContext();

  const submitTheForm = data => console.log('successful! ', data);

  return (
    <View
      style={{
        flex: 1,
        justifyContent: 'space-around',
        backgroundColor: '#010101',
      }}>
      <AppInputField
        control={control}
        name="lastName"
        label={'last name'}
        required={{
          required: 'fill this f** field MF!!',
          minLength: {value: 4, message: 'must be more than 4'},
        }}
      />

      <AppButton onPress={handleSubmit(submitTheForm)} title="continue" />
      <Link text={'go back'} onPress={() => navigation.goBack(1)} />
    </View>
  );
};

export default FormSection2;
