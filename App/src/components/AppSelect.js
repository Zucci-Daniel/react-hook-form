import {
  React,
  StyleSheet,
  View,
  Text,
  useState,
} from '../imports/all_RnComponents';
import {SelectDropdown, Ionicons, Picker} from '../imports/all_packages';
import {
  universalPadding,
  width,
  sMargin,
  colors,
  brandFont,
} from '../config/config';

const options = ['one', 'two', 'three', 'four'];

const AppSelect = ({
  optionTitle,
  optionArray = options,
  onSelectItem,
  placeHolder = 'choose something',
  handleSelection,
}) => {
  // const [selectedColor, setselectedColor] = useState('black');
  const [selectedItem, setselectedItem] = useState();

  return (
    <Picker
      style={styles.picker}
      mode="dropdown"
      dropdownIconColor={colors.hairLineGray}
      selectedValue={selectedItem}
      itemStyle={styles.itemStyle}
      onValueChange={(itemValue, itemIndex) => {
        if (handleSelection) {
          setselectedItem(itemValue);
          return handleSelection(itemValue);
        } else {
          setselectedItem(itemValue);
        }
      }}>
      {optionArray.map((option, index) => (
        <Picker.Item
          key={index}
          label={option}
          value={option}
          color={colors.pureWhite}
          style={styles.pickerItem}
        />
      ))}
    </Picker>
  );
};

export default AppSelect;

const styles = StyleSheet.create({
  picker: {
    backgroundColor: colors.brandBg,
    borderRadius: 10,
    borderWidth: StyleSheet.hairlineWidth,
    borderColor: colors.fadeWhite,
    width: '100%',
    textTransform: 'capitalize',
    marginBottom: 5,
    borderRadius: 20,
  },
  pickerItem: {
    backgroundColor: 'transparent',
    fontWeight: 'bold',
    color: 'red',
    borderRadius: 20,
  },
});
