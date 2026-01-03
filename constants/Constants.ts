export const TILES_WIDTH = 13;
export const TILES_HEIGHT = 10;

export const TILE_DATA = Array.from({ length: 50 }, () => ({
  image: "",
  energyChange: 0,
  trackerGroups: [] as number[],
  name: "",
  howManyToGenerate: 0,
}));

let nextId = 1; // Make sure all IDs are unique

export const ID_ENERGY_SCROLL = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_energy_scroll.png";
TILE_DATA[nextId].energyChange = 0;
TILE_DATA[nextId].trackerGroups = [nextId];
TILE_DATA[nextId].name = "Energy Scroll";
TILE_DATA[nextId].howManyToGenerate = 5;

export const ID_VISION = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_vision.png";
TILE_DATA[nextId].energyChange = 0;
TILE_DATA[nextId].trackerGroups = [];
TILE_DATA[nextId].name = "Vision";
TILE_DATA[nextId].howManyToGenerate = 1;

export const ID_VISION_SCROLL = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_vision_scroll.png";
TILE_DATA[nextId].energyChange = 0;
TILE_DATA[nextId].trackerGroups = [];
TILE_DATA[nextId].name = "Vision Scroll";
TILE_DATA[nextId].howManyToGenerate = 1;

export const ID_MINE_SCROLL = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_mine_scroll.png";
TILE_DATA[nextId].energyChange = 0;
TILE_DATA[nextId].trackerGroups = [];
TILE_DATA[nextId].name = "Mine Scroll";

export const ID_RAT = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_rat.png";
TILE_DATA[nextId].energyChange = -1;
TILE_DATA[nextId].trackerGroups = [nextId];
TILE_DATA[nextId].name = "Rat";
TILE_DATA[nextId].howManyToGenerate = 13;

export const ID_BAT = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_bat.png";
TILE_DATA[nextId].energyChange = -2;
TILE_DATA[nextId].trackerGroups = [nextId];
TILE_DATA[nextId].name = "Bat";
TILE_DATA[nextId].howManyToGenerate = 12;

export const ID_SKELETON = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_skeleton.png";
TILE_DATA[nextId].energyChange = -3;
TILE_DATA[nextId].trackerGroups = [nextId];
TILE_DATA[nextId].name = "Skeleton";
TILE_DATA[nextId].howManyToGenerate = 10;

export const ID_GARGOYLE = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_gargoyle.png";
TILE_DATA[nextId].energyChange = -4;
TILE_DATA[nextId].trackerGroups = [nextId];
TILE_DATA[nextId].name = "Gargoyle";
TILE_DATA[nextId].howManyToGenerate = 8;

export const ID_GREEN_SLIME = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_green_slime.png";
TILE_DATA[nextId].energyChange = -5;
TILE_DATA[nextId].trackerGroups = [nextId];
TILE_DATA[nextId].name = "Green Slime";
TILE_DATA[nextId].howManyToGenerate = 8;

export const ID_TROLL = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_troll.png";
TILE_DATA[nextId].energyChange = -6;
TILE_DATA[nextId].trackerGroups = [nextId];
TILE_DATA[nextId].name = "Troll";
TILE_DATA[nextId].howManyToGenerate = 5;

export const ID_KNIGHT = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_knight.png";
TILE_DATA[nextId].energyChange = -7;
TILE_DATA[nextId].trackerGroups = [nextId];
TILE_DATA[nextId].name = "Knight";
TILE_DATA[nextId].howManyToGenerate = 4;

export const ID_PURPLE_SLIME = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_purple_slime.png";
TILE_DATA[nextId].energyChange = -8;
TILE_DATA[nextId].trackerGroups = [nextId];
TILE_DATA[nextId].name = "Purple Slime";
TILE_DATA[nextId].howManyToGenerate = 5;

export const ID_TITAN = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_titan.png";
TILE_DATA[nextId].energyChange = -9;
TILE_DATA[nextId].trackerGroups = [nextId, ID_ENERGY_SCROLL];
TILE_DATA[nextId].name = "Titan";
TILE_DATA[nextId].howManyToGenerate = 2;

export const ID_LICH = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_lich.png";
TILE_DATA[nextId].energyChange = -10;
TILE_DATA[nextId].trackerGroups = [nextId, ID_MINE_SCROLL];
TILE_DATA[nextId].name = "Lich";
TILE_DATA[nextId].howManyToGenerate = 1;

export const ID_RAT_KING = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_rat_king.png";
TILE_DATA[nextId].energyChange = -5;
TILE_DATA[nextId].trackerGroups = [nextId];
TILE_DATA[nextId].name = "Rat King";
TILE_DATA[nextId].howManyToGenerate = 1;

export const ID_GAZER = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_gazer.png";
TILE_DATA[nextId].energyChange = -5;
TILE_DATA[nextId].trackerGroups = [nextId];
TILE_DATA[nextId].name = "Gazer";
TILE_DATA[nextId].howManyToGenerate = 2;

export const ID_WIZARD = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_wizard.png";
TILE_DATA[nextId].energyChange = -1;
TILE_DATA[nextId].trackerGroups = [nextId];
TILE_DATA[nextId].name = "Wizard";
TILE_DATA[nextId].howManyToGenerate = 1;

export const ID_MINE = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_mine.png";
TILE_DATA[nextId].energyChange = -100;
TILE_DATA[nextId].trackerGroups = [nextId];
TILE_DATA[nextId].name = "Mine";
export const REWARD_MINE = 2;
TILE_DATA[nextId].howManyToGenerate = 9;

export const ID_DRAGON = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_dragon.png";
TILE_DATA[nextId].energyChange = -13;
TILE_DATA[nextId].trackerGroups = [];
TILE_DATA[nextId].name = "Dragon";
TILE_DATA[nextId].howManyToGenerate = 1;

export const ID_GNOME = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_gnome.png";
TILE_DATA[nextId].energyChange = 0;
TILE_DATA[nextId].trackerGroups = [nextId];
TILE_DATA[nextId].name = "Gnome";
export const REWARD_GNOME = 10;
TILE_DATA[nextId].howManyToGenerate = 1;

export const ID_CHEST = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_chest.png";
TILE_DATA[nextId].energyChange = 0;
TILE_DATA[nextId].trackerGroups = [nextId];
TILE_DATA[nextId].name = "Chest";
export const REWARD_CHEST = 5;
TILE_DATA[nextId].howManyToGenerate = 3;

export const ID_CHEST_ENERGY = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_chest.png";
TILE_DATA[nextId].energyChange = 0;
TILE_DATA[nextId].trackerGroups = [nextId];
TILE_DATA[nextId].name = "Chest";
TILE_DATA[nextId].howManyToGenerate = 2;

export const ID_MIMIC = ++nextId;
TILE_DATA[nextId].image = TILE_DATA[ID_CHEST].image;
TILE_DATA[nextId].energyChange = -11;
TILE_DATA[nextId].trackerGroups = [nextId];
TILE_DATA[nextId].name = "Mimic";
export const TILE_IMAGE_MIMIC_ACTIVE = "./images/tiles/tile_mimic.png";
export const REWARD_MIMIC = 5;
TILE_DATA[nextId].howManyToGenerate = 1;

export const ID_DRAGON_EGG = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_dragon_egg.png";
TILE_DATA[nextId].energyChange = 0;
TILE_DATA[nextId].trackerGroups = [];
TILE_DATA[nextId].name = "Dragon Egg";
export const REWARD_DRAGON_EGG = 3;
TILE_DATA[nextId].howManyToGenerate = 1;

export const ID_WALL = ++nextId;
TILE_DATA[nextId].image = "./images/tiles/tile_wall.png";
TILE_DATA[nextId].energyChange = 0;
TILE_DATA[nextId].trackerGroups = [];
TILE_DATA[nextId].name = "Wall";
export const REWARD_WALL = 1;
TILE_DATA[nextId].howManyToGenerate = 6;

export const ID_CAN_COLLECT_REWARD = ++nextId;
TILE_DATA[nextId].image = "./images/experience.png";
TILE_DATA[nextId].energyChange = 0;
TILE_DATA[nextId].trackerGroups = [];
TILE_DATA[nextId].name = "Can Collect Reward";
