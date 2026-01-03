import * as CONST from "../constants/TileData.ts";

let TILES_TO_GENERATE: number[] = Array(
  CONST.TILES_WIDTH * CONST.TILES_HEIGHT
).fill(0);
let TILES_SURROUNDING_VALUE: number[] = [];
let TILES_SURROUNDING_NEIGHBOURS: number[][] = [];

const convertXYtoIndex = (x: number, y: number) => {
  return y * CONST.TILES_WIDTH + x;
};

let indexOfDragon = -1;
// Dragon must be in the center
const POSSIBLE_TILE_FOR_DRAGON = convertXYtoIndex(
  Math.ceil(CONST.TILES_WIDTH / 2) - 1,
  Math.floor(CONST.TILES_HEIGHT / 2) - 1
);

let indexOfDragonEgg = -1;
// Dragon Egg must be next to Dragon
const POSSIBLE_TILES_FOR_DRAGON_EGG = [
  POSSIBLE_TILE_FOR_DRAGON - CONST.TILES_WIDTH - 1,
  POSSIBLE_TILE_FOR_DRAGON - CONST.TILES_WIDTH,
  POSSIBLE_TILE_FOR_DRAGON - CONST.TILES_WIDTH + 1,
  POSSIBLE_TILE_FOR_DRAGON - 1,
  POSSIBLE_TILE_FOR_DRAGON + 1,
  POSSIBLE_TILE_FOR_DRAGON + CONST.TILES_WIDTH - 1,
  POSSIBLE_TILE_FOR_DRAGON + CONST.TILES_WIDTH,
  POSSIBLE_TILE_FOR_DRAGON + CONST.TILES_WIDTH + 1,
];

let indexOfVision = -1;
// Vision must not be on edges nor within 2 tile of the dragon
const POSSIBLE_TILES_FOR_VISION: number[] = [];
for (let i = 0; i < TILES_TO_GENERATE.length; i++) {
  if (
    i % CONST.TILES_WIDTH == 0 ||
    i % CONST.TILES_WIDTH == CONST.TILES_WIDTH - 1
  ) {
    continue;
  }

  if (
    i < CONST.TILES_WIDTH ||
    i >= (CONST.TILES_HEIGHT - 1) * CONST.TILES_WIDTH
  ) {
    continue;
  }

  const differenceX = Math.abs(
    (i % CONST.TILES_WIDTH) - (POSSIBLE_TILE_FOR_DRAGON % CONST.TILES_WIDTH)
  );
  const differenceY = Math.abs(
    Math.floor(i / CONST.TILES_WIDTH) -
      Math.floor(POSSIBLE_TILE_FOR_DRAGON / CONST.TILES_WIDTH)
  );

  if (differenceX <= 2 && differenceY <= 2) continue;

  POSSIBLE_TILES_FOR_VISION.push(i);
}

const generateTilesArray = () => {
  let insertCounter = 0;
  for (let i = 0; i < CONST.TILE_DATA.length; i++) {
    if (CONST.TILE_DATA[i].howManyToGenerate === 0) continue;
    for (let j = 0; j < CONST.TILE_DATA[i].howManyToGenerate; j++) {
      TILES_TO_GENERATE[insertCounter++] = i;
    }
  }
};

const randomizeArray = (array: number[]) => {
  for (let i = 0; i < array.length; i++) {
    const j = Math.floor(Math.random() * array.length);
    const temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
};

const swapTiles = (index1: number, index2: number) => {
  const temp = TILES_TO_GENERATE[index1];
  TILES_TO_GENERATE[index1] = TILES_TO_GENERATE[index2];
  TILES_TO_GENERATE[index2] = temp;
};

const swapTilesAround = () => {
  indexOfDragon = TILES_TO_GENERATE.indexOf(CONST.ID_DRAGON);
  if (indexOfDragon === -1)
    console.error(
      `ERROR: Could not find indexOfDragon in ${TILES_TO_GENERATE}`
    );
  swapTiles(indexOfDragon, POSSIBLE_TILE_FOR_DRAGON);
  indexOfDragon = POSSIBLE_TILE_FOR_DRAGON;

  indexOfDragonEgg = TILES_TO_GENERATE.indexOf(CONST.ID_DRAGON_EGG);
  const newDragonEggIndex = Math.floor(
    Math.random() * POSSIBLE_TILES_FOR_DRAGON_EGG.length
  );
  swapTiles(indexOfDragonEgg, POSSIBLE_TILES_FOR_DRAGON_EGG[newDragonEggIndex]);
  indexOfDragonEgg = POSSIBLE_TILES_FOR_DRAGON_EGG[newDragonEggIndex];

  indexOfVision = TILES_TO_GENERATE.indexOf(CONST.ID_VISION);
  const newVisionIndex = Math.floor(
    Math.random() * POSSIBLE_TILES_FOR_VISION.length
  );
  swapTiles(indexOfVision, POSSIBLE_TILES_FOR_VISION[newVisionIndex]);
  indexOfVision = POSSIBLE_TILES_FOR_VISION[newVisionIndex];
};

const getSurroundingIndexes = (index: number) => {
  const isNotThisOnLeftEdge = () => {
    return index % CONST.TILES_WIDTH > 0;
  };

  const isNotThisOnRightEdge = () => {
    return index % CONST.TILES_WIDTH < CONST.TILES_WIDTH - 1;
  };

  let output: number[] = [];

  if (index >= CONST.TILES_WIDTH) {
    // Check UP+LEFT
    if (isNotThisOnLeftEdge()) output.push(index - CONST.TILES_WIDTH - 1);

    // Check UP
    output.push(index - CONST.TILES_WIDTH);

    // Check UP+RIGHT
    if (isNotThisOnRightEdge()) output.push(index - CONST.TILES_WIDTH + 1);
  }

  // Check LEFT
  if (isNotThisOnLeftEdge()) output.push(index - 1);

  // Check RIGHT
  if (isNotThisOnRightEdge()) output.push(index + 1);

  if (index < (CONST.TILES_HEIGHT - 1) * CONST.TILES_WIDTH) {
    // Check DOWN+LEFT
    if (isNotThisOnLeftEdge()) output.push(index + CONST.TILES_WIDTH - 1);

    // Check DOWN
    output.push(index + CONST.TILES_WIDTH);

    // Check DOWN+RIGHT
    if (isNotThisOnRightEdge()) output.push(index + CONST.TILES_WIDTH + 1);
  }

  return output;
};

const generateSurroundingValues = () => {
  for (let i = 0; i < TILES_TO_GENERATE.length; i++) {
    let mySurroundingTotal = 0;

    const myNeighbours = getSurroundingIndexes(i);
    TILES_SURROUNDING_NEIGHBOURS.push(myNeighbours);

    for (let j = 0; j < myNeighbours.length; j++) {
      const tileToLookAt = myNeighbours[j];
      const tileIdToLookAt = TILES_TO_GENERATE[tileToLookAt];

      if (CONST.TILE_DATA[tileIdToLookAt].energyChange < 0) {
        mySurroundingTotal += Math.abs(
          CONST.TILE_DATA[TILES_TO_GENERATE[myNeighbours[j]]].energyChange
        );
      }
    }

    TILES_SURROUNDING_VALUE.push(mySurroundingTotal);
  }
};

export default function generateTiles() {
  generateTilesArray();
  randomizeArray(TILES_TO_GENERATE);
  swapTilesAround();
  generateSurroundingValues();

  return {
    TILES_TO_GENERATE: TILES_TO_GENERATE,
    TILES_SURROUNDING_VALUE: TILES_SURROUNDING_VALUE,
    TILES_SURROUNDING_NEIGHBOURS: TILES_SURROUNDING_NEIGHBOURS,
  };
}
