// import * as React from 'react';
// import { Button, TextInput } from 'react-native-paper';
// import { View, StyleSheet } from 'react-native';
// import { StackNavigationProp } from '@react-navigation/stack';
// import { RouteProp } from '@react-navigation/native';

// type RegisterScreenNavigationProp = StackNavigationProp<
//     RootStackParamList,
//     'Register'
// >;

// type RegisterScreenRouteProp = RouteProp<RootStackParamList, 'Register'>;

// type Props = {
//     navigation: RegisterScreenNavigationProp;
//     route: RegisterScreenRouteProp;
// };

// const RegisterScreen = ({ navigation }: Props) => {
//     const [name, setName] = React.useState('');
//     const [email, setEmail] = React.useState('');
//     const [password, setPassword] = React.useState('');

//     return (
//         <View style={styles.container}>
//             <TextInput
//                 label="Nome"
//                 value={name}
//                 onChangeText={text => setName(text)}
//                 style={styles.input}
//             />
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
//             <Button mode="contained" onPress={() => console.log('Registered')}>
//                 Registrar
//             </Button>
//             <Button onPress={() => navigation.goBack()}>
//                 Voltar
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

// export default RegisterScreen;
