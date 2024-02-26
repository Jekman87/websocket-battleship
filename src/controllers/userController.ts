import { users } from '../database/db';
import { BattleshipWebSocket, EventType, UserData } from '../types/types';
import { INVALID_USER_INPUT } from '../utils/constants';
import { sendMessage, validateUserInput } from '../utils/helpers';

export const registerUser = (ws: BattleshipWebSocket, data: UserData) => {
  const { name, password } = data;

  const isValidUserInput = validateUserInput(data);

  if (!isValidUserInput) {
    sendInvalidUserInput(ws, data);
  }

  const newUser: UserData = {
    name,
    password,
    index: ws.id,
  };

  users.push(newUser);

  sendSuccessfulRegistration(ws, newUser);
};

export const sendInvalidUserInput = (ws: BattleshipWebSocket, userData: UserData) => {
  const data = {
    name: userData.name,
    index: ws.id,
    error: true,
    errorText: INVALID_USER_INPUT,
  };

  sendMessage(ws, EventType.Registration, data);
};

export const sendSuccessfulRegistration = (ws: BattleshipWebSocket, userData: UserData) => {
  const data = {
    name: userData.name,
    index: ws.id,
    error: false,
    errorText: '',
  };

  sendMessage(ws, EventType.Registration, data);
};
