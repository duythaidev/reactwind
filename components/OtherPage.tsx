import { NativeStackScreenProps } from "@react-navigation/native-stack";
import { Text, TouchableHighlight, View } from "react-native";
import { TRoutes } from "~/types";

type Props = NativeStackScreenProps<TRoutes, 'Other'>;

const OtherPage = ({ route, navigation }: Props) => {

    return (
        <View className='flex-1  justify-center items-center'>

            <Text className="text-primary ">Access as a theme value</Text>
            <Text className="text-[--color-rgb]">Or the variable directly</Text>

            <Text className='bg-mint-500 ' >
                SIUUU
            </Text>
            <TouchableHighlight className="bg-primary w-50 p-2" onPress={() =>
                navigation.navigate('Home')
            } >
                <Text className="text-white">
                    aaa
                </Text>
            </TouchableHighlight>
            <Text>{route.params?.userId ? route.params?.userId : ''}</Text>
        </View>
    )
}
export default OtherPage;
