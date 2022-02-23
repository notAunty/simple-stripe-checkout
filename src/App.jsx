import './App.css';
import { Route, Routes, BrowserRouter as Router } from 'react-router-dom';

import Checkout from './pages/Checkout';

function App() {
  return (
    <Router>
      <Routes>
        {/* <Route path="/success">
          <Success />
        </Route>
        <Route path="/canceled">
          <Canceled />
        </Route> */}
        <Route path="/" element={<Checkout />} />
      </Routes>
    </Router>
  );
}

export default App;
