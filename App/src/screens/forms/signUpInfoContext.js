import React, {createContext, useState} from 'react';
import CountrySelectConponent from 'react-native-element-dropdown/src/SelectCountry';

export const SignUpInfoContext = createContext();

export const SignUpInfoContextProvider = ({children}) => {
  const [user, setUser] = useState({
    birthdate: '',
    gender: '',
    firstName: '',
    lastName: '',
    typeOfStudent: '',
    school: '',
    department: '',
    level: '',
  });

  console.log(user, ' the global user object');

  return (
    <SignUpInfoContext.Provider value={{user, setUser}}>
      {children}
    </SignUpInfoContext.Provider>
  );
};
