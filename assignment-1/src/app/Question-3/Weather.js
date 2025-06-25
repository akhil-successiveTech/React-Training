// Q3: Function should accepts a prop called temperature and check whether it is sunny or cold by
// comparing temperature with 25 degree value.

export default function weather({temp}){
    if(temp > 25){
        return <p>It's sunny day!</p>
    }
    else{
        return <p>It's cold day!</p>
    }
}