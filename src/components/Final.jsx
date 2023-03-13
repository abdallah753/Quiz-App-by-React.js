import React, { useContext } from 'react'
import { AppContext } from './context'

function Final() {
  let { handelagain, correct, questions } = useContext(AppContext)
  return (
    <div className='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
      <div className='card p-5' style={{ width: '90vw', backgroundColor: '#fff' }}>
        <h2 className='text-color text-center'>Congrats!</h2>
        <p className='text-center'>You answered {((correct / questions.length) * 100).toFixed(0)}% of questions correctly</p>
        <button className='btn btn-color' onClick={handelagain}>Play Again</button>
      </div>
    </div>
  )
}

export default Final