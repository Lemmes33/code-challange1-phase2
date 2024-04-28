import logo from './logo.svg';
import './App.css';
import Searchbox from './Searchbox';
import './searchbox.css'
import DatePicker from './DatePicker'
import Description from './Description';  
import Category from './Category';
import Amount from './Amount';
import Button from './Button';


function App() {
  return (
    <div>
     <div className='title'> 
     <h1>The Royal Bankof Flatiron</h1></div>
      {/* search box */}
      <Searchbox />
      {/* date*/}
      <DatePicker />
      {/* description*/}
      <Description />
      {/* category*/}
      <Category />
      {/* amount*/}
      <Amount />
      {/* button */}
      <Button />
    </div>
  );
}

export default App;
