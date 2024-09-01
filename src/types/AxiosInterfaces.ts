import { AxiosRequestConfig } from 'axios';

export enum MessageType {
    SUCCESS = 'SUCCESS',
    WARNING = 'WARNING',
    ERROR = 'ERROR',
}

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
    customMessages?: {
        [MessageType.SUCCESS]?: string;
        [MessageType.WARNING]?: string;
        [MessageType.ERROR]?: string;
    };
}
