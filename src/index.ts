import { httpServer } from './http_server/index';
import { RawData, WebSocketServer } from 'ws';
import { handleData } from './controllers/mainHandler';
import { getUUID } from './utils/helpers';
import { BattleshipWebSocket } from './types/types';

const HTTP_PORT = 8181;

console.log(`Start static http server on the ${HTTP_PORT} port!`);
httpServer.listen(HTTP_PORT);

const WS_PORT = 3000;

export const wss = new WebSocketServer({ port: WS_PORT }, () =>
  console.log(`Start WebSocketServer on the ${WS_PORT} port!`),
);

wss.on('connection', (ws: BattleshipWebSocket) => {
  ws.id = getUUID();
  console.log(`New WS client ${ws.id} connected!`);

  ws.on('message', (data: RawData) => {
    handleData(ws, data);
  });

  ws.on('error', (error) => console.log('WS client error:', error));
  ws.on('close', () => console.log('WS client connection closed!')); // remove user

  wss.on('close', () => {
    console.log('WebSocketServer closed!');
    ws.close();
  });
  wss.on('error', (error) => {
    console.log('WebSocketServer error:', error);
  });
});

process.on('SIGINT', () => {
  console.log('WebSocketServer has been closed!');
  wss.close();
  process.exit();
});
