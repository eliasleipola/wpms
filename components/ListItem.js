import {View, Text, TouchableOpacity, Image, StyleSheet} from 'react-native';
import PropTypes from 'prop-types';

const ListItem = (props) => {
  const mediaUrl = 'https://media.mw.metropolia.fi/wbma/uploads/';
  console.log(props.singleMedia);
  return (
    <TouchableOpacity style={styles.row}>
      <View style={styles.box}>
        <Image
          style={styles.image}
          source={{uri: mediaUrl + props.singleMedia.thumbnails.w160}}
        />
      </View>
      <View style={styles.box}>
        <Text style={styles.listTitle}>{props.singleMedia.title}</Text>
        <Text>{props.singleMedia.description}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  row: {
    flexDirection: 'row',
    backgroundColor: '#ff9933',
    marginBottom: 10,
  },
  box: {
    flex: 1,
    padding: 10,
  },
  image: {
    flex: 1,
    borderRadius: 200 / 2,
  },
  listTitle: {
    fontWeight: 'bold',
    fontFamily: 'sans-serif',
    fontSize: 25,
    color: '#E0E0E0',
    paddingBottom: 15,
  },
});

ListItem.propTypes = {
  singleMedia: PropTypes.object,
};

export default ListItem;
