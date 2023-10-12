import './App.css';
import CompA from './components/CompA.js';

import { BrowserRouter,Routes,Route,Link} from 'react-router-dom';


function App() {
  const details=[
    {
      name:"Jahnavi",
      roll:"623"
    },
    {
      name:"Ram",
      roll:"622"
    }
  ]
   
  return (
    <>
    <BrowserRouter>
        <Link to="/CompA">click to compA</Link>
        <Routes>
             
           <Route path='/CompA' element={<CompA data={details}/>}>
           

           </Route>

        </Routes>

    </BrowserRouter>
    </>
  );
}

export default App;