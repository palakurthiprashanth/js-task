import { Routes, Route } from 'react-router-dom';
import Header from './components/Layout/Header';
import Footer from './components/Layout/Footer';

import CarsContainer from './views/carsHomePage/CarsContainer';
import CarDetails from  "./views/carDetails/CarDetails";
import PageNotFound from './views/pageNotFound/PageNotFound';
import SomethingWentWrong from './views/somethingWentWrong/SomethingWentWrong';
import {ErrorBoundary} from 'react-error-boundary';

import "./main.scss";

function CarsApp() {
  return (
    <div className="app-container" data-testid="mainContainer">
        <Header/>
        <ErrorBoundary FallbackComponent={ SomethingWentWrong }>
              <Routes>
                <Route path="/" element={ <CarsContainer/> } />
                <Route path="/car/:carStockNumber"  element={ <CarDetails/>} />
                <Route path="*" element={ <PageNotFound/> } />
              </Routes>
        </ErrorBoundary>
        <Footer/>
    </div>
  );
}

export default CarsApp;
