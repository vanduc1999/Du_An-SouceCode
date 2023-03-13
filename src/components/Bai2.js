
import {useState} from 'react';


const Bai2 = () =>{
    
    const [user, setUser] = useState([{ name:"", email: ''}])
    const [useList, setuseList] = useState([
        {name: "123", email: '123@gmail.com'},
        {name: "456", email: '456@gmail.com'},
    ]);

    const onClick = () =>{
        setuseList([
            ...useList,
            user
        ])
        setUser({name: " ", email:' '})
    }

    const onChange = (e) =>{

        setUser({
            ...user,
            [e.target.name]: e.target.value,
            
        })
    };

    return (
        <div>
            <div>
                <input name='name' value={user.name} onChange={onChange}></input>
                <input email='email' value={user.email} onChange={onChange}></input>
                
                <button onClick={onClick}>Add</button>
            </div>

            {useList.map((user)=>{
                return(
                    <div>
                        <div>ten so sinh vien la: {user.name}</div>
                        <div>email so sinh vien la: {user.email}</div>
                        <div>email so sinh vien la: {user.phone}</div>
                    </div>
                )
            })}
        </div>
    );

    // const onClick = () => {
    //     setStudentList([
    //         ...studentList,
    //         student
    //     ]);

    //     setStudent({id:'', score:''})
    // }

    // const onChange = (e) => {
        
    //     setStudent({
    //         ...student,
    //         [e.target.name]: e.target.value
    //     })
        
    // };

    // return (
    //     <div>
    //         <div>
    //             <input name='id' value={student.id} onChange = {onChange}></input>
    //             <input name='score' value={student.score} onChange = {onChange} ></input>
    //             <button onClick={onClick}>Add</button>

    //         </div>


    //         {studentList.map((item)=>{
    //             return(
    //                 <div>
    //                     <div>Mã số học sinh: {item.id}</div>
    //                     <div>điểm số học sinh: {item.score}</div>
    //                 </div>
    //             )
    //         })}
    //     </div>
    // )
    
    
}

export default Bai2
// 
//
