import { RawData } from 'ws';
import { UserData, WsData } from '../types/types';
import crypto from 'node:crypto';

export const parseData = (data: RawData): WsData => {
  const parsedData = JSON.parse(data.toString());

  return { ...parsedData, data: parsedData.data ? JSON.parse(parsedData.data) : '' };
};
export const getUUID = (): any => crypto.randomUUID();

export const validateUserInput = (data: UserData): boolean => {
  const { name, password } = data;

  return !!(name && name?.length > 4 && password && password.length > 4);
};
