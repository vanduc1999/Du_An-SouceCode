import { useState } from "react";

const Baitap04 = () => {
const [name, setName] = useState({firstName: "", lastName: ""})

const onChange = (e) => {
    setName({
        ...name,
        [e.target.name]: e.target.value
    })
}

const fullName = `${name.firstName} ${name.lastName}`

return (
    <div>
        
        <label>
            First Name:
            <input  type= 'text' name = "firstName" value={name.firstName} onChange={onChange} />
        </label>
        
        <label>
            Last Name:
            <input type='text' name= "lastName" value={name.lastName} onChange={onChange}/>
        </label>
        
        <label>
            Full Name:
            <p>{fullName}</p>
        </label>
    </div>
)
}

export default Baitap04;