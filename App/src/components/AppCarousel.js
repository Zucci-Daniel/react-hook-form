import {
  React,
  StyleSheet,
  View,
  Text,
  useRef,
} from '../imports/all_RnComponents';
import {Headline, Subheading, Badge, Carousel} from '../imports/all_packages';
import {
  universalPadding,
  width,
  height,
  sMargin,
  colors,
} from '../config/config';

export default AppCarousel = ({
  renderItem,
  useData,
  useCustomRef,
  loop = false,
  firstItem = 0,
}) => {
  return (
    <Carousel
      ref={useCustomRef}
      data={useData}
      renderItem={renderItem}
      sliderWidth={width}
      itemWidth={width - 70}
      sliderHeight={height}
      firstItem={firstItem}
      activeAnimationType="timing"
      loop={loop}
      enableSnap={true}
      callbackOffsetMargin={50}
      swipeThreshold={40}
      autoplayInterval={1000}
      autoplay={true}
      layout="default"
      contentContainerCustomStyle={styles.CCCS}
    />
  );
};

const styles = StyleSheet.create({
  CCCS: {
    backgroundColor: 'transparent',
    paddingVertical: 30,
  },
});
