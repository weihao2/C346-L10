import {StyleSheet, Text, View, Image, TouchableOpacity, SectionList, Alert, Button} from 'react-native';
import {FontAwesome6} from '@expo/vector-icons';

const datasource = [
    {
        data: [
            {id: '1', name: 'Bulbasaur'},
            {id: '2', name: 'Ivysaur'},
            {id: '3', name: 'Venusaur'}
        ],
        title: "Grass", bgcolor: "greenyellow", color: "forestgreen", icon: "leaf"
    },
    {
        data: [
            {id: '4', name: 'Charmander'},
            {id: '5', name: 'Charmeleon'},
            {id: '6', name: 'Charizard'}
        ],
        title: "Fire", bgcolor: "orange", color: "red", icon: "fire"
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
                source={{uri: "https://dz3we2x72f7ol.cloudfront.net/expansions/151/en-us/SV3pt5_EN_" + item.id + "-2x.png"}}
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
                    title="ADD POKEMON">
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