import React, { useContext } from 'react'
import { AppContext } from './context'

function Setup() {
    let {handelChange , handelClick , quiz} = useContext(AppContext)

    return (
        <div className='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
            <div className='card p-5' style={{ width: '500px', backgroundColor: '#fff' }}>
                <form>
                    <h1 style={{ letterSpacing: '0.1rem' }} className='text-color fw-bold'>Setup Quiz</h1>
                    <div className='card-body'>
                        <div className='form-group mb-3'>
                            <label htmlFor="number" className='label-color form-label'>Number of Questions</label>
                            <input id='number' name='amount' value={quiz.amount} min='1' type="number" className='form-control' max='50' onChange={handelChange} style={{ backgroundColor: '#f1f5f8' }} />
                        </div>
                        <div className='form-group'>
                            <label htmlFor="categury" className='label-color form-label'>Categury</label>
                            <select className='mb-4 border border-0' name="categury" id="categury" onChange={handelChange} style={{ width: '100%', backgroundColor: '#f1f5f8' }}>
                                <option value="21">sports</option>
                                <option value="23">history</option>
                                <option value="24">politics</option>
                            </select>
                        </div>
                        <div className='form-group'>
                            <label htmlFor="difficulty" className='label-color form-label'>Select Difficulty</label>
                            <select className='mb-4 border border-0' name="difficulty" id="difficulty" onChange={handelChange} style={{ width: '100%', backgroundColor: '#f1f5f8' }}>
                                <option value="easy">easy</option>
                                <option value="medium">medium</option>
                                <option value="hard">hard</option>
                            </select>
                        </div>
                    </div>
                    <button className='btn btn-color fw-bold w-100' onClick={handelClick}>Start</button>
                </form>
            </div>
        </div>
    )
}

export default Setup

/*

          
  )
 */