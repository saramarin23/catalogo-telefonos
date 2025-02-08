import { Routes, Route } from 'react-router-dom';
import PhoneList from './views/PhoneList';
import PhoneDetail from './views/PhoneDetail';
import CartView from './views/CartView';
import Header from './components/Header';
import './styles/main.scss';

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PhoneList />} />
        <Route path="/products/:id" element={<PhoneDetail />} />
        <Route path="/cart" element={<CartView />} />
      </Routes>
    </>
  );
}

export default App;
