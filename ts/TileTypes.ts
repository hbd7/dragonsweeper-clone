import * as CONST from "../constants/Constants.js";

export class TileBasic {
  id: number;
  energyChange: number;
  x: number;
  y: number;
  image: string;
  uniqueId: string;

  isVisible = false;
  canCollectReward = false;
  hasCollectedReward = false;
  isBlockedByGazer = false;
  totalSurroundingDamage = 0;
  surroundingTiles: number[] = [];

  constructor(
    id: number,
    energyChange: number,
    x: number,
    y: number,
    image: string
  ) {
    this.id = id;
    this.energyChange = energyChange;
    this.image = image;
    this.x = x;
    this.y = y;
    this.uniqueId = `(${this.x},${this.y})`;
  }

  // Transform this tile into another tile type
  handleTransform = (id: number, energyChange: number, image: string) => {
    this.id = id;
    this.energyChange = energyChange;
    this.image = image;
    this.isVisible = true;
    this.canCollectReward = true;
    this.hasCollectedReward = false;
  };

  getDefaultReturnOnClick = () => {
    return { id: this.id, energyChange: this.energyChange };
  };

  handleCollectRewardExtended = () => {
    return this.getDefaultReturnOnClick();
  };

  handleCollectReward = () => {
    this.image = "";
    this.canCollectReward = false;
    this.hasCollectedReward = true;
    return this.handleCollectRewardExtended();
  };

  handleActivateExtended = () => {
    return this.getDefaultReturnOnClick();
  };

  handleActivate = () => {
    this.canCollectReward = true;
    this.isVisible = true;
    return this.handleActivateExtended();
  };

  handleClick = () => {
    console.log(`Tile ID ${this.id} clicked.`);

    if (this.hasCollectedReward) return null;

    if (this.isVisible && this.canCollectReward)
      return this.handleCollectReward();

    return this.handleActivate();
  };
}

export class TileRatKing extends TileBasic {
  allTiles: TileBasic[];

  constructor(
    id: number,
    energyChange: number,
    x: number,
    y: number,
    allTiles: TileBasic[]
  ) {
    super(id, energyChange, x, y, CONST.TILE_DATA[CONST.ID_RAT_KING].image);
    this.allTiles = allTiles;
  }

  // Clicking Rat King shows all rats on the board
  handleActivateExtended = () => {
    this.allTiles.forEach((tile) => {
      if (tile.id === CONST.ID_RAT) tile.isVisible = true;
    });

    return this.getDefaultReturnOnClick();
  };
}

export class TileTitan extends TileBasic {
  constructor(id: number, energyChange: number, x: number, y: number) {
    super(id, energyChange, x, y, CONST.TILE_DATA[CONST.ID_TITAN].image);
  }

  // Collecting Reward from Titan changes the tile into an Energy Scroll
  handleCollectRewardExtended = () => {
    const defaultReturn = this.getDefaultReturnOnClick();

    this.handleTransform(
      CONST.ID_ENERGY_SCROLL,
      CONST.TILE_DATA[CONST.ID_ENERGY_SCROLL].energyChange,
      CONST.TILE_DATA[CONST.ID_ENERGY_SCROLL].image
    );

    return defaultReturn;
  };
}

export class TileVision extends TileBasic {
  allTiles: TileBasic[];

  constructor(
    id: number,
    energyChange: number,
    x: number,
    y: number,
    allTiles: TileBasic[]
  ) {
    super(id, energyChange, x, y, CONST.TILE_DATA[CONST.ID_VISION].image);
    this.allTiles = allTiles;
    this.isVisible = true;
  }

  handleCollectRewardExtended = () => {
    const defaultReturn = this.getDefaultReturnOnClick();

    return defaultReturn;
  };
}

export class TileDragon extends TileBasic {
  constructor(id: number, energyChange: number, x: number, y: number) {
    super(id, energyChange, x, y, CONST.TILE_DATA[CONST.ID_DRAGON].image);
    this.isVisible = true;
  }

  handleCollectRewardExtended = () => {
    const defaultReturn = this.getDefaultReturnOnClick();

    // TODO: win
    // Check to make sure not dead first before giving win

    return defaultReturn;
  };
}
