import LoadingCustom from "@/components/ui/LoadingCustom";
import React from "react";
import Iframe from "react-iframe";

export default function FrameGame({ dataGame }: { dataGame: any }) {
  if (!dataGame) return <LoadingCustom />;

  return (
    <div className="h-full w-full">
      <Iframe
        url={dataGame.link}
        // url="https://id.yugih5.com/?"
        position="relative"
        id="myId"
        className="h-full w-full"
        loading="auto"
        onLoad={() => console.log("loading")}
      />
      {/* <iframe
        src={dataGame.link}
        loading="lazy"
        className="h-full w-full"
        onError={(e) => alert(e)}
      /> */}
    </div>
  );
}
