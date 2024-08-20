import { useEffect, useState } from "react"

const Users = (props) => {
    // create state to store data
    const [users, setUsers] = useState([])

    useEffect(() => {
        fetch('https://jsonplaceholder.typicode.com/users').then(res => res.json()).then(data => {
            setUsers(data)
        })
    }, [])

    // create useEffect hook to get data and list
    return (
        <>
            <table class="table">
                <thead>
                    <tr>
                        <th scope="col">SNo</th>
                        <th scope="col">Name</th>
                        <th scope="col">Username</th>
                        <th scope="col">Email</th>
                        <th scope="col">Address</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users && users.map((el, index) => (
                         <>
                                <tr key={index}> 
                                    <th scope="row">1</th>
                                    <td>John { el.name }</td>
                                    <td>Doe { el.username }</td>
                                    <td>john@example.com { el.email }</td>
                                    <td>12345 { el.address.city }</td>
                                </tr>

                              
                            </>
                        ))
                    }
                           
                        
                </tbody>
            </table>
        </>
    )
}

export default Users;