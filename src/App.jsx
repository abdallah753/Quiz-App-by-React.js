import { createContext, useContext } from 'react'
import './App.css'
import { AppContext } from './components/context'
import Setup from './components/Setup'
import Loading from './components/Loading'
import Final from './components/Final'

export let Context = createContext()

function App() {
  let { setupform, loading, index, correct, questions, handelNext, final, quiz } = useContext(AppContext)
  let answers = []
  if (setupform) {
    return <Setup />
  }
  if (loading) {
    return <Loading />
  }
  if (final) {
    return <Final />
  }

  if (index < quiz.amount) {
    const tempIndex = Math.floor(Math.random() * 4)
    answers.push(...questions[index].incorrect_answers)
    answers.splice(tempIndex, 0, questions[index].correct_answer)
  }



  return (<div className='d-flex align-items-center justify-content-center' style={{ height: '100vh' }}>
    <div className='card p-5' style={{ width: '90vw', backgroundColor: '#fff' }}>
      <div>
        <p className='text-end' style={{ color: '#25BB32' }}>Correct Answers : {correct}/{index}</p>
      </div>
      <div>
        <h2 className='mb-5 text-center'>{questions[index].question}</h2>
        <div className='d-flex flex-column align-items-center'>
          {answers.map((ele) => {
            return <button key={Math.random() * 9.5} value={ele} onClick={handelNext} className='mb-3 btn btn-primary w-75'>{ele}</button>
          })}
        </div>
      </div>
      <button className='btn-color btn' onClick={handelNext}>Next Question</button>
    </div>
  </div>)

}

export default App