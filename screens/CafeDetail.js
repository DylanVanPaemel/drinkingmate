import React from 'react';
import { Text, View, Image, StyleSheet } from 'react-native';

class CafeDetail extends React.Component {



    constructor() {
        super();
    }

    componentDidMount() {
        console.log(this.props.navigation.state.params.cafe)
    }

    render() {
        return (
            <View style={styles.container}>

                <View>
                    <View>
                        <View style={styles.skyBlue}></View>
                        <View style={styles.imageWrapper}>
                            <Image style={styles.image} source={{ uri: this.props.navigation.state.params.cafe.logo }} />
                            <Text style={styles.name}>{this.props.navigation.state.params.cafe.naam} </Text>
                        </View>
                    </View>
                    <View>
                        <View style={styles.metdataWrapper}>
                            <Text style={styles.metadata}>Beschrijving</Text>
                            <Text style={styles.detailData}>{this.props.navigation.state.params.cafe.beschrijving}</Text>
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