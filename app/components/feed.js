import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const Feed = () => {
  const [feedData, setFeedData] = useState(0);
  const [name, setName] = useState('');
  useEffect(() => {
    data = require('../json/feed.json');
    setFeedData(data);
    setName(data.leaders[0].name);
  }, []);
  return (
    <View style={{ flex: 1 }}>
      {feedData ? (
        feedData.leaders.map((e, i) => (
          <View key={i} style={styles.container}>
            <View style={styles.imgBox}></View>
            <View style={styles.textBox}>
              <View style={styles.nameBox}>
                <Text>{e.name}</Text>
                <Text>{e.date}</Text>
              </View>
              <Text style={styles.infoText}>{e.info}</Text>
            </View>
          </View>
        ))
      ) : (
        <View style={styles.container}>
          <Text>하하하</Text>
        </View>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '100%',
    height: '20%',
  },
  imgBox: {
    flex: 1,
    backgroundColor: 'gray',
  },
  textBox: {
    flex: 2,
  },
  nameBox: {},
  infoText: {},
});

export { Feed };
