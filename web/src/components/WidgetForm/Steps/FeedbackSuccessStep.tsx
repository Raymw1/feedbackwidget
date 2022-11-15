import { CloseButton } from "../../CloseButton";

import successImg from '../../../assets/success.svg';

type FeedbackSuccessStepProps = {
  handleRestartFeedback: () => void;
}

export function FeedbackSuccessStep({ handleRestartFeedback }: FeedbackSuccessStepProps) {
  return (
    <>
      <header>
        <CloseButton />
      </header>
      <div className='flex flex-col items-center py-10 w-[304px]'>
        <img src={successImg} alt='Success' />
        <span className='text-xl mt-2'>We appreciate your feedback!</span>
        <button
          type='button'
          className='py-2 px-6 mt-6 bg-zinc-800 rounded-md border-transparent text-sm leading-6 hover:bg-zinc-700 transition-colors focus:ring-2 focus:ring-offset-2 focus:ring-offset-zinc-900 focus:ring-brand-500 focus:outline-none'
          onClick={handleRestartFeedback}
        >
          Send another
        </button>
      </div>
    </>
  );
}
