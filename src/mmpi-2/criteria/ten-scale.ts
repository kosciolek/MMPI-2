export type TenScale = {
  [K in "male" | "female"]: { [scaleName: string]: number[] };
};

export const tenScale: TenScale = {
  female: {
    VRIN: [
      32, 35, 38, 41, 44, 47, 50, 54, 57, 60, 63, 66, 69, 72, 75, 79, 82, 85,
      88, 91, 94, 97, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100,
    ],
    TRIN: [
      100, 100, 97, 91, 86, 80, 75, 70, 64, 59, 47, 52, 58, 63, 68, 74, 79, 85,
      90, 96, 100, 100, 100, 100,
    ],
    F: [
      37, 39, 41, 43, 44, 46, 48, 50, 52, 54, 56, 58, 59, 61, 63, 65, 67, 69,
      71, 73, 74, 76, 78, 80, 82, 84, 86, 88, 89, 91, 93, 95, 97, 99, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    ],
    Fb: [
      41, 43, 45, 47, 48, 50, 52, 54, 56, 58, 60, 62, 64, 65, 67, 69, 71, 73,
      75, 77, 79, 81, 82, 84, 86, 88, 90, 92, 94, 96, 97, 99, 100, 100, 100,
      100, 100, 100, 100, 100, 100,
    ],
    Fp: [
      39, 44, 48, 52, 57, 61, 65, 70, 74, 78, 83, 87, 91, 95, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    ],
    FBS: [
      30, 30, 30, 30, 30, 32, 34, 36, 37, 39, 41, 43, 44, 46, 48, 50, 52, 53,
      55, 57, 59, 60, 62, 64, 66, 67, 69, 71, 73, 75, 76, 78, 80, 82, 83, 85,
      87, 89, 91, 92, 94, 96, 98, 99,
    ],
    L: [32, 36, 40, 44, 49, 53, 57, 61, 66, 70, 74, 78, 82, 87, 91, 95],
    K: [
      30, 30, 30, 30, 33, 35, 37, 39, 41, 43, 46, 48, 50, 52, 54, 56, 59, 61,
      63, 65, 67, 69, 72, 74, 76, 78, 80, 82, 85, 87, 89,
    ],
    S: [
      30, 30, 30, 30, 30, 30, 30, 31, 32, 34, 35, 36, 38, 39, 41, 42, 44, 45,
      47, 48, 49, 51, 52, 54, 55, 57, 58, 60, 61, 62, 64, 65, 67, 68, 70, 71,
      73, 74, 75, 77, 78, 80, 81, 83, 84, 86, 87, 89, 90, 91, 93,
    ],
    Hs: [
      30, 30, 30, 30, 30, 30, 30, 32, 33, 35, 37, 38, 40, 42, 44, 46, 48, 50,
      51, 53, 55, 57, 59, 60, 62, 63, 65, 67, 68, 70, 71, 73, 74, 76, 78, 79,
      81, 82, 84, 85, 87, 89, 90, 92, 93, 95, 97, 98,
    ],
    D: [
      30, 30, 30, 30, 30, 30, 31, 31, 31, 31, 31, 32, 32, 33, 34, 35, 36, 37,
      39, 40, 42, 43, 45, 47, 49, 50, 52, 54, 55, 57, 59, 60, 62, 63, 65, 66,
      68, 69, 71, 72, 74, 75, 77, 78, 80, 81, 83, 84, 86, 87, 89, 90, 92, 93,
      95, 96, 98, 99,
    ],
    Hy: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 31, 32, 33, 34, 35, 37, 38, 39,
      41, 43, 44, 46, 47, 49, 51, 53, 54, 56, 58, 60, 61, 63, 65, 66, 68, 70,
      72, 73, 75, 77, 78, 80, 82, 83, 85, 87, 89, 90, 92, 94, 95, 97, 99, 100,
      100, 100, 100, 100, 100, 100, 100,
    ],
    Pd: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 34, 34, 34, 35, 35, 36, 36, 37,
      39, 40, 41, 43, 44, 46, 48, 50, 52, 53, 55, 57, 59, 61, 63, 65, 67, 69,
      71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100,
    ],
    Mf: [
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 99, 97, 94, 92, 90, 88,
      85, 83, 81, 78, 76, 74, 72, 69, 67, 65, 63, 60, 58, 56, 54, 51, 49, 47,
      45, 42, 40, 38, 35, 33, 31, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 30,
    ],
    Pa: [
      30, 31, 31, 32, 33, 35, 36, 38, 40, 43, 45, 47, 49, 52, 54, 56, 59, 61,
      63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 92, 94, 96, 98,
      100, 100, 100, 100, 100,
    ],
    Pt: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 31, 32,
      33, 34, 36, 37, 38, 39, 40, 41, 43, 44, 45, 47, 48, 49, 50, 52, 53, 55,
      56, 57, 59, 60, 62, 63, 64, 66, 67, 69, 70, 72, 73, 74, 76, 77, 79, 80,
      82, 83, 84, 86, 87, 89, 90, 92, 93, 94, 96, 97, 99, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100,
    ],
    Sc: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 32, 33, 35, 37, 38, 40, 41, 42, 44, 45, 47, 48, 49, 50, 52, 53,
      54, 55, 56, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 68, 69, 69, 70,
      71, 72, 73, 74, 75, 76, 77, 78, 79, 80, 81, 82, 83, 83, 84, 85, 86, 87,
      88, 89, 90, 91, 92, 93, 94, 95, 96, 97, 98, 98, 99, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100,
    ],
    Ma: [
      30, 30, 30, 30, 30, 30, 30, 30, 31, 32, 33, 34, 36, 37, 38, 40, 41, 43,
      44, 46, 48, 50, 52, 54, 56, 59, 61, 64, 66, 69, 71, 74, 77, 79, 82, 84,
      87, 89, 92, 94, 97, 99, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100,
    ],
    Si: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 31, 33, 34,
      35, 36, 37, 38, 39, 40, 41, 42, 43, 45, 46, 47, 48, 49, 50, 51, 52, 53,
      54, 55, 57, 58, 59, 60, 61, 62, 63, 64, 65, 66, 67, 69, 70, 71, 72, 73,
      74, 75, 76, 77, 78, 79, 81, 82, 83, 84, 85, 86, 87, 88, 89, 90,
    ],
    D1: [
      30, 30, 30, 31, 33, 35, 37, 39, 41, 43, 45, 47, 49, 50, 52, 54, 56, 58,
      60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86, 88,
    ],
    D2: [30, 30, 31, 36, 41, 46, 51, 56, 61, 65, 70, 75, 80, 85, 90],
    D3: [30, 30, 35, 41, 46, 51, 57, 62, 68, 73, 78, 84],
    D4: [35, 38, 41, 44, 48, 51, 54, 57, 61, 64, 67, 70, 73, 77, 80, 83],
    D5: [32, 36, 40, 44, 48, 52, 56, 60, 65, 69, 73],
    Hy1: [32, 37, 43, 48, 53, 59, 64],
    Hy2: [32, 37, 41, 46, 50, 55, 59, 64, 69, 73, 78, 82, 87],
    Hy3: [34, 37, 40, 43, 46, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78],
    Hy4: [
      33, 35, 38, 41, 44, 46, 49, 52, 55, 58, 60, 63, 66, 69, 71, 74, 77, 80,
    ],
    Hy5: [31, 38, 45, 51, 58, 65, 72, 79],
    Pd1: [33, 38, 43, 48, 53, 58, 64, 69, 74, 79],
    Pd2: [34, 42, 49, 57, 65, 73, 80, 88, 96],
    Pd3: [32, 38, 44, 50, 56, 62, 68],
    Pd4: [30, 31, 35, 39, 43, 47, 51, 55, 59, 63, 67, 71, 75, 79],
    Pd5: [34, 38, 41, 45, 48, 52, 55, 59, 63, 66, 70, 73, 77],
    Pa1: [
      35, 39, 42, 46, 49, 52, 56, 59, 63, 66, 70, 73, 77, 80, 84, 87, 91, 94,
    ],
    Pa2: [33, 38, 43, 48, 54, 59, 64, 69, 74, 80],
    Pa3: [32, 38, 44, 49, 55, 60, 66, 71, 77, 83],
    Sc1: [
      33, 35, 38, 41, 44, 47, 50, 52, 55, 58, 61, 64, 67, 70, 72, 75, 78, 81,
      84, 87, 89, 92,
    ],
    Sc2: [39, 44, 49, 54, 60, 65, 70, 75, 81, 86, 91, 97],
    Sc3: [40, 44, 47, 51, 55, 59, 63, 67, 71, 75, 79],
    Sc4: [37, 40, 44, 47, 51, 54, 58, 61, 65, 68, 72, 75, 79, 82, 86],
    Sc5: [38, 42, 46, 50, 55, 59, 63, 67, 71, 76, 80, 84],
    Sc6: [
      36, 39, 42, 45, 48, 50, 53, 56, 59, 62, 65, 68, 70, 73, 76, 79, 82, 85,
      88, 91, 93,
    ],
    Ma1: [30, 33, 42, 51, 60, 69, 78],
    Ma2: [30, 34, 39, 44, 48, 53, 58, 62, 67, 71, 76, 81],
    Ma3: [30, 36, 43, 49, 56, 63, 70, 77, 84],
    Ma4: [31, 36, 42, 48, 54, 59, 65, 71, 76, 82],
    AGGR: [
      30, 31, 33, 36, 38, 41, 44, 48, 51, 54, 58, 61, 65, 68, 72, 75, 78, 82,
      85,
    ],
    DISC: [
      30, 30, 31, 33, 34, 36, 39, 41, 44, 47, 50, 52, 55, 58, 61, 63, 66, 68,
      71, 73, 75, 78, 80, 83, 85, 88, 90, 93, 95, 98,
    ],
    INTR: [
      30, 30, 30, 30, 31, 33, 35, 37, 39, 42, 44, 46, 49, 51, 54, 56, 58, 59,
      61, 63, 64, 66, 68, 69, 71, 73, 74, 76, 77, 79, 81, 82, 84, 86, 87,
    ],
    NEGE: [
      30, 31, 32, 33, 34, 36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 48, 49,
      51, 52, 54, 56, 58, 60, 62, 65, 67, 69, 71, 74, 76, 78, 81, 83,
    ],
    PSYC: [
      32, 34, 37, 39, 42, 45, 48, 51, 54, 56, 59, 61, 63, 65, 67, 68, 70, 72,
      74, 76, 78, 80, 82, 84, 86, 88,
    ],
    A: [
      30, 30, 31, 32, 34, 35, 36, 37, 38, 39, 40, 42, 43, 44, 45, 46, 47, 48,
      50, 51, 52, 53, 54, 55, 56, 58, 59, 60, 61, 62, 63, 64, 65, 67, 68, 69,
      70, 71, 72, 73,
    ],
    R: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 34, 36, 38, 41, 43, 45, 48,
      50, 52, 54, 57, 59, 61, 64, 66, 68, 70, 73, 75, 77, 80, 82, 84, 86, 89,
      91, 93,
    ],
    Es: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 31, 33, 34,
      35, 37, 38, 40, 41, 43, 44, 45, 47, 48, 50, 51, 53, 54, 55, 57, 58, 60,
      61, 62, 64, 65, 67, 68, 70, 71, 72, 74, 75, 77, 78, 79, 81, 82, 84,
    ],
    Do: [
      30, 30, 30, 30, 30, 30, 30, 32, 35, 38, 41, 44, 47, 50, 53, 56, 59, 62,
      65, 68, 71, 74, 77, 80, 83, 86,
    ],
    Re: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 34, 37, 39, 42, 44,
      47, 49, 52, 54, 57, 59, 62, 64, 67, 69, 72, 74, 77,
    ],
    Mt: [
      30, 30, 30, 30, 31, 32, 34, 35, 36, 38, 39, 40, 42, 43, 44, 46, 47, 48,
      50, 51, 52, 54, 55, 56, 57, 59, 60, 61, 63, 64, 65, 67, 68, 69, 71, 72,
      73, 75, 76, 77, 79, 80,
    ],
    PK: [
      32, 33, 34, 35, 36, 38, 39, 40, 41, 42, 43, 44, 45, 46, 48, 49, 50, 51,
      52, 53, 54, 55, 56, 57, 59, 60, 61, 62, 63, 64, 65, 66, 67, 69, 70, 71,
      72, 73, 74, 75, 76, 77, 78, 80, 81, 82, 83,
    ],
    MDS: [32, 35, 38, 42, 45, 48, 52, 55, 58, 62, 65, 68, 72, 75, 79],
    Ho: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 33, 34, 35, 37, 38, 39,
      40, 41, 43, 44, 45, 46, 48, 49, 50, 51, 53, 54, 55, 56, 58, 59, 60, 61,
      63, 64, 65, 66, 68, 69, 70, 71, 72, 74, 75, 76, 77, 79, 80,
    ],
    "O-H": [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 33, 36, 40, 43, 47, 50, 54, 57, 60,
      64, 67, 71, 74, 78, 81, 85, 88, 92, 95, 98,
    ],
    "MAC-R": [
      100, 100, 100, 100, 100, 100, 100, 100, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 32, 34, 37, 39, 41, 43, 46, 48, 50, 53, 55, 57, 59, 62,
      64, 66, 69, 71, 73, 76, 78, 80, 82, 85, 87, 89, 92, 94, 96, 98,
    ],
    AAS: [100, 100, 38, 44, 49, 55, 60, 65, 71, 76, 82, 87, 93, 98],
    APS: [
      100, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 35, 38,
      41, 43, 46, 49, 52, 54, 57, 60, 63, 66, 68, 71, 74, 77, 79, 82, 85, 88,
      90, 93, 96, 99,
    ],
    GM: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 31, 32, 34, 35, 36, 38, 39,
      40, 42, 43, 44, 46, 47, 48, 50, 51, 53, 54, 55, 57, 58, 59, 61, 62, 63,
      65, 66, 68, 69, 70, 72, 73, 74, 76, 77, 78, 80,
    ],
    GF: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 34, 36, 38, 41, 43, 45, 47, 49,
      52, 54, 56, 58, 60, 63, 65, 67, 69, 71, 74,
    ],
    Si1: [33, 36, 39, 42, 45, 48, 51, 55, 58, 61, 64, 67, 70, 73, 76],
    Si2: [36, 41, 46, 50, 55, 60, 65, 70, 74],
    Si3: [
      30, 30, 32, 35, 38, 41, 43, 46, 49, 52, 55, 58, 61, 63, 66, 69, 72, 75,
    ],
    ANG: [30, 32, 34, 37, 39, 41, 44, 46, 49, 52, 56, 60, 64, 68, 72, 77, 81],
    ANX: [
      30, 32, 34, 36, 38, 39, 41, 43, 44, 46, 48, 49, 51, 54, 56, 58, 61, 64,
      67, 70, 72, 75, 78, 81,
    ],
    ASP: [
      33, 33, 33, 33, 34, 36, 38, 40, 42, 45, 48, 51, 54, 57, 61, 64, 67, 70,
      74, 77, 80, 84, 87,
    ],
    BIZ: [
      33, 37, 41, 45, 48, 50, 53, 55, 57, 60, 62, 64, 66, 68, 70, 72, 74, 76,
      78, 80, 82, 84, 86, 88,
    ],
    CYN: [
      30, 31, 33, 34, 35, 37, 38, 38, 39, 40, 41, 42, 43, 45, 46, 48, 51, 53,
      57, 61, 65, 69, 73, 78,
    ],
    DEP: [
      30, 33, 35, 37, 39, 41, 42, 44, 45, 47, 48, 49, 51, 52, 53, 55, 56, 57,
      59, 60, 62, 64, 65, 67, 68, 70, 72, 73, 75, 76, 78, 80, 81, 83,
    ],
    FAM: [
      30, 32, 34, 36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 61, 63, 66,
      68, 70, 73, 75, 78, 80, 83, 85,
    ],
    FRS: [
      31, 34, 36, 37, 39, 41, 42, 44, 46, 48, 49, 51, 54, 56, 59, 62, 64, 67,
      70, 73, 76, 79, 82, 85,
    ],
    HEA: [
      35, 36, 38, 39, 40, 42, 43, 44, 46, 47, 48, 50, 51, 53, 54, 56, 57, 58,
      60, 61, 63, 64, 66, 67, 69, 70, 72, 73, 75, 76, 78, 79, 81, 82, 84, 85,
      87,
    ],
    LSE: [
      31, 33, 36, 38, 40, 42, 43, 45, 46, 48, 50, 52, 54, 56, 58, 61, 64, 67,
      70, 73, 75, 78, 81, 84, 87,
    ],
    OBS: [31, 34, 37, 40, 42, 44, 45, 47, 49, 51, 54, 58, 62, 66, 71, 75, 79],
    SOD: [
      31, 34, 36, 39, 41, 43, 45, 47, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68,
      70, 72, 74, 76, 78, 80, 82,
    ],
    TPA: [
      30, 30, 32, 35, 37, 39, 41, 43, 45, 48, 50, 53, 56, 60, 63, 67, 71, 75,
      79, 82,
    ],
    TRT: [
      31, 33, 35, 37, 39, 40, 42, 43, 45, 46, 47, 49, 50, 52, 54, 56, 58, 61,
      63, 66, 68, 71, 73, 76, 78, 81, 83,
    ],
    WRK: [
      32, 33, 35, 36, 38, 39, 40, 42, 43, 44, 46, 47, 48, 50, 51, 52, 54, 56,
      58, 59, 61, 63, 65, 67, 69, 71, 73, 75, 77, 79, 82, 84, 86, 88,
    ],
    ANG1: [32, 40, 48, 54, 61, 67, 74, 80],
    ANG2: [30, 38, 42, 45, 48, 53, 63, 75],
    ASP1: [30, 32, 33, 34, 36, 37, 39, 41, 44, 46, 50, 53, 58, 63, 68, 73, 78],
    ASP2: [32, 52, 60, 67, 75, 82],
    BIZ1: [33, 46, 54, 58, 62, 65, 69, 72, 76, 80, 83, 87],
    BIZ2: [32, 40, 46, 51, 55, 60, 65, 69, 74, 79],
    CYN1: [30, 30, 30, 34, 37, 38, 39, 40, 41, 42, 44, 47, 51, 57, 65, 74],
    CYN2: [31, 38, 43, 46, 49, 53, 60, 68, 76],
    DEP1: [32, 38, 43, 46, 50, 53, 56, 59, 63, 67, 71, 75, 78],
    DEP2: [31, 42, 46, 49, 53, 63, 76],
    DEP3: [33, 42, 48, 52, 57, 64, 71, 78],
    DEP4: [32, 54, 61, 67, 73, 79],
    FAM1: [32, 34, 37, 41, 44, 48, 52, 57, 62, 67, 72, 77, 82],
    FAM2: [32, 48, 54, 59, 68, 77],
    FRS1: [33, 40, 46, 49, 52, 55, 58, 62, 67, 71, 76, 80, 84],
    FRS2: [30, 35, 38, 41, 43, 46, 49, 54, 60, 68, 76],
    HEA1: [32, 47, 54, 61, 70, 78],
    HEA2: [33, 39, 44, 48, 52, 56, 59, 63, 66, 70, 73, 77, 80],
    HEA3: [31, 41, 46, 50, 56, 66, 76],
    LSE1: [30, 35, 39, 42, 45, 48, 52, 56, 62, 68, 74, 79],
    LSE2: [32, 43, 48, 51, 56, 66, 76],
    SOD1: [32, 37, 41, 45, 48, 51, 53, 56, 58, 61, 63, 66, 69, 71, 74, 76, 79],
    SOD2: [32, 40, 45, 50, 55, 63, 71, 79],
    TPA1: [30, 38, 41, 44, 48, 58, 75],
    TPA2: [32, 38, 44, 48, 52, 57, 63, 69, 75, 82],
    TRT1: [32, 39, 44, 47, 49, 51, 53, 57, 61, 67, 72, 78],
    TRT2: [31, 41, 44, 48, 58, 75],
    RCd: [
      33, 36, 39, 41, 43, 44, 46, 47, 48, 48, 49, 50, 51, 53, 54, 56, 58, 61,
      64, 66, 69, 72, 75, 77, 80,
    ],
    RC1: [
      31, 35, 37, 40, 42, 45, 47, 49, 50, 52, 54, 55, 57, 59, 61, 62, 64, 66,
      68, 70, 72, 73, 75, 77, 79, 81, 82, 84,
    ],
    RC2: [
      31, 34, 38, 41, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 85,
    ],
    RC3: [30, 30, 30, 34, 36, 38, 39, 40, 41, 43, 45, 48, 52, 58, 66, 74],
    RC4: [
      33, 37, 41, 45, 49, 52, 55, 58, 60, 63, 65, 68, 70, 72, 75, 77, 80, 82,
      85, 87, 89, 92, 94,
    ],
    RC6: [
      33, 40, 46, 51, 55, 58, 61, 63, 66, 68, 71, 73, 75, 78, 80, 83, 85, 88,
    ],
    RC7: [
      31, 34, 36, 38, 40, 41, 43, 44, 45, 47, 48, 49, 51, 52, 54, 56, 58, 61,
      63, 66, 69, 71, 74, 76, 79,
    ],
    RC8: [
      33, 39, 44, 48, 51, 54, 56, 58, 61, 63, 65, 68, 70, 72, 74, 77, 79, 81,
      84,
    ],
    RC9: [
      30, 30, 32, 33, 35, 37, 39, 41, 43, 44, 46, 48, 50, 52, 54, 56, 58, 60,
      63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 84,
    ],
  },
  male: {
    D1: [
      30, 30, 31, 33, 36, 38, 40, 42, 44, 47, 49, 51, 53, 55, 58, 60, 62, 64,
      66, 68, 71, 73, 75, 77, 79, 82, 84, 86, 88, 90, 93, 95, 97,
    ],
    D2: [30, 30, 34, 39, 44, 49, 54, 59, 64, 69, 73, 78, 83, 88, 93],
    D3: [30, 32, 38, 44, 50, 56, 63, 69, 75, 81, 88, 94],
    D4: [34, 38, 42, 46, 49, 53, 57, 60, 64, 68, 72, 75, 79, 83, 86, 90],
    D5: [35, 40, 44, 48, 53, 57, 62, 66, 71, 75, 80],
    Hy1: [31, 37, 42, 48, 53, 59, 64],
    Hy2: [32, 37, 42, 46, 51, 55, 60, 65, 69, 74, 78, 83, 88],
    Hy3: [36, 39, 42, 45, 49, 52, 55, 58, 62, 65, 68, 71, 75, 78, 81, 84],
    Hy4: [
      36, 39, 42, 45, 49, 52, 55, 58, 61, 64, 68, 71, 74, 77, 80, 83, 86, 90,
    ],
    Hy5: [32, 39, 46, 53, 61, 68, 75, 82],
    Pd1: [33, 39, 44, 49, 54, 60, 65, 70, 75, 80],
    Pd2: [31, 37, 44, 50, 56, 63, 69, 75, 82],
    Pd3: [31, 37, 43, 49, 55, 61, 67],
    Pd4: [30, 33, 37, 41, 45, 50, 54, 58, 62, 66, 70, 74, 79, 83],
    Pd5: [35, 39, 42, 46, 49, 53, 56, 60, 63, 67, 70, 74, 77],
    Pa1: [
      36, 39, 43, 46, 50, 53, 57, 60, 64, 68, 71, 75, 78, 82, 85, 89, 92, 96,
    ],
    Pa2: [36, 42, 48, 53, 59, 65, 71, 76, 82, 88],
    Pa3: [33, 38, 44, 50, 55, 61, 67, 73, 78, 84],
    Sc1: [
      34, 37, 40, 43, 46, 49, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78, 81, 84,
      87, 90, 93, 96,
    ],
    Sc2: [100, 38, 44, 50, 56, 62, 68, 74, 80, 86, 92, 98],
    Sc3: [39, 44, 49, 53, 58, 63, 67, 72, 76, 81, 86],
    Sc4: [36, 40, 44, 48, 52, 56, 60, 63, 67, 71, 75, 79, 83, 87, 90],
    Sc5: [38, 43, 48, 52, 57, 62, 66, 71, 75, 80, 85, 89],
    Sc6: [
      37, 40, 43, 46, 49, 52, 55, 58, 61, 65, 68, 71, 74, 77, 80, 83, 86, 89,
      92, 95, 98,
    ],
    Ma1: [30, 32, 40, 48, 55, 63, 71],
    Ma2: [30, 33, 38, 42, 47, 51, 56, 60, 65, 69, 74, 78],
    Ma3: [30, 34, 41, 47, 53, 60, 66, 72, 78],
    Ma4: [32, 37, 43, 48, 54, 59, 65, 70, 75, 81],
    AGGR: [
      30, 30, 31, 33, 35, 37, 39, 42, 44, 47, 51, 54, 58, 63, 67, 72, 76, 80,
      85,
    ],
    DISC: [
      31, 31, 31, 31, 32, 33, 34, 35, 37, 38, 40, 42, 44, 46, 49, 51, 53, 56,
      59, 61, 64, 67, 70, 72, 75, 78, 81, 83, 86, 89,
    ],
    INTR: [
      31, 31, 31, 32, 33, 34, 36, 38, 40, 42, 44, 47, 49, 52, 54, 57, 59, 61,
      63, 65, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 93, 95,
    ],
    NEGE: [
      32, 33, 35, 36, 37, 39, 40, 41, 42, 43, 44, 46, 47, 48, 50, 51, 53, 54,
      56, 58, 60, 62, 64, 66, 68, 70, 72, 74, 76, 78, 80, 82, 84, 86,
    ],
    PSYC: [
      31, 34, 37, 39, 43, 46, 49, 52, 55, 57, 60, 62, 64, 66, 68, 70, 72, 74,
      76, 78, 80, 82, 84, 86, 88, 90,
    ],
    A: [
      32, 33, 34, 35, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 48, 50, 51, 52,
      53, 54, 55, 57, 58, 59, 60, 61, 63, 64, 65, 66, 67, 68, 70, 71, 72, 73,
      74, 76, 77, 78,
    ],
    R: [
      30, 30, 30, 30, 30, 30, 30, 31, 33, 35, 37, 39, 41, 43, 45, 48, 50, 52,
      54, 56, 58, 60, 62, 64, 66, 68, 70, 72, 75, 77, 79, 81, 83, 85, 87, 89,
      91, 93,
    ],
    Es: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 31, 32, 34, 35, 37, 38, 40, 41, 43, 45, 46, 48, 49, 51, 52, 54,
      56, 57, 59, 60, 62, 63, 65, 66, 68, 70, 71, 73, 74, 76, 77, 79, 81,
    ],
    Do: [
      30, 30, 30, 30, 30, 30, 30, 30, 32, 35, 38, 41, 44, 48, 51, 54, 57, 60,
      63, 66, 69, 73, 76, 79, 82, 85,
    ],
    Re: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 35, 37, 39, 41, 43, 45, 47, 50,
      52, 54, 56, 58, 60, 62, 65, 67, 69, 71, 73, 75, 77,
    ],
    Mt: [
      30, 30, 31, 32, 34, 35, 36, 38, 39, 41, 42, 43, 45, 46, 48, 49, 50, 52,
      53, 55, 56, 57, 59, 60, 62, 63, 64, 66, 67, 69, 70, 71, 73, 74, 76, 77,
      78, 80, 81, 83, 84, 85,
    ],
    PK: [
      33, 34, 36, 37, 38, 39, 40, 41, 43, 44, 45, 46, 47, 49, 50, 51, 52, 53,
      55, 56, 57, 58, 59, 61, 62, 63, 64, 65, 67, 68, 69, 70, 71, 72, 74, 75,
      76, 77, 78, 80, 81, 82, 83, 84, 86, 87, 88,
    ],
    MDS: [32, 36, 40, 43, 47, 50, 54, 58, 61, 65, 69, 72, 76, 79, 83],
    Ho: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 31, 33, 34, 35, 36, 38,
      39, 40, 41, 43, 44, 45, 46, 48, 49, 50, 51, 53, 54, 55, 57, 58, 59, 60,
      62, 63, 64, 65, 67, 68, 69, 70, 72, 73, 74, 75, 77, 78, 79,
    ],
    "O-H": [
      100, 100, 30, 30, 30, 30, 30, 30, 30, 30, 34, 37, 41, 44, 48, 51, 55, 58,
      62, 65, 68, 72, 75, 79, 82, 86, 89, 93, 96,
    ],
    "MAC-R": [
      100, 100, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 34,
      36, 38, 40, 42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 66, 68, 70,
      72, 74, 76, 78, 81, 83, 85, 87, 89, 91, 93, 95, 97, 99,
    ],
    AAS: [37, 41, 45, 49, 53, 57, 61, 65, 69, 73, 78, 82, 86, 90],
    APS: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 32, 35, 37, 40,
      43, 45, 48, 51, 54, 56, 59, 62, 64, 67, 70, 72, 75, 78, 81, 83, 86, 89,
      91, 94, 97, 99,
    ],
    GM: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      30, 30, 30, 30, 31, 32, 34, 35, 37, 38, 40, 42, 43, 45, 46, 48, 49, 51,
      53, 54, 56, 57, 59, 60, 62, 64, 65, 67, 68, 70,
    ],
    GF: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30,
      32, 35, 37, 39, 41, 43, 45, 48, 50, 52, 54, 56, 59, 61, 63, 65, 67, 69,
      72, 74, 76, 78, 80, 83, 85, 87, 89, 91, 94,
    ],
    Si1: [34, 37, 40, 44, 47, 50, 53, 56, 59, 63, 66, 69, 72, 75, 78],
    Si2: [35, 40, 45, 50, 55, 60, 65, 70, 75],
    Si3: [
      30, 31, 34, 37, 39, 42, 45, 48, 51, 54, 57, 60, 63, 66, 69, 72, 75, 78,
    ],
    FRS1: [33, 46, 53, 57, 60, 64, 67, 70, 74, 77, 80, 84, 87],
    FRS2: [33, 40, 46, 50, 54, 58, 62, 67, 72, 76, 81],
    HEA1: [33, 50, 58, 66, 73, 80],
    HEA2: [33, 42, 48, 53, 56, 60, 64, 67, 71, 75, 79, 83, 86],
    HEA3: [32, 43, 49, 54, 61, 70, 78],
    LSE1: [32, 36, 40, 44, 48, 52, 56, 62, 67, 73, 78, 84],
    LSE2: [32, 44, 50, 55, 62, 70, 79],
    SOD1: [32, 37, 41, 44, 48, 51, 54, 57, 59, 62, 64, 67, 70, 72, 75, 77, 80],
    SOD2: [32, 41, 47, 52, 57, 65, 72, 79],
    TPA1: [30, 38, 42, 45, 51, 61, 75],
    TPA2: [31, 36, 41, 45, 49, 54, 60, 66, 73, 80],
    TRT1: [33, 41, 47, 50, 53, 56, 59, 63, 68, 72, 76, 80],
    TRT2: [31, 41, 45, 49, 59, 75],
    ANG1: [32, 40, 46, 52, 58, 65, 72, 79],
    ANG2: [31, 39, 44, 47, 51, 57, 66, 76],
    ASP1: [30, 30, 30, 33, 35, 37, 39, 40, 42, 43, 46, 49, 53, 58, 64, 71, 77],
    ASP2: [32, 46, 51, 55, 65, 76],
    BIZ1: [33, 47, 55, 59, 62, 66, 69, 72, 76, 79, 83, 86],
    BIZ2: [33, 41, 47, 52, 56, 61, 66, 71, 75, 80],
    CYN1: [30, 31, 34, 36, 37, 38, 38, 39, 39, 41, 43, 46, 51, 57, 65, 74],
    CYN2: [31, 37, 41, 44, 46, 50, 56, 66, 76],
    DEP1: [30, 30, 30, 30, 44, 53, 58, 62, 66, 69, 73, 77, 80],
    DEP2: [32, 46, 52, 56, 63, 70, 78],
    DEP3: [32, 44, 50, 53, 58, 65, 72, 79],
    DEP4: [33, 56, 63, 68, 73, 78],
    FAM1: [32, 36, 39, 43, 47, 50, 54, 59, 63, 68, 72, 77, 81],
    FAM2: [32, 48, 53, 59, 68, 77],
    ANG: [30, 30, 34, 37, 40, 42, 45, 47, 50, 53, 56, 60, 65, 69, 74, 78, 83],
    ANX: [
      32, 34, 37, 39, 41, 43, 45, 47, 49, 51, 53, 55, 57, 60, 62, 64, 67, 69,
      71, 74, 76, 78, 81, 83,
    ],
    ASP: [
      30, 31, 32, 33, 34, 35, 36, 38, 39, 41, 43, 45, 48, 50, 53, 56, 59, 63,
      66, 70, 73, 77, 80,
    ],
    BIZ: [
      33, 38, 42, 45, 49, 52, 54, 57, 59, 61, 63, 65, 67, 69, 71, 73, 75, 76,
      78, 80, 82, 84, 86, 88,
    ],
    CYN: [
      30, 30, 32, 34, 35, 37, 37, 38, 39, 39, 40, 41, 41, 43, 44, 46, 48, 51,
      54, 58, 63, 67, 72, 77,
    ],
    DEP: [
      31, 34, 37, 39, 42, 44, 46, 47, 49, 51, 52, 53, 55, 56, 57, 59, 60, 62,
      63, 64, 66, 67, 69, 70, 72, 73, 74, 76, 77, 79, 80, 81, 83, 84,
    ],
    FAM: [
      31, 33, 35, 38, 40, 42, 43, 45, 47, 49, 51, 53, 55, 58, 60, 63, 65, 68,
      70, 73, 76, 78, 81, 83, 86, 89,
    ],
    FRS: [
      34, 38, 41, 45, 47, 50, 53, 55, 57, 59, 62, 64, 66, 68, 70, 72, 74, 77,
      79, 81, 83, 85, 87, 89,
    ],
    HEA: [
      31, 34, 37, 39, 42, 44, 46, 48, 49, 51, 53, 54, 56, 57, 59, 60, 62, 63,
      65, 66, 68, 69, 71, 72, 74, 75, 77, 78, 80, 81, 83, 84, 86, 87, 89, 90,
      92,
    ],
    LSE: [
      32, 33, 36, 38, 40, 42, 45, 47, 50, 52, 54, 57, 59, 61, 64, 66, 68, 70,
      72, 75, 77, 79, 81, 84, 86,
    ],
    OBS: [33, 36, 39, 42, 45, 47, 49, 52, 54, 57, 60, 63, 67, 70, 73, 77, 80],
    SOD: [
      32, 34, 36, 38, 41, 43, 46, 48, 51, 53, 55, 58, 60, 62, 63, 65, 67, 69,
      71, 73, 75, 77, 79, 81, 83,
    ],
    TPA: [
      30, 31, 33, 34, 36, 38, 40, 42, 44, 46, 49, 52, 55, 58, 62, 66, 69, 73,
      77, 81,
    ],
    TRT: [
      32, 34, 36, 38, 40, 42, 43, 45, 47, 48, 50, 52, 54, 56, 58, 60, 62, 64,
      67, 69, 71, 73, 75, 78, 80, 82, 84,
    ],
    WRK: [
      33, 34, 36, 38, 39, 41, 42, 44, 45, 47, 49, 50, 52, 53, 55, 57, 58, 60,
      62, 63, 65, 67, 68, 70, 71, 73, 75, 76, 78, 80, 81, 83, 85, 86,
    ],
    RCd: [
      32, 36, 39, 42, 44, 46, 48, 50, 51, 53, 54, 56, 57, 59, 61, 63, 65, 66,
      68, 70, 72, 74, 76, 78, 80,
    ],
    RC1: [
      33, 38, 42, 45, 48, 50, 52, 54, 55, 57, 59, 60, 62, 64, 66, 68, 70, 72,
      74, 75, 77, 79, 81, 83, 85, 87, 89, 91,
    ],
    RC2: [
      32, 35, 39, 43, 47, 51, 54, 58, 61, 64, 67, 70, 73, 76, 79, 82, 85, 88,
    ],
    RC3: [30, 31, 34, 36, 37, 38, 38, 39, 40, 42, 44, 48, 52, 59, 67, 75],
    RC4: [
      31, 35, 39, 42, 44, 46, 48, 50, 52, 54, 57, 59, 62, 65, 68, 71, 73, 76,
      79, 82, 85, 88, 90,
    ],
    RC6: [
      33, 40, 46, 51, 55, 58, 60, 63, 66, 68, 71, 73, 76, 78, 81, 84, 86, 89,
    ],
    RC7: [
      31, 34, 37, 40, 42, 44, 46, 48, 49, 51, 53, 54, 56, 58, 60, 62, 64, 67,
      69, 71, 73, 76, 78, 80, 82,
    ],
    RC8: [
      33, 39, 44, 48, 51, 54, 57, 59, 62, 64, 67, 70, 72, 75, 77, 80, 83, 85,
      88,
    ],
    RC9: [
      30, 30, 30, 31, 33, 35, 36, 38, 39, 41, 43, 44, 46, 48, 49, 51, 53, 55,
      58, 60, 63, 66, 68, 71, 73, 76, 79, 81, 84,
    ],
    VRIN: [
      32, 35, 38, 41, 44, 47, 49, 52, 55, 58, 61, 64, 66, 69, 72, 75, 78, 81,
      84, 86, 89, 92, 95, 98, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100,
    ],
    TRIN: [
      100, 100, 95, 90, 85, 79, 74, 69, 63, 58, 47, 53, 58, 63, 69, 74, 79, 85,
      90, 96, 100, 100, 100, 100,
    ],
    F: [
      37, 39, 41, 43, 44, 46, 48, 50, 52, 53, 55, 57, 59, 61, 62, 64, 66, 68,
      70, 71, 73, 75, 77, 79, 81, 82, 84, 86, 88, 90, 91, 93, 95, 97, 99, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    ],
    Fb: [
      41, 43, 44, 46, 48, 50, 52, 54, 55, 57, 59, 61, 63, 65, 67, 68, 70, 72,
      74, 76, 78, 79, 81, 83, 85, 87, 89, 90, 92, 94, 96, 98, 100, 100, 100,
      100, 100, 100, 100, 100, 100,
    ],
    Fp: [
      41, 45, 48, 52, 56, 60, 64, 68, 72, 76, 80, 83, 87, 91, 95, 99, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
    ],
    FBS: [
      30, 30, 31, 33, 35, 37, 39, 41, 43, 45, 47, 48, 50, 52, 54, 56, 58, 60,
      62, 64, 66, 67, 69, 71, 73, 75, 77, 79, 81, 83, 85, 86, 88, 90, 92, 94,
      96, 98, 100, 100, 100, 100, 100, 100,
    ],
    L: [34, 38, 42, 46, 50, 54, 59, 63, 67, 71, 75, 79, 83, 88, 92, 96],
    K: [
      30, 30, 30, 30, 31, 33, 36, 38, 40, 42, 44, 46, 48, 51, 53, 55, 57, 59,
      61, 63, 66, 68, 70, 72, 74, 76, 78, 81, 83, 85, 87,
    ],
    S: [
      30, 30, 30, 30, 30, 30, 30, 31, 33, 34, 35, 37, 38, 39, 41, 42, 43, 45,
      46, 47, 49, 50, 51, 53, 54, 55, 57, 58, 59, 61, 62, 63, 65, 66, 67, 69,
      70, 71, 73, 74, 76, 77, 78, 80, 81, 82, 84, 85, 86, 88, 89,
    ],
    Hs: [
      30, 30, 30, 30, 30, 30, 30, 33, 35, 37, 40, 42, 44, 46, 48, 50, 52, 54,
      55, 57, 59, 61, 63, 64, 66, 68, 70, 72, 74, 75, 77, 79, 81, 83, 84, 86,
      88, 90, 92, 93, 95, 97, 99, 100, 100, 100, 100, 100,
    ],
    D: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 31, 33, 35, 36, 38, 40, 42,
      44, 46, 47, 49, 51, 53, 55, 56, 58, 60, 62, 64, 66, 68, 69, 71, 73, 75,
      77, 79, 80, 82, 84, 86, 88, 90, 92, 93, 95, 97, 99, 100, 100, 100, 100,
      100, 100, 100, 100, 100,
    ],
    Hy: [
      30, 30, 30, 31, 31, 31, 31, 31, 32, 32, 33, 35, 36, 37, 39, 41, 42, 44,
      46, 48, 50, 52, 53, 55, 57, 59, 60, 62, 63, 65, 66, 68, 70, 71, 73, 74,
      76, 77, 79, 80, 82, 83, 85, 86, 88, 89, 91, 93, 94, 96, 97, 99, 100, 100,
      100, 100, 100, 100, 100, 100, 100,
    ],
    Pd: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 31, 32, 34, 35, 36,
      38, 40, 41, 43, 45, 46, 48, 50, 52, 54, 56, 58, 60, 62, 64, 65, 67, 69,
      71, 73, 75, 77, 79, 81, 83, 85, 87, 89, 91, 92, 94, 96, 98, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100,
    ],
    Mf: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 33, 35, 37, 39,
      41, 43, 46, 48, 50, 52, 54, 56, 59, 61, 63, 65, 67, 69, 72, 74, 76, 78,
      80, 82, 85, 87, 89, 91, 93, 95, 98, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100,
    ],
    Pa: [
      30, 30, 30, 31, 33, 35, 38, 40, 43, 45, 48, 51, 53, 55, 58, 60, 62, 64,
      65, 67, 69, 71, 73, 75, 77, 79, 81, 82, 84, 86, 88, 90, 92, 94, 96, 98,
      99, 100, 100, 100, 100,
    ],
    Pt: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 31, 31, 31, 32, 33, 33, 34, 35,
      36, 37, 38, 40, 41, 42, 44, 45, 47, 48, 49, 51, 53, 54, 56, 57, 59, 60,
      61, 63, 64, 66, 67, 69, 70, 72, 73, 75, 76, 78, 79, 80, 82, 83, 85, 86,
      88, 89, 91, 92, 94, 95, 97, 98, 99, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100,
    ],
    Sc: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 31, 32,
      33, 34, 36, 37, 39, 41, 42, 43, 45, 46, 47, 49, 50, 51, 53, 54, 55, 56,
      57, 58, 59, 60, 61, 62, 63, 64, 64, 65, 66, 67, 68, 68, 69, 70, 71, 72,
      73, 73, 74, 75, 76, 77, 77, 78, 79, 80, 81, 82, 82, 83, 84, 85, 86, 86,
      87, 88, 89, 90, 91, 91, 92, 93, 94, 95, 95, 96, 97, 98, 99, 100, 100, 100,
      100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100, 100,
      100, 100, 100,
    ],
    Ma: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 31, 32, 34, 35, 36, 38, 39, 41,
      42, 44, 46, 48, 50, 52, 54, 56, 58, 60, 63, 65, 67, 70, 72, 74, 77, 79,
      81, 84, 86, 88, 91, 93, 96, 98, 100, 100, 100, 100, 100, 160, 100, 100,
      100,
    ],
    Si: [
      30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 31, 32, 33, 34, 35, 36,
      38, 39, 40, 41, 42, 43, 44, 46, 47, 48, 49, 50, 51, 53, 54, 55, 56, 57,
      58, 59, 61, 62, 63, 64, 65, 66, 68, 69, 70, 71, 72, 73, 74, 76, 77, 78,
      79, 80, 81, 83, 84, 85, 86, 87, 88, 89, 91, 92, 93, 94, 95, 96,
    ],
  },
};