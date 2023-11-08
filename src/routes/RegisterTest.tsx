import { useForm, SubmitHandler } from "react-hook-form";

interface FormValues {
  name: string;
  email: string;
  password: string;
  avatar: string;
  venueManager: boolean;
}

function RegisterTest() {
  const { register, handleSubmit } = useForm();
  const onSubmit: SubmitHandler<FormValues> = (data) => console.log(data);
}

export default RegisterTest;
