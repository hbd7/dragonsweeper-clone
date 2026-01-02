import * as CONST from "../constants/Constants.js";

export class TileType {
  id: number;
  energyChange: number;
  x: number;
  y: number;
  image: string;
  isVisible = false;
  canCollectReward = false;
  hasCollectedReward = false;

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
    console.log(`TileType ${this.id} clicked.`);

    if (this.hasCollectedReward) return null;

    if (this.isVisible && this.canCollectReward)
      return this.handleCollectReward();

    return this.handleActivate();
  };
}

export class TileRatKing extends TileType {
  allTiles: TileType[];

  constructor(
    id: number,
    energyChange: number,
    x: number,
    y: number,
    allTiles: TileType[]
  ) {
    super(id, energyChange, x, y, CONST.TILE_IMAGE_RAT_KING);
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

export class TileTitan extends TileType {
  constructor(id: number, energyChange: number, x: number, y: number) {
    super(id, energyChange, x, y, CONST.TILE_IMAGE_TITAN);
  }

  // Collecting Reward from Titan changes the tile into an Energy Scroll
  handleCollectRewardExtended = () => {
    const defaultReturn = this.getDefaultReturnOnClick();

    this.handleTransform(
      CONST.ID_ENERGY_SCROLL,
      CONST.ENERGY_CHANGE_ENERGY_SCROLL,
      CONST.TILE_IMAGE_ENERGY_SCROLL
    );

    return defaultReturn;
  };
}
