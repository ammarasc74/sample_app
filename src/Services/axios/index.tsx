import axios from 'axios';

const baseUrl = 'https://api.pexels.com/v1/';
const token = 'dLmUjN9njaokPwBoVV8JP820BXp7prFE560ZYftxLnchHSlLBCTyMDW8';

interface RequestOptions {
  url: string;
  params?: Record<string, any>;
  body?: any;
}

export const Get = async (url: string) => {
  return axios.get(`${baseUrl}${url}`, {
    headers: {Authorization: token},
  });
};

export const Patch = async ({url, body, params}: RequestOptions) => {
  return axios.patch(`${baseUrl}${url}`, body, {
    headers: {Authorization: token},
    params: {...params},
  });
};

export const Post = async (
  url: string,
  body: any,
  token?: any,
  params?: any,
) => {
  return axios.post(`${baseUrl}${url}`, body, {
    headers: {Authorization: token},
    params: {...params},
  });
};

export const Put = async (url: any, body: any, params: any) => {
  return axios.put(`${baseUrl}${url}`, body, {
    headers: {Authorization: token},
    params: {...params},
  });
};

export const Delete = async (url: any) => {
  return axios.put(`${baseUrl}${url}`, {
    headers: {Authorization: token},
  });
};
