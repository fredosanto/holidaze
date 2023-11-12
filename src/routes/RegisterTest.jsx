import { useForm, SubmitHandler } from "react-hook-form";

function RegisterTest() {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => console.log(data);
}

export default RegisterTest;
