// Build a custom hook named useClipboard for copying text to the clipboard. Implement a useClipboard hook 
// that takes a text value as a parameter. Use the document.execCommand API to copy the provided text to the clipboard.

import CopyText from "./CopyText";

export default function Home() {
  return (
    <div>
      <CopyText />
    </div>
  );
}
