import { View, Text, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ArrowLeft } from 'phosphor-react-native';

import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';

import { FeedbackType } from '../Widget';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';

import { styles } from './styles';

interface FormProps {
  feedbackType: FeedbackType;
}

export function Form({ feedbackType }: FormProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity>
          <ArrowLeft size={24} weight='bold' color={theme.colors.text_secondary} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image source={feedbackTypeInfo.image} style={styles.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo.title}</Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder='Please, tell us what is happening with details...'
        placeholderTextColor={theme.colors.text_secondary}
        textAlignVertical='top'
      />

      <View style={styles.footer}>
        <ScreenshotButton onTakeShot={() => { }} onRemoveShot={() => { }} screenshot='https://github.com/Raymw1.png' />
        <Button isLoading={false} />
      </View>

    </View>
  );
}
