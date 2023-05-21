// import * as React from 'react';
// import { Button, TextInput } from 'react-native-paper';
// import { View, StyleSheet } from 'react-native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RouteProp } from '@react-navigation/native';
// import { RootStackParamList } from '../../../App';

// type LoginScreenNavigationProp = StackNavigationProp<
//     RootStackParamList,
//     'Login'
// >;

// type LoginScreenRouteProp = RouteProp<RootStackParamList, 'Login'>;

// type Props = {
//     navigation: LoginScreenNavigationProp;
//     route: LoginScreenRouteProp;
// };

// const LoginScreen = ({ navigation }: Props) => {
//     const [email, setEmail] = React.useState('');
//     const [password, setPassword] = React.useState('');

//     return (
//         <View style={styles.container}>
//             <TextInput
//                 label="Email"
//                 value={email}
//                 onChangeText={text => setEmail(text)}
//                 style={styles.input}
//             />
//             <TextInput
//                 label="Senha"
//                 value={password}
//                 onChangeText={text => setPassword(text)}
//                 secureTextEntry
//                 style={styles.input}
//             />
//             <Button mode="contained" onPress={() => console.log('Logged in')}>
//                 Entrar
//             </Button>
//             <Button onPress={() => navigation.navigate('Register')}>
//                 Registrar
//             </Button>
//         </View>
//     );
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         justifyContent: 'center',
//         padding: 16,
//     },
//     input: {
//         marginBottom: 16,
//     },
// });

// export default LoginScreen;