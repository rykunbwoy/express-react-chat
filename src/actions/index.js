import {SET_SOCKET, SEND_MESSAGE, APPEND_MESSAGE} from './types';

export function setSocket(io){
  return {
    type: SET_SOCKET,
    payload: io
  }
}

export function createMessage(io, data){
  io.emit('createMessage', data, (data)=>{
      console.log('Got it', data);
    });
  return {
    type: SEND_MESSAGE
  }
}

export function appendMessage(data){
  return {
    type: APPEND_MESSAGE,
    payload: data
  }
}