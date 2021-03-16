import React from 'react'
import {BrowserRouter,Switch,Route} from 'react-router-dom'
import Home from './components/Home'
import Works from './components/Works'
import Career from './components/Careers'
import Contact from './components/Contact'


export default function Routes(props) {
    

    return (
       <BrowserRouter>
            <Switch>
                <Route path='/Works' exact component={Works}/>
                <Route path='/career' exact component={Career}/>
                <Route path='/contact' exact component={Contact}/>
                <Route path='/' exact component={Home}/>
            </Switch>
       </BrowserRouter>
    )
}
