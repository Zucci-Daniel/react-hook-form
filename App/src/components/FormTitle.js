import {React, StyleSheet, View, Text} from '../imports/all_RnComponents';
import {Headline, Subheading} from '../imports/all_packages';
import {universalPadding, width, sMargin, colors} from '../config/config';

export default FormTitle = ({
  title = 'Please Sign Up',
  subheading = 'subheading',
  showSubHeading = true,
  extraStyle,
  color,
}) => {
  return (
    <View style={[styles.container, extraStyle]}>
      <Headline style={[styles.FormTitle, {color: color}]}>{title}</Headline>
      {showSubHeading && <Subheading>{subheading}</Subheading>}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    paddingVertical: universalPadding,
    alignItems: 'center',
  },
  FormTitle: {
    color: colors.brandBg,
    fontWeight: 'bold',
    textTransform: 'capitalize',
  },
});
