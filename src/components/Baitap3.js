import { useState } from "react";

const Baitap3 = () => {
  const [value, setValue] = useState("");
  const [sum, setSum] = useState(0);

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