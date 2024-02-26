import { BattleshipWebSocket, Data, EventType } from '../types/types';

export const sendMessage = (ws: BattleshipWebSocket, event: EventType, data: Data) => {
  const res = {
    type: event,
    data: JSON.stringify(data),
    id: 0,
  };

  console.log(`Send message to client ${ws.id}:`, res);

  ws.send(JSON.stringify(res));
};