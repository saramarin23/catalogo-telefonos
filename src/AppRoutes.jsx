import { Routes, Route, useLocation } from 'react-router-dom';
import PhoneList from './views/PhoneListView';
import PhoneDetail from './views/PhoneDetailView';
import CartView from './views/CartView';
import Header from './components/Header';
import './styles/main.scss';

function App() {
  const location = useLocation();

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<PhoneList />} />
        <Route
          path="/products/:id"
          element={<PhoneDetail key={location.pathname} />}
        />
        <Route path="/cart" element={<CartView />} />
      </Routes>
    </>
  );
}

export default App;
