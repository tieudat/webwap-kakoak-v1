"use client";
import React from "react";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function Header({
  titleName,
  isGame,
}: {
  titleName: string | any;
  isGame: boolean;
}) {
  const router = useRouter();

  const back = () => {
    router.back();
    setTimeout(() => {
      router.refresh();
    }, 100);
  };

  return (
    <div className="relative flex h-auto min-h-[96px] w-full items-center justify-center bg-[#47EF6D] bg-[url('/images/ic_bg_header.png')]">
      {isGame ? (
        <div onClick={() => back()} className="absolute left-4">
          <Image src="/images/ic_back.svg" width={40} height={40} alt="back" />
        </div>
      ) : (
        ``
      )}
      <span className="text-2xl font-bold text-white">{titleName}</span>
      {!isGame && (
        <div
          onClick={() => router.push("/search")}
          className="absolute right-5"
        >
          <Image
            src="/images/ic_search.svg"
            width={21}
            height={21}
            alt="Search Game"
            className=""
          />
        </div>
      )}
    </div>
  );
}
