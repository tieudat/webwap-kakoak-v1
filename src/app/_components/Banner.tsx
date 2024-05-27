"use client";
import { cn } from "@/lib/utils";
import React from "react";
import { Slide } from "react-slideshow-image";
import { useRouter } from "next/navigation";
import "react-slideshow-image/dist/styles.css";
import { getAllCookie, setCookie } from "../utils/cookie";

export default function Banner({
  data,
  headerReq,
}: {
  data: any;
  headerReq: any;
}) {
  const router = useRouter();

  if (headerReq && headerReq.userId) {
    setCookie("userId", headerReq.userId);
    setCookie("token", headerReq.token);
    setCookie("platform", headerReq.platform);
    setCookie("version", headerReq.version);
  }

  if (!data) return;
  const { viewType, GameList } = data.filter(
    (i: any) => i.Category == "Banner",
  )[0];

  const openGame = (game: any) => {
    router.push(
      `/game?gameName=${game.name}&idGame=${game.id}`,
    );
  };

  return (
    <div className="slide-container mx-4 my-5 overflow-hidden rounded-lg">
      <Slide
        infinite={true}
        indicators={true}
        arrows={false}
        autoplay={true}
        duration={5000}
      >
        {GameList.map((slideImage: any, index: number) => (
          <div key={index}>
            <div
              onClick={() => openGame(slideImage)}
              className={cn(
                `flex h-[120px] items-center justify-center rounded-lg bg-cover bg-center bg-no-repeat`,
              )}
              style={{ backgroundImage: `url('${slideImage.banner}')` }}
            ></div>
          </div>
        ))}
      </Slide>
    </div>
  );
}
