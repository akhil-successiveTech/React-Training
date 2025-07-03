import DisplayData from "./DisplayData";

const WithDataFetching = (WrappedComponent) =>{
    return async function DataWrapper(){
        // Fetch data
        const response = await fetch('https://jsonplaceholder.typicode.com/users');
        // Convert data to json
        const data = await response.json();
        return <WrappedComponent data={data}/>
    };
}

const DataHandler = WithDataFetching(DisplayData);
export default DataHandler;