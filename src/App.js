
import { Redirect, Route, Switch, useHistory } from 'react-router-dom/cjs/react-router-dom.min';
import './App.css';
import About from './Pages/About';
import Home from './Pages/Home';
import Skills from './Pages/Skills';
import UserDetails from './Pages/UserDetails';
import NoPage from './NoPage';


function App() {
  const history = useHistory();
  return (
    <div className="App">
      <div>
        <button onClick={()=>history.goForward()} >forward</button>
        <button onClick={()=>history.goBack()} >backword</button>
      </div>
     

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
        onClick={()=>history.push("/user/")}
        >
          User
        </button>

      </div>

      <Switch>
        <Route exact path='/'>
           <Home />
        </Route>

        <Route path='/about'>
          <About />
        </Route>

        <Route path='/user/:id/:name'>
          <UserDetails />
        </Route>

        <Route path='/skills'>
          <Redirect to = "/about" />
          {/* <Skills /> */}
        </Route>

        <Route path="**">
          <NoPage />
        </Route>

      </Switch>
      
      
      
      
    </div>
  );
}

export default App;


// step 1 : Switch statements <Switch> </Switch>
// step 2 : add routes <Route path = "/{your component}" </Route>
// step 3 : add exact path
// step 4 : add 404 page <Route path="**"> </Route>
// step 5 : between exact path and 404 path you shoul add your routes

// other functionality
// history hook ==> navigation to the different path
// some of the functionality of history is
// .push()
// .replace()
// .goForward()
// .goBack()

// params functionality
// step 1 : pass the path with :id <parameters>
// step 2 : get the is or parameter using useParam hook
// step 3 : const {id} = useParams();