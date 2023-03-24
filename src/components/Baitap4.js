import { useState } from "react";


const Baitap4 = () => {
  const [value, setValue] = useState("");
  const [firtName, setfirtName] = useState('');
  const [fullName, setFullName] = useState(' ');

  const onChange = (e) => {
    const value = e.target.value;
    setValue(value);

    let tong = 0;
    for (let i of value) {
      tong += parseInt(i);
    }
    setSum(tong);
  };

  return (
    <div>
      <input value={value} onChange={onChange} />
      <p>Tổng các số vừa nhập là: {sum}</p>
    </div>
  );
};

export default Baitap3;