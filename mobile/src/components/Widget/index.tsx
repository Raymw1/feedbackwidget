import { useRef } from 'react';
import { gestureHandlerRootHOC } from 'react-native-gesture-handler';
import { TouchableOpacity } from 'react-native';
import { ChatTeardropDots } from 'phosphor-react-native';
import BottomSheet from '@gorhom/bottom-sheet';

import { styles } from './styles';
import { theme } from '../../theme';

import { Options } from '../Options';
import { Form } from '../Form';

import { feedbackTypes } from '../../utils/feedbackTypes';

export type FeedbackType = keyof typeof feedbackTypes;

function Widget() {

  const bottomSheetRef = useRef<BottomSheet>(null);

  function handleOpen() {
    bottomSheetRef.current?.expand();
  }

  return (
    <>
      <TouchableOpacity style={styles.button} onPress={handleOpen}>
        <ChatTeardropDots size={24} color={theme.colors.text_on_brand_color} weight='bold' />
      </TouchableOpacity>
      <BottomSheet
        ref={bottomSheetRef}
        snapPoints={[1, 280]}
        backgroundStyle={styles.modal}
        handleIndicatorStyle={styles.indicator}
      >
        {/* <Options /> */}
        <Form feedbackType='BUG' />
      </BottomSheet>
    </>
  );
}

export default gestureHandlerRootHOC(Widget);