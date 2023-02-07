import React from 'react'

export default function Translation({doStuff, setInput, result}) {
  return (
  <>
  <div className='AI-response'>
   <span className='AI-response--icon'>🤖</span> 
   <p className='result-text'>{result.length > 0 ? result:""}</p>
  </div>
    <footer>
     <div className='footer-container'>
     <div className='container'>
       <div className='input-container'>
       <textarea tabIndex={0} className="app-input" 
        placeholder="Type desired image e.g 'a white siamese cat' "
        rows={2}
        onChange={(e) => setInput(e.target.value)}
        ></textarea>
        <button className="app-button" onClick={doStuff}>
          {" "}
          →{" "}
        </button>
       </div>
       <button className='reset-button'> ↺ </button>
       </div>
        <p className='footer-para'>Type in a command to get the desired output based on chosen model-first type in the tsk you want it to complete depending on the model you cose but keep into account which language model you chose, to get the best possible results from the model <br /> <br />~brought to you by sobza~</p>
    </div>   
    </footer>
    </>
  )
  
}
