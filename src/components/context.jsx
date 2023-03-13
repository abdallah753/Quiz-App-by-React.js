import axios from "axios"
import { createContext, useState } from "react"



export const AppContext = createContext()

export const AppProvider = ({ children }) => {
    const [setupform, setsetupform] = useState(true)
    const [loading, setloading] = useState(false)
    const [index, setindex] = useState(0)
    const [correct, setcorrect] = useState(0)
    const [questions, setquestions] = useState([])
    const [final, setfinal] = useState(false)
    const [quiz, setquiz] = useState({
        amount: 10,
        categury: '21',
        difficulty: 'easy'
    })

    const fetchQuistions = async () => {
        setloading(true)
        setsetupform(false)
        let response = await axios(`https://opentdb.com/api.php?amount=${quiz.amount}&category=${quiz.categury}&difficulty=${quiz.difficulty}&type=multiple`)

        if (response.data.results.length > 0) {
            setquestions([...response.data.results])
            console.log(response.data.results, questions);
            setloading(false)
        } else {
            setloading(false)
            alert('Error Dose Ocurr Please try again')
        }
    }

    const handelNext = (e) => {
        let cheacked = e.target.value
        if (index < questions.length - 1) {
            console.log(cheacked, questions[index].correct_answer);
            if (cheacked == questions[index].correct_answer) {

                setcorrect(correct + 1)
            }
            setindex(index + 1)
        } else {
            setfinal(true)
        }
    }

    const handelChange = (e) => {
        const name = e.target.name
        const value = e.target.value
        setquiz({
            ...quiz, [name]: value
        })
    }

    const handelClick = (e) => {
        e.preventDefault()
        fetchQuistions()
    }

    const handelagain = () => {
        setsetupform(true)
        setfinal(false)
        setindex(0)
        setcorrect(0)
    }

    return <AppContext.Provider value={{
        setupform,
        index,
        loading,
        correct,
        quiz,
        questions,
        handelClick,
        handelChange,
        handelNext,
        handelagain,
        final
    }}>
        {children}
    </AppContext.Provider>
}