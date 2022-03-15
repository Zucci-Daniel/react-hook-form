import React, {useState} from 'react';
import {Button, View} from 'react-native';
import DatePicker from 'react-native-date-picker';

const AppDatePicker = () => {
  const [date, setDate] = useState(new Date());

  return (
    <View>
      <DatePicker date={date} mode="date" onDateChange={setDate} />
    </View>
  );
};

export default AppDatePicker;
