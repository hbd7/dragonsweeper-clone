export const TRACKER_GROUPS: number[][] = Array.from({ length: 50 }, () => []);

let nextId = 1; // make sure all IDs are unique

export const ID_ENERGY_SCROLL = nextId++;
export const TILE_IMAGE_ENERGY_SCROLL =
  "../images/tiles/tile_energy_scroll.png";
TRACKER_GROUPS[ID_ENERGY_SCROLL] = [ID_ENERGY_SCROLL];

export const ID_VISION = nextId++;
export const TILE_IMAGE_VISION = "../images/tiles/tile_vision.png";
TRACKER_GROUPS[ID_VISION] = [];

export const ID_VISION_SCROLL = nextId++;
export const TILE_IMAGE_VISION_SCROLL =
  "../images/tiles/tile_vision_scroll.png";
TRACKER_GROUPS[ID_VISION_SCROLL] = [];

export const ID_MINE_SCROLL = nextId++;
export const TILE_IMAGE_MINE_SCROLL = "../images/tiles/tile_mine_scroll.png";
TRACKER_GROUPS[ID_MINE_SCROLL] = [];

export const ID_RAT = nextId++;
export const TILE_IMAGE_RAT = "../images/tiles/tile_rat.png";
TRACKER_GROUPS[ID_RAT] = [ID_RAT];

export const ID_BAT = nextId++;
export const TILE_IMAGE_BAT = "../images/tiles/tile_bat.png";
TRACKER_GROUPS[ID_BAT] = [ID_BAT];

export const ID_SKELETON = nextId++;
export const TILE_IMAGE_SKELETON = "../images/tiles/tile_skeleton.png";
TRACKER_GROUPS[ID_SKELETON] = [ID_SKELETON];

export const ID_GARGOYLE = nextId++;
export const TILE_IMAGE_GARGOYLE = "../images/tiles/tile_gargoyle.png";
TRACKER_GROUPS[ID_GARGOYLE] = [ID_GARGOYLE];

export const ID_GREEN_SLIME = nextId++;
export const TILE_IMAGE_GREEN_SLIME = "../images/tiles/tile_green_slime.png";
TRACKER_GROUPS[ID_GREEN_SLIME] = [ID_GREEN_SLIME];

export const ID_TROLL = nextId++;
export const TILE_IMAGE_TROLL = "../images/tiles/tile_troll.png";
TRACKER_GROUPS[ID_TROLL] = [ID_TROLL];

export const ID_KNIGHT = nextId++;
export const TILE_IMAGE_KNIGHT = "../images/tiles/tile_knight.png";
TRACKER_GROUPS[ID_KNIGHT] = [ID_KNIGHT];

export const ID_PURPLE_SLIME = nextId++;
export const TILE_IMAGE_PURPLE_SLIME = "../images/tiles/tile_purple_slime.png";
TRACKER_GROUPS[ID_PURPLE_SLIME] = [ID_PURPLE_SLIME];

export const ID_TITAN = nextId++;
export const TILE_IMAGE_TITAN = "../images/tiles/tile_titan.png";
TRACKER_GROUPS[ID_TITAN] = [ID_TITAN, ID_ENERGY_SCROLL];

export const ID_LICH = nextId++;
export const TILE_IMAGE_LICH = "../images/tiles/tile_lich.png";
TRACKER_GROUPS[ID_LICH] = [ID_LICH, ID_MINE_SCROLL];

export const ID_RAT_KING = nextId++;
export const TILE_IMAGE_RAT_KING = "../images/tiles/tile_rat_king.png";
TRACKER_GROUPS[ID_RAT_KING] = [ID_RAT_KING];

export const ID_GAZER = nextId++;
export const TILE_IMAGE_GAZER = "../images/tiles/tile_gazer.png";
TRACKER_GROUPS[ID_GAZER] = [ID_GAZER];

export const ID_WIZARD = nextId++;
export const TILE_IMAGE_WIZARD = "../images/tiles/tile_wizard.png";
TRACKER_GROUPS[ID_WIZARD] = [ID_WIZARD];

export const ID_MINE = nextId++;
export const TILE_IMAGE_MINE = "../images/tiles/tile_mine.png";
export const TILE_IMAGE_MINE_INACTIVE =
  "../images/tiles/tile_mine_inactive.png";
TRACKER_GROUPS[ID_MINE] = [ID_MINE];

export const ID_DRAGON = nextId++;
export const TILE_IMAGE_DRAGON = "../images/tiles/tile_dragon.png";
TRACKER_GROUPS[ID_DRAGON] = [];

export const ID_GNOME = nextId++;
export const TILE_IMAGE_GNOME = "../images/tiles/tile_gnome.png";
TRACKER_GROUPS[ID_GNOME] = [ID_GNOME];

export const ID_CHEST = nextId++;
export const TILE_IMAGE_CHEST = "../images/tiles/tile_chest.png";
TRACKER_GROUPS[ID_CHEST] = [ID_CHEST];

export const ID_MIMIC = nextId++;
export const TILE_IMAGE_MIMIC = TILE_IMAGE_CHEST;
export const TILE_IMAGE_MIMIC_ACTIVE = "../images/tiles/tile_mimic.png";
TRACKER_GROUPS[ID_MIMIC] = [ID_MIMIC];

export const ID_DRAGON_EGG = nextId++;
export const TILE_IMAGE_DRAGON_EGG = "../images/tiles/tile_dragon_egg.png";
TRACKER_GROUPS[ID_DRAGON_EGG] = [];
