import { useNavigate } from 'react-router-dom';
import '../styles/WelcomePage.css'
import idea from '../images/idea.png'

export const WelcomePage = () => {
    const navigate = useNavigate()

    return (
        <div className='welcome-container'>
            <div>
                <img src={idea} />
            </div>
            <button onClick={() => navigate('/questions')} className='goToQuiz'  >
                go To Take a Quiz
            </button>
        </div >
    )
}
