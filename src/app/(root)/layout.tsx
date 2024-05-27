"use client";

import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div className="h-full w-full">
      <main className="h-full w-full bg-white">
        <div className="h-full w-full">
          <div className="h-full w-full">{children}</div>
        </div>
      </main>
    </div>
  );
};

export default Layout;
