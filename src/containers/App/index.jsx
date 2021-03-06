import React from 'react';
import {BrowserRouter, Switch, Route, NavLink, Redirect} from "react-router-dom";
import MainPage from "containers/MainPage";
import Login from "containers/Login";
import './index.css'
import {useDispatch, useSelector} from "react-redux";
import {Operation as UserOperation} from "actions/user"

const App = () => {
  const {authStatus} = useSelector(state => state.user)
  const dispatch = useDispatch();

  const signOutClickHandler = () => dispatch(UserOperation.logout())

  return (
      <BrowserRouter>
        <div className="main-page">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
              <span className="navbar-brand">Task Manager</span>
              <div className="collapse navbar-collapse" id="navbarNav">
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <NavLink to={'/'} exact className='nav-link' activeclass='active'>Main</NavLink>
                  </li>
                  <li className="nav-item">
                    {!authStatus ? <NavLink className="nav-link" to={'/login'}>Sign in</NavLink> :
                      <button className="btn btn--link nav-link" onClick={signOutClickHandler}>Sign out</button>
                      }
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          <Switch>
            <Route exact path={'/'} component={MainPage}/>
            <Route exact path="/login">
              {authStatus ? <Redirect to="/" /> : <Login />}
            </Route>
          </Switch>
        </div>
      </BrowserRouter>
  );
}

export default App;
