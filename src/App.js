import './App.scss';
import Header from './components/header/header';
import { Outlet, Link } from 'react-router-dom';
function App() {
  return (
    <div className='App-container'>
      <div className='header-container'>
        <Header/>
      </div>
      <div className='body'>
        <Outlet/>
      </div>
    </div>
  );
}

export default App;
