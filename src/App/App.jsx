

import Nav from '../Components/Nav/Nav';
// import Home from '../Pages/Home/Home';
import Vocab from '../Pages/Vocab/Vocab';
import Footer from '../Components/Footer/Footer';
// import Loader from '../Components/Loader/Loader';
// import Error from '../Components/Error/Error';

import style from './App.module.scss';



function App() {

  return (
    <>
      <div className={style.app}>
        <Nav />
        {/* <Error /> */}
        {/* <Loader /> */}
        <Vocab />
        {/* <Home /> */}
        <Footer />


      </div>
    </>
  )
}

export default App
