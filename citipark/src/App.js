
import './App.css';
import HeaderComponent from './Components/Layout/HeaderComponent';
import "bootstrap/dist/css/bootstrap.min.css";
import "react-fontawesome";
import { Switch, Redirect, Route} from 'react-router-dom';
import ParkingSlot from './Components/ParkingSlot';
import {Provider} from 'react-redux';
import store from './store'

import FooterComponent from './Components/Layout/FooterComponent';
import Dashboard from './Components/Dashboard';
import ParkingSlotDashboard from './Components/ParkingSlotDashboard';



function App() {
  
  return (
     <Provider store={store}>
    <div>
    
    <HeaderComponent />
    
    <Switch>

      <Route path="/parkingSlot" component={ParkingSlot}/>
      <Route path="/parkingSlotDashboard" component={ParkingSlotDashboard}/>
      <Route path="/" exact component={Dashboard} />
      
      <Redirect from="/dashboard" to="/"/>
   

     </Switch>
     <br />
     <br />
     <br />
     <FooterComponent></FooterComponent>
    </div>
     </Provider>
  );
}

export default App;
