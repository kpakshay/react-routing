import{BrowserRouter, Route} from 'react-router-dom';
import Home from './main';
import {AboutUs} from './main';
import { Admin } from './main';
import { Student } from './main';
import { Branches } from './main';
import {Contactus} from './main';

export default function App() {
  return(
    <div>
      <BrowserRouter>
        <switch>
          <Route exact path='/' component={ () => (<Home/>)}/>
          <Route exact path="/Admin" component={()=>(<Admin/>)}/>
          <Route exact path="/Student" component={()=>(<Student/>)}/>
          <Route exact path="/Aboutus" component={() => (<AboutUs/>)}/>
          <Route exact path="/Branches" component={() => (<Branches />)}/>
          <Route exact path="/Contactus" component={() => (<Contactus/>)}/>

        </switch>
      </BrowserRouter>
    </div>
  )
}