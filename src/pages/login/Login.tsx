import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import styles from './Login.module.css';
import {LoginFormValues} from "../../types/FormInterfaces.ts";

const Login = () => {
    const [formValues, setFormValues] = useState<LoginFormValues>({ email: '', password: '' });
    const [errors, setErrors] = useState<{ email?: string; password?: string }>({});
    const navigate = useNavigate();

    const validateForm = () => {
        const errors: { email?: string; password?: string } = {};
        if (!formValues.email) errors.email = 'Email is required';
        if (!formValues.password) errors.password = 'Password is required';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { id, value } = e.target;
        setFormValues((prev) => ({ ...prev, [id]: value }));
    };

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;
        // Replace with your login logic
        console.log('Login:', formValues);
        navigate('/'); // Redirect to home after successful login
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h2 className={styles.title}>Login</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formValues.email}
                            onChange={handleChange}
                            className={styles.inputField}
                        />
                        {errors.email && <div style={{ color: 'red' }}>{errors.email}</div>}
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="password">Password</label>
                        <input
                            type="password"
                            id="password"
                            value={formValues.password}
                            onChange={handleChange}
                            className={styles.inputField}
                        />
                        {errors.password && <div style={{ color: 'red' }}>{errors.password}</div>}
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Login
                    </button>
                </form>
                <div className={styles.linkContainer}>
                    <span>Don't have an account?</span>
                    <a href="/register" className={styles.link}>Register</a>
                </div>
            </div>
        </div>
    );
};

export default Login;
