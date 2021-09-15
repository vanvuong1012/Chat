import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'

//import PageRender from './PageRender'
import Home from './pages/home'
import Login from './pages/login'
import Register from "./pages/register";

import Header from './components/Header'
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";
import messages from "./pages/messages";



function App(){
    const { user } = useContext(AuthContext);
    return (
        // <Router>
        //     <input type="checkbox" id ="theme"/>
        //     <div className="App">
        //         <div className="main">
        //             <Header/>
        //             <Route exact path="/" component={Login}/>
        //             <Route exact path="/:page" component={PageRender}/>
        //             <Route exact path="/:page/:id" component={PageRender}/>
        //         </div>
        //     </div>
        // </Router>
        <Router>
      <Switch>
        <Route exact path="/">
          {user ? <Home /> : <Register />}
        </Route>
        <Route path="/login">{user ? <Redirect to="/" /> : <Login />}</Route>
        <Route path="/register">
          {user ? <Redirect to="/" /> : <Register />}
        </Route>
        <Route path="/messager">
          {!user ? <Redirect to="/" /> : <messages/>}
        </Route>
        
        <Route path="/profile/:fullname">
          <Header />
        </Route>
      </Switch>
    </Router>
    );
}
export default App
