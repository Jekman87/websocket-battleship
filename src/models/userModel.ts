import { UserData } from '../types/types';

export const users: UserData[] = [];

export const getUserIndex = (id: string) => users.findIndex((user) => user.index === id);

export const deleteUser = (id: string) => {
  const index = getUserIndex(id);

  if (index !== -1) {
    users.splice(index, 1);

    return true;
  }

  return false;
};

export const checkUserExists = (name: string) => users.some(users => users.name === name);
