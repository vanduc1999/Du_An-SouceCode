// import { useState } from 'react';

// const Exam01 = () => {
//     const [email, setEmail] = useState('a@gmail.com')
//     const [users, setUsers] = useState([{ name: 'a', email: 'a@gmail.com' }])

//     const onClick =()=>{
//         setEmail('duc@gmail.com')
//     }
//     const onDelete =()=>{
//         setUsers([])
//     }
//     return (
//         <div>
//             <div>email: {email}</div>

//             {users.map((item)=>{
//                 return(
//                     <div>name: {item.name}</div>,
//                     <div>email: {item.email}</div>,
//                     <button onClick={onClick}>Add</button>,
//                     <button onDelete={onDelete}>Remove</button>
//                 );
//             })}
//         </div>
//     );
//   };
  
// export default Exam01;

import { useEffect, useMemo, useState } from 'react';

const Exam01 = () => {
    const [numbers, setNumbers] = useState([1, 1, 4, 6, 8, 3, 5, 5, 9, 17, 15])

    useEffect (()=> {},[]) // hai input 1{}: laf funtion (dung de tao ra cac hanh dong), 2[]: la Array (dung de chua tat ca cac bien ma chung ta muon quan sat su thay doi cua no)
    useMemo (()=> {},[]) //su khac nhau voi useEffect la co gia tri tra ve va

    // const onClick = () => {
    //     // lọc ra những số chẵn
    //     const newArr = numbers.filter((item)=>{
    //         return numbers % 2 === 0
    //     })
    //         setNumbers(newArr)
    // }

    // const onClick2 =()=>{
    //     // lọc ra những số chia hết cho 3
    //     const newArr = numbers.filter((item)=>{
    //         return numbers % 3 === 0
    //     })
    //     setNumbers(newArr)
    // }

    // const onClick3 =()=>{
    //      // lọc ra những số duy nhất
    //      const data = {}
    //     numbers.forEach((item)=>{
    //         data[item] = true
    //     })
    //     const newArr = Object.keys(data)
    //     setNumbers(newArr)
    // }



    return (
        <div>
            {numbers.map((item) => {
                
                return (
                    <div>{item}</div>
                )
            })}

            <button onClick={onClick}>Click me</button>
            <button onClick={onClick2}>Click me2</button>
            <button onClick={onClick3}>Click me3</button>
        </div>
    );
  };
  
export default Exam01;