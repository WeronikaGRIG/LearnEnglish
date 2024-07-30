
import Nav from '../Components/Nav/Nav';
import Home from '../Pages/Home/Home';

import style from './App.module.scss';

function App() {

  return (
    <>
      <div className={style.app}>
        <Nav />
        <Home />
      </div>
    </>
  )
}

export default App
