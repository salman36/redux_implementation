import './App.css';
import Cart from './Cart';
import Navbar from './Navbar';
import Shop from './Shop';

function App() {
  return (
    <>
      <Navbar />
      <div className="container">
        <Shop /><br></br><br></br>
        <Cart />
      </div>
    </>
  );
}

export default App;
