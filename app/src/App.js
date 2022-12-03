import {  
  BrowserRouter,  
  Routes,  
  Route,  
  
}   
from 'react-router-dom';  
import Home from './Pages/Home';
import SingleHotel from './Pages/Hotel/SingleHotel';
import List from './Pages/List/List';
function App() {
  return (
    <BrowserRouter>
     <Routes>
      <Route path='/' element={<Home/>}>  </Route>
      <Route path='/hotels' element={<List/>}>  </Route>
      <Route path='/singlehotel/:id' element={<SingleHotel/>}>  </Route>
     </Routes>
    </BrowserRouter>
  );
}

export default App;
