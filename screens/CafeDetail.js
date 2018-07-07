import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';


//Detailscherm van een cafe
class CafeDetail extends React.Component {



    constructor() {
        super();
        this.state = {
            cafe: []
        }
    }

    componentDidMount() {

        this.setState({
            cafe: this.props.navigation.state.params.cafe
        });

        console.log(this.state.cafe)
    }
     
    //weergeven van alle elementen op het scherm
    render() {
        return (
            <View style={styles.container}>

                <View>
                    <View>
                        <View style={styles.skyBlue}></View>
                        <View style={styles.imageWrapper}>
                            <Image style={styles.image} source={{ uri: this.state.cafe.logo }} />
                            <Text style={styles.name}>{this.state.cafe.naam} </Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.metdataWrapper}>
                            <Text style={styles.metadata}>Beschrijving</Text>
                            <Text style={styles.detailData}>{this.state.cafe.beschrijving}</Text>
                        </View>
                    </View>
                </View>

            </View>)
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'white'
    },
    skyBlue: {
        //backgroundColor:'#4080ff',
        height: 100
    },
    imageWrapper: {
        alignItems: 'center',
        marginTop: -75,
        marginBottom: 10
    },
    image: {
        width: 150,
        height: 150,
        borderWidth: 3,
        borderColor: 'grey',
        borderRadius: 75
    },
    name: {
        fontSize: 40,
        color: 'grey'
    },
    metdataWrapper: {
        flexDirection: 'row',
        marginBottom: 10
    },
    metadata: {
        fontWeight: '600',
        fontSize: 15,
        width: 120,
        textAlign: 'right',
        marginRight: 5
    },
    detailData: {
        fontSize: 15
    }
});

export default CafeDetail;