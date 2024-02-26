import { winners } from '../models/winnerModel';
import { sendMessage } from '../services/common';
import { BattleshipWebSocket, EventType, UserData } from '../types/types';
import { INVALID_USER_INPUT, USER_ALREADY_EXISTS } from '../utils/constants';

export const sendUserExists = (ws: BattleshipWebSocket, userData: UserData) => {
  const data: UserData = {
    name: userData.name,
    index: ws.id,
    error: true,
    errorText: USER_ALREADY_EXISTS,
  };

  sendMessage(ws, EventType.Registration, data);
};

export const sendInvalidUserInput = (ws: BattleshipWebSocket, userData: UserData) => {
  const data: UserData = {
    name: userData.name,
    index: ws.id,
    error: true,
    errorText: INVALID_USER_INPUT,
  };

  sendMessage(ws, EventType.Registration, data);
};

export const sendSuccessfulRegistration = (ws: BattleshipWebSocket, userData: UserData) => {
  const data: UserData = {
    name: userData.name,
    index: ws.id,
    error: false,
    errorText: '',
  };

  sendMessage(ws, EventType.Registration, data);
};

export const sendUpdateWinners = (ws: BattleshipWebSocket) => {
  sendMessage(ws, EventType.UpdateWinners, winners);
};
