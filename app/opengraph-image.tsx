import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Barakat Oyebamiji — Backend Engineer";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OG() {
  return new ImageResponse(
    (
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          width: "100%",
          height: "100%",
          background: "#14141f",
          padding: "80px",
          fontFamily: "monospace",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16 }}>
          <div style={{ display: "flex", flexWrap: "wrap", width: 40, height: 40 }}>
            <div style={{ width: 18, height: 18, border: "2px solid #a855f7", margin: 1 }} />
            <div style={{ width: 18, height: 18, background: "#a855f7", margin: 1 }} />
            <div style={{ width: 18, height: 18, background: "#a855f7", margin: 1 }} />
            <div style={{ width: 18, height: 18, border: "2px solid #a855f7", margin: 1 }} />
          </div>
          <span style={{ color: "#e8e8f0", fontSize: 28, fontWeight: 700, letterSpacing: 4 }}>
            BARAKAT
          </span>
        </div>

        <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
          <h1
            style={{
              color: "#e8e8f0",
              fontSize: 96,
              fontWeight: 700,
              lineHeight: 1.1,
              margin: 0,
              letterSpacing: -2,
            }}
          >
            Barakat is a{" "}
            <span style={{ color: "#a855f7" }}>backend</span>
            <br />& <span style={{ color: "#a855f7" }}>software</span> engineer
          </h1>
          <p style={{ color: "#6b6b8a", fontSize: 28, margin: 0, maxWidth: 900 }}>
            4 years building scalable APIs and cloud solutions for start-ups and businesses.
          </p>
        </div>

        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            color: "#6b6b8a",
            fontSize: 20,
          }}
        >
          <span>barakat.dev</span>
          <span>oyebamijibarakat7@gmail.com</span>
        </div>
      </div>
    ),
    { ...size }
  );
}
