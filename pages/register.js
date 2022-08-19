import React from "react";
//import { useForm }  from 'react-hook-form';

export default function Register() {
  /* const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = (data) => console.log(data);
*/
  return (
    /*<form onSubmit={handleSubmit(onSubmit)}>
      <p>
        Please provide a Username and password for your profile.
        <br />
        As well as an email in case you forget your password.
      </p>

      <input
        defaultValue="UserName"
        {...register("UserName", { required: true, maxLength: 20 })}
      />

      <input
        defaultValue="Password"
        {...register("Password", {
          required: true,
          minLength: 8,
          pattern: /^[A-Za-z]+$/i,
        })}
      />

      <input {...register("ConfirmPassword", { required: true })} />

      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit" />
    </form>
    */
    <div>
      <h1>Register</h1>
    </div>
  );
}
