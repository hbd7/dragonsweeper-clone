const EXPERIENCE_TO_NEXT_LEVEL = [4];
for (let i = 5; i < 100; i += 2) {
  EXPERIENCE_TO_NEXT_LEVEL.push(i);
}

const BASE_ENERGY = 5;

export const Player = {
  energy: BASE_ENERGY,
  maxEnergy: BASE_ENERGY,
  level: 0,
  experience: 0,

  loseEnergy(energyLost: number) {
    this.energy += energyLost;
    if (this.energy < 0) {
      // Must be below 0. Being at 0 is not a lose condition
      // Implement lose the game
    }
  },

  isAlive() {
    return this.energy >= 0;
  },

  gainExperience(experienceGain: number) {
    this.experience += experienceGain;
  },

  canLevelUp() {
    return this.experience >= EXPERIENCE_TO_NEXT_LEVEL[this.level];
  },

  heal() {
    this.energy = this.maxEnergy;
  },

  handleLevelUp() {
    this.experience -= EXPERIENCE_TO_NEXT_LEVEL[this.level];
    this.level++;
    this.maxEnergy = BASE_ENERGY + Math.floor(this.level / 2);
    this.heal();
  },
};
