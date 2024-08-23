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
            <table className="table table-bordered text-center">
                <thead>
                    <tr>
                        <th scope="col">S No</th>
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
                                <tr key={index} > 
                                    <th scope="row">{index+1}</th>
                                    <td>{ el.name }</td>
                                    <td>{ el.username }</td>
                                    <td>{ el.email }</td>
                                    <td>{ el.address.city }</td>
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