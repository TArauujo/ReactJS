import  { useState } from 'react'

const ListRender = () => {

    const [list] = useState(["Matheus", "Pedro", "Josias", "Maria"]);

    const [users, setUsers] = useState([
        {id: 1, name: "Katia", age: 35},
        {id: 2, name: "Maria", age: 28},
        {id: 3, name: "Pedro", age: 44},
    ]);

    const deleteRandom = () =>{ /* Demonstração de um Previous State*/
        const randomNumber = Math.floor(Math.random() * 4);

        setUsers((prevUsers) => {
            console.log(prevUsers)
            return prevUsers.filter((user) => randomNumber !== user.id);
        });
    }

  return (
    <div>
        <ul>
            {list.map((item, i)=> (
                <li key={i}>{item}</li>
            ))}
        </ul>
        <ul> 
            {users.map((user) =>(
                <li key = {user.id}>
                    {user.name} - {user.age}
                    </li>
            ))}
        </ul>
        <button onClick = {deleteRandom}>Delete Random User</button>
    </div>
  )
}

export default ListRender