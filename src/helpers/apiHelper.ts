import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {CustomAxiosRequestConfig, MessageType} from "../types/AxiosInterfaces.ts";

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8080/', // Replace with your API base URL
    timeout: 10000,
});

// Define default messages
const defaultMessages = {
    [MessageType.SUCCESS]: 'Operation successful',
    [MessageType.WARNING]: 'Warning: Something might be off',
    [MessageType.ERROR]: 'An error occurred'
};

// Add a response interceptor
api.interceptors.response.use(
    (response: AxiosResponse) => {
        // Show success message using custom messages or default
        const { customMessages } = response.config as CustomAxiosRequestConfig;
        toast.success(customMessages?.[MessageType.SUCCESS] || defaultMessages[MessageType.SUCCESS], {
            position: 'top-right',
            autoClose: 3000,
        });
        return response;
    },
    (error: AxiosError) => {
        const { customMessages } = error.config as CustomAxiosRequestConfig;

        // Show error message using custom messages or default
        if (error.response) {
            if (error.response.status >= 400 && error.response.status < 500) {
                toast.error(customMessages?.[MessageType.ERROR] || defaultMessages[MessageType.ERROR], {
                    position: 'top-right',
                    autoClose: 3000,
                });
            } else if (error.response.status >= 500) {
                toast.error(customMessages?.[MessageType.ERROR] || defaultMessages[MessageType.ERROR], {
                    position: 'top-right',
                    autoClose: 3000,
                });
            }
        } else {
            toast.warn(customMessages?.[MessageType.WARNING] || defaultMessages[MessageType.WARNING], {
                position: 'top-right',
                autoClose: 3000,
            });
        }
        return Promise.reject(error);
    }
);

// Create a wrapper function to handle API calls
const apiCall = async (method: 'get' | 'post' | 'put' | 'delete', url: string, data?: any, customMessages?: { [key in MessageType]?: string }) => {
    try {
        return await api.request({
            method,
            url,
            data,
            customMessages // Pass custom messages to the request config
        } as CustomAxiosRequestConfig);
    } catch (error) {
        throw error;
    }
};

export default apiCall;
