import { useMemo, useState } from "react";

type Row = {
  year: string;
  product: string;
  player: string;
  rc: boolean;
  auto: boolean;
  serial: string;
  batch: string;
};

const SAMPLES: Row[] = [
  { year: "2024", product: "FLAWLESS DRAFT SIGNATURES GOLD", player: "ENRIQUE BRADFIELD JR.", rc: false, auto: true, serial: "/10", batch: "Q4450" },
  { year: "2025", product: "BOWMAN CHROME ROY FAVORITES RED DIE CUT", player: "DREW ROMO", rc: true, auto: true, serial: "/5", batch: "Q4450" },
  { year: "2025", product: "BOWMAN CHROME 1ST PURPLE REFRACTOR", player: "VICTOR RODRIGUES", rc: false, auto: true, serial: "/250", batch: "Q4450" },
  { year: "2025", product: "BOWMAN CHROME ROOKIES AUTOGRAPH REFRACTOR", player: "COBY MAYO", rc: true, auto: true, serial: "/499", batch: "Q4450" },
  { year: "2025", product: "BOWMAN VETERANS BLUE BORDER PAPER DODGERS", player: "SHOHEI OHTANI", rc: false, auto: false, serial: "/150", batch: "Q4450" },
  { year: "2025", product: "BOWMAN CHROME 1ST ORANGE SHIMMER REFRACTOR", player: "ASHLY ANDUJAR", rc: false, auto: false, serial: "/25", batch: "Q4450" },
  { year: "2025", product: "BOWMAN CHROME YELLOW WAVE REFRACTOR MARINERS", player: "COLT EMERSON", rc: false, auto: false, serial: "/75", batch: "Q4450" },
  { year: "2025", product: "BOWMAN CHROME 1ST GOLD GEOMETRIC REFRACTOR", player: "HYUN-SEOK JANG", rc: false, auto: false, serial: "/50", batch: "Q4450" },
];

function buildTitle(r: Row) {
  return [
    r.year,
    r.product,
    r.player,
    r.rc ? "RC" : "",
    r.auto ? "AUTO" : "",
    r.serial,
    r.batch,
  ]
    .filter(Boolean)
    .join(" ")
    .replace(/\s+/g, " ")
    .trim()
    .toUpperCase();
}

// ── Excel colour tokens ──────────────────────────────────────────────────────
const XL = {
  green:      "#217346",
  greenDark:  "#1a5c38",
  greenLight: "#e8f4ec",
  greenMid:   "#c6e2d0",
  gridLine:   "#d0d0d0",
  gridFaint:  "#e8e8e8",
  rowHover:   "#f5fbf7",
  rowAlt:     "#f9fdf9",
  headerBg:   "#f0f0f0",
  formulaBg:  "#f3f3f3",
  previewBg:  "#f9f9f9",
  noteBg:     "#fffde6",
  noteAccent: "#d4a017",
  text:       "#1a1a1a",
  textMuted:  "#555",
  white:      "#ffffff",
};

// ── Sub-components ───────────────────────────────────────────────────────────

function Ribbon() {
  return (
    <div style={{ background: XL.green, padding: "6px 12px", display: "flex", alignItems: "center", gap: 10, borderRadius: "6px 6px 0 0" }}>
      <span style={{ color: XL.white, fontSize: 13, fontWeight: 700, letterSpacing: "0.02em" }}>
        📄 TitleBuilder.xlsx
      </span>
      {["File", "Home", "Insert", "Formulas", "Data"].map((t) => (
        <span key={t} style={{ color: "rgba(255,255,255,0.75)", fontSize: 11, padding: "2px 8px", cursor: "default", borderRadius: 3 }}>
          {t}
        </span>
      ))}
    </div>
  );
}

function FormulaBar({ formula }: { formula: string }) {
  return (
    <div style={{ background: XL.formulaBg, borderBottom: `1px solid ${XL.gridLine}`, padding: "4px 8px", display: "flex", alignItems: "center", gap: 8 }}>
      <span style={{ fontSize: 12, color: XL.textMuted, minWidth: 52, padding: "2px 6px", border: `1px solid #aaa`, background: XL.white, textAlign: "center", borderRadius: 2, fontFamily: "Calibri, Segoe UI, sans-serif" }}>
        A2
      </span>
      <span style={{ color: XL.green, fontSize: 12, fontWeight: 700 }}>fx</span>
      <span style={{ fontSize: 11, color: XL.textMuted, fontFamily: "Consolas, monospace", flex: 1, padding: "2px 6px", border: `1px solid ${XL.gridLine}`, background: XL.white, borderRadius: 2, overflow: "hidden", textOverflow: "ellipsis", whiteSpace: "nowrap" }}>
        {formula}
      </span>
    </div>
  );
}

const COL_WIDTHS = "44px 100px 1fr 120px 60px 60px 70px 78px";

function ColHeaders() {
  return (
    <div style={{ display: "grid", gridTemplateColumns: COL_WIDTHS, borderBottom: `1px solid ${XL.gridLine}` }}>
      <CH />
      {["A", "B", "C", "D", "E", "F", "G"].map((l) => <CH key={l}>{l}</CH>)}
    </div>
  );
}

function CH({ children }: { children?: React.ReactNode }) {
  return (
    <div style={{ background: XL.headerBg, borderRight: `1px solid ${XL.gridLine}`, padding: "3px 6px", fontSize: 11, color: "#444", textAlign: "center", fontWeight: 600, fontFamily: "Calibri, Segoe UI, sans-serif" }}>
      {children}
    </div>
  );
}

function HeaderRow() {
  const headers = ["YEAR", "PRODUCT / SET", "PLAYER", "SERIAL", "RC", "AUTO", "BATCH"];
  return (
    <div style={{ display: "grid", gridTemplateColumns: COL_WIDTHS, borderBottom: `2px solid ${XL.green}` }}>
      <div style={{ background: XL.greenDark, borderRight: `1px solid ${XL.greenDark}` }} />
      {headers.map((h) => (
        <div key={h} style={{ background: XL.green, color: XL.white, padding: "5px 7px", fontSize: 11, fontWeight: 700, borderRight: `1px solid ${XL.greenDark}`, letterSpacing: "0.03em", textAlign: ["SERIAL","RC","AUTO","BATCH"].includes(h) ? "center" : "left", fontFamily: "Calibri, Segoe UI, sans-serif" }}>
          {h}
        </div>
      ))}
    </div>
  );
}

function RowNum({ n }: { n: number }) {
  return (
    <div style={{ background: XL.headerBg, borderRight: `1px solid ${XL.gridLine}`, padding: "3px 6px", fontSize: 11, color: "#444", textAlign: "center", fontFamily: "Calibri, Segoe UI, sans-serif" }}>
      {n}
    </div>
  );
}

function XLCell({ children, mono, center, style }: { children?: React.ReactNode; mono?: boolean; center?: boolean; style?: React.CSSProperties }) {
  return (
    <div style={{ borderRight: `1px solid ${XL.gridFaint}`, padding: "3px 7px", color: XL.text, fontSize: 12, whiteSpace: "nowrap", overflow: "hidden", textOverflow: "ellipsis", fontFamily: mono ? "Consolas, monospace" : "Calibri, Segoe UI, sans-serif", textAlign: center ? "center" : "left", ...style }}>
      {children}
    </div>
  );
}

const xlInputCls: React.CSSProperties = {
  width: "100%",
  border: "none",
  background: "transparent",
  fontFamily: "Calibri, Segoe UI, sans-serif",
  fontSize: 12,
  color: XL.text,
  outline: "none",
  padding: 0,
};

export function TitleBuilder() {
  const [row, setRow] = useState<Row>({
    year: "2025",
    product: "BOWMAN CHROME 1ST PURPLE REFRACTOR",
    player: "VICTOR RODRIGUES",
    rc: false,
    auto: true,
    serial: "/250",
    batch: "Q4450",
  });

  const title = useMemo(() => buildTitle(row), [row]);
  const len = title.length;
  const over = len > 76;

  const formula = `=CONCAT(A2," ",B2," ",C2,IF(E2," RC",""),IF(F2," AUTO","")," ",D2," ",G2)`;

  return (
    <div style={{ border: `1px solid ${XL.green}`, borderRadius: 6, overflow: "hidden", fontFamily: "Calibri, Segoe UI, sans-serif" }}>

      <Ribbon />
      <FormulaBar formula={formula} />

      <div style={{ background: XL.white }}>
        <ColHeaders />
        <HeaderRow />

        {/* ── Live Input Row ── */}
        <div style={{ display: "grid", gridTemplateColumns: COL_WIDTHS, borderBottom: `1px solid ${XL.gridLine}`, background: XL.greenLight }}>
          <RowNum n={2} />
          <XLCell>
            <input
              style={xlInputCls}
              value={row.year}
              onChange={(e) => setRow({ ...row, year: e.target.value })}
            />
          </XLCell>
          <XLCell>
            <input
              style={xlInputCls}
              value={row.product}
              onChange={(e) => setRow({ ...row, product: e.target.value })}
            />
          </XLCell>
          <XLCell>
            <input
              style={xlInputCls}
              value={row.player}
              onChange={(e) => setRow({ ...row, player: e.target.value })}
            />
          </XLCell>
          <XLCell center>
            <input
              style={{ ...xlInputCls, textAlign: "center", width: 60 }}
              value={row.serial}
              onChange={(e) => setRow({ ...row, serial: e.target.value })}
            />
          </XLCell>
          <XLCell center>
            <input
              type="checkbox"
              checked={row.rc}
              onChange={(e) => setRow({ ...row, rc: e.target.checked })}
              style={{ accentColor: XL.green, width: 13, height: 13, cursor: "pointer" }}
            />
          </XLCell>
          <XLCell center>
            <input
              type="checkbox"
              checked={row.auto}
              onChange={(e) => setRow({ ...row, auto: e.target.checked })}
              style={{ accentColor: XL.green, width: 13, height: 13, cursor: "pointer" }}
            />
          </XLCell>
          <XLCell center>
            <input
              style={{ ...xlInputCls, textAlign: "center", width: 60 }}
              value={row.batch}
              onChange={(e) => setRow({ ...row, batch: e.target.value })}
            />
          </XLCell>
        </div>

        {/* ── Sample Rows ── */}
        {SAMPLES.map((s, i) => (
          <div
            key={i}
            style={{ display: "grid", gridTemplateColumns: COL_WIDTHS, borderBottom: `1px solid ${XL.gridFaint}`, background: i % 2 === 0 ? XL.white : XL.rowAlt }}
            onMouseEnter={(e) => (e.currentTarget.style.background = XL.rowHover)}
            onMouseLeave={(e) => (e.currentTarget.style.background = i % 2 === 0 ? XL.white : XL.rowAlt)}
          >
            <RowNum n={i + 3} />
            <XLCell>{s.year}</XLCell>
            <XLCell style={{ maxWidth: 200 }}>{s.product}</XLCell>
            <XLCell>{s.player}</XLCell>
            <XLCell center>{s.serial}</XLCell>
            <XLCell center style={{ color: s.rc ? XL.green : XL.textMuted }}>{s.rc ? "✓" : ""}</XLCell>
            <XLCell center style={{ color: s.auto ? XL.green : XL.textMuted }}>{s.auto ? "✓" : ""}</XLCell>
            <XLCell center>{s.batch}</XLCell>
          </div>
        ))}
      </div>

      {/* ── Generated Title Preview ── */}
      <div style={{ background: XL.previewBg, borderTop: `2px solid ${XL.green}`, padding: "8px 12px" }}>
        <div style={{ fontSize: 10, color: XL.green, fontWeight: 700, letterSpacing: "0.08em", textTransform: "uppercase", marginBottom: 4, display: "flex", alignItems: "center", gap: 8 }}>
          Generated Title (Row 2)
          <span style={{ display: "inline-block", fontSize: 11, padding: "1px 8px", borderRadius: 3, fontWeight: 700, background: over ? "#fde8e8" : XL.greenLight, color: over ? "#c00" : XL.green }}>
            {len} / 76
          </span>
        </div>
        <div style={{ fontFamily: "Consolas, monospace", fontSize: 13, color: XL.text, fontWeight: 600, wordBreak: "break-all" }}>
          {title || "—"}
        </div>
      </div>

      {/* ── Note ── */}
      <div style={{ fontSize: 11, color: "#555", padding: "5px 12px", background: XL.noteBg, borderTop: `1px solid ${XL.gridLine}`, borderLeft: `3px solid ${XL.noteAccent}` }}>
        Managed ~200,000 entries across 3 years at TimeBound Media · near-zero error rate
      </div>

      {/* ── Status Bar ── */}
      <div style={{ background: XL.green, padding: "3px 10px", display: "flex", alignItems: "center", justifyContent: "space-between", borderRadius: "0 0 4px 4px" }}>
        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 11 }}>Sheet 1 of 1 &nbsp;|&nbsp; READY</span>
        <span style={{ color: "rgba(255,255,255,0.85)", fontSize: 11 }}>Char count: {len}</span>
      </div>

    </div>
  );
}