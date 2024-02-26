import { wss } from '..';
import { sendUpdateRoom } from '../services/roomService';
import { BattleshipWebSocket } from '../types/types';

export const updateRoom = () => {
  wss.clients.forEach((client) => {
    sendUpdateRoom(client as BattleshipWebSocket);
  });
};
