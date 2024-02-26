import { sendCreateGameRequest } from '../services/gameService';
import { BattleshipWebSocket, GameData } from '../types/types';

export const createGame = (ws: BattleshipWebSocket, gameId: string | number) => {
  const data: GameData = {
    idGame: gameId,
    idPlayer: ws.id,
  };

  sendCreateGameRequest(ws, data);
};
