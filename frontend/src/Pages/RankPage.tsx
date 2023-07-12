import { useLocation, useNavigate } from "react-router-dom";
import { FiRefreshCw } from 'react-icons/fi'
import '../styles/RankPage.css'

export const RankPage = () => {

    const location = useLocation();
    const navigate = useNavigate()
    let rank = location.state?.rank;

    return (
        <div className="rank-container">
            <div className="white-container">
                <div >Your Rank is {rank}</div>
                <button style={{
                    width: '190px', display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    padding: 20,
                    borderRadius: 30,
                    cursor: 'pointer',
                    fontSize: 20
                }} onClick={() => { navigate('/questions') }}>
                    <div>Try Again</div>  <FiRefreshCw size={30} />
                </button>
            </div>
        </div>
    )
}
