import './App.css';
import { BrowserRouter as Router, Route } from 'react-router-dom'

import Header from './components/Header';
import Footer from './components/Footer';
import {Container} from 'react-bootstrap'
import HomeScreen from './Screen/HomeScreen';
import ProductScreen from './Screen/ProductScreen/ProductScreen';
function App() {
  return (
    <div >
      <Router>

      <Header/>
    <Container>
    <main>
      <Route path='/' component={HomeScreen} exact/>
      <Route path='/product/:id' component={ProductScreen}/>
      <Route path='/products/:id' component={ProductScreen} />



    </main>
    </Container>
    
    <Footer/>

      </Router>
   
    </div>
  );
}

export default App;
