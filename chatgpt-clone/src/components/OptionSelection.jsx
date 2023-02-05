import React from 'react'

export default function OptionSelection({ arrayItems, selectOption }) {
  return (
    <>
    <h1 className="heading"> React AI APP</h1>
     <div className='grid-main'>
        {arrayItems.map((item) => {
            return (
            <div className='grid-child' onClick={() => selectOption(item.option)}>
            <h4 className='grid-child--heading'>{item.name}</h4>
            <p className='grid-child--para'>{item.description}</p>
            </div>
            );
        })}
     </div>
    </>
  );
}
