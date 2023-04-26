import Home from "./Components/UserHome/Home";
import Playlist from "./Components/Playlist/Playlist";
import { Routes, Link, BrowserRouter, Route }  from 'react-router-dom'

function App() {
  return (
    <div>
        <BrowserRouter>
            <Routes>
              <Route exact path='/' element={<Home />} />
              <Route exact path='/playlist' element={<Playlist />} />
            </Routes>
        </BrowserRouter>
    </div>
  );
}

export default App;
