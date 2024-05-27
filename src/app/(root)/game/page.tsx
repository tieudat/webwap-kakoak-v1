"use client";

import React, { Suspense, useEffect, useState } from "react";
import Header from "@/app/_components/Header";
import { useSearchParams } from "next/navigation";
import Iframe from "react-iframe";
import axios from "axios";
import FrameGame from "@/app/_components/FrameGame";
import LoadingCustom from "@/components/ui/LoadingCustom";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { cn } from "@/lib/utils";
import { getAllCookie, getCookie } from "@/app/utils/cookie";

export default function GamePage() {
  const [dataGame, setDataGame] = useState(null);
  const [loading, setLoading] = useState(false);
  const [isUser, setIsUser] = useState(false);

  const param = useSearchParams();
  const gameName = param.get("gameName");
  const idGame = param.get("idGame");
  // const userId = param.get("userId");
  // const token = param.get("token");

  useEffect(() => {
    const getGameDetail = async () => {
      try {
        setLoading(true);
        // const response = await axios.post(
        //   `http://timordev.ringme.vn/RingMeAPI/gamehtml5/playGameTest?msisdn=0123456789&gameId=${idGame}&language=en&timestamp=${new Date().getTime()}&security=`,
        // );
        // if (response.status === 200) {
        //   setDataGame(response.data.data);
        // }
        const header = new Headers();
        // header.append("Origin", "http://192.168.1.137:3000");
        const response = await fetch(
          `https://kakoakgames.tls.tl/RingMeAPI/gamehtml5/playGameTest?msisdn=0123456789&gameId=${idGame}&language=en&timestamp=${new Date().getTime()}&security=`,
          { method: "POST", headers: header },
        );
        if (response) {
          const { data } = await response.json();
          // console.log("data", data)
          setDataGame(data);
        }
      } catch (err) {
        console.log(err);
      } finally {
        setLoading(false);
      }
    };
    // if (getCookie("userId") && getCookie("token")) {
    //   getGameDetail();
    // } else {
    //   setIsUser(true);
    // }
    getGameDetail();
  }, [idGame]);

  return (
    <Suspense>
      <div className="h-dvh w-full">
        <div className="flex h-full w-full flex-col">
          <Header titleName={gameName} isGame={true} />
          {loading && <LoadingCustom />}
          <div className="flex h-[calc(100%-96px)] w-full items-center justify-center">
            {!loading && !isUser && (
              <div className="h-full w-full">
                <FrameGame dataGame={dataGame} />
              </div>
            )}

            {isUser && (
              <Alert className={cn(`m-4`)}>
                <AlertTitle>Xác thực thất bại</AlertTitle>
                <AlertDescription>
                  Bạn không thể chơi game nếu không xác thực thành công!
                </AlertDescription>
              </Alert>
            )}
          </div>
        </div>
      </div>
    </Suspense>
  );
}
