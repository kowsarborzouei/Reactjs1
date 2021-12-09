// const UsersTable=({users=[]})=>{
//     return(
//         <table>
//             <thead>
//             <tr>
//                 <td>id</td>
//                 <td>full name</td>
//                 <td>status</td>
//                 <td>email</td>
//                 <td>action</td>
//             </tr>
//             </thead>
//             <tbody>
//             {users.map(item=>(
//                 <tr key={item.id}>
//                     <td>{item.id}</td>
//                     <td>{item.fullName}</td>
//                     <td>{item.status}</td>
//                     <td>{item.email}</td>
//                     <td>
//                         <button>Update</button>
//                         <button>Delete</button>
//                     </td>
//                 </tr>
//             ))}
//             </tbody>
//
//         </table>
//     )
// }
// export  default  UsersTable

import {Component} from "react" ;
import users from "../usersdata/UsersData";

class UsersTable extends Component {
    state = {users: users}
    handleDeleteUsers = (id) => {
        // this.state.users=this.state.users.filter(item =>item.id !== id)
        this.setState({users: this.state.users.filter(item => item.id !== id)})
    }

    handleAddUser = () => {
        const fullName = prompt('enter user name:')
        const status = prompt('enter user status:')
        const email = prompt('enter user email:')
        this.setState({users: [...this.state.users, {id: Math.random() *1000, fullName, status, email}]})
    }

    handleUpdateUser = (oldUser) => {
        const fullName = prompt('enter user name', oldUser.fullName)
        const status = prompt('enter user status', oldUser.status)
        const email = prompt('enter user email', oldUser.email)
        this.setState({
            users: this.state.users.map(item => item.id === oldUser.id ? {
                ...oldUser,
                fullName,
                status,
                email
            } : item)
        })
    }

    render() {
        return (

            <div>
                <table>
                    <thead>
                    <tr>
                        <td>id</td>
                        <td>full name</td>
                        <td>status</td>
                        <td>email</td>
                        <td>action</td>
                    </tr>
                    </thead>
                    <tbody>
                    {this.state.users.map(item => (
                        <tr key={item.id}>
                            <td>{item.id}</td>
                            <td>{item.fullName}</td>
                            <td>{item.status}</td>
                            <td>{item.email}</td>
                            <td>
                                <button onClick={() => this.handleUpdateUser(item)}>{'Update'}</button>
                                <button onClick={() => this.handleDeleteUsers(item.id)}>{'Delete'}</button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
                <button onClick={this.handleAddUser}>{'Add New Student'}</button>
            </div>
        )
    }
}

export default UsersTable