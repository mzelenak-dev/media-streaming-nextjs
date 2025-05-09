'use client'

import React, {useState} from 'react'

type SimpleToggleProps = {
  optionsArray: string[];
}

const SimpleToggle = ({optionsArray}: SimpleToggleProps) => {
  const [selected, setSelected] = useState<number>(0);
  
  return (
    <aside className='simpleToggle flex flex-row bg-black-6 rounded-[10px] p-[10px] border-1 border-black-15'>
      {optionsArray.map((option, index) => (
        <p
          onClick={() => { setSelected(index) }}
          className={`px-[24px] py-[14px] text-med-grey bg-none rounded-[10px]
            ${selected === index ? 'text-white font-bold selected' : 'text-med-grey'}
          `}>
            {option}
        </p>
      ))}
    </aside>
  )
}

export default SimpleToggle