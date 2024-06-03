import { BrowserRouter, Routes, Route } from 'react-router-dom';
import SignUp from './pages/SignUp';
import SignIn from './pages/SignIn';
import Dashboard from './pages/Dashboard';
import SendMoney from './pages/SendMoney';
import Home from './pages/Home';
import { Toaster } from 'react-hot-toast';
import UserInfo from './pages/UserInfo';
import Update from './pages/Update';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/signup" element={<SignUp />} />
          <Route path="/signin" element={<SignIn />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/send" element={<SendMoney />} />
          <Route path="/userinfo" element={<UserInfo />} />
          <Route path="/update" element={<Update />} />
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
