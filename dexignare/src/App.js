import { Route,Switch } from 'react-router';
import './App.css';
import { LandingPage,JoinUs,SignUp, SignUp2 } from './pages';

function App() {
  return (
    <Switch>
      <Route path="/joinus"><JoinUs/></Route> 
      <Route path="/signup"><SignUp/></Route>
      <Route path="/signup2"><SignUp2/></Route>
      <Route path="/"><LandingPage/></Route>
    </Switch>   
  );
}

export default App;
