import React, { useState } from 'react';
import { View, StyleSheet, Image } from 'react-native';
import { Button, Text, TextInput } from 'react-native-paper';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../@types/RootStackParamList';

type Props = StackScreenProps<RootStackParamList, 'Visitor'>;

const VisitorScreen: React.FC<Props> = ({ navigation }) => {
    const [name, setName] = useState('');

    return (
        <View style={styles.container}>

            <View style={styles.header}>
                <Image source={require('../assets/imgs/Mia.png')}></Image>
            </View>

            <View style={styles.descriptionContainer}>
                <Text style={styles.description} variant="headlineLarge">Seja bem-vindo</Text>
                <Text style={[styles.description, styles.descriptionLight]} variant="bodyLarge" >Estou ansiosa para te conhecer!</Text>
            </View>

            <View style={styles.card}>
                <View>
                    <Button icon='arrow-left' textColor='white' labelStyle={{ fontSize: 20 }}>Voltar</Button>
                </View>

                <View style={styles.form}>
                    <Text variant='labelLarge' style={{ color: 'white', fontFamily: 'Sora-SemiBold', marginBottom: 16, fontSize: 20, }}>Como podemos te chamar?</Text>
                    <TextInput
                        style={{ backgroundColor: '#9153E1' }}
                        outlineStyle={{ borderWidth: 2 }}
                        textColor='white'
                        mode='outlined'
                        activeOutlineColor='white'
                        outlineColor='white'
                        label='Seu nome'
                        value={name}
                        onChangeText={setName}
                        theme={{ colors: { onSurfaceVariant: 'white' } }}
                    />
                </View>

                <Button
                    style={{ width: '100%', borderRadius: 16 }}
                    contentStyle={{ height: 56 }}
                    mode="contained"
                    buttonColor='white'
                    textColor='#9153E1'>
                    Acessar como visitante</Button>

            </View>
        </View >
    );
}

export default VisitorScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'flex-start',
        fontFamily: "Sora-Bold",
        marginTop: 16,
        backgroundColor: 'white'
    },
    header: {
        alignItems: 'center',
        justifyContent: 'center'
    },
    descriptionContainer: {
        marginTop: 56,
        justifyContent: 'flex-start',
        padding: 16
    },
    description: {
        color: '#7519D1',
        fontFamily: 'Sora-SemiBold'
    },
    descriptionLight: {
        fontFamily: 'Sora-Light'
    },
    card: {
        flex: 1,
        backgroundColor: '#9153E1',
        borderTopRightRadius: 32,
        borderTopLeftRadius: 32,
        padding: 32,
        color: 'white',
        alignItems: 'flex-start',
        rowGap: 64,
        width: '100%',
    },
    form: {
        width: '100%',
    }
});
