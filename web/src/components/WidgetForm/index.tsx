import { useState } from "react";

import bugImageUrl from '../../assets/bug.svg';
import ideaImageUrl from '../../assets/idea.svg';
import thoughtImageUrl from '../../assets/thought.svg';

import { FeedbackTypeStep } from "./Steps/FeedbackTypeStep";
import { FeedbackContentStep } from "./Steps/FeedbackContentStep";

export const feedbackTypes = {
  BUG: {
    title: 'Issue',
    image: {
      src: bugImageUrl,
      alt: 'Bug image',
    },
  },
  IDEA: {
    title: 'Idea',
    image: {
      src: ideaImageUrl,
      alt: 'Lamp image',
    },
  },
  OTHER: {
    title: 'Other',
    image: {
      src: thoughtImageUrl,
      alt: 'Thought balloon image',
    },
  },
}

export type FeedbackType = keyof typeof feedbackTypes;

export function WidgetForm() {
  const [feedbackType, setFeedbackType] = useState<FeedbackType | null>(null);

  function handleRestartFeedback() {
    setFeedbackType(null);
  }

  return (
    <div className='bg-zinc-900 p-4 relative rounded-2xl mb-4 flex flex-col items-center shadow-lg w-[calc(100vw-2rem)] md:w-auto'>

      {!feedbackType ? (
        <FeedbackTypeStep setFeedbackType={setFeedbackType} />
      ) : (
        <FeedbackContentStep feedbackType={feedbackType} handleRestartFeedback={handleRestartFeedback} />
      )}
      <footer className='text-xs text-neutral-400'>
        Feito com ♥ pelo{" "}
        <a className='underline underline-offset-2' href='https://github.com/Raymw1' target='_blank'>Rayan</a>
      </footer>
    </div>
  );
}
