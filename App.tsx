import { Platform, SafeAreaView } from 'react-native';
import ContadorScreen from './src/screen/ContadorScreen';
import { BoxObjectModelScreen } from './src/screen/BoxObjectModelScreen';
import { DimensionesScreen } from './src/screen/DimensionesScreen';
import PositionScreen from './src/screen/PositionScreen';
import { FlexScreen } from './src/screen/FlexScreen';
import { Tarea1Screen } from './src/screen/Tarea1Screen';
import { Tarea2Screen } from './src/screen/Tarea2Screen';
import { Tarea3Screen } from './src/screen/Tarea3Screen';
import { Tarea4Screen } from './src/screen/Tarea4Screen';
import { Tarea5Screen } from './src/screen/Tarea5Screen';
import { Tarea6Screen } from './src/screen/Tarea6Screen';
import { Tarea7Screen } from './src/screen/Tarea7Screen';
import { Tarea8Screen } from './src/screen/Tarea8Screen';

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        backgroundColor: '#28425b',
        paddingTop: Platform.OS === 'android' ? 24 : 0,
      }}
    >
      {/* <BoxObjectModelScreen /> */}
      {/* <DimensionesScreen /> */}
      {/* <PositionScreen /> */}
      {/* <FlexScreen /> */}
      {/* <Tarea1Screen /> */}
      {/* <Tarea2Screen /> */}
      {/* <Tarea3Screen /> */}
      {/* <Tarea4Screen /> */}
      {/* <Tarea5Screen /> */}
      {/* <Tarea6Screen /> */}
      {/* <Tarea7Screen /> */}
      <Tarea8Screen />
    </SafeAreaView>
  );
}
