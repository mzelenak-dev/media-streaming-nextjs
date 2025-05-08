import { ReactNode } from 'react'

type ContentBlockProps = {
  leadText: string;
  subText: string;
  actionComponent?: ReactNode;
  children: ReactNode;
}

const ContentBlock = ({leadText, subText, actionComponent, children}: ContentBlockProps) => {
  return (
    <section className='mb-[100px]'>
      <div className='flex flex-row justify-between'>
        <div className='flex flex-col max-w-[75%]'>
          <h3 className='text-white font-bold text-[38px]'>{leadText}</h3>
          <p className='text-med-grey text-[18px]'>{subText}</p>
        </div>
        <div>{actionComponent}</div>
      </div>
      <div>
        {children}
      </div>
    </section>
  )
}

export default ContentBlock