import React from 'react';
import { useForm } from 'react-hook-form';
import './style.css';

const FormHook = () => {
    const { register, handleSubmit, errors } = useForm()

    const onSubmit = (data) => {
        console.log(data);
    };

    // Validar lenght <8, >16 o contiene caracteres en blanco, mayusculas etc, que no haya espacios en blanco
    const validatePassword = (value) => {
        if (value.length < 8) {
            return 'Password should be at least 8 characters'
        } else if (value.length > 16) {
            return 'Password should be less than 16 characters'
        } else if (
            // Debe contener 1 letra minuscuala, 1 mayuscula, 1 numero y 1 simbolo
            !/(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
        ) {
            return 'Password should contain at least 1 letra minuscuala, 1 mayuscula, 1 numero y 1 simbolo'
        }
        return true
    }

    return (
        <div className="App">
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="form-control">
                    <label>Email</label>
                    <input
                        type="text"
                        name="email"
                        ref={register({
                            required: true
                        })}
                    />
                    {errors.email && errors.email.type === 'required' && (
                        <p className="errorMsg">Email is required</p>
                    )}
                </div>
                <div className="form-control">
                    <label>Password</label>
                    <input
                        type="password"
                        name="password"
                        // ref={register({ required: true, minLength: 8 })}
                        /*                         ref={register({
                                                    required: 'Password is required',
                                                    minLength: {
                                                        value: 8,
                                                        message: 'Password should be at least 8 characters'
                                                    },
                                                    maxLength: {
                                                        value: 16,
                                                        message: 'Password should be less than 16 characters'
                                                    }
                                                })} */
                        ref={register({
                            required: 'Password is required',
                            validate: validatePassword
                        })}

                    />
                    {/*                     {errors.password && errors.password.type === 'required' && (
                        <p className="errorMsg">Password is required</p>
                    )}
                    {errors.password && errors.password.type === "minLength" && (
                        <p className="errorMsg">
                            Password should be at least 8 characters
                        </p>
                    )} */}
                    {errors.password && <p className="errorMsg">{errors.password.message}</p>}
                </div>
                <div className="form-control">
                    <label></label>
                    <button type="submit">Login</button>
                </div>
            </form>
        </div>
    )
}


export default FormHook;