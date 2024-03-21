import {Pressable, Text} from 'react-native';
import {colors, styles} from '../../../config/theme/app-theme';

interface IButtonnProps {
  label: string;
  color?: string;
  doubleSize?: boolean;
  text?: boolean;
  onPress: () => void;
}

const Button: React.FC<IButtonnProps> = ({
  label,
  color = colors.darkGray,
  doubleSize = false,
  text = false,
  onPress,
}) => {
  return (
    <Pressable
      onPress={() => onPress()}
      style={({pressed}) => ({
        ...styles.button,
        opacity: pressed ? 0.8 : 1,
        backgroundColor: color,
        width: doubleSize ? 180 : 80,
      })}>
      <Text
        style={{
          ...styles.buttonText,
          color: text ? colors.background : colors.textPrimary,
        }}>
        {label}
      </Text>
    </Pressable>
  );
};

export default Button;
