import React, {useState} from 'react';
import {useNavigate} from 'react-router-dom';
import styles from './Register.module.css';
import {RegisterFormValues} from '../../types/FormInterfaces';
import apiCall from '../../helpers/apiHelper';
import {MessageType} from "../../types/AxiosInterfaces.ts";

const Register: React.FC = () => {
    const [formValues, setFormValues] = useState<RegisterFormValues>({
        username: '',
        email: '',
        password: '',
        confirmPassword: ''
    });
    const [errors, setErrors] = useState<{
        username?: string;
        email?: string;
        password?: string;
        confirmPassword?: string
    }>({});
    const navigate = useNavigate();

    // Validate form fields
    const validateForm = (): boolean => {
        const errors: { username?: string, email?: string; password?: string; confirmPassword?: string } = {};
        if (!formValues.username) errors.username = 'Username is required';
        if (!formValues.email) errors.email = 'Email is required';
        if (!formValues.password) errors.password = 'Password is required';
        if (formValues.password !== formValues.confirmPassword) errors.confirmPassword = 'Passwords do not match';
        setErrors(errors);
        return Object.keys(errors).length === 0;
    };

    // Handle input changes
    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const {id, value} = e.target;
        setFormValues((prev) => ({...prev, [id]: value}));
    };

    // Handle form submission
    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!validateForm()) return;

        try {
            const payload = {
                username: formValues.username,
                email: formValues.email,
                password: formValues.password,
            }
            await apiCall('post', '/register', payload, {
                [MessageType.SUCCESS]: 'Registration successfully',
                [MessageType.ERROR]: 'Registration failed. Please check your details and try again.',
                [MessageType.WARNING]: 'Registration warning. Something might be off.',
            });
            // Redirect to login on successful registration
            navigate('/login');
        } catch (error) {
            // Error handling is handled by the interceptor
        }
    };

    return (
        <div className={styles.container}>
            <div className={styles.formContainer}>
                <h2 className={styles.title}>Register</h2>
                <form onSubmit={handleSubmit}>
                    <div className={styles.inputGroup}>
                        <label htmlFor="username">Username</label>
                        <input
                            type="username"
                            id="username"
                            value={formValues.username}
                            onChange={handleChange}
                            className={styles.inputField}
                        />
                        {errors.username && <div style={{color: 'red'}}>{errors.username}</div>}
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            value={formValues.email}
                            onChange={handleChange}
                            className={styles.inputField}
                        />
                        {errors.email && <div style={{color: 'red'}}>{errors.email}</div>}
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
                        {errors.password && <div style={{color: 'red'}}>{errors.password}</div>}
                    </div>
                    <div className={styles.inputGroup}>
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={formValues.confirmPassword}
                            onChange={handleChange}
                            className={styles.inputField}
                        />
                        {errors.confirmPassword && <div style={{color: 'red'}}>{errors.confirmPassword}</div>}
                    </div>
                    <button type="submit" className={styles.submitButton}>
                        Register
                    </button>
                </form>
                <div className={styles.linkContainer}>
                    <span>Already have an account?</span>
                    <a href="/login" className={styles.link}>Login</a>
                </div>
            </div>
        </div>
    );
};

export default Register;
