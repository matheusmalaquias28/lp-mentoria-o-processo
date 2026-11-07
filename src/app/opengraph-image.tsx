import { ImageResponse } from "next/og";

export const alt = "Mentoria O PROCESSO · Lucre com ofertas low ticket";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: 72,
          background: "#0a0a0a",
          color: "#fff",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: 16, fontSize: 30, fontWeight: 800 }}>
          <div
            style={{
              width: 44,
              height: 44,
              borderRadius: 10,
              background: "#e8141c",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 26,
            }}
          >
            O
          </div>
          PROCESSO
        </div>
        <div style={{ display: "flex", flexDirection: "column" }}>
          <div style={{ fontSize: 108, fontWeight: 800, lineHeight: 0.95, letterSpacing: -5 }}>Lucre com ofertas</div>
          <div style={{ display: "flex", fontSize: 108, fontWeight: 800, lineHeight: 0.95, letterSpacing: -5 }}>
            low ticket<span style={{ color: "#e8141c" }}>.</span>
          </div>
          <div style={{ marginTop: 28, fontSize: 32, color: "#a3a3a3" }}>
            Sem aparecer, sem ser especialista e sem copiar ninguém.
          </div>
        </div>
        <div style={{ display: "flex", gap: 28, fontSize: 24, color: "#a3a3a3" }}>
          <span>Heitor Nogueira</span>
          <span style={{ color: "#e8141c" }}>·</span>
          <span>+800 executores</span>
          <span style={{ color: "#e8141c" }}>·</span>
          <span>Acesso vitalício</span>
        </div>
      </div>
    ),
    size,
  );
}
