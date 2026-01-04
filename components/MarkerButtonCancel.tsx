import type { Dispatch, SetStateAction } from "react";

export default function MarkerButtonCancel({
  setMarkerButtonListIndex,
}: {
  setMarkerButtonListIndex: Dispatch<SetStateAction<number | null>>;
}) {
  const handleClick = () => {
    if (setMarkerButtonListIndex !== null) setMarkerButtonListIndex(null);
  };

  return (
    <div className="marker-button button-cancel" onClick={handleClick}>
      Cancel
    </div>
  );
}
