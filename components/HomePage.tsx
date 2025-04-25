
// import { useNavigation } from '@react-navigation/native';
import { ParamListBase, useNavigation } from '@react-navigation/native';
import { NativeStackNavigationProp } from '@react-navigation/native-stack';
import { View, FlatList, StyleSheet, Text, StatusBar, Alert, Button, TouchableOpacity, TouchableWithoutFeedback, Pressable, TouchableHighlight } from 'react-native';
import uuid from 'react-native-uuid';
import { RootStackParamList } from '~/types';
const DATA = [
  {
    id: uuid.v4(),
    title: 'First Item',
  },
  {
    id: uuid.v4(),
    title: 'Second Item a',
  },

  {
    id: uuid.v4(),
    title: 'First Item',
  },
  {
    id: uuid.v4(),
    title: 'Second Item a',
  },

  {
    id: uuid.v4(),
    title: 'Third Item a',
  },
];

interface IDATA {
  id: string,
  title: string
}

const HomePage = () => {
  const navigation = useNavigation<NativeStackNavigationProp<RootStackParamList>>();

  // const [dataList, setDataList] = useState<IDATA[]>(DATA)
  // const handlePress = (id: string) => {
  //   const newList = dataList.filter(item => item.id !== id)
  //   // setDataList(newList)
  // }


  // const onPressButton = () => {
  // };

  // const onLongPressButton = () => {
  // };
  return (
    <View className='flex-1  justify-center items-center'>
      {/* <FlatList className='flex-none'
        data={dataList}
        keyExtractor={item => item.id}
        renderItem={({ item }) => (
          <>
            <TouchableHighlight
              onPress={onPressButton}
              onLongPress={onLongPressButton}
              underlayColor="orange">
              <View>
                <Text className='p-5 rounded-md text-white bg-primary m-1'>Touchable with Long Press</Text>
              </View>
            </TouchableHighlight>
          </>
        )}
      /> */}

      <Button title="Go to Jane's profile" onPress={() => navigation.navigate("Other", { userId: 100 })} />

      <Text>
        Lol
      </Text>
    </View>
  )
}
export default HomePage;
