import { FeedbackType, feedbackTypes } from "..";
import { CloseButton } from "../../CloseButton";

type FeedbackTypeStepProps = {
  setFeedbackType: (feedbackType: FeedbackType) => void;
}

export function FeedbackTypeStep({ setFeedbackType }: FeedbackTypeStepProps) {
  return (
    <>
      <header>
        <span className='text-xl leading-6'>Leave your feedback</span>
        <CloseButton />
      </header>
      <div className='flex py-8 gap-2 w-full'>
        {Object.entries(feedbackTypes).map(([key, value]) => (
          <button
            className='bg-zinc-800 rounded-lg py-5 w-24 flex-1 flex flex-col items-center gap-2 border-2 border-transparent hover:border-brand-500 focus:border-brand-500'
            onClick={() => setFeedbackType(key as FeedbackType)}
            key={key}
            type='button'
          >
            <img src={value.image.src} alt={value.image.alt} />
            <span>{value.title}</span>
          </button>
        ))}
      </div>
    </>
  );
}
