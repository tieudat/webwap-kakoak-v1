"use client";

import Image from "next/image";
import React from "react";
import { useRouter } from "next/navigation";

export default function ListGame({
  data,
  headerReq,
}: {
  data: any;
  headerReq: any;
}) {
  const router = useRouter();
  // if (headerReq && headerReq.userId) {
  //   window.localStorage.setItem("headerReq", JSON.stringify(headerReq));
  // }
  if (!data) return;
  const listGame = data.filter((i: any) => i.Category != "Banner");
  const openGame = (game: any) => {
    router.push(
      `/game?gameName=${game.name}&idGame=${game.id}`,
    );
  };
  return (
    <div className="mx-[15px] my-[18px] flex flex-col gap-5">
      <div className="flex flex-col gap-5">
        {listGame?.length
          ? listGame.map((g: any, idx: number) => {
              return (
                <div className="flex flex-col gap-3" key={idx}>
                  <h2 className="text-lg font-bold text-black">{g.Category}</h2>
                  <div className="scroll-hidden flex flex-row flex-nowrap gap-[7px] overflow-x-auto overflow-y-hidden">
                    {g.GameList.map((i: any) => {
                      return (
                        <div
                          className="flex h-[150px] w-[168px] flex-[0_0_auto] flex-col gap-1 overflow-hidden rounded-[10px] bg-[#5FD178]"
                          key={i.id}
                          onClick={() => openGame(i)}
                        >
                          <Image
                            src={i.banner}
                            alt={i.name}
                            width={168}
                            height={117}
                            className="!h-[117px] rounded-b-[10px] object-cover"
                          />
                          <span className="mx-[10.5px] text-base font-semibold text-white">
                            {i.name}
                          </span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              );
            })
          : ""}
      </div>
    </div>
  );
}
