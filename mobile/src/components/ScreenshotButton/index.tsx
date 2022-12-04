import { Camera, Trash } from 'phosphor-react-native';
import { View } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { theme } from '../../theme';

import { styles } from './styles';

interface ScreenshotButtonProps {
  screenshot: string | null;
  onTakeShot: () => void;
  onRemoveShot: () => void;
}

export function ScreenshotButton({ screenshot, onTakeShot, onRemoveShot }: ScreenshotButtonProps) {
  return (
    <TouchableOpacity
      style={styles.container}
      onPress={screenshot ? onRemoveShot : onTakeShot}
    >
      {screenshot ? (
        <Trash size={22} color={theme.colors.text_secondary} weight='fill' style={styles.removeIcon} />
      ) : (
        <Camera size={24} color={theme.colors.text_primary} weight='bold' />
      )}
    </TouchableOpacity>
  );
}
