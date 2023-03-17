import React, { useState } from 'react';

const Login =()=> {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const emailChange = (e) => {
    setEmail(e.target.value);
  };

  const passwordChange = (e) => {
    setPassword(e.target.value);
  };

  const submit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };

  if (isLoggedIn) {
    return <div>Đăng nhập thành công!</div>;
  }

  return (
    <div className="login-container" >
      <h2>Đăng nhập</h2>
      <form onSubmit={submit}>
        <label htmlFor="email">Email:</label>
        <input type="email" id="email" name="email" value={email} onChange={emailChange} required />
        <label htmlFor="password">Mật khẩu:</label>
        <input type="password" id="password" name="password" value={password} onChange={passwordChange} required />
        <button type="submit">Đăng nhập</button>
      </form>
    </div>
  );
}

export default Login;
