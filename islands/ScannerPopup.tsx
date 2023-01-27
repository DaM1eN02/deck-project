export default function ScannerPopup() {
  return (
    <div
      id="popBg"
      class="hidden h-screen w-screen z-30 fixed top-0 flex justify-center items-center"
      style={"background: rgba(50, 50, 50, 0.8)"}
    >
      <div
        id="pop"
        class="h-1/2 bg-white text-center"
        style={"aspect-ratio:1/1"}
      >
      </div>
    </div>
  );
}
