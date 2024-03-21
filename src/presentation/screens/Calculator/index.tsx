import {View, Text} from 'react-native';
import {colors, styles} from '../../../config/theme/app-theme';
import {Button} from '../../components';
import {useCalculator} from '../../hooks/useCalculator';
const CalculatorScreen = () => {
  const {
    number,
    prevnumber,
    formula,
    buildNumber,
    clean,
    deleteOperation,
    toggleSign,
    divideOperations,
    multiplyOperations,
    addOperations,
    subtracOperations,
    calculateResult,
  } = useCalculator();

  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text adjustsFontSizeToFit numberOfLines={1} style={styles.mainResult}>
          {formula}
        </Text>
        {formula === prevnumber ? (
          <Text style={styles.subResult}> </Text>
        ) : (
          <Text adjustsFontSizeToFit numberOfLines={1} style={styles.subResult}>
            {prevnumber}
          </Text>
        )}

        <View style={styles.row}>
          <Button
            onPress={() => clean()}
            label={'C'}
            color={colors.lightGray}
            text
          />
          <Button
            onPress={toggleSign}
            label={'+/-'}
            color={colors.lightGray}
            text
          />
          <Button
            onPress={deleteOperation}
            label={'del'}
            color={colors.lightGray}
            text
          />
          <Button
            onPress={divideOperations}
            label={'/'}
            color={colors.orange}
          />
        </View>
        <View style={styles.row}>
          <Button onPress={() => buildNumber('7')} label={'7'} />
          <Button onPress={() => buildNumber('8')} label={'8'} />
          <Button onPress={() => buildNumber('9')} label={'9'} />
          <Button
            onPress={multiplyOperations}
            label={'x'}
            color={colors.orange}
          />
        </View>
        <View style={styles.row}>
          <Button onPress={() => buildNumber('4')} label={'4'} />
          <Button onPress={() => buildNumber('5')} label={'5'} />
          <Button onPress={() => buildNumber('6')} label={'6'} />
          <Button
            onPress={subtracOperations}
            label={'-'}
            color={colors.orange}
          />
        </View>
        <View style={styles.row}>
          <Button onPress={() => buildNumber('1')} label={'1'} />
          <Button onPress={() => buildNumber('2')} label={'2'} />
          <Button onPress={() => buildNumber('3')} label={'3'} />
          <Button onPress={addOperations} label={'+'} color={colors.orange} />
        </View>
        <View style={styles.row}>
          <Button onPress={() => buildNumber('0')} label={'0'} doubleSize />
          <Button onPress={() => buildNumber('.')} label={'.'} />
          <Button onPress={calculateResult} label={'='} color={colors.orange} />
        </View>
      </View>
    </View>
  );
};

export default CalculatorScreen;
