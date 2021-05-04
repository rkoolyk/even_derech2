import './ModelsList.css';
import ListBox from 'react-listbox';
import 'react-listbox/dist/react-listbox.css';

export function ModelsList() {
    return (
        <body>
        <label className="CarsLabel">Please select a model:</label>
        <br>
            </br>
        <select className="Cars" size="5" multiple="multiple">
            <option value="Merceders"> Merceders </option>
            <option value="BMW"> BMW </option>
            <option value="Jaguar"> Jaguar </option>
            <option value="Lamborghini"> Lamborghini </option>
            <option value="Ferrari"> Ferrari </option>
            <option value="Ford"> Ford </option>
        </select>
        </body>
    );
}
//     const people = [
//         {label: 'Rachel', value:'1'},
//         {label: 'Roni', value:'2'},
//         {label: 'Dina', value:'3'},
//         {label: 'Becca', value:'4'},
//     ];
//     return (
//     <ListBox people={people}/>
//     );
// }

export default ModelsList;