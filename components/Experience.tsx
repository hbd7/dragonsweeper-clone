import {
  IMAGE_EXPERIENCE,
  IMAGE_EXPERIENCE_EMPTY,
  IMAGE_EXPERIENCE_EMPTY_NAME,
  IMAGE_EXPERIENCE_NAME,
} from "../constants/ImageData.ts";

export default function Experience({ isFull }: { isFull: boolean }) {
  return (
    <img
      src={isFull ? IMAGE_EXPERIENCE : IMAGE_EXPERIENCE_EMPTY}
      alt={isFull ? IMAGE_EXPERIENCE_NAME : IMAGE_EXPERIENCE_EMPTY_NAME}
    />
  );
}
