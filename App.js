import React, {useEffect, useState} from 'react';
import Toast from 'react-native-toast-message';
import {StatusBar, LogBox} from 'react-native';
import {AppToast, commonFunctions} from './App/src/imports/all_files';
import Navigation from './App/src/navigation/Navigation';
import Onboardings from './App/src/onboard/Onboardings';

import {useNetInfo} from '@react-native-community/netinfo';
import {SignUpInfoContextProvider} from './App/src/screens/forms/signUpInfoContext';

export default App = () => {
  const netInfo = useNetInfo();
  const [networkState, setNetworkState] = useState();

  useEffect(() => {
    LogBox.ignoreLogs([
      'Require cycles are allowed, but can result in uninitialized values.',
    ]);
  }, []);

  const toastConfig = {
    //aside from text1, text2, which are the default package props, any other props assigned via props.propName are my custom properties, and i can call them in the show method object where im calling the toast service, and then parse the custom assigned props which in this case is "toastType" in the props object in that place. 😘 simple and short
    appToast: ({text1, text2, props}) => (
      <AppToast title={text1} message={text2} type={props.toastType} />
    ),
  };

  useEffect(() => {
    checkNetworkStatus(); //zucci: you should'nt unsubscribe from call, since you want to get the latest network info
  });

  const checkNetworkStatus = () => {
    setNetworkState(netInfo.isInternetReachable);
    return commonFunctions.showToast(
      'Dan!',
      `you are ${netInfo.isInternetReachable ? `online` : `offline`}`,
      `${netInfo.isInternetReachable ? `success` : `alert`}`,
    );
  };

  // console.log(NetInfo, ' net info obj');
  return (
    <>
      <SignUpInfoContextProvider>
        {/* <StatusBar backgroundColor={config.colors.brandBg} /> */}
        <StatusBar backgroundColor={networkState ? 'green' : '#010101'} />
        <Navigation />
        <Toast config={toastConfig} topOffset={70} />
      </SignUpInfoContextProvider>
    </>
  );
};
