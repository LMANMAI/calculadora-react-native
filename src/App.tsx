import React from 'react';
import {View, StatusBar} from 'react-native';
import {CalculatorSreen} from './presentation/screens';
import {styles} from './config/theme/app-theme';

function App(): React.JSX.Element {
  return (
    <View style={styles.background}>
      <StatusBar barStyle={'light-content'} backgroundColor={'black'} />
      <CalculatorSreen />
    </View>
  );
}

export default App;
