import logo from './logo.svg';
import './App.css';
import Header from './Component/Header/Header';
import { BrowserRouter as Router, Switch,Route} from 'react-router-dom';
import Home from './Component/Home/Home';
import Footer from './Component/Footer/Footer';
import About from './Component/About/About';
import Allservice from './Component/Allservice/Allservice';
import Contract from './Component/Contract/Contract';
import NotFound from './Component/NotFound/NotFound';

function App() {
  return (
    <div className="App">
      <Router>
        <Header></Header>
        <Switch>
          <Route exact path="/">
                <Home></Home>
          </Route>
          <Route path="/home">
            <Home></Home>
          </Route>

          <Route  path="/about">
              <About></About>
          </Route>
          
          <Route path="/services">

            <Allservice> </Allservice>

          </Route>

         <Route path="/contract">
          <Contract></Contract>
         </Route>

         <Route path="*">
            <NotFound></NotFound>
         </Route>
        </Switch>
      </Router>
      <Footer></Footer>
    </div>
  );
}

export default App;
