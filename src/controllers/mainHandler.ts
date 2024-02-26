import { RawData } from 'ws';
import { parseData } from '../utils/helpers';
import { BattleshipWebSocket, EventType, UserData } from '../types/types';
import { registerUser } from './userController';

export const handleData = (ws: BattleshipWebSocket, wsData: RawData): any => {
  const { type, data } = parseData(wsData);

  console.log(`WS client received event type '${type}' with data:`, data);

  switch (type) {
    case EventType.Registration:
      registerUser(ws, data);
      break;

    default:
      break;
  }

  return null;
};
