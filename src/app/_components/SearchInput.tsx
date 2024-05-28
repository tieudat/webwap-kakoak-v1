"use client"

import axios from "axios";
import Image from "next/image";
import React, { useEffect, useState } from "react";

export default function SearchInput({
  closeSearch,
}: {
  closeSearch: Function;
}) {
  const [key, setKey] = useState("");
  const [dataSearch, setDataSearch] = useState();

  const onInput = (e: any) => {
    setKey(e.target.value);
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
      }
    };

    searchGame();
  }, [key]);

  return (
    <div className="animate-fade-down absolute z-10 flex h-full w-full items-center justify-center bg-[#47EF6D]">
      <div className="relative flex h-full w-full items-center justify-center">
        <Image
          src="/images/ic_back.svg"
          width={30}
          height={30}
          alt="Back"
          className="absolute left-3"
          onClick={() => closeSearch(false)}
        />
        <input
          type="text"
          autoComplete="off"
          name="text"
          className="h-10 rounded-2xl border-none bg-white p-4 outline-none transition-all focus:bg-white xs:w-[250px] sm:w-[500px]"
          placeholder="Enter name of the game ..."
          onChange={(e) => onInput(e)}
        />
      </div>
    </div>
  );
}
