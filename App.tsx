import { StatusBar } from 'expo-status-bar';
import { useEffect, useState } from 'react';
import { StyleSheet, Text, View } from 'react-native';
import * as Font from 'expo-font';

export default function App() {

  const [fonteCarreda, setFonteCarregada] = useState(false);

  async function loadFonts() {
    await Font.loadAsync({
      mukta_bold: require('./assets/Mukta/Mukta-Bold.ttf'),
      mukta_extra: require('./assets/Mukta/Mukta-ExtraBold.ttf'),
      mukta_regular: require('./assets/Mukta/Mukta-Regular.ttf'),


    });
  }

  useEffect(() => {
    loadFonts()
      .then(() => {
        setFonteCarregada(true);

      })
      .catch((error) => {
        console.log('oorreu un erro', error);
      })
  }, []);

  return (
    <View style={styles.container}>
      {fonteCarreda ?
        <Text style={{ fontFamily: 'mukta_bold', fontSize: 50 }}>Aula de fontes!</Text>
        :
        <Text>Aula de fontes!</Text>

      }

      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
