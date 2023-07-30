import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HomePage } from './pages/HomePage';
import { LoginPage } from './pages/LoginPage';
import { RegisterPage } from './pages/RegisterPage';
import { AuthProvider } from './context/AuthProvider';
import './App.css'
import { ProtectedRoutes } from './ProtectedRoutes';


export default function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<HomePage />} errorElement={<h1>Error</h1>}/>
          <Route path='/login' element={<LoginPage />} />
          <Route path='/register' element={<RegisterPage />} />
          <Route element={<ProtectedRoutes />}>
            <Route path='/addTask' element={<h1>new task</h1>} />
            <Route path='/tasks/:id' element={<h1>update task</h1>} />
            <Route path='/profile' element={<h1>profile</h1>} />
          </Route>
        </Routes>
      </BrowserRouter>
    </AuthProvider>
  )
}