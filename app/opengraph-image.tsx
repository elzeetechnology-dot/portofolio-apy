import { ImageResponse } from "next/og";

export const runtime = "edge";

export const alt = "Ari Puja Yuwana";

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          height: "100%",
          width: "100%",
          display: "flex",
          background:
            "linear-gradient(135deg,#0f172a,#111827,#1e293b)",
          color: "white",
          alignItems: "center",
          justifyContent: "center",
          flexDirection: "column",
        }}
      >
        <div
          style={{
            fontSize: 90,
            fontWeight: 800,
          }}
        >
          APY
        </div>

        <div
          style={{
            fontSize: 42,
            marginTop: 20,
          }}
        >
          Ari Puja Yuwana
        </div>

        <div
          style={{
            fontSize: 24,
            color: "#94a3b8",
            marginTop: 10,
          }}
        >
          IT System Specialist
        </div>
      </div>
    ),
    size
  );
}