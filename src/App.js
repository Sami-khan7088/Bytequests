import './App.css';
import Nav from './Nav';
import Products from './product'
import Services from './services';
import Portfolio from './portfolio';
import Developer from './devloper';
import Footer from './footer';
import "../node_modules/bootstrap/dist/css/bootstrap.min.css"
function App() {
  return (
    <>
      <div className="main">
        <div className="header">
          <a href="mailto:info@bytequests.com"><i className="fas fa-envelope  mx-2 "></i>info@bytequests.com</a>
          <a href="tel:+919711999770"><i className="fas fa-phone mx-2">  </i>+91 9711999770</a>
        </div>
        <div className='Nav'>
          <Nav />
        
        <div>
        <Products/>
        </div>
        <Services/>
        <Portfolio/>
        <Developer/>
        <Footer/>
      </div>
      </div>
    </>
  );
}

export default App;
