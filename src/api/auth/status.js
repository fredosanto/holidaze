import { load } from "../token/index.mjs";

export const isOnline = () => Boolean(load("token"));

export const user = () => load("user");
