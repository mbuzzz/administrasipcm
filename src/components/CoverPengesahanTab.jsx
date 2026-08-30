import React from 'react';
import { Printer, ArrowRight } from 'lucide-react';
import { proposalData } from '../data/proposalData';

export default function CoverPengesahanTab({ onTriggerPrint, setActiveTab }) {
  const { identitas } = proposalData;

  return (
    <div className="space-y-6 w-full">
      {/* Top Section Toolbar (no-print) */}
      <div className="bg-white rounded-lg p-3 sm:p-4 border border-slate-300 shadow-sm flex flex-wrap items-center justify-between gap-3 no-print max-w-4xl mx-auto">
        <div>
          <h2 className="text-sm font-bold text-slate-900">Cover Proposal Kegiatan</h2>
          <p className="text-xs text-slate-500">Format Sampul Resmi A4 Penuh (Times New Roman &bull; Elegan & Proporsional)</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={onTriggerPrint}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3 py-2 rounded shadow-sm transition-all"
          >
            <Printer className="w-3.5 h-3.5 text-amber-400" />
            <span>Cetak Cover</span>
          </button>
          <button
            onClick={() => setActiveTab('pendahuluan')}
            className="flex items-center gap-1.5 bg-pm-green hover:bg-emerald-800 text-white text-xs font-bold px-3 py-2 rounded shadow-sm transition-all"
          >
            <span>Lanjut BAB I</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* A4 Paper Sheet Container */}
      <div className="a4-sheet-container font-tnr text-black select-text">
        
        {/* ========================================================================= */}
        {/* COVER RESMI (A4) - PENUH 100% TINGGI LEMBAR A4 */}
        {/* ========================================================================= */}
        <div className="cover-a4-sheet avoid-break-inside">
          
          {/* Bingkai Ganda Luar Formal Dokumen Resmi */}
          <div className="w-full h-full border-[3px] border-black p-1 flex flex-col justify-between flex-1 box-border overflow-hidden">
            
            {/* Bingkai Dalam Formal */}
            <div className="w-full h-full border border-black px-4 py-4 sm:px-8 sm:py-6 flex flex-col justify-between items-center text-center text-black flex-1 box-border overflow-hidden">
              
              {/* 1. Bagian Atas: Instansi Penyelenggara */}
              <div className="space-y-1 w-full pt-1">
                <p className="text-xs sm:text-sm font-bold tracking-[0.2em] uppercase">
                  PROPOSAL KEGIATAN
                </p>
                <h2 className="text-sm sm:text-base md:text-lg font-bold tracking-wider uppercase leading-tight">
                  PIMPINAN CABANG PEMUDA MUHAMMADIYAH CLURING
                </h2>
                <h3 className="text-xs sm:text-sm font-bold tracking-wide uppercase leading-tight text-slate-800">
                  DAERAH BANYUWANGI
                </h3>
                <div className="w-24 h-[1.5px] bg-black mx-auto mt-1.5"></div>
              </div>

              {/* 2. Bagian Tengah Atas: Logo Resmi Pemuda Muhammadiyah */}
              <div className="my-auto py-2">
                <img 
                  src="/Logo-Pemuda-Muhammadiyah.png" 
                  alt="Logo Pemuda Muhammadiyah" 
                  className="w-32 h-32 sm:w-36 sm:h-36 object-contain mx-auto"
                />
              </div>

              {/* 3. Bagian Tengah: Judul Besar Kegiatan */}
              <div className="space-y-1.5 max-w-xl w-full my-auto">
                <div className="space-y-0.5">
                  <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-wider uppercase leading-none">
                    MUHIBBIN 2026
                  </h1>
                  <p className="text-sm sm:text-base md:text-lg font-bold tracking-wider uppercase pt-0.5">
                    MUSABAQAH LI THULAB WA THOLIBIN
                  </p>
                </div>
                
                <p className="text-xs sm:text-sm font-normal italic">
                  Dalam Rangka Memperingati Maulid Nabi Muhammad SAW 1448 H / 2026 M
                </p>
              </div>

              {/* 4. Bagian Tengah Bawah: Tema Kegiatan */}
              <div className="w-full max-w-lg mx-auto my-auto py-2.5 px-5 border-2 border-black text-center">
                <p className="text-[10pt] uppercase font-bold tracking-wider mb-0.5">
                  TEMA KEGIATAN:
                </p>
                <p className="text-sm sm:text-base md:text-lg font-bold tracking-wide">
                  &ldquo;{identitas.tema}&rdquo;
                </p>
                <p className="text-[9.5pt] italic mt-0.5 font-serif">
                  &mdash; Fastabiqul Khairât &mdash;
                </p>
              </div>

              {/* 5. Bagian Bawah: Penyelenggara & Tahun */}
              <div className="w-full pt-3 border-t-2 border-black text-center space-y-0.5 text-xs leading-tight pb-0.5">
                <p className="uppercase font-bold tracking-wider text-xs">
                  PANITIA PELAKSANA MUHIBBIN 2026
                </p>
                <p className="font-bold uppercase tracking-wide text-xs sm:text-sm">
                  PIMPINAN CABANG PEMUDA MUHAMMADIYAH CLURING
                </p>
                <p className="text-xs text-slate-800 font-bold">
                  BANYUWANGI &bull; 1448 H / 2026 M
                </p>
              </div>

            </div>
          </div>
        </div>

      </div>
    </div>
  );
}
