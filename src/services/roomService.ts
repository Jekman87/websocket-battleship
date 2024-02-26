import { sendMessage } from './common';
import { BattleshipWebSocket, EventType } from '../types/types';
import { rooms } from '../models/roomModel';

export const sendUpdateRoom = (ws: BattleshipWebSocket) => {
  sendMessage(ws, EventType.UpdateRoom, rooms);
};
