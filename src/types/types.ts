import { WebSocket } from "ws";

export type BattleshipWebSocket = WebSocket & { id: string };

export type WsData = {
  type: EventType;
  data: UserData;
  id: number;
};

export type UserData = {
  name: string;
  password?: string;
  index?: number | string;
  error?: boolean;
  errorText?: string;
};

export enum EventType {
  Registration = 'reg',
  AddUserToRoom = 'add_user_to_room',
  UpdateWinners = 'update_winners',
  CreateRoom = 'create_room',
  UpdateRoom = 'update_room',
  CreateGame = 'create_game',
  StartGame = 'start_game',
  AddShips = 'add_ships',
  Attack = 'attack',
  RandomAttack = 'randomAttack',
  Turn = 'turn',
  Finish = 'finish',
}
