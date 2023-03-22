import { useState } from "react";

const Baitap3 = ()=>{
    const [sum, setSum] = useState(0);
    const onchange =(e)=>{
        setSum(handleSum(e.target.value))
    };

    var result = 0;
    const handleSum = (str)=>{
        for (let i = 0; i < str.length; i++) {
            result += Number(str[i])
        }
        return result
    }

    return(
        <div>
            <input placeholder="Numbers" onChange={onchange}></input>
            <button>{sum}</button>
        </div>
    ) 
}
export default Baitap3;