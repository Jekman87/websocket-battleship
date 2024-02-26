import { WebSocket } from 'ws';

export type BattleshipWebSocket = WebSocket & { id: string };

export type Data = UserData | RoomData | GameData | Winner[] | Room[];

export type WsData = {
  type: EventType;
  data: Data;
  id: number;
};

export type User = {
  name: string;
  password: string;
  index: number | string;
};

export type UserData = {
  name: string;
  password?: string;
  index?: number | string;
  error?: boolean;
  errorText?: string;
};

export type Room = {
  roomId: number | string;
  roomUsers: {
    name: string;
    index: number | string;
  }[];
};

export type RoomData = {
  indexRoom: number | string;
};

export type GameData = {
  idGame: number | string;
  idPlayer: number | string;
};

export type Game = {
  idGame: number | string;
  player: Player[];
};

export type Player = {
  idPlayer: number | string;
  board: any;
};

export type Winner = {
  name: string;
  wins: number;
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
  SinglePlay = 'single_play',
}
