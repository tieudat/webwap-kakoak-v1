"use client";

import React, { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import LoadingCustom from "@/components/ui/LoadingCustom";
import GamePageDetail from "./game";

export default function GamePage() {
  const param = useSearchParams();
  const gameName = param.get("gameName");
  const idGame = param.get("idGame");

  return (
    <Suspense fallback={<LoadingCustom />}>
      <GamePageDetail idGame={idGame} gameName={gameName} />
    </Suspense>
  );
}
