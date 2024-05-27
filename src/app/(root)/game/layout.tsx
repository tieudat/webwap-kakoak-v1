import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
    return (
      <div>
        <main className="h-full w-full bg-white">
          <div className="">
            <div className="">{children}</div>
          </div>
        </main>
      </div>
    );
  };
  
  export default Layout;
  