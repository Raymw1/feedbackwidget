import { ArrowLeft } from 'phosphor-react';
import { CloseButton } from '../../CloseButton';

import { FeedbackType, feedbackTypes } from '..';
import { ScreenshotButton } from '../ScreenshotButton';
import { FormEvent, useState } from 'react';

type FeedbackContentStepProps = {
  feedbackType: FeedbackType;
  handleRestartFeedback: () => void;
}

export function FeedbackContentStep({ feedbackType, handleRestartFeedback }: FeedbackContentStepProps) {
  const [screenshot, setScreenshot] = useState<string | null>(null);
  const [comment, setComment] = useState<string>('');

  const feedbackTypeInfo = feedbackTypes[feedbackType];

  function handleSubmitFeedback(event: FormEvent) {
    event.preventDefault();
    console.log({ screenshot, comment });
  }

  return (
    <>
      <header>
        <button
          type='button'
          className='absolute top-5 left-5 text-zinc-400 hover:text-zinc-100'
          onClick={handleRestartFeedback}
        >
          <ArrowLeft weight='bold' className='w-4 h-4' />
        </button>
        <span className='text-xl leading-6 flex items-center gap-2'>
          <img src={feedbackTypeInfo.image.src} alt={feedbackTypeInfo.image.alt} className='w-6 h-6' />
          {feedbackTypeInfo.title}
        </span>
        <CloseButton />
      </header>
      <form onSubmit={handleSubmitFeedback} className='my-4 w-full'>
        <textarea
          className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:outline-none focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
          placeholder='Please, tell us what is happening with details...'
          value={comment}
          onChange={(event) => setComment(event.target.value)}
        />
        <footer className='flex gap-2 mt-2'>
          <ScreenshotButton setScreenshot={setScreenshot} screenshot={screenshot} />
          <button
            type='submit'
            className='p-2 bg-brand-500 rounded-md border-transparent flex-1 flex justify-center items-center text-sm hover:bg-brand-300 focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 transition-colors disabled:opacity-50 disabled:hover:bg-brand-500'
            disabled={!comment}
          >
            Send feedback
          </button>
        </footer>
      </form>
    </>
  );
}
