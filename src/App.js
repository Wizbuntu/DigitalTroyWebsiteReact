// Import React
import React from 'react';

// import React Router Dom
import {BrowserRouter, Route, Switch} from 'react-router-dom'
// import Home Component
import Home from './Home'
import About from './About'
import Contact from './Contact'




// App component 
const App = () => {
    return (
      <BrowserRouter>
        <Switch>
        <Route path='/' exact component={Home}/>
        <Route path='/about' exact component={About}/>
        <Route path='/pricing' exact component={Contact}/>
        <Route path='/contact' exact component={Contact}/>
        </Switch>
      </BrowserRouter>
    )
}

// export App
export default App