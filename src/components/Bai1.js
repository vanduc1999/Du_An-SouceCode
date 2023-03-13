import bai1 from './components/bai1';

// 2 ways biding  {can tim hieu them ve phan nay}
const bai1 = () => {
  const [user, setUser] = useState({ name: 'A', email: 'A@gmail.com' })
  const [arr, setArr] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15])
  const [users, setUsers] = useState([{ name: 'A', email: 'A@gmail.com' }, { name: 'B', email: 'B@gmail.com' }, { name: 'C', email: 'C@gmail.com' }])
  const [count, setCount] = useState(0)

  const onClick = () => {
    const newUsers = users.map((item) => {                                 //quan trong can nho
      
      if (item.name === 'A') {
        return {name:'D', email:'d@gmail.com'}
      }
        return item
    })                                     
    setUsers(newUsers)                              

  }

  const onClick5 = () => {
    setUsers([
      ...users,
      {name:'D', email: 'd@gmail.com'}
    ])                              

  }

  // const onClick3 = () => {

  //   const newArr = arr.filter((item) => {           //quan trong can nho
  //     return item % 3 === 0
  //   })
  //   setArr(newArr)
  // }

  // const onClick2 = () => {

  //   const newArr = arr.map((item) => {           //quan trong can nho
  //     return item * 2
  //   })
  //   setArr(newArr)
  // }



  return (
    <div>
      {users.map((item) => {
        return (
          <div>
            <div>Ten la: {item.name}</div>
            <div>Email: {item.email}</div>
          </div>
        )
      })}

      {/* <div>Ten la: {item.name}</div>
      <div>Email: {user.email}</div>
      <div>count la: {count}</div> */}
      <button onClick={onClick}>Click me</button>
      <button onClick={onClick5}>Click 5</button>
      {/* <button onClick={onClick2}>Click me 2</button>
      <button onClick={onClick3}>Click me 3</button> */}
    </div>
  );
}


export default App;
