
import { Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import About from './Pages/About';
import Contact from './Pages/Contact';
import Home from './Pages/Home';
import Skills from './Pages/Skills';


function App() {
  const history = useHistory();
  return (
    <div className="App">
      <div>
        <button onClick={()=>history.goForward()} >forward</button>
        <button onClick={()=>history.goBack()} >backword</button>
      </div>
      <h2>Browser Router Application</h2>

      <div className='nav-btn'>

        <button
        onClick={()=>history.push("/")}
        >
          Home
        </button>

        <button
        onClick={()=>history.push("/about")}
        >
          About
        </button>

        <button
        onClick={()=>history.push("/skills")}
        >
          Skills
        </button>

        <button
        onClick={()=>history.push("/contact/")}
        >
          Contact
        </button>

      </div>

      <Switch>
        <Route exact path='/'>
           <Home />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/contact/:id'>
          <Contact />
        </Route>

        <Route path='/skills'>
          <Skills />
        </Route>

      </Switch>
      
      
      
      
    </div>
  );
}

export default App;
