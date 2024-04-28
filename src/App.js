import logo from './logo.svg';
import './App.css';
import Searchbox from './Searchbox';
import './searchbox.css'
import DatePicker from './DatePicker'

function App() {
  return (
    <div>
      <h1>The Royal Bankof Flatiron</h1>
      {/* search box */}
      <Searchbox />
      {/* date*/}
      <DatePicker />
      {/* description*/}
      {/* category*/}
      {/* amount*/}
    </div>
  );
}

export default App;
