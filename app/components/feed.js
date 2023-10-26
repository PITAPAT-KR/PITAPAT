import { useEffect, useState } from 'react';
import { FlatList, StyleSheet, Text, View } from 'react-native';

const Feed = () => {
  const [feedData, setFeedData] = useState([]);
  const [wholeData, setWholeData] = useState([]);
  const [name, setName] = useState('');
  const [page, setPage] = useState(5);
  useEffect(() => {
    data = require('../json/feed.json');
    setWholeData(data.leaders);
    setFeedData(data.leaders.slice(0, 5));
    setName(data.leaders[0].name);
  }, []);
  const renderItem = ({ item }) => {
    return (
      <View style={styles.container}>
        <View style={styles.item}>
          <View style={styles.imgBox}>
            <View style={styles.img}></View>
          </View>
          <View style={styles.textBox}>
            <View style={styles.nameBox}>
              <Text style={styles.name}>{item.name}</Text>
              <Text style={styles.date}>{item.date}</Text>
            </View>
            <Text style={styles.infoText}>{item.info}</Text>
          </View>
        </View>
      </View>
    );
  };
  const onEndReached = () => {
    if (page + 5 < wholeData.length) {
      setFeedData([...feedData, wholeData.slice(page, page + 5)]);
      setPage(page + 5);
    } else if (page + 5 > wholeData.length && page < wholeData.length) {
      setFeedData([...feedData, wholeData.slice(page, wholeData.length - 1)]);
    } else return;
  };
  return (
    <FlatList
      data={feedData}
      onEndReached={onEndReached}
      onEndReachedThreshold={0}
      renderItem={renderItem}
    />
  );
};

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    width: '100%',
    height: 'auto',
    paddingTop: '10%',
  },
  item: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '95%',
    padding: '5%',
    paddingLeft: '-5%',
    borderWidth: '1',
    borderColor: 'black',
    borderStyle: 'solid',
    borderRadius: '10',
  },
  imgBox: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    width: 80,
    height: 80,
    backgroundColor: 'gray',
    borderRadius: '10',
  },
  textBox: {
    flex: 2,
    justifyContent: 'space-around',
    alignItems: 'flex-start',
  },
  nameBox: {
    width: '100%',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  name: {
    fontWeight: '700',
  },
  date: {
    fontSize: 10,
  },
  infoText: {},
});

export { Feed };
