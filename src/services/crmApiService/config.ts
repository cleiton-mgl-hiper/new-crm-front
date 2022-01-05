import axios, { AxiosError, AxiosInstance, AxiosRequestConfig, AxiosResponse } from "axios";
import { tokenStorageKey } from "../../contexts/AuthContext";
import IDefaultServiceResponse from "../interfaces/IDefaultServiceResponse";

const baseURL = "http://localhost:5000/";

const onRequest = (config: AxiosRequestConfig): AxiosRequestConfig => {
	const authToken = localStorage.getItem(tokenStorageKey);

	return {
		...config,
		baseURL: baseURL,
		headers: {
			"Content-type": "Application/json",
			Authorization: authToken ? `Bearer ${authToken}` : "",
		},
	};
};

const onRequestError = (error: AxiosError): Promise<IDefaultServiceResponse<any>> => {
	console.error(`[request error] [${JSON.stringify(error)}]`);
	return Promise.reject("Serviço indisponível no momento, tente novamente mais tarde");
};

const onResponse = (response: AxiosResponse): AxiosResponse => response;

const onResponseError = (error: AxiosError<string>): Promise<IDefaultServiceResponse<any>> => {
	if (error?.response?.status === 401) {
		window.location.href = "/";
	}

	return Promise.reject(error.response?.data);
};

export function getAxiosInstance(): AxiosInstance {
	const axiosInstance = axios.create();

	axiosInstance.interceptors.request.use(onRequest, onRequestError);
	axiosInstance.interceptors.response.use(onResponse, onResponseError);

	return axiosInstance;
}
