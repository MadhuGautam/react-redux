import './App.css';
import Protected from './Protected'

import Login from './Login';
import Register from './Register';
import AddProduct from './AddProduct';
import UpdateProduct from './UpdateProduct';
import Hero from './Hero';

import { BrowserRouter, Route } from 'react-router-dom';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Route path='/'>
          <Hero />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/add'>

          <Protected Cmp={AddProduct} />
        </Route>
        <Route path='/update'>
          {/* <UpdateProduct /> */}
          <Protected Cmp={UpdateProduct} />
        </Route>
      </BrowserRouter>
    </div>
  );
}

export default App;
