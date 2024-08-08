import { Provider } from 'react-redux'
import store from './redux/store';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Routes, Route, BrowserRouter } from 'react-router-dom'
import Signin from './components/signin/signin';
import Home from './components/home/home';

function App() {

  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Signin />} />
          <Route path='/home' element={<Home />} />
        </Routes>
      </BrowserRouter>
    </Provider>
    // <Home />
  );
}

export default App;
