import { ReactElement, JSXElementConstructor, ReactFragment } from "react";
import { alertState } from "../store/alertStore";
import CopyIMG from "../assets/Copy.svg";

function placeInCenter(str: string, substr: string) {
  let index = (str.length - substr.length) / 2;
  return str.substr(0, index) + substr + str.substr(index + substr.length);
}

export default function Button(props: { text: string; size: string }) {
  let text: string = props.text;
  let size: string = props.size;

  if (text === undefined) {
    text = " ";
  }

  if (size === undefined) {
    size = "15px";
  }

  const Copy = () => {
    navigator.clipboard.writeText(text);
    alertState(true);
  };
  return (
    <button
      className="text-[#8F6DD7] flex gap-1 hyphens-manual justify-start mr-24 "
      onClick={() => {
        Copy();
      }}
    >
      <p className="break-all lg:w-full text-start">{text}</p>
      <img src={CopyIMG} className="mt-[3px]" alt="" width={size} />
    </button>
  );
}
