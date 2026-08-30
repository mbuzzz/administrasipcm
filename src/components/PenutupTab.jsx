import React from 'react';
import { FileCheck, ArrowLeft, Printer } from 'lucide-react';
import { proposalData } from '../data/proposalData';

export default function PenutupTab({ setActiveTab }) {
  const { bab5, pengesahan } = proposalData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 w-full">
      {/* Top Section Toolbar (no-print) */}
      <div className="bg-white rounded-lg p-3 sm:p-4 border border-slate-300 shadow-sm flex flex-wrap items-center justify-between gap-3 no-print max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <FileCheck className="w-5 h-5 text-pm-green" />
          <div>
            <h2 className="text-sm font-bold text-slate-900">BAB V: Penutup & Lembar Tanda Tangan</h2>
            <p className="text-xs text-slate-500">Format Dokumen Resmi A4 (Times New Roman)</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('kepanitiaan_rab')}
            className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-3 py-2 rounded transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali BAB IV</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3 py-2 rounded shadow-sm transition-all"
          >
            <Printer className="w-3.5 h-3.5 text-amber-400" />
            <span>Cetak BAB V (A4)</span>
          </button>
        </div>
      </div>

      {/* A4 Paper Sheet Container */}
      <div className="a4-sheet-container font-tnr text-black select-text">
        <div className="a4-sheet bg-white min-h-[297mm] flex flex-col justify-between border border-slate-300 shadow-lg avoid-break-inside">
          
          <div>
            {/* BAB V : Penutup */}
            <div className="text-center my-3">
              <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider">
                BAB V : PENUTUP
              </h2>
            </div>

            {/* Paragraf Penutup */}
            <div className="space-y-3 text-[11pt] leading-relaxed text-justify">
              {bab5.penutup.map((paragraf, idx) => (
                <p key={idx} className="indent-8">
                  {paragraf}
                </p>
              ))}
            </div>

            {/* Semboyan & Salam Penutup */}
            <div className="mt-4 text-left space-y-1.5">
              <p className="font-bold italic text-[11pt]">
                FASTABIQUL KHAIRÂT.
              </p>
              <p className="font-arabic text-xl text-black">
                وَالسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
              </p>
            </div>
          </div>

          {/* Tanda Tangan Resmi Pengesahan Proposal */}
          <div className="mt-6 pt-2 avoid-break-inside text-[11pt]">
            {/* Tanggal Surat Format Pecahan Baku */}
            <div className="flex items-center justify-end text-[11pt] text-right mb-2">
              <span className="mr-1.5 whitespace-nowrap font-normal">Cluring,</span>
              <div className="inline-flex flex-col items-center text-center">
                <span className="leading-tight px-1 font-normal">30 Agustus 2026 M</span>
                <div className="w-full border-b border-black"></div>
                <span className="leading-tight px-1 font-normal">16 Shafar 1448 H</span>
              </div>
            </div>

            {/* Panitia Pelaksana */}
            <div className="text-center mb-1 font-bold uppercase tracking-wider text-[10.5pt]">
              PANITIA PELAKSANA MUHIBBIN 2026
            </div>

            <table className="w-full border-none border-collapse text-center my-1">
              <tbody>
                <tr>
                  <td className="w-1/2 align-top pb-12 font-normal">Ketua Panitia,</td>
                  <td className="w-1/2 align-top pb-12 font-normal">Sekretaris Panitia,</td>
                </tr>
                <tr>
                  <td className="w-1/2 align-bottom">
                    <p className="font-bold underline uppercase">{pengesahan.panitia.ketua.nama}</p>
                  </td>
                  <td className="w-1/2 align-bottom">
                    <p className="font-bold underline uppercase">{pengesahan.panitia.sekretaris.nama}</p>
                  </td>
                </tr>
              </tbody>
            </table>

            {/* Mengetahui PCPM Cluring */}
            <div className="mt-4 pt-1 text-center">
              <p className="text-[10pt] font-normal">Mengetahui,</p>
              <div className="pt-1.5 pb-12 text-center font-normal">
                Ketua PCPM Cluring,
              </div>
              <div className="text-center">
                <p className="font-bold underline uppercase">{pengesahan.pcpm.ketua.nama}</p>
              </div>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
