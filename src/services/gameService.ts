import { BattleshipWebSocket, EventType, GameData } from "../types/types";
import { sendMessage } from "./common";

export const sendCreateGameRequest = (ws: BattleshipWebSocket, gameData: GameData) => {
  sendMessage(ws, EventType.CreateGame, gameData);
};
