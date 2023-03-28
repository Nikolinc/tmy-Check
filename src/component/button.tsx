import { ReactElement, JSXElementConstructor, ReactFragment } from "react";
import { alertState } from "../store/alertStore";
import CopyIMG from "../assets/Copy.svg";

export default function Button(props: { text: string }) {
  const Copy = () => {
    navigator.clipboard.writeText(props.text);
    alertState(true);
  };
  return (
    <button
      className="text-[#8F6DD7] flex gap-1"
      onClick={() => {
        Copy();
      }}
    >
      &#32;
      {props.text}
      <img src={CopyIMG} alt="" width="15px" />
    </button>
  );
}
