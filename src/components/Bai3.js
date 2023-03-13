import { useState } from "react";
import TableUserList from "./TableUserList";
const DEFAULT_USER = { ID: ' ', name: ' ', email: ' ' }
const Bai3 = () => {

    const [users, setUsers] = useState([]);
    const [formData, setFormData] = useState(DEFAULT_USER);


    const onClick = () => {
        if (formData.id) {
            const newUsers = users.map((user) => {
                if (user.id === formData.id) {
                    return formData
                }

                return user
            })
            setUsers(newUsers)
        }
        else {
            setUsers([
                ...users,
                {
                    id: Math.random(),
                    ...formData,
                },
            ]);

            setFormData(DEFAULT_USER);
        }

    };

    const onChange = (e) => {
        const name = e.target.name;
        const value = e.target.value;

        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const onEdit = (user) => {
        setFormData(user)
    }

    return (
        <div>
            <div>
                <input name='ID' value={formData.id} onChange={onChange} placeholder='nhap ID '></input>
                <input name='name' value={formData.name} onChange={onChange} placeholder='nhap ten '></input>
                <input name='email' value={formData.email} onChange={onChange} placeholder='nhap email '></input>
                <button onClick={onClick}>{formData.id ? 'Edit' : 'Create'}ADD</button>
            </div>

            <table border={'1px solid black'}>
                <tr>
                    <th>ID</th>
                    <th>Ten</th>
                    <th>Email</th>
                    
                </tr>
            
            {users.map((user) => {
                return (
                        <tr>
                            <td> {user.id}</td>
                            <td> {user.name}</td>
                            <td> {user.email}</td>
                            <td>
                                <button onClick={(e) => {
                                    onEdit(user)
                                }}>Edit</button>
                            </td>
                        </tr>

                )
            })}
            </table>
        </div>

    )
}
export default Bai3;
