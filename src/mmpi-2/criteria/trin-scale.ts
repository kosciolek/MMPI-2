import { Pair } from "../calculators/utils";

export type TrinScale = {
  positive: Pair[];
  negative: Pair[];
};

export const trinScale: TrinScale = {
  positive: [
    { 6: true, 478: true },
    { 12: true, 166: true },
    { 40: true, 224: true },
    { 53: true, 208: true },
    { 62: true, 272: true },
    { 91: true, 247: true },
    { 95: true, 303: true },
    { 99: true, 314: true },
    { 141: true, 464: true },
    { 167: true, 342: true },
    { 209: true, 351: true },
    { 261: true, 471: true },
    { 318: true, 450: true },
  ],
  negative: [
    { 9: false, 56: false },
    { 49: false, 167: false },
    { 73: false, 239: false },
    { 75: false, 303: false },
    { 165: false, 472: false },
    { 262: false, 275: false },
    { 265: false, 353: false },
    { 306: false, 383: false },
    { 405: false, 444: false },
    { 273: false, 561: false },
  ],
};
