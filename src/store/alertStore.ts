import { createEvent, createStore } from "effector";

export const alertState = createEvent<boolean>();

export const $alert = createStore<boolean>(false).on(
  alertState,
  (state, msg) => msg
);
