import './App.css';
import Navbar from './components/Navbar';
import {SsTable} from './Tables/SsTable';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import { VgTable } from './Tables/VgTable';
import { CvTable } from './Tables/CvTable';
import { MpTable } from './Tables/MpTable';
import { SfTable } from './Tables/SfTable';
import { PTable } from './Tables/PTable';
import { SoTable } from './Tables/SoTable';
import Home from './Home';
import { DsTable } from './Tables/DsTable';


function App() {
  return (
    <>
    <Router>
      <Navbar />
      <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/soupsnsalad' component={SsTable} />
        <Route path='/vegetables' component={VgTable} />
        <Route path='/ceviche' component={CvTable} />
        <Route path='/meatsnpoultry' component={MpTable} />
        <Route path='/seafood' component={SfTable} />
        <Route path='/paela' component={PTable} />
        <Route path='/desserts' component={DsTable} />
        <Route path='/seafood' component={SoTable} />     
      </Switch>
    </Router>
    </>
  );
}

export default App;
