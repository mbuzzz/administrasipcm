import React, { useState, useRef } from 'react';
import { 
  Printer, 
  Download, 
  Eye, 
  Sparkles, 
  Layers, 
  Grid, 
  Scissors, 
  Trophy, 
  Palette, 
  Check, 
  RotateCcw,
  Maximize2,
  Minimize2,
  Info,
  HelpCircle,
  Award
} from 'lucide-react';
import { proposalData } from '../data/proposalData';

export default function StikerPialaTab({ setActiveTab }) {
  const { identitas, cabangLomba } = proposalData;

  // 3 Pilihan Tema Desain Stiker Piala
  const [selectedTheme, setSelectedTheme] = useState('emerald_gold'); // 'emerald_gold' | 'gold_metal' | 'clean_white'
  const [showCropMarks, setShowCropMarks] = useState(true);
  const [customNames, setCustomNames] = useState({});
  const [previewModalSticker, setPreviewModalSticker] = useState(null);
  const [zoomLevel, setZoomLevel] = useState(1);

  // Daftar 12 Stiker Piala (4 Lomba x 3 Juara)
  const stikerList = [
    // 1. Tartil Al-Qur'an
    {
      id: 'tartil_1',
      cabangId: 1,
      cabangNama: 'TARTIL AL-QUR\'AN',
      kategori: 'Tingkat SD / MI',
      juaraAngka: 'I',
      juaraTeks: 'JUARA I',
      pialaUkuran: 'Piala Juara 1 (Tinggi 35 cm)',
      warnaBadge: '#D4AF37'
    },
    {
      id: 'tartil_2',
      cabangId: 1,
      cabangNama: 'TARTIL AL-QUR\'AN',
      kategori: 'Tingkat SD / MI',
      juaraAngka: 'II',
      juaraTeks: 'JUARA II',
      pialaUkuran: 'Piala Juara 2 (Tinggi 30 cm)',
      warnaBadge: '#C0C0C0'
    },
    {
      id: 'tartil_3',
      cabangId: 1,
      cabangNama: 'TARTIL AL-QUR\'AN',
      kategori: 'Tingkat SD / MI',
      juaraAngka: 'III',
      juaraTeks: 'JUARA III',
      pialaUkuran: 'Piala Juara 3 (Tinggi 25 cm)',
      warnaBadge: '#CD7F32'
    },

    // 2. Adzan & Iqomah
    {
      id: 'adzan_1',
      cabangId: 2,
      cabangNama: 'ADZAN & IQOMAH',
      kategori: 'Tingkat SD / MI',
      juaraAngka: 'I',
      juaraTeks: 'JUARA I',
      pialaUkuran: 'Piala Juara 1 (Tinggi 35 cm)',
      warnaBadge: '#D4AF37'
    },
    {
      id: 'adzan_2',
      cabangId: 2,
      cabangNama: 'ADZAN & IQOMAH',
      kategori: 'Tingkat SD / MI',
      juaraAngka: 'II',
      juaraTeks: 'JUARA II',
      pialaUkuran: 'Piala Juara 2 (Tinggi 30 cm)',
      warnaBadge: '#C0C0C0'
    },
    {
      id: 'adzan_3',
      cabangId: 2,
      cabangNama: 'ADZAN & IQOMAH',
      kategori: 'Tingkat SD / MI',
      juaraAngka: 'III',
      juaraTeks: 'JUARA III',
      pialaUkuran: 'Piala Juara 3 (Tinggi 25 cm)',
      warnaBadge: '#CD7F32'
    },

    // 3. Mewarnai Kaligrafi
    {
      id: 'mewarnai_1',
      cabangId: 3,
      cabangNama: 'MEWARNAI KALIGRAFI',
      kategori: 'Tingkat TK / TPA',
      juaraAngka: 'I',
      juaraTeks: 'JUARA I',
      pialaUkuran: 'Piala Juara 1 (Tinggi 35 cm)',
      warnaBadge: '#D4AF37'
    },
    {
      id: 'mewarnai_2',
      cabangId: 3,
      cabangNama: 'MEWARNAI KALIGRAFI',
      kategori: 'Tingkat TK / TPA',
      juaraAngka: 'II',
      juaraTeks: 'JUARA II',
      pialaUkuran: 'Piala Juara 2 (Tinggi 30 cm)',
      warnaBadge: '#C0C0C0'
    },
    {
      id: 'mewarnai_3',
      cabangId: 3,
      cabangNama: 'MEWARNAI KALIGRAFI',
      kategori: 'Tingkat TK / TPA',
      juaraAngka: 'III',
      juaraTeks: 'JUARA III',
      pialaUkuran: 'Piala Juara 3 (Tinggi 25 cm)',
      warnaBadge: '#CD7F32'
    },

    // 4. Pildacil Santri
    {
      id: 'pildacil_1',
      cabangId: 4,
      cabangNama: 'PILDACIL SANTRI',
      kategori: 'Tingkat SD / MI',
      juaraAngka: 'I',
      juaraTeks: 'JUARA I',
      pialaUkuran: 'Piala Juara 1 (Tinggi 35 cm)',
      warnaBadge: '#D4AF37'
    },
    {
      id: 'pildacil_2',
      cabangId: 4,
      cabangNama: 'PILDACIL SANTRI',
      kategori: 'Tingkat SD / MI',
      juaraAngka: 'II',
      juaraTeks: 'JUARA II',
      pialaUkuran: 'Piala Juara 2 (Tinggi 30 cm)',
      warnaBadge: '#C0C0C0'
    },
    {
      id: 'pildacil_3',
      cabangId: 4,
      cabangNama: 'PILDACIL SANTRI',
      kategori: 'Tingkat SD / MI',
      juaraAngka: 'III',
      juaraTeks: 'JUARA III',
      pialaUkuran: 'Piala Juara 3 (Tinggi 25 cm)',
      warnaBadge: '#CD7F32'
    }
  ];

  const handlePrint = () => {
    window.print();
  };

  const handleNameChange = (id, name) => {
    setCustomNames(prev => ({
      ...prev,
      [id]: name
    }));
  };

  // Komponen Vektor SVG Stiker Dudukan Piala (Trapesium: Atas 6.5cm, Bawah 7cm, Tinggi 7cm)
  // ViewBox: 0 0 70 70 (Unit milimeter murni 1:1)
  const renderStickerSVG = (stiker, isLarge = false) => {
    const namaPemenang = customNames[stiker.id] || '';

    // Warna & Gradien sesuai tema
    const getThemeConfig = () => {
      switch (selectedTheme) {
        case 'gold_metal':
          return {
            bgGradient: ['#FFF6D6', '#F5D77F', '#E5BA42', '#C69214'],
            borderOuter: '#8A5D00',
            borderInner: '#AA7C11',
            textTitle: '#4A3200',
            textJuara: '#8A1500',
            textCabang: '#1E293B',
            textSub: '#475569',
            badgeBg: '#780206',
            badgeText: '#FFFFFF',
            accentLine: '#8A5D00'
          };
        case 'clean_white':
          return {
            bgGradient: ['#FFFFFF', '#FFFFFF', '#F8FAFC', '#F1F5F9'],
            borderOuter: '#043927',
            borderInner: '#D4AF37',
            textTitle: '#043927',
            textJuara: '#B45309',
            textCabang: '#0F172A',
            textSub: '#334155',
            badgeBg: '#043927',
            badgeText: '#FDE047',
            accentLine: '#043927'
          };
        case 'emerald_gold':
        default:
          return {
            bgGradient: ['#04432C', '#033320', '#022517', '#011A10'],
            borderOuter: '#D4AF37',
            borderInner: '#F3E5AB',
            textTitle: '#FDE047',
            textJuara: '#FFFBEB',
            textCabang: '#FFFFFF',
            textSub: '#CBD5E1',
            badgeBg: '#D4AF37',
            badgeText: '#022517',
            accentLine: '#D4AF37'
          };
      }
    };

    const cfg = getThemeConfig();
    const gradId = `bg_grad_${stiker.id}_${selectedTheme}`;
    const goldGradId = `gold_grad_${stiker.id}`;
    const badgeGradId = `badge_grad_${stiker.id}`;

    return (
      <svg
        viewBox="0 0 70 70"
        className="w-full h-full drop-shadow-sm select-none"
        style={{ width: '70mm', height: '70mm' }}
      >
        <defs>
          {/* Background Gradient */}
          <linearGradient id={gradId} x1="0%" y1="0%" x2="0%" y2="100%">
            <stop offset="0%" stopColor={cfg.bgGradient[0]} />
            <stop offset="35%" stopColor={cfg.bgGradient[1]} />
            <stop offset="70%" stopColor={cfg.bgGradient[2]} />
            <stop offset="100%" stopColor={cfg.bgGradient[3]} />
          </linearGradient>

          {/* Gold Foil Metallic Gradient */}
          <linearGradient id={goldGradId} x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#FFE58F" />
            <stop offset="25%" stopColor="#D4AF37" />
            <stop offset="50%" stopColor="#FFF1B8" />
            <stop offset="75%" stopColor="#AA7C11" />
            <stop offset="100%" stopColor="#FFD666" />
          </linearGradient>

          {/* Badge Gradient */}
          <linearGradient id={badgeGradId} x1="0%" y1="0%" x2="100%" y2="0%">
            <stop offset="0%" stopColor={stiker.juaraAngka === 'I' ? '#D4AF37' : stiker.juaraAngka === 'II' ? '#94A3B8' : '#D97706'} />
            <stop offset="50%" stopColor={stiker.juaraAngka === 'I' ? '#FEF08A' : stiker.juaraAngka === 'II' ? '#F1F5F9' : '#FDE68A'} />
            <stop offset="100%" stopColor={stiker.juaraAngka === 'I' ? '#B45309' : stiker.juaraAngka === 'II' ? '#64748B' : '#92400E'} />
          </linearGradient>

          {/* Clip Path untuk Trapesium (Atas 65mm, Bawah 70mm, Tinggi 70mm) */}
          <clipPath id={`clip_trap_${stiker.id}`}>
            <polygon points="2.5,0 67.5,0 70,70 0,70" />
          </clipPath>
        </defs>

        {/* 1. Garis Potong Luar / Panduan Cutter (Dotted Crop Guide) */}
        {showCropMarks && (
          <polygon
            points="2.5,0 67.5,0 70,70 0,70"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="0.3"
            strokeDasharray="1.5,1"
          />
        )}

        {/* 2. Badan Utama Stiker (Trapesium Sama Kaki) */}
        <g clipPath={`url(#clip_trap_${stiker.id})`}>
          {/* Latar Belakang */}
          <polygon
            points="2.5,0 67.5,0 70,70 0,70"
            fill={`url(#${gradId})`}
          />

          {/* Bingkai Ganda Luar (Outer Border 0.7mm) */}
          <polygon
            points="3.1,0.6 66.9,0.6 69.3,69.4 0.7,69.4"
            fill="none"
            stroke={selectedTheme === 'emerald_gold' ? `url(#${goldGradId})` : cfg.borderOuter}
            strokeWidth="0.8"
          />

          {/* Bingkai Dalam Elegan (Inner Border 0.3mm) */}
          <polygon
            points="4.3,2.0 65.7,2.0 67.8,68.0 2.2,68.0"
            fill="none"
            stroke={selectedTheme === 'emerald_gold' ? '#FDE047' : cfg.borderInner}
            strokeWidth="0.35"
            strokeOpacity="0.85"
          />

          {/* Ornamen Sudut Atas Kiri & Kanan */}
          <circle cx="5" cy="3" r="0.6" fill={cfg.borderInner} />
          <circle cx="65" cy="3" r="0.6" fill={cfg.borderInner} />
          <circle cx="3" cy="67" r="0.6" fill={cfg.borderInner} />
          <circle cx="67" cy="67" r="0.6" fill={cfg.borderInner} />

          {/* ========================================================================= */}
          {/* KONTEN STIKER PIALA */}
          {/* ========================================================================= */}

          {/* 1. Logo Pemuda Muhammadiyah */}
          <image
            href="/Logo-Pemuda-Muhammadiyah.png"
            x="30.5"
            y="3.2"
            width="9"
            height="9"
            preserveAspectRatio="xMidYMid meet"
          />

          {/* 2. Badge Juara (JUARA I / II / III) */}
          <g transform="translate(0, 13.2)">
            {/* Background Ribbon / Pill Badge */}
            <rect
              x="17"
              y="0"
              width="36"
              height="6.8"
              rx="3.4"
              fill={`url(#${badgeGradId})`}
              stroke="#FFFFFF"
              strokeWidth="0.3"
            />
            
            {/* Teks Juara */}
            <text
              x="35"
              y="4.8"
              textAnchor="middle"
              fontFamily="Times New Roman, serif"
              fontSize="4.8"
              fontWeight="900"
              letterSpacing="0.4"
              fill="#0F172A"
            >
              {stiker.juaraTeks}
            </text>
          </g>

          {/* 3. Nama Cabang Perlombaan */}
          <g transform="translate(0, 23.5)">
            <text
              x="35"
              y="0"
              textAnchor="middle"
              fontFamily="Times New Roman, serif"
              fontSize="3.8"
              fontWeight="bold"
              letterSpacing="0.2"
              fill={cfg.textCabang}
            >
              {stiker.cabangNama}
            </text>

            <text
              x="35"
              y="3.6"
              textAnchor="middle"
              fontFamily="Times New Roman, serif"
              fontSize="2.6"
              fontStyle="italic"
              fill={cfg.textSub}
            >
              {stiker.kategori}
            </text>

            {/* Garis Pembatas Emas */}
            <line
              x1="18"
              y1="5.2"
              x2="52"
              y2="5.2"
              stroke={selectedTheme === 'emerald_gold' ? `url(#${goldGradId})` : cfg.accentLine}
              strokeWidth="0.4"
            />
          </g>

          {/* 4. Nama Santri / Juara (Jika Diisi) atau Nama Event */}
          {namaPemenang ? (
            <g transform="translate(0, 32.5)">
              <text
                x="35"
                y="0"
                textAnchor="middle"
                fontFamily="Times New Roman, serif"
                fontSize="2.4"
                fill={cfg.textSub}
              >
                Diberikan Kepada:
              </text>
              <text
                x="35"
                y="3.8"
                textAnchor="middle"
                fontFamily="Times New Roman, serif"
                fontSize="3.4"
                fontWeight="bold"
                fill={cfg.textTitle}
              >
                {namaPemenang}
              </text>
            </g>
          ) : (
            <g transform="translate(0, 32.5)">
              <text
                x="35"
                y="0"
                textAnchor="middle"
                fontFamily="Times New Roman, serif"
                fontSize="2.4"
                letterSpacing="0.3"
                fill={cfg.textSub}
              >
                DALAM RANGKA KEGIATAN
              </text>
              <text
                x="35"
                y="4.2"
                textAnchor="middle"
                fontFamily="Times New Roman, serif"
                fontSize="4.4"
                fontWeight="bold"
                letterSpacing="0.6"
                fill={cfg.textTitle}
              >
                MUHIBBIN 2026
              </text>
              <text
                x="35"
                y="7.6"
                textAnchor="middle"
                fontFamily="Times New Roman, serif"
                fontSize="2.3"
                fontStyle="italic"
                fill={cfg.textSub}
              >
                Musabaqah li Thulab wa Tholibin
              </text>
            </g>
          )}

          {/* 5. Bagian Bawah: Penyelenggara & Lokasi */}
          <g transform="translate(0, 46.5)">
            {/* Garis Pemisah Halus */}
            <line
              x1="12"
              y1="0"
              x2="58"
              y2="0"
              stroke={selectedTheme === 'emerald_gold' ? `url(#${goldGradId})` : cfg.accentLine}
              strokeWidth="0.3"
              strokeOpacity="0.7"
            />

            {/* Nama Penyelenggara */}
            <text
              x="35"
              y="3.8"
              textAnchor="middle"
              fontFamily="Times New Roman, serif"
              fontSize="2.4"
              fontWeight="bold"
              letterSpacing="0.2"
              fill={cfg.textCabang}
            >
              PIMPINAN CABANG PEMUDA MUHAMMADIYAH
            </text>

            <text
              x="35"
              y="7.0"
              textAnchor="middle"
              fontFamily="Times New Roman, serif"
              fontSize="2.7"
              fontWeight="bold"
              letterSpacing="0.3"
              fill={cfg.textTitle}
            >
              CLURING &bull; BANYUWANGI
            </text>

            {/* Tanggal & Momen */}
            <text
              x="35"
              y="10.4"
              textAnchor="middle"
              fontFamily="Times New Roman, serif"
              fontSize="2.1"
              fontStyle="italic"
              fill={cfg.textSub}
            >
              Maulid Nabi Muhammad SAW 1448 H / 2026 M
            </text>

            {/* Semboyan Fastabiqul Khairat */}
            <text
              x="35"
              y="14.0"
              textAnchor="middle"
              fontFamily="Times New Roman, serif"
              fontSize="2.0"
              fontStyle="italic"
              fill={selectedTheme === 'emerald_gold' ? '#FDE047' : cfg.borderOuter}
            >
              &mdash; Fastabiqul Khair&acirc;t &mdash;
            </text>
          </g>

        </g>
      </svg>
    );
  };

  return (
    <div className="space-y-6 w-full">
      {/* Dynamic Print Style untuk Format Ukuran Kertas A3 Landscape */}
      <style>{`
        @media print {
          @page {
            size: A3 landscape;
            margin: 6mm 10mm;
          }
          body {
            background: white !important;
            margin: 0 !important;
            padding: 0 !important;
          }
          .a3-sheet-wrapper {
            width: 400mm !important;
            max-width: 400mm !important;
            height: 285mm !important;
            max-height: 285mm !important;
            margin: 0 auto !important;
            padding: 4mm 6mm !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            page-break-after: avoid !important;
            break-after: avoid !important;
          }
          .a3-stickers-grid {
            display: grid !important;
            grid-template-columns: repeat(4, 70mm) !important;
            grid-template-rows: repeat(3, 70mm) !important;
            gap: 7mm 15mm !important;
            justify-content: center !important;
            align-content: center !important;
          }
          .sticker-item-container {
            width: 70mm !important;
            height: 70mm !important;
            display: block !important;
            page-break-inside: avoid !important;
            break-inside: avoid !important;
          }
        }

        @media screen {
          .a3-sheet-wrapper {
            width: 420mm;
            min-height: 297mm;
            background: #ffffff;
            box-shadow: 0 15px 35px rgba(0, 0, 0, 0.15), 0 3px 10px rgba(0, 0, 0, 0.08);
            box-sizing: border-box;
            padding: 10mm 14mm;
            border-radius: 4px;
            margin: 1.5rem auto;
            position: relative;
          }
          .a3-stickers-grid {
            display: grid;
            grid-template-columns: repeat(4, 70mm);
            grid-template-rows: repeat(3, 70mm);
            gap: 7mm 14mm;
            justify-content: center;
            align-content: center;
          }
          .sticker-item-container {
            width: 70mm;
            height: 70mm;
            position: relative;
            transition: transform 0.2s ease, filter 0.2s ease;
          }
          .sticker-item-container:hover {
            transform: scale(1.03);
            z-index: 10;
          }
        }
      `}</style>

      {/* Top Header & Toolbar Controls (No Print) */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-300 shadow-sm max-w-7xl mx-auto space-y-4 no-print">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-11 h-11 rounded-xl bg-gradient-to-br from-amber-500 to-amber-700 text-white flex items-center justify-center shadow-md">
              <Trophy className="w-6 h-6 text-amber-200" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-bold text-slate-900">
                  Modul Cetak Stiker Label Piala (A3)
                </h1>
                <span className="bg-emerald-100 text-emerald-800 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-emerald-300">
                  12 Stiker &bull; Ukuran 6.5 x 7 x 7 cm
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500">
                Format Trapesium Presisi Dudukan Piala (Atas: 6.5 cm, Bawah: 7.0 cm, Tinggi: 7.0 cm) Terlayout Rapi di Kertas A3
              </p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            <button
              onClick={handlePrint}
              className="flex items-center gap-2 bg-pm-green hover:bg-emerald-800 text-white font-bold text-sm px-5 py-2.5 rounded-lg shadow-md transition-all hover:scale-[1.02] active:scale-[0.98]"
            >
              <Printer className="w-4 h-4 text-amber-300" />
              <span>Cetak / Export PDF A3 (Ctrl+P)</span>
            </button>
          </div>
        </div>

        {/* Toolbar Settings Bar */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 pt-1 items-center">
          {/* Pilihan Tema Desain */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase text-slate-600 tracking-wide flex items-center gap-1.5">
              <Palette className="w-3.5 h-3.5 text-pm-green" /> Pilihan Gaya Desain:
            </label>
            <div className="grid grid-cols-3 gap-1.5">
              <button
                onClick={() => setSelectedTheme('emerald_gold')}
                className={`px-2.5 py-2 rounded-lg text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                  selectedTheme === 'emerald_gold'
                    ? 'bg-emerald-950 text-amber-300 border-amber-400 shadow-sm'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-emerald-700 border border-amber-400"></div>
                <span>Emerald Gold</span>
              </button>

              <button
                onClick={() => setSelectedTheme('gold_metal')}
                className={`px-2.5 py-2 rounded-lg text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                  selectedTheme === 'gold_metal'
                    ? 'bg-amber-100 text-amber-950 border-amber-500 shadow-sm'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-600"></div>
                <span>Gold Metallic</span>
              </button>

              <button
                onClick={() => setSelectedTheme('clean_white')}
                className={`px-2.5 py-2 rounded-lg text-xs font-bold border transition-all flex items-center justify-center gap-1.5 ${
                  selectedTheme === 'clean_white'
                    ? 'bg-white text-slate-900 border-emerald-600 shadow-sm'
                    : 'bg-slate-50 text-slate-700 hover:bg-slate-100 border-slate-200'
                }`}
              >
                <div className="w-2.5 h-2.5 rounded-full bg-white border border-slate-400"></div>
                <span>Clean White</span>
              </button>
            </div>
          </div>

          {/* Toggle Garis Potong / Crop Marks */}
          <div className="space-y-1.5">
            <label className="text-xs font-bold uppercase text-slate-600 tracking-wide flex items-center gap-1.5">
              <Scissors className="w-3.5 h-3.5 text-amber-600" /> Garis Panduan Potong (Cutter):
            </label>
            <div className="flex items-center gap-2">
              <button
                onClick={() => setShowCropMarks(!showCropMarks)}
                className={`w-full py-2 px-3 rounded-lg text-xs font-semibold border flex items-center justify-between transition-all ${
                  showCropMarks 
                    ? 'bg-emerald-50 text-emerald-900 border-emerald-300' 
                    : 'bg-slate-50 text-slate-600 border-slate-200'
                }`}
              >
                <span>{showCropMarks ? '✓ Garis Potong Aktif (Putus-putus)' : '✕ Tanpa Garis Potong'}</span>
                <span className="text-[10px] text-slate-400">Klik untuk ganti</span>
              </button>
            </div>
          </div>

          {/* Panduan Cetak A3 Info */}
          <div className="bg-slate-50 p-2.5 rounded-lg border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
            <Info className="w-4 h-4 text-pm-green flex-shrink-0 mt-0.5" />
            <div>
              <p className="font-bold text-slate-800">Petunjuk Cetak Kertas A3:</p>
              <p className="text-[11px] leading-tight text-slate-500">
                Gunakan <strong>Stiker Kertas Glossy A3 / Vinyl A3</strong>. Pada dialog print browser, pilih <em>Paper size: A3</em>, <em>Layout: Landscape</em>, dan <em>Scale: 100% (Default)</em>.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Kontrol Zoom Layar (No Print) */}
      <div className="flex items-center justify-center gap-2 no-print">
        <span className="text-xs font-semibold text-slate-600">Zoom Tampilan Layar:</span>
        <button 
          onClick={() => setZoomLevel(Math.max(0.6, zoomLevel - 0.1))}
          className="px-2.5 py-1 bg-white border border-slate-300 rounded text-xs font-bold hover:bg-slate-50 shadow-sm"
        >
          -
        </button>
        <span className="text-xs font-mono font-bold w-12 text-center">{Math.round(zoomLevel * 100)}%</span>
        <button 
          onClick={() => setZoomLevel(Math.min(1.4, zoomLevel + 0.1))}
          className="px-2.5 py-1 bg-white border border-slate-300 rounded text-xs font-bold hover:bg-slate-50 shadow-sm"
        >
          +
        </button>
        <button 
          onClick={() => setZoomLevel(1)}
          className="px-2 py-1 bg-slate-100 hover:bg-slate-200 border border-slate-300 rounded text-[11px] text-slate-700"
        >
          Reset
        </button>
      </div>

      {/* ========================================================================= */}
      {/* LEMBAR KERJA A3 LANDSCAPE (420 mm x 297 mm) */}
      {/* ========================================================================= */}
      <div 
        className="overflow-x-auto pb-8 flex justify-center"
        style={{ transformOrigin: 'top center' }}
      >
        <div 
          className="a3-sheet-wrapper"
          style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
        >
          {/* Header Lembar A3 (Hanya Petunjuk Dokumen) */}
          <div className="border-b-2 border-black pb-2 mb-4 flex justify-between items-center text-black">
            <div>
              <p className="text-[10pt] font-bold uppercase tracking-widest">
                LEMBAR STIKER LABEL DUDUKAN PIALA &bull; MUHIBBIN 2026
              </p>
              <p className="text-[8pt] text-slate-700">
                PIMPINAN CABANG PEMUDA MUHAMMADIYAH CLURING &bull; 4 CABANG LOMBA &bull; 12 SET PIALA JUARA
              </p>
            </div>
            <div className="text-right text-[8pt] font-mono">
              <p className="font-bold">UKURAN STIKER: ATAS 6.5 CM &bull; BAWAH 7.0 CM &bull; TINGGI 7.0 CM</p>
              <p className="text-slate-600">Skala Cetak: 100% Kertas A3 Landscape (420 x 297 mm)</p>
            </div>
          </div>

          {/* Grid Layout 12 Stiker (4 Kolom x 3 Baris) */}
          <div className="a3-stickers-grid my-auto">
            {stikerList.map((stiker) => (
              <div 
                key={stiker.id} 
                className="sticker-item-container cursor-pointer group"
                onClick={() => setPreviewModalSticker(stiker)}
                title={`Klik untuk lihat detail / ganti nama: ${stiker.cabangNama} - ${stiker.juaraTeks}`}
              >
                {/* Render SVG Stiker Trapesium */}
                {renderStickerSVG(stiker)}

                {/* Badge Hover Interaktif di Layar */}
                <div className="absolute inset-0 bg-emerald-950/20 opacity-0 group-hover:opacity-100 transition-opacity rounded flex items-center justify-center no-print">
                  <span className="bg-white/95 text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-md border border-slate-300 flex items-center gap-1">
                    <Maximize2 className="w-3 h-3 text-pm-green" /> Lihat / Edit
                  </span>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Lembar A3 (Garis Panduan Potong) */}
          <div className="border-t border-slate-400 pt-2 mt-4 flex justify-between items-center text-[7.5pt] text-slate-600">
            <p>
              &copy; 2026 Panitia Pelaksana MUHIBBIN &bull; PCPM Cluring, Banyuwangi &bull; Dicetak Menggunakan Sistem Proposal & Administrasi Terpadu
            </p>
            <p className="font-mono">
              Potong mengikuti garis tepi trapesium (Sisi Atas 65mm, Bawah 70mm, Tinggi 70mm)
            </p>
          </div>
        </div>
      </div>

      {/* Modal Preview Detail & Kustomisasi Nama Juara (No Print) */}
      {previewModalSticker && (
        <div className="fixed inset-0 bg-black/70 backdrop-blur-sm z-50 flex items-center justify-center p-4 no-print">
          <div className="bg-white rounded-2xl max-w-lg w-full p-6 shadow-2xl space-y-5 border border-slate-200 animate-in fade-in zoom-in-95 duration-150">
            <div className="flex items-center justify-between border-b border-slate-200 pb-3">
              <div className="flex items-center gap-2">
                <Award className="w-5 h-5 text-amber-500" />
                <h3 className="font-bold text-slate-900 text-base">
                  Detail Stiker: {previewModalSticker.cabangNama}
                </h3>
              </div>
              <button
                onClick={() => setPreviewModalSticker(null)}
                className="w-8 h-8 rounded-full bg-slate-100 hover:bg-slate-200 text-slate-600 flex items-center justify-center font-bold"
              >
                ✕
              </button>
            </div>

            {/* Preview Stiker Besar */}
            <div className="flex justify-center py-2 bg-slate-100 rounded-xl p-4 border border-slate-200">
              <div style={{ width: '80mm', height: '80mm' }}>
                {renderStickerSVG(previewModalSticker, true)}
              </div>
            </div>

            {/* Input Nama Pemenang (Opsional) */}
            <div className="space-y-2">
              <label className="block text-xs font-bold text-slate-700 uppercase tracking-wide">
                Nama Pemenang / Santri (Opsional):
              </label>
              <input
                type="text"
                placeholder="Contoh: Muhammad Fauzan / Kosongkan untuk format standar"
                value={customNames[previewModalSticker.id] || ''}
                onChange={(e) => handleNameChange(previewModalSticker.id, e.target.value)}
                className="w-full p-2.5 border border-slate-300 rounded-lg text-sm text-slate-900 focus:ring-2 focus:ring-emerald-500 focus:outline-none"
              />
              <p className="text-[11px] text-slate-500">
                *Jika dikosongkan, stiker akan menampilkan teks standar <strong>"MUHIBBIN 2026 - Musabaqah li Thulab wa Tholibin"</strong>.
              </p>
            </div>

            {/* Informasi Dimensi */}
            <div className="bg-amber-50 rounded-lg p-3 border border-amber-200 text-xs text-amber-900 space-y-1">
              <p className="font-bold">📐 Ukuran Fisik Dudukan Piala:</p>
              <ul className="list-disc ml-4 space-y-0.5 text-[11px]">
                <li>Lebar Atas: <strong>6.5 cm (65 mm)</strong></li>
                <li>Lebar Bawah: <strong>7.0 cm (70 mm)</strong></li>
                <li>Tinggi: <strong>7.0 cm (70 mm)</strong></li>
                <li>Alokasi: <strong>{previewModalSticker.pialaUkuran}</strong></li>
              </ul>
            </div>

            <div className="flex justify-end gap-2 pt-2">
              <button
                onClick={() => setPreviewModalSticker(null)}
                className="px-4 py-2 bg-pm-green hover:bg-emerald-800 text-white font-bold text-xs rounded-lg shadow"
              >
                Selesai & Simpan
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Petunjuk Penggunaan & Spesifikasi Dudukan Piala */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl p-5 border border-slate-300 shadow-sm space-y-3 no-print">
        <h3 className="font-bold text-sm uppercase tracking-wide text-slate-900 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-pm-green" /> Petunjuk Teknis & Percetakan Stiker Piala:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1">
            <p className="font-bold text-slate-800">1. Bahan Kertas yang Direkomendasikan:</p>
            <p>Gunakan <strong>Stiker Vinyl Glossy A3</strong> atau <strong>Stiker Cromo/Kertas Foto Glossy A3</strong>. Hasil warna akan sangat tajam, tahan gores, dan berkilau mewah pada piala.</p>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1">
            <p className="font-bold text-slate-800">2. Pengaturan Printer A3:</p>
            <p>Pilih ukuran kertas <strong>A3</strong>, orientasi <strong>Landscape (Mendatar)</strong>, margin <strong>None / Minimum</strong>, dan pastikan skala cetak <strong>100%</strong> agar ukuran presisi 6.5 x 7 x 7 cm.</p>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1">
            <p className="font-bold text-slate-800">3. Pemotongan & Pemasangan:</p>
            <p>Gunting atau potong menggunakan cutter & penggaris besi mengikuti garis bantu putus-putus. Tempelkan secara presisi pada dudukan/tatakan marmer atau plastik piala.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
