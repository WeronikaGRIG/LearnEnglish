

import Nav from '../Components/Nav/Nav';
import Home from '../Pages/Home/Home';
import Footer from '../Components/Footer/Footer';
// import Loader from '../Components/Loader/Loader';

import style from './App.module.scss';


function App() {

  return (
    <>
      <div className={style.app}>
        <Nav />
        <Home />
        <Footer />
        {/* <Loader /> */}
      </div>
    </>
  )
}

export default App
