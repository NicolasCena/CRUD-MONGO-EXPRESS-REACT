import { useEffect} from 'react';
import { useForm } from "react-hook-form";
import { useAuth } from "../hooks/useAuth";
import { useNavigate } from 'react-router-dom';

type FormData = {
  username: string;
  email: string;
  password: string;
};

export const RegisterPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<FormData>();
  const { registerUser, isLoggedin, error, resetError } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if(isLoggedin) navigate("/")
  }, [isLoggedin])


  useEffect(() => {
      const timer = setTimeout(() => {
        resetError()
      }, 3000);

      return () => clearTimeout(timer);
    
  }, [error]);
  
  const onSubmit = async (data: FormData) => {
    registerUser(data)
  };

  return (
    <div>

      {error.map((item) => <h1 key={item}>{item}</h1>)}

      <form onSubmit={handleSubmit(onSubmit)} className="flex-col flex gap-y-2">
        <input type="text" {...register("username", {required: true})} className="w-64"/>
        {errors.username && <span className="text-red-400">Username is required</span>}

        <input type="text"  {...register("email", { required: true })} className="w-64"/>
        {errors.email && <span className="text-red-400">Email is required</span>}

        <input type="password"  {...register("password", { required: true })} className="w-64"/>
        {errors.password && <span className="text-red-400">Password is required</span>}
        
        <button type="submit" >Enviar</button>
      </form>
    </div>
  )
}
