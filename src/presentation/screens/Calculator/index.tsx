import {View, Text} from 'react-native';
import {colors, styles} from '../../../config/theme/app-theme';
import {Button} from '../../components';
const CalculatorScreen = () => {
  return (
    <View style={styles.calculatorContainer}>
      <View style={{paddingHorizontal: 30, paddingBottom: 20}}>
        <Text style={styles.mainResult}>1000</Text>
        <Text style={styles.subResult}>13</Text>

        <View style={styles.row}>
          <Button label={'C'} color={colors.lightGray} text />
          <Button label={'+/-'} color={colors.lightGray} text />
          <Button label={'del'} color={colors.lightGray} text />
          <Button label={'/'} color={colors.orange} />
        </View>
        <View style={styles.row}>
          <Button label={'7'} />
          <Button label={'8'} />
          <Button label={'9'} />
          <Button label={'x'} color={colors.orange} />
        </View>
        <View style={styles.row}>
          <Button label={'4'} />
          <Button label={'5'} />
          <Button label={'6'} />
          <Button label={'-'} color={colors.orange} />
        </View>
        <View style={styles.row}>
          <Button label={'1'} />
          <Button label={'2'} />
          <Button label={'3'} />
          <Button label={'+'} color={colors.orange} />
        </View>
        <View style={styles.row}>
          <Button label={'0'} doubleSize />
          <Button label={'.'} />
          <Button label={'='} color={colors.orange} />
        </View>
      </View>
    </View>
  );
};

export default CalculatorScreen;
