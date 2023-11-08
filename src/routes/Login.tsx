import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import useLogin from "../api/auth/useLogin";
import { Link } from "react-router-dom";

const url = "https://api.noroff.dev/api/v1/holidaze/auth/login";

const schema = yup
  .object()
  .shape({
    email: yup.string().required("Required field"),
    password: yup.string().min(8).required("Required field"),
  })
  .required();

interface LoginData {
  email: string;
  password: string;
}

function Login() {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver: yupResolver(schema) });

  const onSubmit = (data: LoginData) => {
    console.log(data);
    useLogin(url, data);
  };

  return (
    <div className="h-screen">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="loginInput">
          <label htmlFor="email">email</label>
          <input
            type="email"
            {...register("email")}
            placeholder="user@stud.noroff.no"
            className="border block"
          />
          <p>{errors.email?.message}</p>
        </div>
        <div className="loginInput">
          <label htmlFor="password">password</label>
          <input
            type="password"
            {...register("password")}
            placeholder="********"
            className="border block"
          />
          <p>{errors.password?.message}</p>
        </div>
        <button className="bg-blue hover:bg-blueHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl">
          Login
        </button>
      </form>
      <Link to="/register" className="underline">
        Register
      </Link>
    </div>
  );
}

// function Login() {
//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");

//   function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
//     e.preventDefault();
//     const loginData: LoginData = {
//       email,
//       password,
//     };

//     useLogin(url, loginData);
//   }

//   function onInputChange(e: React.ChangeEvent<HTMLInputElement>) {
//     const value = e.target.value;
//     if (e.target.name === "email") {
//       setEmail(value);
//     }
//     if (e.target.name === "password") {
//       setPassword(value);
//     }
//   }

//   return (
//     <div className="h-screen">
//       <form onSubmit={handleSubmit}>
//         <div className="loginInput">
//           <label htmlFor="email">email</label>
//           <input
//             type="email"
//             name="email"
//             id="email"
//             value={email}
//             onChange={onInputChange}
//             className="border block"
//           />
//         </div>
//         <div className="loginInput">
//           <label htmlFor="password">password</label>
//           <input
//             type="password"
//             name="password"
//             id="password"
//             value={password}
//             onChange={onInputChange}
//             className="border block"
//           />
//         </div>
//         <button className="bg-blue hover:bg-blueHover py-2 px-6 rounded-md hover:transition-all ease-in hover:duration-300 duration-150 hover:rounded-xl">
//           Login
//         </button>
//       </form>
//       <Link to="/register" className="underline">
//         Register
//       </Link>
//     </div>
//   );
// }

export default Login;
