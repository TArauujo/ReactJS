import { useState} from 'react';
const ManageData = () => {
    let someData = 10;

    console.log(someData);

    const [number, setNumber] = useState(15);
    console.log(number);

  return (
    <div>
        <div>
            <p>O valor: {someData}</p>
            <button onClick = {() => (someData = 15)}>Mudar Váriavel</button>
        </div>
        <div>
            <p>O valor de number: {number}</p>
            <button onClick={() => (setNumber(25))}>Mudar valor de number</button>
        </div>
    </div>

  )
}

export default ManageData