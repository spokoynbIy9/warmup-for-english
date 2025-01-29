import { TIMES_IN_ENGLISH } from "../const/const";
import { getRandomIndex } from "./getRandomIndex";

export function getRandomTime(min = 0, max = 15) {
  const randomIndex = getRandomIndex(min, max);
  return TIMES_IN_ENGLISH[randomIndex];
}
