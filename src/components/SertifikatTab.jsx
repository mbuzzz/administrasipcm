import React, { useState, useRef } from 'react';
import { 
  Printer, 
  Download, 
  Award, 
  Trophy, 
  Medal, 
  UserCheck, 
  Sparkles, 
  Check, 
  RotateCcw, 
  FileText, 
  Layers, 
  Palette, 
  Maximize2, 
  Info, 
  HelpCircle,
  Users,
  Search,
  ChevronRight,
  Loader2,
  Bookmark,
  Share2,
  Edit3,
  Star
} from 'lucide-react';
import jsPDF from 'jspdf';
import html2canvas from 'html2canvas';
import { proposalData } from '../data/proposalData';

export default function SertifikatTab({ setActiveTab }) {
  const { identitas, pengesahan, cabangLomba } = proposalData;
  const certRef = useRef(null);

  // Mode Tampilan: 'juara' | 'peserta'
  const [certMode, setCertMode] = useState('juara');
  const [selectedTheme, setSelectedTheme] = useState('emerald_gold'); // 'emerald_gold' | 'classic_gold' | 'clean_white'
  const [isGeneratingPDF, setIsGeneratingPDF] = useState(false);
  const [downloadSuccessMessage, setDownloadSuccessMessage] = useState('');
  const [zoomLevel, setZoomLevel] = useState(1);

  // Daftar 12 Sertifikat Juara Standar (4 Lomba x 3 Juara)
  const defaultJuaraList = [
    // 1. Tartil Al-Qur'an (SD/MI)
    {
      id: 'tartil_1',
      nomorSurat: '001/1.2/06/2026',
      cabangNama: 'TARTIL AL-QUR\'AN',
      kategori: 'Tingkat SD / MI',
      peranTeks: 'JUARA I',
      juaraAngka: 'I',
      namaPenerima: 'AHMAD FAUZI',
      asalLembaga: 'SD Muhammadiyah 1 Cluring',
      badgeGradient: 'from-amber-400 via-yellow-200 to-amber-600',
      badgeText: 'text-amber-950',
      bintang: 3
    },
    {
      id: 'tartil_2',
      nomorSurat: '002/1.2/06/2026',
      cabangNama: 'TARTIL AL-QUR\'AN',
      kategori: 'Tingkat SD / MI',
      peranTeks: 'JUARA II',
      juaraAngka: 'II',
      namaPenerima: 'M. RIZKY RAMADHAN',
      asalLembaga: 'MI Risalatul Haq Tampo',
      badgeGradient: 'from-slate-300 via-slate-100 to-slate-400',
      badgeText: 'text-slate-900',
      bintang: 2
    },
    {
      id: 'tartil_3',
      nomorSurat: '003/1.2/06/2026',
      cabangNama: 'TARTIL AL-QUR\'AN',
      kategori: 'Tingkat SD / MI',
      peranTeks: 'JUARA III',
      juaraAngka: 'III',
      namaPenerima: 'AISYAH NUR FATIMAH',
      asalLembaga: 'SDN 1 Benculuk',
      badgeGradient: 'from-amber-600 via-amber-200 to-amber-800',
      badgeText: 'text-amber-950',
      bintang: 1
    },

    // 2. Adzan & Iqomah (SD/MI)
    {
      id: 'adzan_1',
      nomorSurat: '004/1.2/06/2026',
      cabangNama: 'ADZAN & IQOMAH',
      kategori: 'Tingkat SD / MI',
      peranTeks: 'JUARA I',
      juaraAngka: 'I',
      namaPenerima: 'BILAL AL-GHIFARI',
      asalLembaga: 'MI Al-Falah Benculuk',
      badgeGradient: 'from-amber-400 via-yellow-200 to-amber-600',
      badgeText: 'text-amber-950',
      bintang: 3
    },
    {
      id: 'adzan_2',
      nomorSurat: '005/1.2/06/2026',
      cabangNama: 'ADZAN & IQOMAH',
      kategori: 'Tingkat SD / MI',
      peranTeks: 'JUARA II',
      juaraAngka: 'II',
      namaPenerima: 'FATHIR AL-KHAWARIZMI',
      asalLembaga: 'SDN 2 Tampo',
      badgeGradient: 'from-slate-300 via-slate-100 to-slate-400',
      badgeText: 'text-slate-900',
      bintang: 2
    },
    {
      id: 'adzan_3',
      nomorSurat: '006/1.2/06/2026',
      cabangNama: 'ADZAN & IQOMAH',
      kategori: 'Tingkat SD / MI',
      peranTeks: 'JUARA III',
      juaraAngka: 'III',
      namaPenerima: 'ZIDAN ATTAMIMI',
      asalLembaga: 'SD Muhammadiyah 2 Cluring',
      badgeGradient: 'from-amber-600 via-amber-200 to-amber-800',
      badgeText: 'text-amber-950',
      bintang: 1
    },

    // 3. Mewarnai Kaligrafi (TK/TPA)
    {
      id: 'mewarnai_1',
      nomorSurat: '007/1.2/06/2026',
      cabangNama: 'MEWARNAI KALIGRAFI',
      kategori: 'Tingkat TK / TPA',
      peranTeks: 'JUARA I',
      juaraAngka: 'I',
      namaPenerima: 'KHAIRA NAZIHA',
      asalLembaga: 'TK \'Aisyiyah Bustanul Athfal Tampo',
      badgeGradient: 'from-amber-400 via-yellow-200 to-amber-600',
      badgeText: 'text-amber-950',
      bintang: 3
    },
    {
      id: 'mewarnai_2',
      nomorSurat: '008/1.2/06/2026',
      cabangNama: 'MEWARNAI KALIGRAFI',
      kategori: 'Tingkat TK / TPA',
      peranTeks: 'JUARA II',
      juaraAngka: 'II',
      namaPenerima: 'AZZAHRA SALSABILA',
      asalLembaga: 'TK \'Aisyiyah Benculuk',
      badgeGradient: 'from-slate-300 via-slate-100 to-slate-400',
      badgeText: 'text-slate-900',
      bintang: 2
    },
    {
      id: 'mewarnai_3',
      nomorSurat: '009/1.2/06/2026',
      cabangNama: 'MEWARNAI KALIGRAFI',
      kategori: 'Tingkat TK / TPA',
      peranTeks: 'JUARA III',
      juaraAngka: 'III',
      namaPenerima: 'MALIKA AZ-ZAHRA',
      asalLembaga: 'TPA Al-Hidayah Tampo',
      badgeGradient: 'from-amber-600 via-amber-200 to-amber-800',
      badgeText: 'text-amber-950',
      bintang: 1
    },

    // 4. Pildacil Santri (SD/MI)
    {
      id: 'pildacil_1',
      nomorSurat: '010/1.2/06/2026',
      cabangNama: 'PILDACIL SANTRI',
      kategori: 'Tingkat SD / MI',
      peranTeks: 'JUARA I',
      juaraAngka: 'I',
      namaPenerima: 'MUHAMMAD DAI AL-KAUTSAR',
      asalLembaga: 'SD Muhammadiyah 1 Cluring',
      badgeGradient: 'from-amber-400 via-yellow-200 to-amber-600',
      badgeText: 'text-amber-950',
      bintang: 3
    },
    {
      id: 'pildacil_2',
      nomorSurat: '011/1.2/06/2026',
      cabangNama: 'PILDACIL SANTRI',
      kategori: 'Tingkat SD / MI',
      peranTeks: 'JUARA II',
      juaraAngka: 'II',
      namaPenerima: 'NAURA HUMAIRA',
      asalLembaga: 'MI Risalatul Haq Tampo',
      badgeGradient: 'from-slate-300 via-slate-100 to-slate-400',
      badgeText: 'text-slate-900',
      bintang: 2
    },
    {
      id: 'pildacil_3',
      nomorSurat: '012/1.2/06/2026',
      cabangNama: 'PILDACIL SANTRI',
      kategori: 'Tingkat SD / MI',
      peranTeks: 'JUARA III',
      juaraAngka: 'III',
      namaPenerima: 'HABIBIE AR-RASYID',
      asalLembaga: 'SDN 1 Cluring',
      badgeGradient: 'from-amber-600 via-amber-200 to-amber-800',
      badgeText: 'text-amber-950',
      bintang: 1
    }
  ];

  const [activeJuaraIndex, setActiveJuaraIndex] = useState(0);

  // State Kustomisasi Nama Juara
  const [customJuaraData, setCustomJuaraData] = useState(() => {
    const initial = {};
    defaultJuaraList.forEach(j => {
      initial[j.id] = {
        namaPenerima: j.namaPenerima,
        asalLembaga: j.asalLembaga,
        nomorSurat: j.nomorSurat
      };
    });
    return initial;
  });

  // Form State untuk Sertifikat Peserta
  const [pesertaData, setPesertaData] = useState({
    nomorSurat: '101/1.2/06/2026',
    namaPenerima: 'NAMA SANTRI PESERTA',
    asalLembaga: 'TK / TPA / SD-MI Se-Kecamatan Cluring',
    cabangNama: 'TARTIL AL-QUR\'AN',
    kategori: 'Tingkat SD / MI',
    peranTeks: 'PESERTA'
  });

  const handleCustomJuaraChange = (field, value) => {
    const currentId = defaultJuaraList[activeJuaraIndex].id;
    setCustomJuaraData(prev => ({
      ...prev,
      [currentId]: {
        ...prev[currentId],
        [field]: value
      }
    }));
  };

  const handleResetJuaraCurrent = () => {
    const cur = defaultJuaraList[activeJuaraIndex];
    setCustomJuaraData(prev => ({
      ...prev,
      [cur.id]: {
        namaPenerima: cur.namaPenerima,
        asalLembaga: cur.asalLembaga,
        nomorSurat: cur.nomorSurat
      }
    }));
  };

  // Sertifikat yang sedang aktif untuk di-render
  const rawJuara = defaultJuaraList[activeJuaraIndex];
  const activeCustom = customJuaraData[rawJuara.id] || {
    namaPenerima: rawJuara.namaPenerima,
    asalLembaga: rawJuara.asalLembaga,
    nomorSurat: rawJuara.nomorSurat
  };

  const currentCert = certMode === 'juara' 
    ? {
        ...rawJuara,
        namaPenerima: activeCustom.namaPenerima || rawJuara.namaPenerima,
        asalLembaga: activeCustom.asalLembaga || rawJuara.asalLembaga,
        nomorSurat: activeCustom.nomorSurat || rawJuara.nomorSurat
      }
    : {
        id: 'peserta_custom',
        nomorSurat: pesertaData.nomorSurat,
        cabangNama: pesertaData.cabangNama,
        kategori: pesertaData.kategori,
        peranTeks: pesertaData.peranTeks,
        namaPenerima: pesertaData.namaPenerima,
        asalLembaga: pesertaData.asalLembaga,
        badgeGradient: 'from-emerald-600 via-emerald-400 to-emerald-800',
        badgeText: 'text-white',
        bintang: 0,
        juaraAngka: ''
      };

  const handlePrint = () => {
    window.print();
  };

  // Download 1 Sertifikat Aktif Langsung ke PDF A4 Landscape
  const handleDownloadPDF = async () => {
    if (!certRef.current) return;
    setIsGeneratingPDF(true);
    setDownloadSuccessMessage('');

    try {
      const originalTransform = certRef.current.style.transform;
      certRef.current.style.transform = 'none';

      const canvas = await html2canvas(certRef.current, {
        scale: 2.5,
        useCORS: true,
        allowTaint: true,
        backgroundColor: '#FFFFFF',
        logging: false
      });

      certRef.current.style.transform = originalTransform;

      // Inisialisasi jsPDF format A4 Landscape (297 mm x 210 mm)
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      const imgData = canvas.toDataURL('image/jpeg', 0.98);
      pdf.addImage(imgData, 'JPEG', 0, 0, 297, 210, undefined, 'FAST');
      
      const fileName = certMode === 'juara'
        ? `Piagam-${currentCert.peranTeks}-${currentCert.cabangNama.replace(/[^a-zA-Z0-9]/g, '_')}-${currentCert.namaPenerima.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`
        : `Sertifikat-Peserta-${pesertaData.namaPenerima.replace(/[^a-zA-Z0-9]/g, '_')}.pdf`;

      pdf.save(fileName);

      setDownloadSuccessMessage(`Sertifikat "${currentCert.namaPenerima}" berhasil diunduh dalam format PDF A4 Landscape!`);
      setTimeout(() => setDownloadSuccessMessage(''), 5000);
    } catch (error) {
      console.error('Gagal generate PDF:', error);
      alert('Terjadi kendala saat generate PDF. Gunakan tombol Print (Ctrl+P) lalu pilih Save as PDF.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // Download Seluruh 12 Sertifikat Juara Sekaligus dalam 1 Dokumen PDF Multi-Page
  const handleDownloadAllJuaraPDF = async () => {
    setIsGeneratingPDF(true);
    setDownloadSuccessMessage('');

    try {
      const pdf = new jsPDF({
        orientation: 'landscape',
        unit: 'mm',
        format: 'a4',
        compress: true
      });

      for (let i = 0; i < defaultJuaraList.length; i++) {
        setActiveJuaraIndex(i);
        await new Promise(resolve => setTimeout(resolve, 150));

        if (certRef.current) {
          const originalTransform = certRef.current.style.transform;
          certRef.current.style.transform = 'none';

          const canvas = await html2canvas(certRef.current, {
            scale: 2.2,
            useCORS: true,
            allowTaint: true,
            backgroundColor: '#FFFFFF',
            logging: false
          });

          certRef.current.style.transform = originalTransform;

          const imgData = canvas.toDataURL('image/jpeg', 0.95);
          if (i > 0) pdf.addPage('a4', 'landscape');
          pdf.addImage(imgData, 'JPEG', 0, 0, 297, 210, undefined, 'FAST');
        }
      }

      pdf.save('Paket-Lengkap-12-Sertifikat-Juara-MUHIBBIN-2026.pdf');
      setDownloadSuccessMessage('Paket lengkap 12 Sertifikat Juara (Multi-page PDF A4) berhasil diunduh!');
      setTimeout(() => setDownloadSuccessMessage(''), 6000);
    } catch (error) {
      console.error('Gagal generate batch PDF:', error);
      alert('Gagal mengunduh paket sertifikat sekaligus.');
    } finally {
      setIsGeneratingPDF(false);
    }
  };

  // Konfigurasi Tema Desain Sertifikat
  const getThemeStyles = () => {
    switch (selectedTheme) {
      case 'classic_gold':
        return {
          bgClass: 'bg-[#FFFDF6]',
          borderOuter: 'border-[#B8860B]',
          borderInner: 'border-[#D4AF37]',
          accentText: 'text-[#8A5D00]',
          titleText: 'text-[#5C3E00]'
        };
      case 'clean_white':
        return {
          bgClass: 'bg-white',
          borderOuter: 'border-slate-800',
          borderInner: 'border-emerald-700',
          accentText: 'text-emerald-800',
          titleText: 'text-slate-900'
        };
      case 'emerald_gold':
      default:
        return {
          bgClass: 'bg-[#FCFDFB]',
          borderOuter: 'border-[#043927]',
          borderInner: 'border-[#D4AF37]',
          accentText: 'text-[#D4AF37]',
          titleText: 'text-[#043927]'
        };
    }
  };

  const themeCfg = getThemeStyles();

  return (
    <div className="space-y-6 w-full font-sans">
      {/* Dynamic Print CSS untuk Format Ukuran Kertas A4 Landscape Presisi 100% 1 HALAMAN PAS */}
      <style>{`
        @media print {
          @page {
            size: A4 landscape;
            margin: 0;
          }
          html, body {
            width: 297mm !important;
            height: 210mm !important;
            max-height: 210mm !important;
            margin: 0 !important;
            padding: 0 !important;
            background: white !important;
            overflow: hidden !important;
            -webkit-print-color-adjust: exact !important;
            print-color-adjust: exact !important;
          }
          .cert-a4-landscape-wrapper {
            width: 285mm !important;
            max-width: 285mm !important;
            height: 198mm !important;
            max-height: 198mm !important;
            margin: 4mm auto !important;
            padding: 3mm 5mm !important;
            box-shadow: none !important;
            border: none !important;
            background: white !important;
            display: flex !important;
            flex-direction: column !important;
            justify-content: space-between !important;
            page-break-inside: avoid !important;
            page-break-after: avoid !important;
            break-inside: avoid !important;
            break-after: avoid !important;
            box-sizing: border-box !important;
            overflow: hidden !important;
          }
          .no-print {
            display: none !important;
          }
        }

        @media screen {
          .cert-a4-landscape-wrapper {
            width: 297mm;
            height: 210mm;
            min-height: 210mm;
            max-height: 210mm;
            background: #ffffff;
            box-shadow: 0 25px 50px -12px rgba(0, 0, 0, 0.2), 0 8px 24px rgba(0, 0, 0, 0.08);
            box-sizing: border-box;
            padding: 5mm 7mm;
            border-radius: 6px;
            margin: 1.5rem auto;
            position: relative;
            display: flex;
            flex-direction: column;
            justify-content: space-between;
          }
        }
      `}</style>

      {/* Top Header & Control Toolbar (No Print) */}
      <div className="bg-white rounded-xl p-4 sm:p-5 border border-slate-300 shadow-sm max-w-7xl mx-auto space-y-4 no-print">
        <div className="flex flex-wrap items-center justify-between gap-4 border-b border-slate-200 pb-4">
          <div className="flex items-center gap-3">
            <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-amber-500 via-amber-600 to-amber-800 text-white flex items-center justify-center shadow-lg ring-2 ring-amber-300/60">
              <Trophy className="w-6 h-6 text-amber-100" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h1 className="text-lg sm:text-xl font-bold text-slate-900">
                  Modul E-Sertifikat & Piagam Penghargaan Resmi
                </h1>
                <span className="bg-amber-100 text-amber-900 text-[11px] font-bold px-2.5 py-0.5 rounded-full border border-amber-300 font-mono">
                  Kode: 1.2/06/2026
                </span>
              </div>
              <p className="text-xs sm:text-sm text-slate-500">
                Format Pas 1 Lembar A4 Landscape (297 x 210 mm) &bull; Logo Atas Tengah &bull; Bebas NBM & Stamp &bull; Custom Nama Juara
              </p>
            </div>
          </div>

          {/* Action Download & Print Buttons */}
          <div className="flex flex-wrap items-center gap-2.5">
            {/* Tombol Download 1 PDF */}
            <button
              onClick={handleDownloadPDF}
              disabled={isGeneratingPDF}
              className="flex items-center gap-2 bg-emerald-700 hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-4 py-2.5 rounded-lg shadow-md transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 cursor-pointer"
            >
              {isGeneratingPDF ? (
                <>
                  <Loader2 className="w-4 h-4 animate-spin text-amber-300" />
                  <span>Membuat PDF...</span>
                </>
              ) : (
                <>
                  <Download className="w-4 h-4 text-amber-300" />
                  <span>Download PDF A4 (1 Piagam)</span>
                </>
              )}
            </button>

            {/* Tombol Download 12 Juara Sekaligus */}
            {certMode === 'juara' && (
              <button
                onClick={handleDownloadAllJuaraPDF}
                disabled={isGeneratingPDF}
                className="flex items-center gap-1.5 bg-amber-600 hover:bg-amber-700 text-white font-bold text-xs sm:text-sm px-3.5 py-2.5 rounded-lg shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] disabled:opacity-60 cursor-pointer"
                title="Download 12 Sertifikat Juara Sekaligus dalam 1 file PDF"
              >
                <Layers className="w-4 h-4 text-amber-200" />
                <span>Download Semua 12 Juara (PDF)</span>
              </button>
            )}

            {/* Tombol Print Dialog Browser */}
            <button
              onClick={handlePrint}
              className="flex items-center gap-1.5 bg-slate-800 hover:bg-slate-900 text-white font-semibold text-xs sm:text-sm px-3.5 py-2.5 rounded-lg shadow-sm transition-all hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
            >
              <Printer className="w-4 h-4 text-slate-300" />
              <span>Print Pas 1 Lembar (Ctrl+P)</span>
            </button>
          </div>
        </div>

        {/* Notifikasi Download Sukses */}
        {downloadSuccessMessage && (
          <div className="bg-emerald-50 border border-emerald-300 text-emerald-900 text-xs font-semibold px-4 py-2.5 rounded-lg flex items-center gap-2 animate-in fade-in duration-200">
            <Check className="w-4 h-4 text-emerald-600 flex-shrink-0" />
            <span>{downloadSuccessMessage}</span>
          </div>
        )}

        {/* Navigasi Mode Sertifikat: Juara vs Peserta */}
        <div className="flex flex-wrap items-center justify-between gap-4 pt-1">
          <div className="flex items-center gap-2 bg-slate-100 p-1 rounded-xl border border-slate-200">
            <button
              onClick={() => setCertMode('juara')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                certMode === 'juara'
                  ? 'bg-pm-green text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <Trophy className="w-3.5 h-3.5 text-amber-300" />
              <span>Sertifikat 12 Juara Lomba (Desain Mewah)</span>
            </button>

            <button
              onClick={() => setCertMode('peserta')}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-xs font-bold transition-all cursor-pointer ${
                certMode === 'peserta'
                  ? 'bg-pm-green text-white shadow-sm'
                  : 'text-slate-600 hover:text-slate-900'
              }`}
            >
              <UserCheck className="w-3.5 h-3.5 text-amber-300" />
              <span>Sertifikat Apresiasi Peserta (Custom)</span>
            </button>
          </div>

          {/* Pilihan Gaya Warna Desain */}
          <div className="flex items-center gap-1.5 text-xs">
            <span className="text-slate-500 font-semibold mr-1">Tema Desain:</span>
            <button
              onClick={() => setSelectedTheme('emerald_gold')}
              className={`px-2.5 py-1.5 rounded-lg font-bold border transition-all text-[11px] flex items-center gap-1.5 ${
                selectedTheme === 'emerald_gold'
                  ? 'bg-emerald-950 text-amber-300 border-amber-400 shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-300'
              }`}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-700 border border-amber-400"></div>
              <span>Emerald Gold</span>
            </button>

            <button
              onClick={() => setSelectedTheme('classic_gold')}
              className={`px-2.5 py-1.5 rounded-lg font-bold border transition-all text-[11px] flex items-center gap-1.5 ${
                selectedTheme === 'classic_gold'
                  ? 'bg-amber-100 text-amber-950 border-amber-500 shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-300'
              }`}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-amber-400 border border-amber-600"></div>
              <span>Classic Gold</span>
            </button>

            <button
              onClick={() => setSelectedTheme('clean_white')}
              className={`px-2.5 py-1.5 rounded-lg font-bold border transition-all text-[11px] flex items-center gap-1.5 ${
                selectedTheme === 'clean_white'
                  ? 'bg-slate-100 text-slate-900 border-slate-500 shadow-sm'
                  : 'bg-white text-slate-700 hover:bg-slate-50 border-slate-300'
              }`}
            >
              <div className="w-2.5 h-2.5 rounded-full bg-white border border-slate-400"></div>
              <span>Clean White</span>
            </button>
          </div>
        </div>

        {/* Panel Pemilihan Cepat & Form Edit Kustom Nama Juara */}
        {certMode === 'juara' && (
          <div className="space-y-3">
            {/* Grid 12 Tombol Juara */}
            <div className="bg-slate-50 rounded-xl p-3 border border-slate-200 space-y-2">
              <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                <span>PILIH SERTIFIKAT JUARA (4 CABANG LOMBA &bull; 12 SET):</span>
                <span className="text-emerald-700 font-mono">
                  {rawJuara.cabangNama} &bull; {rawJuara.peranTeks}
                </span>
              </div>
              
              <div className="grid grid-cols-2 sm:grid-cols-4 md:grid-cols-6 gap-1.5 text-xs">
                {defaultJuaraList.map((j, idx) => {
                  const isActive = activeJuaraIndex === idx;
                  const cData = customJuaraData[j.id] || j;
                  return (
                    <button
                      key={j.id}
                      onClick={() => setActiveJuaraIndex(idx)}
                      className={`p-2 rounded-lg text-left border transition-all cursor-pointer flex flex-col justify-between ${
                        isActive
                          ? 'bg-emerald-800 text-white border-emerald-900 shadow-sm ring-2 ring-amber-400'
                          : 'bg-white text-slate-700 hover:bg-slate-100 border-slate-200'
                      }`}
                    >
                      <div className="flex items-center justify-between font-bold text-[11px]">
                        <span>{j.peranTeks}</span>
                        <span className={`text-[9px] px-1 rounded font-mono ${isActive ? 'bg-amber-400 text-slate-950 font-bold' : 'bg-slate-100 text-slate-600'}`}>
                          {cData.nomorSurat.split('/')[0]}
                        </span>
                      </div>
                      <div className="truncate text-[10px] mt-0.5 font-bold">
                        {cData.namaPenerima}
                      </div>
                      <div className="truncate text-[9px] opacity-80">
                        {j.cabangNama}
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Form Edit Langsung Nama Juara yang Sedang Dipilih */}
            <div className="bg-amber-50/70 rounded-xl p-3.5 border border-amber-300/80 space-y-2.5">
              <div className="flex items-center justify-between">
                <p className="text-xs font-bold uppercase tracking-wider text-amber-950 flex items-center gap-1.5">
                  <Edit3 className="w-3.5 h-3.5 text-amber-700" /> Kustom Nama Juara ({rawJuara.cabangNama} - {rawJuara.peranTeks}):
                </p>
                <button
                  onClick={handleResetJuaraCurrent}
                  className="text-[11px] text-amber-800 hover:text-amber-950 font-semibold flex items-center gap-1 bg-amber-100/80 px-2 py-0.5 rounded border border-amber-300"
                >
                  <RotateCcw className="w-3 h-3" /> Reset ke Default
                </button>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Nama Juara / Santri:</label>
                  <input
                    type="text"
                    value={activeCustom.namaPenerima}
                    onChange={(e) => handleCustomJuaraChange('namaPenerima', e.target.value)}
                    className="w-full p-2 bg-white border border-amber-300 rounded text-slate-900 font-bold text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    placeholder="Contoh: Muhammad Fauzan"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Asal Sekolah / Lembaga:</label>
                  <input
                    type="text"
                    value={activeCustom.asalLembaga}
                    onChange={(e) => handleCustomJuaraChange('asalLembaga', e.target.value)}
                    className="w-full p-2 bg-white border border-amber-300 rounded text-slate-900 text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                    placeholder="Contoh: SD Muhammadiyah 1 Cluring"
                  />
                </div>

                <div>
                  <label className="block font-semibold text-slate-700 mb-1">Nomor Piagam:</label>
                  <input
                    type="text"
                    value={activeCustom.nomorSurat}
                    onChange={(e) => handleCustomJuaraChange('nomorSurat', e.target.value)}
                    className="w-full p-2 bg-white border border-amber-300 rounded text-slate-900 font-mono text-xs focus:ring-2 focus:ring-emerald-500 focus:outline-none"
                  />
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Form Quick Editor untuk Sertifikat Peserta */}
        {certMode === 'peserta' && (
          <div className="bg-emerald-50/60 rounded-xl p-4 border border-emerald-200 space-y-3">
            <p className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
              <Sparkles className="w-3.5 h-3.5 text-emerald-700" /> Kustomisasi Teks Sertifikat Peserta:
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-3 text-xs">
              <div>
                <label className="block font-semibold text-slate-700 mb-1">Nomor Sertifikat:</label>
                <input
                  type="text"
                  value={pesertaData.nomorSurat}
                  onChange={(e) => setPesertaData({...pesertaData, nomorSurat: e.target.value})}
                  className="w-full p-2 bg-white border border-slate-300 rounded text-slate-900 font-mono text-xs focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Nama Lengkap Santri:</label>
                <input
                  type="text"
                  value={pesertaData.namaPenerima}
                  onChange={(e) => setPesertaData({...pesertaData, namaPenerima: e.target.value})}
                  className="w-full p-2 bg-white border border-slate-300 rounded text-slate-900 text-xs font-bold focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Contoh: Muhammad Ali Rabbani"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Asal Lembaga / Sekolah:</label>
                <input
                  type="text"
                  value={pesertaData.asalLembaga}
                  onChange={(e) => setPesertaData({...pesertaData, asalLembaga: e.target.value})}
                  className="w-full p-2 bg-white border border-slate-300 rounded text-slate-900 text-xs focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                  placeholder="Contoh: SD Muhammadiyah 1 Cluring"
                />
              </div>

              <div>
                <label className="block font-semibold text-slate-700 mb-1">Cabang Perlombaan:</label>
                <select
                  value={pesertaData.cabangNama}
                  onChange={(e) => {
                    const selCabang = cabangLomba.find(c => c.nama === e.target.value);
                    setPesertaData({
                      ...pesertaData,
                      cabangNama: e.target.value,
                      kategori: selCabang ? selCabang.kategori : 'Tingkat SD / MI'
                    });
                  }}
                  className="w-full p-2 bg-white border border-slate-300 rounded text-slate-900 text-xs font-semibold focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                >
                  <option value="TARTIL AL-QUR'AN">Tartil Al-Qur'an (SD/MI)</option>
                  <option value="ADZAN & IQOMAH">Adzan dan Iqomah (SD/MI)</option>
                  <option value="MEWARNAI KALIGRAFI">Mewarnai Kaligrafi (TK/TPA)</option>
                  <option value="PILDACIL SANTRI">Pildacil Santri (SD/MI)</option>
                </select>
              </div>
            </div>
          </div>
        )}
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
      {/* LEMBAR KERJA SERTIFIKAT A4 LANDSCAPE (297 mm x 210 mm) - ULTRA MEWAH */}
      {/* ========================================================================= */}
      <div 
        className="overflow-x-auto pb-8 flex justify-center"
        style={{ transformOrigin: 'top center' }}
      >
        <div 
          ref={certRef}
          id="cert-a4-container"
          className={`cert-a4-landscape-wrapper ${themeCfg.bgClass} font-tnr select-text`}
          style={{ transform: `scale(${zoomLevel})`, transformOrigin: 'top center' }}
        >
          {/* Bingkai Ganda Luar 1 (Outer Border Tebal) */}
          <div className={`w-full h-full border-[3px] ${themeCfg.borderOuter} p-1 flex flex-col justify-between box-border relative overflow-hidden`}>
            
            {/* Bingkai Emas Guilloche 2 (Mid Gold Border) */}
            <div className={`w-full h-full border-[1.5px] ${themeCfg.borderInner} p-1 flex flex-col justify-between box-border relative overflow-hidden`}>
              
              {/* Bingkai Dalam Formal 3 (Inner Thin Border) */}
              <div className={`w-full h-full border ${themeCfg.borderOuter} px-6 py-3 flex flex-col justify-between items-center text-center text-black box-border relative overflow-hidden`}>
                
                {/* Ornamen 4 Sudut Emas Mewah (Corner Rosettes) */}
                <div className="absolute top-1.5 left-1.5 w-5 h-5 border-t-2 border-l-2 border-[#D4AF37]">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] absolute top-0.5 left-0.5"></div>
                </div>
                <div className="absolute top-1.5 right-1.5 w-5 h-5 border-t-2 border-r-2 border-[#D4AF37]">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] absolute top-0.5 right-0.5"></div>
                </div>
                <div className="absolute bottom-1.5 left-1.5 w-5 h-5 border-b-2 border-l-2 border-[#D4AF37]">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] absolute bottom-0.5 left-0.5"></div>
                </div>
                <div className="absolute bottom-1.5 right-1.5 w-5 h-5 border-b-2 border-r-2 border-[#D4AF37]">
                  <div className="w-1.5 h-1.5 bg-[#D4AF37] absolute bottom-0.5 right-0.5"></div>
                </div>

                {/* Watermark Logo Transparan di Tengah Background */}
                <div className="absolute inset-0 flex items-center justify-center pointer-events-none opacity-[0.035]">
                  <img 
                    src="/Logo-Pemuda-Muhammadiyah.png" 
                    alt="Watermark" 
                    className="w-64 h-64 object-contain"
                  />
                </div>

                {/* --------------------------------------------------------------------- */}
                {/* 1. KOP SERTIFIKAT RESMI & LOGO DI ATAS TENGAH */}
                {/* --------------------------------------------------------------------- */}
                <div className="w-full flex flex-col items-center pt-0 space-y-0.5 z-10">
                  {/* Logo Pemuda Muhammadiyah di Atas Tengah */}
                  <div className="flex flex-col items-center justify-center">
                    <img 
                      src="/Logo-Pemuda-Muhammadiyah.png" 
                      alt="Logo Pemuda Muhammadiyah" 
                      className="w-10 h-10 object-contain drop-shadow-sm mb-0.5"
                    />
                    <div className="text-center">
                      <p className="text-[9pt] font-bold tracking-[0.25em] uppercase text-slate-900 font-serif">
                        PIMPINAN CABANG PEMUDA MUHAMMADIYAH CLURING
                      </p>
                      <p className="text-[7pt] font-bold tracking-wider uppercase text-slate-600">
                        DAERAH BANYUWANGI &bull; JAWA TIMUR
                      </p>
                    </div>
                  </div>

                  {/* Judul Besar Piagam dengan Ornamen Mewah */}
                  <div className="pt-0.5 space-y-0.5">
                    <div className="flex items-center justify-center gap-3">
                      <div className="w-16 h-[1.5px] bg-gradient-to-r from-transparent via-[#D4AF37] to-[#043927]"></div>
                      <h1 className={`text-xl sm:text-2xl font-black tracking-[0.16em] uppercase ${themeCfg.titleText} font-serif drop-shadow-sm`}>
                        {certMode === 'juara' ? 'PIAGAM PENGHARGAAN' : 'SERTIFIKAT APRESIASI'}
                      </h1>
                      <div className="w-16 h-[1.5px] bg-gradient-to-l from-transparent via-[#D4AF37] to-[#043927]"></div>
                    </div>
                    
                    {/* Nomor Surat Resmi Sesuai Format Organisasi */}
                    <p className="text-[9pt] font-mono font-bold tracking-wider text-slate-800">
                      Nomor : {currentCert.nomorSurat}
                    </p>
                  </div>
                </div>

                {/* --------------------------------------------------------------------- */}
                {/* 2. BADAN SERTIFIKAT & NAMA PENERIMA (SANGAT MEWAH) */}
                {/* --------------------------------------------------------------------- */}
                <div className="w-full max-w-3xl my-auto space-y-1 text-center z-10">
                  <p className="text-[9.5pt] font-serif italic text-slate-700">
                    Diberikan dengan penuh apresiasi dan kehormatan kepada:
                  </p>

                  {/* Nama Lengkap Penerima (Gaya Kaligrafi & Font Besar Mewah) */}
                  <div className="py-0">
                    <h2 className="text-xl sm:text-2xl font-black uppercase tracking-wider text-slate-950 font-serif inline-block px-6 pb-0.5 drop-shadow-sm">
                      {currentCert.namaPenerima}
                    </h2>
                    
                    {/* Garis Emas Ornamen Bawah Nama */}
                    <div className="flex items-center justify-center gap-2 max-w-sm mx-auto -mt-0.5">
                      <div className="h-[1.5px] flex-1 bg-gradient-to-r from-transparent via-[#D4AF37] to-[#B8860B]"></div>
                      <div className="w-1.5 h-1.5 rotate-45 bg-[#D4AF37] border border-black"></div>
                      <div className="h-[1.5px] flex-1 bg-gradient-to-l from-transparent via-[#D4AF37] to-[#B8860B]"></div>
                    </div>

                    <p className="text-[9pt] font-bold text-slate-700 pt-0.5">
                      {currentCert.asalLembaga}
                    </p>
                  </div>

                  {/* Status Predikat / Juara Ribbon Badge Mewah */}
                  <div className="space-y-0.5 pt-0.5">
                    <p className="text-[8.5pt] font-serif italic text-slate-600">
                      Atas pencapaian dan prestasinya sebagai:
                    </p>
                    
                    {/* Badge Emas / Perak / Perunggu */}
                    <div className="inline-flex items-center justify-center gap-2 bg-gradient-to-r from-amber-500 via-amber-300 to-amber-600 text-slate-950 px-6 py-0.5 rounded-full shadow-sm border border-amber-600">
                      <Trophy className="w-3.5 h-3.5 text-amber-950 drop-shadow" />
                      <span className="text-sm font-black tracking-widest uppercase font-serif">
                        {currentCert.peranTeks}
                      </span>
                      <Trophy className="w-3.5 h-3.5 text-amber-950 drop-shadow" />
                    </div>

                    <p className="text-[9.5pt] font-bold uppercase tracking-wide text-slate-900 pt-0.5">
                      CABANG PERLOMBAAN: {currentCert.cabangNama} <span className="font-normal text-[8.5pt]">({currentCert.kategori})</span>
                    </p>
                  </div>

                  {/* Deskripsi Event */}
                  <p className="text-[8.5pt] leading-snug text-slate-800 max-w-2xl mx-auto pt-0.5">
                    Dalam rangka menyemarakkan syiar Maulid Nabi Muhammad SAW 1448 H / 2026 M pada kegiatan <strong>MUHIBBIN 2026 (Musabaqah li Thulab wa Tholibin)</strong> bertema <em>&ldquo;{identitas.tema}&rdquo;</em> yang diselenggarakan oleh Pimpinan Cabang Pemuda Muhammadiyah Cluring pada {identitas.waktu} di {identitas.lokasiUtama}.
                  </p>
                </div>

                {/* --------------------------------------------------------------------- */}
                {/* 3. LEMBAR TANDA TANGAN RESMI (TABEL 3 KOLOM PAS 1 HALAMAN TANPA NBM & STAMP) */}
                {/* --------------------------------------------------------------------- */}
                <div className="w-full pt-1 z-10">
                  {/* Tanggal Resmi Surat */}
                  <div className="text-center pb-1 text-[8pt]">
                    <p className="font-normal text-slate-700">
                      Ditetapkan di Cluring, 23 Rabiul Awal 1448 H / 6 September 2026 M
                    </p>
                  </div>

                  {/* Tabel 3 Kolom Tanda Tangan Simetris & Stabil di Semua Browser / Print */}
                  <table style={{ width: '100%', borderCollapse: 'collapse', border: 'none', tableLayout: 'fixed' }} className="my-0">
                    <tbody>
                      <tr>
                        {/* Kolom 1: Ketua Panitia */}
                        <td style={{ width: '33.33%', textAlign: 'center', verticalAlign: 'top', padding: '0 4px' }}>
                          <p className="font-normal text-[8.5pt] leading-tight">Ketua Panitia,</p>
                          <div style={{ height: '34px' }}></div>
                          <p className="font-bold underline uppercase text-[9pt] leading-none">{pengesahan.panitia.ketua.nama}</p>
                        </td>

                        {/* Kolom 2: Mengetahui Ketua PCPM Cluring */}
                        <td style={{ width: '33.33%', textAlign: 'center', verticalAlign: 'top', padding: '0 4px' }}>
                          <p className="font-normal text-[8.5pt] leading-tight">Mengetahui,</p>
                          <p className="font-semibold uppercase text-[8pt] leading-tight">Ketua PCPM Cluring,</p>
                          <div style={{ height: '22px' }}></div>
                          <p className="font-bold underline uppercase text-[9pt] leading-none">{pengesahan.pcpm.ketua.nama}</p>
                        </td>

                        {/* Kolom 3: Sekretaris Panitia */}
                        <td style={{ width: '33.33%', textAlign: 'center', verticalAlign: 'top', padding: '0 4px' }}>
                          <p className="font-normal text-[8.5pt] leading-tight">Sekretaris Panitia,</p>
                          <div style={{ height: '34px' }}></div>
                          <p className="font-bold underline uppercase text-[9pt] leading-none">{pengesahan.panitia.sekretaris.nama}</p>
                        </td>
                      </tr>
                    </tbody>
                  </table>
                </div>

              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Petunjuk Cetak & Spesifikasi Kertas Piagam (No Print) */}
      <div className="max-w-7xl mx-auto bg-white rounded-xl p-5 border border-slate-300 shadow-sm space-y-3 no-print">
        <h3 className="font-bold text-sm uppercase tracking-wide text-slate-900 flex items-center gap-2">
          <HelpCircle className="w-4 h-4 text-pm-green" /> Petunjuk Percetakan & Kertas Piagam Penghargaan:
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 text-xs text-slate-600">
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1">
            <p className="font-bold text-slate-800">1. Bahan Kertas yang Direkomendasikan:</p>
            <p>Gunakan kertas <strong>Linen Jepang / Concorde / Coronado 220–250 gsm</strong> atau <strong>Art Paper Glossy 260 gsm</strong> ukuran A4. Tekstur serat kain linen akan memberikan kesan sangat formal dan mewah.</p>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1">
            <p className="font-bold text-slate-800">2. Pengaturan Print Browser (A4 Landscape):</p>
            <p>Pilih Paper size <strong>A4</strong>, Orientasi <strong>Landscape (Mendatar)</strong>, Margins <strong>None / Minimum</strong>, dan aktifkan opsi <strong>Background Graphics</strong> agar warna bingkai emas tercetak sempurna.</p>
          </div>
          <div className="bg-slate-50 p-3 rounded-lg border border-slate-200 space-y-1">
            <p className="font-bold text-slate-800">3. Penomoran Surat Resmi (1.2/06/2026):</p>
            <p>Nomor surat piagam penghargaan telah disesuaikan dengan kode baku organisasi (<em>1.2/06/2026</em>) dan nama juara dapat diedit secara langsung pada form di atas.</p>
          </div>
        </div>
      </div>
    </div>
  );
}
