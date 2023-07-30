import React from 'react'
import { useAuth } from '../hooks/useAuth';
import { useForm } from 'react-hook-form';

export const LoginPage = () => {
  const { register, handleSubmit, formState: { errors } } = useForm<Login>();
  const { loginUser } = useAuth();

  const onSubmit = async (data: Login) => {
    loginUser(data)
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="flex-col flex gap-y-2">

        <input type="text"  {...register("email", { required: true })} className="w-64"/>
        {errors.email && <span className="text-red-400">Email is required</span>}

        <input type="password"  {...register("password", { required: true })} className="w-64"/>
        {errors.password && <span className="text-red-400">Password is required</span>}
        
        <button type="submit" >Enviar</button>
      </form>
    </div>
  )
}
