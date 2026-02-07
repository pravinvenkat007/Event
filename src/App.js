
import './App.css';

import { Home } from './Pages/Home';
import Day1 from './component/Day1';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Day2 from './component/Day2';
import Day3 from './component/Day3';
import { Close } from './component/Close';

function App() {
  return (
    <div className="App">
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path='Day1' element={<Day1/>}/>
        <Route path="/Day2" element={<Day2/>}/>
          <Route path="/Day3" element={<Day3/>}/>
           <Route path="/Close" element={<Close/>}/>
      
      </Routes>
    </Router>
 
        
    </div>
  );
}

export default App;
