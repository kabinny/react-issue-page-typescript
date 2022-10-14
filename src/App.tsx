import { Route, Routes } from 'react-router-dom';

import Nav from './components/Nav';
import Issue from './pages/Issue';

function App() {
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Issue />} />
        <Route path="/issue" element={<Issue />} />
      </Routes>
    </>
  );
}

export default App;
