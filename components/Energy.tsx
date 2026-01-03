import {
  IMAGE_ENERGY,
  IMAGE_ENERGY_EMPTY_NAME,
  IMAGE_ENERGY_EMPTY,
  IMAGE_ENERGY_NAME,
} from "../constants/ImageData";

export default function Energy({ isFull }: { isFull: boolean }) {
  return (
    <img
      src={isFull ? IMAGE_ENERGY : IMAGE_ENERGY_EMPTY}
      alt={isFull ? IMAGE_ENERGY_NAME : IMAGE_ENERGY_EMPTY_NAME}
    />
  );
}
