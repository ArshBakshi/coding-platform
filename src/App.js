import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Landing from "./components/Landing";
import { Test } from "./pages/Test";
import Login from "./components/Login";
import Begin from "./components/Begin";
import Exam from "./components/Exam";
import Result from "./components/Results"

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Test />} />
        <Route path="/login" element={<Login />} />
        <Route path="/result" element={<Result />} />
        
        {/* Parent Route */}
        <Route path="/test" element={<Test />}>
          <Route index element={<Begin />} /> {/* Default child route */}
          <Route path="exam" element={<Exam />} /> {/* Nested route */}
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
