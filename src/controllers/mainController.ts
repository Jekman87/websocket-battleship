import { RawData } from 'ws';
import { parseData } from '../utils/helpers';
import { BattleshipWebSocket, EventType, RoomData, UserData } from '../types/types';
import { registerUser } from './userController';
import { addUserToRoom, createRoom } from './roomController';

export const handleData = (ws: BattleshipWebSocket, wsData: RawData): any => {
  const { type, data } = parseData(wsData);

  console.log(`WS client ${ws.id} received event type '${type}' with data:`, data);

  switch (type) {
    case EventType.Registration:
      registerUser(ws, data as UserData);
      break;

    case EventType.CreateRoom:
      createRoom(ws);
      break;

    case EventType.AddUserToRoom:
      addUserToRoom(ws, data as RoomData);
      break;

    case EventType.SinglePlay:
      // play with bot
      break;

    default:
      break;
  }

  return null;
};
