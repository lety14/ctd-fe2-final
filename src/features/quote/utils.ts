import {
  STATE_FETCH,
  NAME_INVALID,
  MESSAGE_LOADING,
  NOT_FOUND,
} from "./constants";

export const obtenerMensaje: (
  quote: string,
  requestState: STATE_FETCH
) => string = (quote, requestState) => {
  if (requestState === STATE_FETCH.LOADING) {
    return MESSAGE_LOADING;
  }

  if (requestState === STATE_FETCH.ERROR) {
    return NAME_INVALID;
  }

  return quote ? `${quote}` : NOT_FOUND;
};
