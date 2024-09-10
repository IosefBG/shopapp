import axios, {AxiosError, AxiosInstance, AxiosResponse} from 'axios';
import 'react-toastify/dist/ReactToastify.css';
import {CustomAxiosRequestConfig, MessageType} from "../types/AxiosInterfaces.ts";
import {useNotification} from "../contexts/NotificationContext.tsx";

const api: AxiosInstance = axios.create({
    baseURL: 'http://localhost:8001/api', // Replace with your API base URL
    timeout: 10000,
});

// Define default messages
const defaultMessages = {
    [MessageType.SUCCESS]: 'Operation successful',
    [MessageType.WARNING]: 'Warning: Something might be off',
    [MessageType.ERROR]: 'An error occurred'
};

const useAxiosInterceptor = () => {
    const { showNotification } = useNotification();

    // Add a response interceptor
    api.interceptors.response.use(
        (response: AxiosResponse) => {
            const { customMessages } = response.config as CustomAxiosRequestConfig;
            showNotification(customMessages?.[MessageType.SUCCESS] || defaultMessages[MessageType.SUCCESS], 'success');
            return response;
        },
        (error: AxiosError) => {
            const { customMessages } = error.config as CustomAxiosRequestConfig;

            if (error.response) {
                if (error.response.status >= 400 && error.response.status < 500) {
                    showNotification(customMessages?.[MessageType.ERROR] || defaultMessages[MessageType.ERROR], 'error');
                } else if (error.response.status >= 500) {
                    showNotification(customMessages?.[MessageType.ERROR] || defaultMessages[MessageType.ERROR], 'error');
                }
            } else {
                showNotification(customMessages?.[MessageType.WARNING] || defaultMessages[MessageType.WARNING], 'warning');
            }
            return Promise.reject(error);
        }
    );
    return api;
};

export default useAxiosInterceptor;