import React, {FC} from 'react';
import {FlatList, StyleSheet, Text, TouchableOpacity, View} from 'react-native';
import {IDataListProps} from './list.types';

const List: FC<IDataListProps> = ({data}) => {
  return (
    <FlatList
      data={data}
      renderItem={({item}) => {
        return (
          <TouchableOpacity
            key={item.key}
            onPress={() => {}}
            style={styles.itemContainer}>
            <View style={styles.listItem}>
              <Text style={styles.listItemTitle}>{item.title}</Text>
              <Text style={styles.listItemSubtitle}>{item.subTitle}</Text>
            </View>
          </TouchableOpacity>
        );
      }}
      keyExtractor={item => item.key}
    />
  );
};

const styles = StyleSheet.create({
  listItem: {
    width: '100%',
    // backgroundColor: '#EEE',
    paddingHorizontal: 10,
    paddingTop: 10,
    paddingBottom: 20,
    borderRadius: 10,
    marginBottom: 10,
  },
  itemContainer: {
    width: '100%',
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
  },
  listItemTitle: {
    fontWeight: '700',
    fontSize: 16,
    color: '#333',
  },
  listItemSubtitle: {
    color: '#555',
  },
});

export default List;
