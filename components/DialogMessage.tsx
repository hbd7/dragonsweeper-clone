import { useEffect, useRef, useState } from "react";

export default function DialogMessage({
  message,
}: {
  message: "win" | "lose" | null;
}) {
  const dialogRef = useRef<HTMLDialogElement | null>(null);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  useEffect(() => {
    if (message !== null) {
      setIsOpen(true);
    }
  }, [message]);

  const handleRestart = () => {
    window.location.reload();
  };

  const myMessage = message == "win" ? "You Won!" : "You Died";
  const myButtonText = message == "win" ? "Play Again" : "Try Again";

  return (
    <dialog ref={dialogRef} open={isOpen}>
      <h2>{myMessage}</h2>
      <button onClick={handleRestart}>{myButtonText}</button>
    </dialog>
  );
}
