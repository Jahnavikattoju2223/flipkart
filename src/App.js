import './App.css';
import CompA from './components/CompA.js';

import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';


function App() {
  const details=[
    {
      name:"Jahnavi kattoju",
      roll:"623"
    },
    {
      name:"Ram Karibandhi",
      roll:"622"
    }
  ]
   
  return (
    <>
    <BrowserRouter>
        <Link to="/CompA">click to compAbcdefg</Link>
        <Routes>
             
           <Route path='/CompA' element={<CompA data={details}/>}>
           

           </Route>

        </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;