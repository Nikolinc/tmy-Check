import React from "react";
import Coin from "../assets/Coin.svg";

export default function LoadingPage() {
  return (
    <div className="bg-white">
      <div className="flex h-screen items-center justify-center">
        <div className="animation-pulse flex h-40 w-40 items-center justify-center rounded-full bg-[#6D00F3]">
          <img src={Coin} />
        </div>
      </div>
    </div>
  );
}
