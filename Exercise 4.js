import {StyleSheet, Text, View, Image, TouchableOpacity, SectionList, Alert, Button} from 'react-native';
import {FontAwesome6} from '@expo/vector-icons';

const datasource = [
    {
        data: [
            {id: '1', name: 'Five Feet Apart', poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTBPXfpZ9AcYYbOgi8GWF1TUYO0lqVZaL10VmP8t-bk3w&s=10"},
            {id: '2', name: 'Past Lives', poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS4YvSEsufNMDso-DeiS8l9fEESDOu0Lb82ANl9zpsyUA&s=10"},
        ],
        title: "Romance Drama", bgcolor: "mistyrose", color: "crimson", icon: "heart"
    },
    {
        data: [
            {id: '3', name: 'A Silent Voice', poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRSuvDiuHtbiBcnuOH_R7V2uQGEnCpMudtbRi_XABVMmw&s=10"},
            {id: '4', name: 'Your Name', poster: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ0gnZ_nNCtQu8oHxDRHisODtX-set7hEipMbg7F4frIBWh9xsudwJdi2c&s=10"},
        ],
        title: "Anime Romance", bgcolor: "lavender", color: "royalblue", icon: "film"
    },
]

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white',
        marginTop: 20,
        marginBottom: 20,
    },
    opacityStyle: {
        borderWidth: 1,
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        padding: 15,
    },
    textStyle: {
        fontSize: 15,
        margin: 10,
        textAlign: 'left',
    },
    headerText: {
        fontSize: 20,
        marginTop: 10,
        padding: 5,
        textAlign: 'center',
        fontWeight: 'bold',
        borderWidth: 1,
        backgroundColor: 'white',
        width: '100%'
    },
    cardImage: {
        width: 200,
        height: 250,
        resizeMode: 'contain',
    }
});

const renderItem = ({item, section}) => {
    return (
        <TouchableOpacity style={[styles.opacityStyle, {backgroundColor: section.bgcolor}]}
                          onPress={() => Alert.alert(item.name + " is selected")}>
            <Text style={[styles.textStyle, {color: section.color}]}>{item.name}</Text>
            <Image
                source={{uri: item.poster}}
                style={styles.cardImage}/>
        </TouchableOpacity>
    );
};


export default function App() {
    return (
        <View style={styles.container}>
            <View style={[styles.headerText, {marginBottom: 3, marginTop: 0, padding: 15}]}>
                <Button
                    onPress={() => Alert.alert("Coming soon")}
                    title="ADD MOVIE">
                </Button>
            </View>
            <SectionList sections={datasource}
                         renderItem={renderItem}
                         contentContainerStyle={{padding: 10}}
                         renderSectionHeader={({section: {title, bgcolor, color, icon}}) => (
                             <Text style={[styles.headerText, {backgroundColor: bgcolor, color: color}]}>
                                 <FontAwesome6 name={icon} size={20} color={color}/>
                                 {title}
                             </Text>
                         )}/>
        </View>
    );
}