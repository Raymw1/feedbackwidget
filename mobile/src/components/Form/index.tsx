import { View, Text, Image, TextInput } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { ArrowLeft } from 'phosphor-react-native';

import { theme } from '../../theme';
import { feedbackTypes } from '../../utils/feedbackTypes';

import { FeedbackType } from '../Widget';
import { ScreenshotButton } from '../ScreenshotButton';
import { Button } from '../Button';

import { styles } from './styles';
import { useState } from 'react';
import { captureScreen } from 'react-native-view-shot';
import { api } from '../../libs/api';

interface FormProps {
  feedbackType: FeedbackType | null;
  onFeedbackCanceled: () => void;
  onFeedbackSent: () => void;
}

export function Form({ feedbackType, onFeedbackSent, onFeedbackCanceled }: FormProps) {
  const [isSendingFeedback, setIsSendingFeedback] = useState(false);
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>('');

  const feedbackTypeInfo = feedbackType && feedbackTypes[feedbackType];

  function handleScreenshot() {
    captureScreen({ format: 'jpg', quality: 0.8 }).then(setScreenshot).catch(console.log);
  }

  function handleScreenshotRemove() {
    setScreenshot(null);
  }

  async function handleSendFeedback() {
    if (isSendingFeedback) return;
    setIsSendingFeedback(true);
    try {
      await api.post('/feedbacks', {
        type: feedbackType,
        screenshot,
        comment,
      });
      onFeedbackSent();
    } catch (error) {
      console.log(error);
    } finally {
      setIsSendingFeedback(false);
    }

  }

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity onPress={onFeedbackCanceled}>
          <ArrowLeft size={24} weight='bold' color={theme.colors.text_secondary} />
        </TouchableOpacity>
        <View style={styles.titleContainer}>
          <Image source={feedbackTypeInfo?.image} style={styles.image} />
          <Text style={styles.titleText}>{feedbackTypeInfo?.title}</Text>
        </View>
      </View>

      <TextInput
        multiline
        style={styles.input}
        placeholder='Please, tell us what is happening with details...'
        placeholderTextColor={theme.colors.text_secondary}
        autoCorrect={false}
        textAlignVertical='top'
        value={comment}
        onChangeText={setComment}
      />

      <View style={styles.footer}>
        <ScreenshotButton onTakeShot={handleScreenshot} onRemoveShot={handleScreenshotRemove} screenshot={screenshot} />
        <Button isLoading={isSendingFeedback} onPress={handleSendFeedback} />
      </View>

    </View>
  );
}
