import './App.css';
import {Graph} from './Graph';
import {Table} from './Table';
import {ModelsList} from './ModelsList';
import {DropOff} from './DropOff';
import {ImportFromFileBodyComponent} from "./DropOff";
import React from 'react';


function App() {
  return (
      <div className="grid-container">
          <div className="grid-item-graph">
              <Graph/>
          </div>
          <div className="grid-item-list">
              <ModelsList/>
          </div>
          <div className="grid-item-table">
              <Table/>
          </div>
          <div className="grid-item-dropoff">
              <ImportFromFileBodyComponent/>
          </div>
      </div>
  );
}

export default App;
