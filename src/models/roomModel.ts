import { Room } from '../types/types';

export const rooms: Room[] = [];

export const getRoomIndex = (id: string | number) => rooms.findIndex((room) => room.roomId === id);

export const getRoomById = (id: string | number) => {
  const index = getRoomIndex(id);

  return rooms[index];
};

export const deleteRoom = (id: string | number) => {
  const index = getRoomIndex(id);

  if (index !== -1) {
    rooms.splice(index, 1);

    return true;
  }

  return false;
};

export const checkRoomExists = (roomId: string | number) => rooms.some((room) => room.roomId === roomId);