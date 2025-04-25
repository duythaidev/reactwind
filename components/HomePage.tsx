
import React, { useState } from 'react';
import { View, FlatList, StyleSheet, Text, StatusBar, Alert, Button, TouchableOpacity, TouchableWithoutFeedback } from 'react-native';
import uuid from 'react-native-uuid';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f61',
    title: 'Second Item a',
  },

  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28baa',
    title: 'First Item',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    title: 'Second Item a',
  },

  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    title: 'Third Item a',
  },
];

interface IDATA {
  id: string,
  title: string
}

const HomePage = () => {
  const [dataList, setDataList] = useState<IDATA[]>(DATA)
  const handlePress = (id: string) => {
    const newList = dataList.filter(item => item.id !== id)
    setDataList(newList)
  }

  return (
    <>
      <FlatList className='flex-none'
        data={dataList}
        keyExtractor={item => uuid.v4()}
        renderItem={({ item }) => (
          <>
            <TouchableWithoutFeedback onPress={() => handlePress(item.id)}>
              <Text className='text-black'   style={{ fontFamily: 'main-font' }}>
                asdad

              </Text>
            </TouchableWithoutFeedback>
          </>
        )}
      />

      <Text>
        Lol
      </Text>
    </>
  )
}
export default HomePage;
