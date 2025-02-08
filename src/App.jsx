import { Routes, Route } from 'react-router-dom';
import PhoneList from './views/PhoneList';
import PhoneDetail from './views/PhoneDetail';
import Header from './components/Header';
import './styles/main.scss';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PhoneList />} />
        <Route path="/products/:id" element={<PhoneDetail />} />
      </Routes>
    </>
  );
}

export default App;
