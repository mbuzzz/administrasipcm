import React from 'react';
import { Printer, ArrowRight } from 'lucide-react';
import { proposalData } from '../data/proposalData';

export default function PendahuluanTab({ setActiveTab }) {
  const { bab1 } = proposalData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 w-full">
      {/* Top Notice Toolbar (no-print) */}
      <div className="bg-white rounded-lg p-3 sm:p-4 border border-slate-300 shadow-sm flex flex-wrap items-center justify-between gap-3 no-print max-w-4xl mx-auto">
        <div>
          <h2 className="text-sm font-bold text-slate-900">BAB I: Pendahuluan</h2>
          <p className="text-xs text-slate-500">Format Dokumen Resmi A4 (Times New Roman)</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3 py-2 rounded shadow-sm transition-all"
          >
            <Printer className="w-3.5 h-3.5 text-amber-400" />
            <span>Cetak BAB I (A4)</span>
          </button>
          <button
            onClick={() => setActiveTab('pelaksanaan')}
            className="flex items-center gap-1.5 bg-pm-green hover:bg-emerald-800 text-white text-xs font-bold px-3 py-2 rounded shadow-sm transition-all"
          >
            <span>Lanjut BAB II</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* A4 Sheet Container */}
      <div className="a4-sheet-container space-y-6 font-tnr text-black select-text">
        <div className="a4-sheet bg-white min-h-[297mm] space-y-5 border border-slate-300 shadow-lg page-break-after">
          
          {/* Judul Bab I */}
          <div className="text-center my-2">
            <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider">
              BAB I : PENDAHULUAN
            </h2>
          </div>

          {/* Lafaz Basmalah */}
          <div className="text-center my-2">
            <p className="font-arabic text-xl text-black">
              بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
            </p>
          </div>

          {/* A. Selayang Pandang */}
          <div className="space-y-2 text-[11pt] leading-relaxed text-justify">
            <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wide">
              A. SELAYANG PANDANG
            </h3>
            {bab1.latarBelakang.map((paragraf, i) => (
              <p key={i} className="indent-8">
                {paragraf}
              </p>
            ))}
          </div>

          {/* B. Dasar Kegiatan */}
          <div className="space-y-2 text-[11pt] leading-relaxed text-justify pt-2">
            <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wide">
              B. DASAR KEGIATAN
            </h3>
            
            <p className="font-bold text-[10.5pt]">1. Landasan Al-Qur'an Al-Karim:</p>
            <div className="space-y-2 ml-4">
              {bab1.dasarKegiatan[0].rincian.map((item, idx) => (
                <div key={idx} className="border-l-2 border-black pl-3 my-1.5">
                  <p className="font-bold text-[10pt]">{item.surah}:</p>
                  <p className="font-arabic text-lg text-right my-1">{item.arab}</p>
                  <p className="text-[10pt] italic">{item.terjemah}</p>
                </div>
              ))}
            </div>

            <p className="font-bold text-[10.5pt] pt-2">2. Keputusan Organisasi & Program Kerja:</p>
            <ul className="list-disc ml-8 space-y-1 text-[10.5pt]">
              {bab1.dasarKegiatan[1].rincian.map((poin, idx) => (
                <li key={idx}>{poin}</li>
              ))}
            </ul>
          </div>

          {/* C. Maksud dan Tujuan */}
          <div className="space-y-2 text-[11pt] leading-relaxed text-justify pt-2">
            <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wide">
              C. MAKSUD DAN TUJUAN
            </h3>
            <ol className="list-decimal ml-8 space-y-1 text-[10.5pt]">
              {bab1.maksudDanTujuan.map((item) => (
                <li key={item.no}>
                  <strong>{item.judul}:</strong> {item.deskripsi}
                </li>
              ))}
            </ol>
          </div>

          {/* D. Sasaran Kegiatan */}
          <div className="space-y-2 text-[11pt] leading-relaxed text-justify pt-2">
            <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wide">
              D. SASARAN KEGIATAN
            </h3>
            <p className="indent-8">
              {bab1.sasaranKegiatan}
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
