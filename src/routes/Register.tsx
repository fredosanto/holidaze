function Register() {
  return (
    <div>
      <h1>Register</h1>
      <form action="" method="post">
        <div className="loginInput">
          <label htmlFor="name">name</label>
          <input type="text" name="name" id="name" className="border block" />
        </div>
        <div className="loginInput">
          <label htmlFor="email">email</label>
          <input
            type="email"
            name="email"
            id="email"
            className="border block"
          />
        </div>
        <div className="loginInput">
          <label htmlFor="avatar">avatar</label>
          <input
            type="text"
            name="avatar"
            id="avatar"
            className="border block"
          />
        </div>
        <div className="loginInput">
          <label htmlFor="admin">admin</label>
          <input type="checkbox" name="admin" id="admin" className="block" />
        </div>
        <div className="loginInput">
          <label htmlFor="password">password</label>
          <input
            type="password"
            name="password"
            id="password"
            className="border block"
          />
        </div>
      </form>
    </div>
  );
}

export default Register;
