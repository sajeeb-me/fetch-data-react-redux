import './App.css';
import Todos from './components/Todos';

function App() {
  return (
    <div className="App">
      <h1>Fetch data using redux in React</h1>
      <Todos />
    </div>
  );
}

export default App;


/**Road map
 * 1. install packages
 * 2. constants define
 * 3. async action creator
 * 4. reducer
 * 5. create store
 * 6. provide store
 * 7. use store
 * 8. adding css
 */