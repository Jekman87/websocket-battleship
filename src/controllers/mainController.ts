import { RawData } from 'ws';
import { parseData } from '../utils/helpers';
import { BattleshipWebSocket, EventType } from '../types/types';
import { registerUser, updateWinners } from './userController';
import { updateRoom } from './roomController';

export const handleData = (ws: BattleshipWebSocket, wsData: RawData): any => {
  const { type, data } = parseData(wsData);

  console.log(`WS client ${ws.id} received event type '${type}' with data:`, data);

  switch (type) {
    case EventType.Registration:
      registerUser(ws, data);
      updateRoom();
      updateWinners()
      break;
    case EventType.CreateRoom:
      // createRoom(ws);
      break;

    default:
      break;
  }

  return null;
};
