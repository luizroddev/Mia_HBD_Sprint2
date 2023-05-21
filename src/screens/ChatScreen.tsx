import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';
import { Button } from 'react-native-paper';
import ChatBubbleLeft from '../components/ChatBubbleLeft';
import ChatBubbleRight from '../components/ChatBubbleRight';
import { StackScreenProps } from '@react-navigation/stack';
import { RootStackParamList } from '../@types/RootStackParamList';

type Props = StackScreenProps<RootStackParamList, 'Chat'>;

const ChatScreen: React.FC<Props> = () => {
    const [message, setMessage] = useState('');
    // Para simplificar, vamos apenas exibir a mensagem no console quando o botão for pressionado.
    const handleSend = () => {
        console.log(message);
        setMessage('');
    };
    return (
        <View style={styles.container}>
            <ChatBubbleLeft message="Olá!" />
            <ChatBubbleRight message="Oi, tudo bem?" />
            <TextInput
                style={styles.input}
                value={message}
                onChangeText={setMessage}
                placeholder="Digite uma mensagem"
            />
            <Button icon="send" mode="contained" onPress={handleSend}>
                Enviar
            </Button>
        </View>
    );
}

export default ChatScreen;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-between',
    },
    input: {
        borderWidth: 1,
        borderColor: '#ccc',
        borderRadius: 5,
        padding: 10,
        margin: 10,
    },
});
