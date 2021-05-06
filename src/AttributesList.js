import './AttributesList.css'

export function AttributesList() {
    return (
        <body>
        <label className="CarsLabel">Select attribute to be shown on graph:</label>
        <br>
        </br>
        <select className="Cars" size="5" multiple="multiple">
            <option value="Merceders"> 1 </option>
            <option value="BMW"> 2 </option>
            <option value="Jaguar"> 3 </option>
            <option value="Lamborghini"> 4 </option>
            <option value="Ferrari"> 5 </option>
            <option value="Ford"> 6 </option>
        </select>
        </body>
    );
}

export default AttributesList;