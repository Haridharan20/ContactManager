import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import Contacts from './components/contacts/Contacts';
import Header from './components/layout/Header';
import About from './components/pages/About';
import NotFound from './components/pages/NotFound';
import Test from './components/test/Test';
import AddContact from './components/contacts/AddContact';
import EditContact from './components/contacts/EditContact'
import { Provider } from './context';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

class App extends Component {
  render() {
    return (
      <Provider>
        <Router>
          <div className="App">
            <Header branding="Contact Manager" />
            <div className="container">
              <Switch>
                <Route exact path="/" component={Contacts} />
                <Route exact path="/test" component={Test} />
                <Route exact path="/contact/add" component={AddContact} />
                <Route exact path="/contact/edit/:id" component={EditContact} />
                <Route exact path="/about" component={About} />
                <Route component={NotFound} />
              </Switch>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;

//To create html element without JSX
// return React.createElement(
//   'div',
//   { className: 'App' },/* Attribute */
//   React.createElement('h1', null, 'The App Component')
// );

// Expressions
// const name = 'Lara';
//     const show = true;
//     const num1 = 43;
//     const num2 = 20;
//     const showMath = true;
//     let math;
//     if (showMath) {
//       math = (
//         <h4>
//           {num1}+{num2}={num1 + num2}
//         </h4>
//       );
//     } else {
//       math = null;
//     }
//     return (
//       <div className="App">
//         <h1>The App Cpmponent</h1>
//         {show ? <h1>Hello {name.toUpperCase()}</h1> : null}
//         {math}
//       </div>
//     );
