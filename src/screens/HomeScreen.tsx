import React from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../@types/RootStackParamList';

type Props = StackScreenProps<RootStackParamList, 'Home'>;

export default function HomeScreen({ navigation }: Props) {
    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={require('../assets/imgs/Mia.png')}></Image>
                <Text style={styles.description} variant='titleLarge'>{`Domine a tecnologia\ncom a Mia como\ncompanhia!`}</Text>
            </View>

            <View style={styles.inputs}>
                <Button style={styles.visitantButton} buttonColor='#7751DB' textColor='white'
                    contentStyle={{ padding: 8, width: '100%' }} mode='contained' onPress={() => navigation.navigate('Visitor')}>
                    Acessar como visitante
                </Button>
                <Button style={styles.registerButton} textColor='#7751DB'
                    contentStyle={{ padding: 8, width: '100%' }} mode="outlined" onPress={() => navigation.navigate('Register')}>
                    Criar minha conta
                </Button>
            </View>
            <Button mode="text" onPress={() => navigation.navigate('Login')}>
                <Text variant='labelLarge'>Já possui uma conta? <Text variant='labelLarge' style={{ color: '#7751DB' }}>Clique aqui</Text></Text>
            </Button>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        backgroundColor: 'white'
    },
    header: {
        // flex: 1,
        alignItems: 'center',
        // textAlign: 'justify'
    },
    description: {
        marginTop: 8,
        textAlign: 'center',
        color: '#38188C'
    },
    visitantButton: {
        // padding: 8,
        // backgroundColor: '#',
        // color: 'white'
    },
    registerButton: {
        borderColor: "#7751DB"
    },
    inputs: {
        rowGap: 10
    }
});
