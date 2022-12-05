import { TouchableWithoutFeedbackProps, View, TouchableOpacity, ActivityIndicator, Text } from 'react-native';
import { theme } from '../../theme';

import { styles } from './styles';

interface ButtonProps extends TouchableWithoutFeedbackProps {
  isLoading: boolean;
}

export function Button({ isLoading, ...props }: ButtonProps) {
  return (
    <TouchableOpacity style={styles.container} {...props}>
      {isLoading ? (
        <ActivityIndicator color={theme.colors.text_on_brand_color} />
      ) : (
        <Text style={styles.title}>Send feedback</Text>
      )}
    </TouchableOpacity>
  );
}
