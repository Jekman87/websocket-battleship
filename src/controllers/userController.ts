import { wss } from '..';
import { checkUserExists, users } from '../models/userModel';
import { sendInvalidUserInput, sendSuccessfulRegistration, sendUpdateWinners, sendUserExists } from '../services/userService';
import { BattleshipWebSocket, UserData } from '../types/types';
import { validateUserInput } from '../utils/helpers';

export const registerUser = (ws: BattleshipWebSocket, data: UserData) => {
  const { name, password } = data;

  const isUserExists = checkUserExists(name)

  if (isUserExists) {
    return sendUserExists(ws, data);
  }

  const isValidUserInput = validateUserInput(data);

  if (!isValidUserInput) {
    return sendInvalidUserInput(ws, data);
  }

  const newUser: UserData = {
    name,
    password,
    index: ws.id,
  };

  users.push(newUser);

  sendSuccessfulRegistration(ws, newUser);
};

export const updateWinners = () => {
  wss.clients.forEach((client) => {
    sendUpdateWinners(client as BattleshipWebSocket);
  });
};
