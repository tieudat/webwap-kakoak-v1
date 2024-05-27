"use client";

import Header from "@/app/_components/Header";
import { getAllCookie } from "@/app/utils/cookie";
import Image from "next/image";
import { useRouter } from "next/navigation";
import React, { useEffect, useState } from "react";

export default function SearchPage() {
  const router = useRouter();
  const [key, setKey] = useState("");
  const [dataSearch, setDataSearch] = useState([]);


  console.log("Searching...", getAllCookie());

  const onInput = (e: any) => {
    if (!e.target.value.trim().length) {
      setDataSearch([]);
    }
    setKey(e.target.value);
  };

  const openGame = (game: any) => {
    router.push(`/game?gameName=${game.name}&idGame=${game.id}`);
  };

  useEffect(() => {
    const searchGame = async () => {
      const formData = new FormData();
      formData.append("key", key);
      formData.append("page", "0");
      formData.append("size", "20");

      const response = await fetch(
        `https://kakoakgames.tls.tl/ringme-solr-api/game/search`,
        { method: "POST", body: formData },
      );

      if (response) {
        const { data } = await response.json();
        setDataSearch(data);
        console.log(data);
      }
    };
    if (key.length) {
      searchGame();
    }
  }, [key]);
  return (
    <div>
      <Header titleName="Search Game" isGame={true} />
      <div className="flex h-full w-full flex-col items-center justify-center">
        <div className="relative flex h-auto w-full items-center justify-center bg-white p-4">
          <input
            type="search"
            autoComplete="off"
            name="text"
            className="h-10 rounded-2xl border border-[#ccc] bg-white p-4 outline-none transition-all focus:bg-white xs:w-[250px] sm:w-[500px]"
            placeholder="Enter name of the game ..."
            onChange={(e) => onInput(e)}
          />
        </div>

        {!dataSearch && (
          <div className="flex h-full w-full items-center justify-center bg-white">
            No result!
          </div>
        )}
        {dataSearch ? (
          <div className="flex h-auto w-full flex-wrap items-center justify-center gap-3 bg-white">
            {dataSearch.map((d: any) => {
              return (
                <div key={d.id} className="flex flex-row">
                  <div
                    className="flex h-[150px] w-[168px] flex-col gap-1 overflow-hidden rounded-[10px] bg-[#5FD178]"
                    onClick={() => openGame(d)}
                  >
                    <Image
                      src={d.icon}
                      alt={d.name}
                      width={168}
                      height={117}
                      className="!h-[117px] rounded-b-[10px] object-cover"
                    />
                    <span className="mx-[10.5px] text-base font-semibold text-white">
                      {d.name}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        ) : null}
      </div>
    </div>
  );
}
