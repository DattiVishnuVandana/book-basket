
import './App.css';
 import { AllRoutes } from './routes/AllRoutes';
import { Footer, Header, ScrollToTop } from './components';
function App() {
  return (
   <>
    <Header/>
    <ScrollToTop/>
    <AllRoutes/>
    <div className="footer fixed bottom-0 mx-30">
       <Footer/>
    </div>
 
   </>
  );
}

export default App;
