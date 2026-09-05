import React, { useState } from 'react';
import { 
  Printer, 
  ClipboardList, 
  Check, 
  BookOpen, 
  Volume2, 
  Palette, 
  Mic, 
  Layers,
  ArrowRight,
  UserCheck
} from 'lucide-react';
import KopSurat from './KopSurat';
import { proposalData } from '../data/proposalData';

export default function FormPenilaianTab({ setActiveTab }) {
  const { identitas, cabangLomba } = proposalData;
  const [filterLomba, setFilterLomba] = useState('all');

  const getLombaIcon = (id) => {
    switch (id) {
      case 'tartil': return BookOpen;
      case 'adzan': return Volume2;
      case 'mewarnai': return Palette;
      case 'pildacil': return Mic;
      default: return ClipboardList;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const displayedLomba = filterLomba === 'all' 
    ? cabangLomba 
    : cabangLomba.filter(l => l.id === filterLomba);

  // Jumlah baris isian peserta pada form cetak (15 baris pas 1 halaman A4)
  const rows = Array.from({ length: 15 }, (_, i) => i + 1);

  return (
    <div className="space-y-6 w-full">
      {/* Top Toolbar Navigation & Controls (no-print) */}
      <div className="bg-white rounded-lg p-3 sm:p-4 border border-slate-300 shadow-sm flex flex-wrap items-center justify-between gap-3 no-print max-w-5xl mx-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-pm-green">
            <ClipboardList className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">Formulir Penilaian Dewan Juri (Score Sheet)</h2>
            <p className="text-xs text-slate-500">
              Format Cetak Resmi A4 (Tabel Isian Nilai Peserta Siap Pakai Tanpa Tanda Tangan)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 bg-pm-green hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded shadow-sm transition-all"
          >
            <Printer className="w-4 h-4 text-amber-300" />
            <span>Cetak Form Penilaian ({filterLomba === 'all' ? '4 Lembar A4' : '1 Lembar Terpilih'})</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs / Quick Select Cabang Lomba (no-print) */}
      <div className="bg-white rounded-lg p-2.5 border border-slate-300 shadow-sm no-print max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-bold text-slate-700 mr-1 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            Pilih Form Lomba:
          </span>

          <button
            onClick={() => setFilterLomba('all')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              filterLomba === 'all'
                ? 'bg-slate-900 text-white shadow-xs font-bold'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Semua Form Lomba (4 Lembar)
          </button>

          {cabangLomba.map((lomba) => {
            const Icon = getLombaIcon(lomba.id);
            const isActive = filterLomba === lomba.id;
            return (
              <button
                key={lomba.id}
                onClick={() => setFilterLomba(lomba.id)}
                className={`px-2.5 py-1.5 rounded-md text-xs font-semibold transition-all flex items-center gap-1.5 border ${
                  isActive
                    ? 'bg-pm-green text-white border-pm-green font-bold shadow-xs'
                    : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                }`}
              >
                <Icon className="w-3.5 h-3.5" />
                <span>{lomba.nama}</span>
              </button>
            );
          })}
        </div>

        {setActiveTab && (
          <button
            onClick={() => setActiveTab('lampiran_juknis')}
            className="text-xs text-pm-green hover:text-emerald-800 font-semibold flex items-center gap-1"
          >
            <span>Buka Lampiran Juknis</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* A4 Sheet Print Sheets Container */}
      <div className="a4-sheet-container space-y-8 font-tnr text-black select-text">
        {displayedLomba.map((lomba) => (
          <div 
            key={lomba.id}
            className="a4-sheet bg-white min-h-[297mm] flex flex-col justify-between border border-slate-300 shadow-lg page-break-after avoid-break-inside text-[11pt] leading-normal"
          >
            <div>
              {/* 1. KOP SURAT RESMI */}
              <KopSurat compact={true} />

              {/* 2. JUDUL LEMBAR PENILAIAN */}
              <div className="text-center my-2 text-black">
                <h1 className="text-base sm:text-lg font-bold uppercase tracking-wide">
                  LEMBAR PENILAIAN DEWAN JURI
                </h1>
                <p className="text-[11pt] font-bold uppercase text-slate-900 mt-0.5">
                  MUHIBBIN 2026 &bull; CABANG LOMBA: {lomba.nama.toUpperCase()}
                </p>
                <p className="text-[10pt] font-semibold text-slate-800">
                  Kategori: {lomba.kategori} &bull; {identitas.waktu}
                </p>
                <div className="w-32 h-[1px] bg-black mx-auto mt-1.5"></div>
              </div>

              {/* 3. HEADER INFORMASI JURI & LOMBA (Isian Juri) */}
              <div className="my-2 border border-black p-2 bg-gray-50/40 text-[10pt]">
                <table className="w-full border-none border-collapse text-[10pt]">
                  <tbody>
                    <tr>
                      <td className="w-28 font-bold py-0.5">Nama Dewan Juri</td>
                      <td className="w-3 py-0.5">:</td>
                      <td className="py-0.5 border-b border-dotted border-black w-60">
                        &nbsp;
                      </td>
                      <td className="w-24 font-bold py-0.5 pl-4">Tempat / Ruang</td>
                      <td className="w-3 py-0.5">:</td>
                      <td className="py-0.5 font-semibold">
                        {lomba.lokasiDetail || lomba.tempat}
                      </td>
                    </tr>
                    <tr>
                      <td className="font-bold py-0.5">Materi Penilaian</td>
                      <td className="py-0.5">:</td>
                      <td className="py-0.5" colSpan={4}>
                        {lomba.materi}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 4. TABEL UTAMA PENILAIAN PESERTA (15 BARIS ISIAN) */}
              <div className="my-2">
                <table className="w-full border-collapse border border-black text-center text-[10pt]">
                  <thead>
                    <tr className="bg-gray-100 font-bold border-b border-black">
                      <th className="border border-black p-1.5 w-10" rowSpan={2}>No</th>
                      <th className="border border-black p-1.5 w-20" rowSpan={2}>No. Undian</th>
                      <th className="border border-black p-1.5 text-left w-52" rowSpan={2}>Nama Peserta / Delegasi Lembaga</th>
                      <th className="border border-black p-1" colSpan={lomba.aspekPenilaian.length}>
                        Kriteria & Aspek Penilaian Nilai (Bobot)
                      </th>
                      <th className="border border-black p-1.5 w-20" rowSpan={2}>Total Nilai</th>
                      <th className="border border-black p-1.5 w-24" rowSpan={2}>Peringkat / Ket.</th>
                    </tr>
                    <tr className="bg-gray-50 font-bold border-b border-black text-[9.5pt]">
                      {lomba.aspekPenilaian.map((asp, idx) => (
                        <th key={idx} className="border border-black p-1">
                          {asp.aspek} <br />
                          <span className="font-normal text-[8.5pt]">({asp.bobot})</span>
                        </th>
                      ))}
                    </tr>
                  </thead>
                  <tbody>
                    {rows.map((num) => (
                      <tr key={num} className="h-7">
                        <td className="border border-black p-1 font-semibold text-center">{num}</td>
                        <td className="border border-black p-1"></td>
                        <td className="border border-black p-1 text-left"></td>
                        {lomba.aspekPenilaian.map((_, idx) => (
                          <td key={idx} className="border border-black p-1"></td>
                        ))}
                        <td className="border border-black p-1 font-bold"></td>
                        <td className="border border-black p-1"></td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 5. PEDOMAN ASPEK PENILAIAN MINI */}
              <div className="my-2 p-2 border border-black bg-gray-50/20 text-[9pt] leading-tight">
                <p className="font-bold mb-0.5 uppercase">Pedoman Penilaian Singkat:</p>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                  {lomba.aspekPenilaian.map((asp, idx) => (
                    <div key={idx}>
                      <span className="font-bold">&bull; {asp.aspek} ({asp.bobot}):</span>{' '}
                      <span className="italic text-slate-700">{asp.keterangan}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* 6. CATATAN DEWAN JURI & IDENTITAS (TANPA TANDA TANGAN) */}
            <div className="mt-2 pt-1 border-t border-black text-[9.5pt] flex justify-between items-start">
              <div className="text-left w-2/3">
                <p className="font-semibold italic text-[9pt]">
                  *Catatan: Nilai bersifat objektif dan mutlak dari Dewan Juri. Penilaian dimulai saat nomor undian peserta dipanggil.
                </p>
              </div>
              <div className="text-right w-1/3">
                <p className="text-[9pt]">Cluring, 6 September 2026</p>
                <p className="font-bold text-[9.5pt]">Dewan Juri Penilai</p>
              </div>
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
