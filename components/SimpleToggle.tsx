'use client'

import React, {useState} from 'react'

type SimpleToggleProps = {
  option1: string;
  option2: string;
}

const SimpleToggle = ({option1, option2}: SimpleToggleProps) => {
  const [selected, setSelected] = useState<string | null>(null);
  
  return (
    <aside className='simpleToggle flex flex-row bg-black-6 rounded-[10px] p-[10px] border-1 border-black-15'>
      <p
        onClick={() => setSelected(option1)}
        className={`px-[24px] py-[14px] text-med-grey bg-none rounded-[10px] ${selected === option1 ? 'selected' : ''}`}
      >
          {option1}
      </p>
      <p
        onClick={() => setSelected(option2)}
        className={`px-[24px] py-[14px] text-med-grey bg-none rounded-[10px] ${selected === option2 ? 'selected' : ''}`}
      >
        {option2}
        </p>
    </aside>
  )
}

export default SimpleToggle