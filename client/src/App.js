
import './App.css';
import { InteractiveList } from '../src/components/List'
import { Graph } from "./components/Graph"

function App() {
  return (
    <div>
      <h2>Inventori</h2>
      <InteractiveList/>
      <div className="graphTest" style={{height: 100, width: 500}}>
        <Graph />
      </div>
    </div>
  );

}

export default App;
