// import React from 'react';
// import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Home from './pages/Home.jsx';
// import About from './pages/About.jsx';

// function App() {
//   return (
//     <Router>
//       <Routes>
//         <Route path="/" element={<Home />} />
//         <Route path="/about" element={<About />} />
//       </Routes>
//     </Router>
//   );
// }

// export default App;

import React from 'react';
import Graph from './components/graph.jsx';
import Graph_2xPlus3 from './components/graph_2x+3.jsx';
import Graph_2xPlus3Inverse from './components/graph_(y-3)divided2.jsx';

const App = () => {
  return (
    <div>
      <h1>Inverse Functions</h1>
      <h2>An inverse function undos the result of the original function. In other words,</h2>
      <h2>f(-1)(f(x)) = x</h2>
      <h2>For example, these are functions that are the inverses of one another.</h2>
      <Graph_2xPlus3 />
      <Graph_2xPlus3Inverse/>
    </div>
  );
};

export default App;
