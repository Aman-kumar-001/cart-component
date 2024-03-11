import Home from '../src/component/home/home';
import {BrowserRouter } from 'react-router-dom';
import data from '../src/component/{}.json';
function App() {

  const {productItem } = data;
  return (
    
   <div>
    <BrowserRouter>
    <Home productItem={productItem}/>
    </BrowserRouter>
     
   </div>
  );
}

export default App;
