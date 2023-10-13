
import './App.css';
import './css/bootstrap.css'
import Flipkart from './components/Flipkart';
import Slide from './components/Banner'
import Product from './components/Product'
import Form from './components/Forms'




function App() {
 return(
  <>
  
  
<div className='container-fluid sample'>
<div className='row'>
  <Flipkart />
  <Slide/>
  <Product/>
  <Form/>
   
  </div>
  </div>
  </>
    
   
  );
}

export default App;
