import { wss } from '..';
import { checkRoomExists, deleteRoom, getRoomById, rooms } from '../models/roomModel';
import { getUserById } from '../models/userModel';
import { sendUpdateRoom } from '../services/roomService';
import { BattleshipWebSocket, Room, RoomData } from '../types/types';
import { createGame } from './gameController';

export const updateRoom = () => {
  wss.clients.forEach((client) => {
    sendUpdateRoom(client as BattleshipWebSocket);
  });
};

export const createRoom = (ws: BattleshipWebSocket) => {
  const { id } = ws;
  const user = getUserById(id);
  const isRoomExists = checkRoomExists(id);

  if (!user || isRoomExists) return;

  const newRoom: Room = {
    roomId: id,
    roomUsers: [{ index: user.index, name: user.name }],
  };

  rooms.push(newRoom);
  updateRoom();
};

export const addUserToRoom = (ws: BattleshipWebSocket, data: RoomData) => {
  const { id } = ws;
  const { indexRoom } = data;
  const currentRoom = getRoomById(indexRoom);
  const user = getUserById(id);
  const isUserInRoom = currentRoom.roomUsers[0].index === user.index;

  if (!currentRoom || !user || isUserInRoom) return;

  currentRoom.roomUsers.push({ index: user.index, name: user.name });

  const clientIds = currentRoom.roomUsers.map((user) => user.index);

  deleteRoom(indexRoom);
  updateRoom();

  wss.clients.forEach((ws) => {
    const client = ws as BattleshipWebSocket;

    if (clientIds.includes(client.id)) {
      createGame(client, indexRoom);
    }
  });
};
