"use client";
import { ColorRing } from "react-loader-spinner";

export default function Loading() {
  return (
    <ColorRing
      visible={true}
      height="80"
      width="80"
      ariaLabel="color-ring-loading"
      wrapperStyle={{}}
      wrapperClass="color-ring-wrapper"
      colors={["#e15b64", "#E99C48", "#FFD030", "#53BBF3", "#75C8E9"]}
    />
  );
}
