import {Dimensions, StyleSheet} from '../imports/all_RnComponents';

const brandFont = {
  medium: 'vantage',
  regular: 'Catamaran-Regular',
  mediumBold: 'Catamaran-Bold',
  semiBold: 'Catamaran-SemiBold',
  cashFont: 'spacefri',
};

const colors = {
  brandColor: '#fafafa',
  brandBg: '#010101',
  // brandBg:'#1A2B61',
  pureWhite: '#fff',
  inputUnderLineColor: '#6A7085',
  placeHolder: '#1A2B61',
  hairLineColor: '#010101',
  //   hairLineColor: '#324995',
  walletOptionColor: '#24a0ed',
  // walletOptionColor:'#333333',
  chip: '#424040',
  hairLineGray: '#E2DFDF',
  notificationRed: '#fa3e3e',
  notificationBg: '#E1EFF3',
  fadeWhite: '#ccc',
};

const {width, height} = Dimensions.get('screen');
const universalPadding = width / 10;
const sMargin = 10;
const inputBorder = 5;
const menuIconSize = 30;

//for the bottom navigation

const tabBarBottomConfig = {
  backgroundColor: colors.hairLineColor,
  // height: height / 17,
  border: '0',
  borderTopWidth: 0,
  borderTopColor: colors.hairLineColor,
  justifyContent: 'center',
};

export {
  colors,
  width,
  height,
  universalPadding,
  sMargin,
  inputBorder,
  tabBarBottomConfig,
  menuIconSize,
  brandFont,
};
