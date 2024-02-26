import { RawData } from 'ws';
import { BattleshipWebSocket, EventType, UserData, WsData } from '../types/types';
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

export const sendMessage = (ws: BattleshipWebSocket, event: EventType, data: object) => { // update
  const res = {
    type: event,
    data: JSON.stringify(data),
    id: 0,
  };

  console.log('Send message to client', res);

  ws.send(JSON.stringify(res));
};
