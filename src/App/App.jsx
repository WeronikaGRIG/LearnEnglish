

import Nav from '../Components/Nav/Nav';
import Home from '../Pages/Home/Home';
import Footer from '../Components/Footer/Footer';

import style from './App.module.scss';

function App() {

  return (
    <>
      <div className={style.app}>
        <Nav />
        <Home />
        <Footer />
      </div>
    </>
  )
}

export default App
