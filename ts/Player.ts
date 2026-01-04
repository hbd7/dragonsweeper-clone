import type { Dispatch, SetStateAction } from "react";

export const EXPERIENCE_TO_NEXT_LEVEL = [4];
const MAX_EXPERIENCE_TO_NEXT_LEVEL = 35;
const MAX_ENERGY_POSSIBLE = 15;
for (let i = 5; i < 100; i += 2) {
  EXPERIENCE_TO_NEXT_LEVEL.push(Math.min(i, MAX_EXPERIENCE_TO_NEXT_LEVEL));
}

export const BASE_ENERGY = 5;

export type SET_FUNCTION = Dispatch<SetStateAction<number>>;
export type SET_FUNCTIONS = {
  funcSetEnergy: SET_FUNCTION;
  funcSetEnergyMax: SET_FUNCTION;
  funcSetExperience: SET_FUNCTION;
  funcSetExperienceMax: SET_FUNCTION;
};
export type PLAYER_DATA = {
  energy: number;
  energyMax: number;
  experience: number;
  experienceMax: number;
};

export default class Player {
  energy = BASE_ENERGY;
  maxEnergy = BASE_ENERGY;
  level = 0;
  experience = 0;
  maxExperience = EXPERIENCE_TO_NEXT_LEVEL[0];

  #funcSetEnergy;
  #funcSetEnergyMax;
  #funcSetExperience;
  #funcSetExperienceMax;

  constructor({
    funcSetEnergy: funcSetEnergy,
    funcSetEnergyMax: funcSetEnergyMax,
    funcSetExperience: funcSetExperience,
    funcSetExperienceMax: funcSetExperienceMax,
  }: SET_FUNCTIONS) {
    this.#funcSetEnergy = funcSetEnergy;
    this.#funcSetEnergyMax = funcSetEnergyMax;
    this.#funcSetExperience = funcSetExperience;
    this.#funcSetExperienceMax = funcSetExperienceMax;
  }

  setEnergy(newEnergy: number) {
    this.energy = newEnergy;
    this.#funcSetEnergy(newEnergy);

    return this;
  }

  setEnergyMax(newEnergyMax: number) {
    this.maxEnergy = newEnergyMax;
    this.#funcSetEnergyMax(newEnergyMax);
    return this;
  }

  loseEnergy(energyLost: number) {
    this.setEnergy(this.energy + energyLost);

    if (this.energy < 0) {
      // Must be below 0. Being at 0 is not a lose condition
      // Implement lose the game
    }
  }

  isAlive() {
    return this.energy >= 0;
  }

  setExperience(newExperience: number) {
    this.experience = newExperience;
    this.#funcSetExperience(newExperience);
    return this;
  }

  setExperienceMax(newExperienceMax: number) {
    this.maxExperience = newExperienceMax;
    this.#funcSetExperienceMax(newExperienceMax);
    return this;
  }

  gainExperience(experienceGain: number) {
    this.setExperience(this.experience + Math.abs(experienceGain));
    return this;
  }

  canLevelUp() {
    return this.experience >= EXPERIENCE_TO_NEXT_LEVEL[this.level];
  }

  heal() {
    this.setEnergy(this.maxEnergy);
    return this;
  }

  handleLevelUp() {
    this.setExperience(this.experience - EXPERIENCE_TO_NEXT_LEVEL[this.level]);
    this.level++;
    this.setExperienceMax(EXPERIENCE_TO_NEXT_LEVEL[this.level]);

    this.setEnergyMax(
      BASE_ENERGY + Math.min(Math.floor(this.level / 2), MAX_ENERGY_POSSIBLE)
    );
    this.heal();
  }
}
