import React, { useState } from 'react';
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  ImageBackground,
} from 'react-native';

const App = () => {

  const [altura, setAltura] = useState('');
  const [peso, setPeso] = useState('');
  const [resultado, setResultado] = useState('');

  const calcula = () => {

    const imc = (peso / (altura * altura));

    if (imc < 18.5) {
      setResultado('Abaixo do peso');
    } else if (imc < 25) {
      setResultado('Peso normal');
    } else if (imc < 30) {
      setResultado('Acima do peso');
    } else if (imc < 35) {
      setResultado('Obesidade I');
    } else if (imc < 40) {
      setResultado('Obesidade II (severa)');
    } else {
      setResultado('Obesidade III (mórbida)');
    }
  };

  return (
    <ImageBackground
      style={{
        width: '100%',
        height: '100%',
        justifyContent: 'center',
        alignItems: 'center',
      }}
      source={{
        uri:
          "https://conteudo.imguol.com.br/c/entretenimento/87/2020/10/28/balanca-peso-1603920684761_v2_450x337.jpg"
      }}
    >
      <View
        style={{
          flex: 1.5,
          marginTop: 13,
        }}>
        <Text style={{
          color: '#4B0082',
          fontSize: 25,
          fontWeight: 'bold',
        }} >
          Índice de Massa Corporal (IMC)
        </Text>
      </View>

      <View
        style={{
          width: '90%',
          flex: 1.0,
          justifyContent: 'space-around',

        }}>
        <TextInput
          style={{
            backgroundColor: 'white',
            borderRadius: 10,

          }}
          onChangeText={(value) => setAltura(value)}
          placeholder='Digite o valor da gasolina'
          keyboardType='numeric'
        />
        <TextInput
          style={{ backgroundColor: 'white', borderRadius: 10 }}
          onChangeText={(value) => setPeso(value)}
          placeholder='Digite o valor da álcool'
          keyboardType='numeric'
        />
      </View>

      <View
        style={{
          width: '90%',
          flex: 2,
          justifyContent: 'flex-start',
          marginTop: 15
        }}>

        <TouchableOpacity onPress={calcula}>
          <Text
            style={{
              color: '#4B0082',
              fontSize: 25,
              fontWeight: 'bold',
              textAlign: 'center',

            }}>
            Calcular:
          </Text>

        </TouchableOpacity>

        <Text style={{
          color: '#4B0082',
          fontSize: 20,
          fontWeight: 'bold',
          textAlign: 'center',
        }}>
          Diagnóstico:
        </Text>

        <Text
          style={{
            color: '#4B0082',
            fontSize: 25,
            fontWeight: 'bold',
            textAlign: 'center',
          }}>
          {resultado}
        </Text>
      </View>
    </ImageBackground >
  );
};
export default App;