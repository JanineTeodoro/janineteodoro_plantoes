import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { Plantoes } from './src/screens/plantoes';
import { BarraInferior } from './src/components/barra-inferior';
import { BarraSuperior } from './src/components/barra-superior';
import { LinearGradient } from 'expo-linear-gradient';

export default function App() {
  return (
    <View style={styles.container}>
      <BarraSuperior></BarraSuperior>
        <LinearGradient
        colors={['white', 'white', '#edebeb99']}
        style={styles.plantoes}>
        <Plantoes></Plantoes>
        </LinearGradient>
      <BarraInferior></BarraInferior>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'space-between',
  },
  plantoes: {
    alignItems: "flex-start",
    flex: 1
  }
});
