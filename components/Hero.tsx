import Player, { type PLAYER_DATA } from "../ts/Player.ts";
import {
  IMAGE_HERO,
  IMAGE_HERO_LEVEL,
  IMAGE_HERO_NAME,
  IMAGE_HERO_PANIC,
} from "../constants/ImageData.ts";

export default function Hero({
  playerData,
  player,
}: {
  playerData: PLAYER_DATA;
  player: Player;
}) {
  let outputImage = IMAGE_HERO;
  let canLevelUp = playerData.experience >= playerData.experienceMax;

  if (playerData.energy === 0) outputImage = IMAGE_HERO_PANIC;
  if (canLevelUp) outputImage = IMAGE_HERO_LEVEL;

  const handleClick = () => {
    if (player.canLevelUp()) {
      player.handleLevelUp();
    }
  };

  return (
    <div className="hero-bar">
      <img
        src={outputImage}
        alt={IMAGE_HERO_NAME}
        className={canLevelUp ? "can-level-up" : undefined}
        onClick={handleClick}
      />
    </div>
  );
}
