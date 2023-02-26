import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './components/sites/Home/Home';
import Movie from './components/sites/Movie/Movie';

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<Movie />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
