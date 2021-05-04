import './App.css';
import './Graph.js';
import {Graph} from './Graph';
import {Table} from './Table';
import {ModelsList} from './ModelsList';


function App() {
  return (
      <div className="grid-container">
          <div className="grid-item">
              <Graph/>
          </div>
          <div className="grid-item">
              <ModelsList/>
          </div>
          <div className="grid-item">
              <Table/>
          </div>
          <div className="grid-item">4</div>
      </div>
  );
}

export default App;
