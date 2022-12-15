import tConvert from "./convert";
import { monthNames } from "./months";

export function timeFunc(createdAt) {
  return tConvert(
    new Date(createdAt).getHours(),
    new Date(createdAt).getMinutes()
  );
}

export function day(createdAt) {
  return new Date(createdAt).getDate();
}

export function month(createdAt) {
  return monthNames[new Date(createdAt).getMonth()];
}

export function year(createdAt) {
  return new Date(createdAt).getFullYear();
}
