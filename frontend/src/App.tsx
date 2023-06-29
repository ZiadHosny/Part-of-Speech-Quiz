import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import Questions from './Pages/QuestionsPage';
import { WelcomePage } from './Pages/WelcomePage';
import { RankPage } from './Pages/RankPage';

const App = () => {

  return (
    <div className='app'>
      <>
        <Navbar />
        <BrowserRouter>
          <Routes>
            <Route path='/' element={<WelcomePage />} />
            <Route path='/questions' element={<Questions />} />
            <Route path='/rank' element={<RankPage />} />
          </Routes>
        </BrowserRouter>

      </>
    </div>
  )
}

export default App;
