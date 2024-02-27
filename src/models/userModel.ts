import { User } from '../types/types';

export const users: User[] = [];

export const getUserIndex = (id: string) => users.findIndex((user) => user.index === id);

export const getUserById = (id: string) => {
  const index = getUserIndex(id);

  return users[index];
};

export const deleteUser = (id: string) => {
  const index = getUserIndex(id);

  if (index !== -1) {
    users.splice(index, 1);

    return true;
  }

  return false;
};

export const checkUserExists = (name: string) => users.some(users => users.name === name);
