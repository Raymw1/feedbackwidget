import { ArrowLeft } from "phosphor-react";
import { CloseButton } from "../../CloseButton";

import { FeedbackType, feedbackTypes } from "..";

type FeedbackContentStepProps = {
  feedbackType: FeedbackType;
  handleRestartFeedback: () => void;
}

export function FeedbackContentStep({ feedbackType, handleRestartFeedback }: FeedbackContentStepProps) {
  const feedbackTypeInfo = feedbackTypes[feedbackType];

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
      <form className='my-4 w-full'>
        <textarea
          className='min-w-[304px] w-full min-h-[112px] text-sm placeholder-zinc-400 text-zinc-100 border-zinc-600 bg-transparent rounded-md focus:outline-none focus:border-brand-500 focus:ring-brand-500 focus:ring-1 resize-none scrollbar-thumb-zinc-700 scrollbar-track-transparent scrollbar-thin'
          placeholder='Please, tell us what is happening with details...'
        />
      </form>
    </>
  );
}
