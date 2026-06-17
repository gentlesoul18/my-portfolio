import { ImageResponse } from "next/og";

export const runtime = "edge";
export const size = { width: 32, height: 32 };
export const contentType = "image/png";

export default function Icon() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          width: "100%",
          height: "100%",
          background: "#14141f",
          padding: 3,
        }}
      >
        <div style={{ width: 12, height: 12, border: "1.5px solid #a855f7", margin: 1 }} />
        <div style={{ width: 12, height: 12, background: "#a855f7", margin: 1 }} />
        <div style={{ width: 12, height: 12, background: "#a855f7", margin: 1 }} />
        <div style={{ width: 12, height: 12, border: "1.5px solid #a855f7", margin: 1 }} />
      </div>
    ),
    { ...size }
  );
}
