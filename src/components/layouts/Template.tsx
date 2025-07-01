import type React from "react";
import Background from "../common/Background";
import Header from "./Header";

const Template = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <div id="template-container">
        <Background />
        <Header />
        <main className="">{children}</main>
      </div>
    </>
  );
};

export default Template;
