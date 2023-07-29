import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<HomePage />} />
        <Route path='/login' element={<LoginPage />} />
        <Route path='/register' element={<RegisterPage />} />
        <Route path='/addTask' element={<h1>new task</h1>} />
        <Route path='/tasks/:id' element={<h1>update task</h1>} />
        <Route path='/profile' element={<h1>profile</h1>} />
      </Routes>
    </BrowserRouter>
  )
}