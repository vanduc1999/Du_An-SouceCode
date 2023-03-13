import { useEffect, useState } from "react";
import TableUserList from "./TableUserList";
import FormUser from "./FormUser";

const DEFAULT_USER = { Id: '', name: '', email: '' }

const Bai4 = () => {
    
    const [formData, setFormData] = useState(DEFAULT_USER);
    const [users, setUsers] = useState([]);
    const [searchUsers, setSearchUsers] = useState([]);
    const [keyword, setKeyword] = useState('');


    useEffect (()=>{
        if (keyword !== '') {
            const newUsers = users.filter((item)=>{
                return item.name.includes(keyword) || item.email.includes(keyword)
            })

            setSearchUsers(newUsers)
        }
        else{
            setSearchUsers(users)
        }
    }, [keyword, users])
    // const onChange = (e) => {
    //     setFormData({
    //         ...formData,
    //         [e.target.name]: e.target.value
    
    //     })
    // }

    const onClick = () => {
        if (formData.id) {
            const newUsers = users.map((item) => {
                if (item.id === formData.id) {
                    return formData
                }
                return item
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

    const onEdit = (item) => {
        setFormData(item)
    };

    const onDelete = (item) => {
        const newUsers = users.filter((user) => {
            return user.id !== item.id
        })
        setUsers(newUsers)
    };

    const onSearch = (e)=>{
        setKeyword(e.target.value)
    }

    return (
        <div>
            {/* <div>
                <input name='ID' value={formData.id} onChange={onChange} placeholder='nhap ID '></input>
                <input name='name' value={formData.name} onChange={onChange} placeholder='nhap ten '></input>
                <input name='email' value={formData.email} onChange={onChange} placeholder='nhap email '></input>
                <button onClick={onClick}>{formData.id ? 'Edit' : 'Create'}</button>
            </div> */}

            <FormUser formData={formData} setFormData={setFormData} onClick={onClick} setSearchUsers={setSearchUsers} />

           

            <TableUserList users={users} onEdit={onEdit} onDelete={onDelete} />
        </div>
    )

}
export default Bai4;

// TableUserList // class, component
// handleComfilm // function : co dong tu di dau
// address // la bien
// COUNDTS // la conts
