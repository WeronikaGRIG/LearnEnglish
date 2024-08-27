import { Route, Routes } from "react-router-dom";

import { ErrorProvider } from "../contexts/ErrorContext";
import { LoaderProvider } from "../contexts/LoaderContext";

import Nav from '../Components/Nav/Nav';
import Home from '../Pages/Home/Home';
import Vocab from '../Pages/Vocab/Vocab';
import Rule from "../Pages/Rule/Rule";
import Simple from "../Pages/CrammarTable/Simple";
import Continuous from '../Pages/CrammarTable/Continuous';
import Perfect from '../Pages/CrammarTable/Perfect';

import Footer from '../Components/Footer/Footer';
import Loader from '../Components/Loader/Loader';
import Error from '../Components/Error/Error';

import style from './App.module.scss';



function App() {

  return (
    <ErrorProvider>
      <LoaderProvider>
        <div className={style.app}>
          <Nav />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/vocabs" element={<Vocab />} />
            <Route path="/tables" element={<Rule />} />
            <Route path="/table-simple-tenses" element={<Simple />} />
            <Route path="/table-continuous-tenses" element={<Continuous />} />
            <Route path="/table-perfect-tenses" element={<Perfect />} />
          </Routes>
          <Footer />
          <Error />
          <Loader />
        </div>
      </LoaderProvider>
    </ErrorProvider>
  )
}

export default App
