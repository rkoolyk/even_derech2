import './DropOff.css'
import {useDropzone} from 'react-dropzone'

export let titles = [];

//helper function to make an empty 2d array
function create2dArr(rows, cols) {
    let array = [rows, cols], i, l;
    for (i = 0, l = rows; i < l; i++) {
        array[i] = new Array(cols);
    }
    return array;
}
//given string of csv file, split it into dictionary where keys are titles and values are columns
export function parseCSV(file) {
    const data = file.split("\n").map(function(row){return row.split(",");});
    const headers = data[0]; //array of titles to be made keys
    titles = headers;
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
    const dictJSON = JSON.stringify(dict); //turn dictionary into json string

    let jsonItems = [];
    for (let i = 0; i < headers.length; i++) {
        let obj = {};
        for (let j = 0; j < data.length; j++) {
            obj[headers[i]] = array[i][j];
        }
        jsonItems[i] = JSON.stringify(obj);
    }


}


export const DropOff = ({ onDrop, accept }) => {
    // Initializing useDropzone hooks with options
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        onDrop,
        accept
    });
    return (
        <div {...getRootProps()}>
            <input className="dropzone-input" {...getInputProps()} />
            <div className="text-center">
                {isDragActive ? (
                    <p className="dropzone-content">Release to drop the files here</p>
                ) : (
                    <p className="dropzone-content">
                        Drag 'n' drop some files here, or click to select files
                    </p>
                )}
            </div>
        </div>
    );
};

export default DropOff;
