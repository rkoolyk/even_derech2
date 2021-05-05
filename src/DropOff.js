import './DropOff.css'
import React, {useCallback} from 'react'
import * as d3 from 'd3';
import {useDropzone} from 'react-dropzone'

//helper function to make an empty 2d array
function create2dArr(rows, cols) {
    let array = [rows, cols], i, l;
    for (i = 0, l = rows; i < l; i++) {
        array[i] = new Array(cols);
    }
    return array;
}
//given string of csv file, split it into dictionary where keys are titles and values are columns
function parseCSV(file) {
    const data = file.split("\n").map(function(row){return row.split(",");});
    const headers = data[0]; //array of titles to be made keys
    let dict = {};
    //2d array with rows from csv, rows-1 because remove title row
    let array = create2dArr(data.length - 1, headers.length);
    for (let i = 1; i < data.length; i++) {
        array[i - 1] = data[i];
    }
    //document.write(array.toString());
    let colArray = create2dArr(headers.length, data.length - 1);
    for (let i = 0; i < headers.length; i++) {
        for (let j = 0; j < array.length; j++) {
            colArray[i][j] = array[j][i];
        }
    }
    for (let i = 0; i < headers.length; i++) {
       dict[headers[i]] = colArray[i]; //put keys and values into dictionary
    }
}



export const ImportFromFileBodyComponent = () => {
    let fileReader;

    const handleFileRead = (e) => {
        const content = fileReader.result;
        parseCSV(content);
        // … do something with the 'content' …
    };

    const handleFileChosen = (file) => {
        fileReader = new FileReader();
        fileReader.onloadend = handleFileRead;
        fileReader.readAsText(file);
    };

    return <div className='upload-expense'>
        <input
            type='file'
            id='file'
            className='input-file'
            accept='.csv'
            onChange={e => handleFileChosen(e.target.files[0])}
        />
    </div>;
};



// export function DropOff() {
//     // const onDrop = useCallback(acceptedFiles => {
//     //     console.log(acceptedFiles);
//     // }, []);
//
//     // const {getRootProps,
//     //     getInputProps,
//     //     isDragActive} = useDropzone({onDrop})
//
//     return (
//         <div id="drop_zone">Drop files here</div>
//         <output id="list"></output>
//
//         function handleFileSelect(evt) {
//         evt.stopPropagation();
//         evt.preventDefault();
//
//         var files = evt.dataTransfer.files; // FileList object.
//
//         // files is a FileList of File objects. List some properties.
//         var output = [];
//         for (var i = 0, f; f = files[i]; i++) {
//         output.push('<li><strong>', escape(f.name), '</strong> (', f.type || 'n/a', ') - ',
//         f.size, ' bytes, last modified: ',
//         f.lastModifiedDate ? f.lastModifiedDate.toLocaleDateString() : 'n/a',
//         '</li>');
//     }
//         document.getElementById('list').innerHTML = '<ul>' + output.join('') + '</ul>';
//     }
//
//         function handleDragOver(evt) {
//         evt.stopPropagation();
//         evt.preventDefault();
//         evt.dataTransfer.dropEffect = 'copy'; // Explicitly show this is a copy.
//     }
//
//         // Setup the dnd listeners.
//         var dropZone = document.getElementById('drop_zone');
//         dropZone.addEventListener('dragover', handleDragOver, false);
//         dropZone.addEventListener('drop', handleFileSelect, false);
//
//         // <div {...getRootProps()}>
//         //     <input {...getInputProps()} type="file" name="file" id="file" />
//         //     {
//         //         isDragActive ?
//         //             <p>Drop the files here ...</p> :
//         //             <p className="uploadCSV">Upload CVS File
//         //                 <br/>
//         //             drag and drop CSV file or click here to upload
//         //             </p>
//         //     }
//         // </div>
//     )
// }

export default ImportFromFileBodyComponent