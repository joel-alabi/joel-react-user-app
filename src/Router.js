import React from 'react'
import {BrowserRouter ,Route} from 'react-router-dom';
import App from "./App";
import EditForm from './components/EditForm'
import Login from './components/Login';
import ProtectedRoute from './components/ProtectedRoute';
import Register from './components/Register';


const Router =() => {
    return(
        <BrowserRouter>
        <ProtectedRoute exact path ="/" component={App}/>
        <ProtectedRoute path="/edit/:id" component={EditForm}/>
        <Route path="/register" component={Register}/>
        <Route path="/login" component={Login}/>
        </BrowserRouter>
    )
}
export default Router;