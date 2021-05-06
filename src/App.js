import './App.css';
import {Graph} from './Graph';
import {Table} from './Table';
import {ModelsList} from './ModelsList';
import {parseCSV, DropOff, titles} from './DropOff';
import {AttributesList} from './AttributesList';
import React, { useCallback } from "react";



function App() {
    let fileReader;
    const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    };
    const handleFileRead = (e) => {
        const content = fileReader.result;
        parseCSV(content);
        // … do something with the 'content' …
    };
    let fileName;
    // onDrop function
    const onDrop = useCallback(acceptedFiles => {
        // this callback will be called after files get dropped, we will get the acceptedFiles. If you want, you can even access the rejected files too
        acceptedFiles.map((file,index) => {
            handleFileChosen(file);
                 fileName = file.name.split(".")[0];
            })
    }, []);

   // const heading = ['Name', 'City', 'Course'];
    const heading = titles;
    const body =
        [['Kapil', 'Jaipur', 'MCA'],
            ['Aakash', 'Hisar', 'Btech'],
            ['Mani', 'Ranchi', 'MSc'],
            ['Yash', 'Udaipur', 'Mtech']
        ];
    // We pass onDrop function and accept prop to the component. It will be used as initial params for useDropzone hook
     return (
      <div className="grid-container">
          <div className="grid-item-graph">
              <div className="inner-grid">
                  <div className="graph-in-grid">
                      <Graph/>
                  </div>
                  <div className="atts-in-grid">

                  </div>
              </div>
          </div>
          <div className="grid-item-list">
              <ModelsList/>
          </div>
          <div className="grid-item-table">
              <Table className={"table"}
                     heading={heading} body={body} />
          </div>
          <div className="grid-item-dropoff">
              <main className="App">
                  <h1 className="text-center">Drag and Drop Example</h1>
                  <DropOff onDrop={onDrop} accept={".csv,text/csv,application/csv"} />
              </main>
          </div>
      </div>
    );
}

export default App;
