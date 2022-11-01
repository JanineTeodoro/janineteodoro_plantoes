import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Plantoes } from './src/screens/plantoes';
import { BarraInferior } from './src/components/barra-inferior';
import { BarraSuperior } from './src/components/barra-superior';

export default function App() {
  return (
    <View style={styles.container}>
      <BarraSuperior></BarraSuperior>
      <Plantoes></Plantoes>
      <BarraInferior></BarraInferior>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'white',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
});
