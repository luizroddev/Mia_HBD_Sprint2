import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

interface ChatBubbleProps {
    message: string;
}

const ChatBubbleLeft: React.FC<ChatBubbleProps> = ({ message }) => {
    return (
        <View style={styles.bubble}>
            <Text>{message}</Text>
        </View>
    );
}

export default ChatBubbleLeft;

const styles = StyleSheet.create({
    bubble: {
        maxWidth: '70%',
        padding: 10,
        borderRadius: 20,
        margin: 10,
        backgroundColor: '#f0f0f0',
        alignSelf: 'flex-end',
    },
});
