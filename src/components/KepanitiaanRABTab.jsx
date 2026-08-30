import React from 'react';
import { Printer, ArrowRight, ArrowLeft } from 'lucide-react';
import { proposalData, totalRAB } from '../data/proposalData';

export default function KepanitiaanRABTab({ setActiveTab }) {
  const { susunanPanitia, anggaranBiaya } = proposalData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 w-full">
      {/* Top Notice Toolbar (no-print) */}
      <div className="bg-white rounded-lg p-3 sm:p-4 border border-slate-300 shadow-sm flex flex-wrap items-center justify-between gap-3 no-print max-w-4xl mx-auto">
        <div>
          <h2 className="text-sm font-bold text-slate-900">BAB IV: Kepanitiaan & Rencana Anggaran (RAB)</h2>
          <p className="text-xs text-slate-500">Format Dokumen Resmi A4 (Times New Roman)</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('apresiasi_hadiah')}
            className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-3 py-2 rounded transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali BAB III</span>
          </button>
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3 py-2 rounded shadow-sm transition-all"
          >
            <Printer className="w-3.5 h-3.5 text-amber-400" />
            <span>Cetak BAB IV (A4)</span>
          </button>
          <button
            onClick={() => setActiveTab('penutup')}
            className="flex items-center gap-1.5 bg-pm-green hover:bg-emerald-800 text-white text-xs font-bold px-3 py-2 rounded shadow-sm transition-all"
          >
            <span>Lanjut BAB V (Penutup)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* A4 Sheet Container */}
      <div className="a4-sheet-container space-y-6 font-tnr text-black select-text">
        <div className="a4-sheet bg-white min-h-[297mm] space-y-6 border border-slate-300 shadow-lg avoid-break-inside">
          
          {/* Judul Bab IV */}
          <div className="text-center my-3">
            <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider">
              BAB IV : SUSUNAN KEPANITIAAN & RENCANA ANGGARAN BIAYA
            </h2>
          </div>

          {/* A: SUSUNAN KEPANITIAAN */}
          <div className="space-y-4 text-[11pt] leading-relaxed">
            <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wide">
              A. SUSUNAN KEPANITIAAN
            </h3>

            <table className="w-full border-none border-collapse text-[11pt] ml-2">
              <tbody>
                <tr>
                  <td className="py-1.5 font-bold w-48 align-top">Penanggung Jawab</td>
                  <td className="py-1.5 w-4 align-top">:</td>
                  <td className="py-1.5">{susunanPanitia.penanggungJawab.nama} ({susunanPanitia.penanggungJawab.peran})</td>
                </tr>
                <tr>
                  <td className="py-1.5 font-bold align-top">Ketua Panitia</td>
                  <td className="py-1.5 align-top">:</td>
                  <td className="py-1.5">{susunanPanitia.ketua.nama}</td>
                </tr>
                <tr>
                  <td className="py-1.5 font-bold align-top">Sekretaris Panitia</td>
                  <td className="py-1.5 align-top">:</td>
                  <td className="py-1.5">{susunanPanitia.sekretaris.nama}</td>
                </tr>
                <tr>
                  <td className="py-1.5 font-bold align-top">Bendahara Panitia</td>
                  <td className="py-1.5 align-top">:</td>
                  <td className="py-1.5">{susunanPanitia.bendahara.nama}</td>
                </tr>
                {susunanPanitia.seksi.map((s, idx) => (
                  <tr key={idx}>
                    <td className="py-1.5 font-bold align-top">{s.namaSeksi}</td>
                    <td className="py-1.5 align-top">:</td>
                    <td className="py-1.5">{s.anggota.join(', ')}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* B: RENCANA ANGGARAN BIAYA (RAB) */}
          <div className="space-y-3 text-[11pt] leading-relaxed pt-5 avoid-break-inside border-t border-black">
            <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wide">
              B. RENCANA ANGGARAN BIAYA (RAB)
            </h3>

            <p className="text-justify indent-8 text-[11pt]">
              Rencana Anggaran Biaya (RAB) yang dibutuhkan untuk penyelenggaraan dan operasional kegiatan musabaqah santri MUHIBBIN 2026 secara keseluruhan dirinci sebagai berikut:
            </p>

            <table className="w-full border-collapse border border-black text-[10pt]">
              <thead>
                <tr className="bg-gray-100 font-bold border-b border-black text-center">
                  <th className="border border-black px-2 py-2 w-10">No</th>
                  <th className="border border-black px-3 py-2 text-left">Uraian Kebutuhan</th>
                  <th className="border border-black px-2 py-2 text-center w-28">Volume / Satuan</th>
                  <th className="border border-black px-2 py-2 text-right w-28">Harga Satuan</th>
                  <th className="border border-black px-3 py-2 text-right w-32">Jumlah Biaya</th>
                </tr>
              </thead>
              <tbody>
                {anggaranBiaya.map((item, idx) => (
                  <tr key={item.id} className={idx % 2 === 1 ? 'bg-gray-50/40' : ''}>
                    <td className="border border-black px-2 py-1.5 text-center">{idx + 1}</td>
                    <td className="border border-black px-3 py-1.5 font-semibold text-left">
                      {item.item}
                    </td>
                    <td className="border border-black px-2 py-1.5 text-center">
                      {item.volume} {item.satuan}
                    </td>
                    <td className="border border-black px-2 py-1.5 text-right font-mono">
                      Rp {item.hargaSatuan.toLocaleString('id-ID')}
                    </td>
                    <td className="border border-black px-3 py-1.5 text-right font-bold font-mono">
                      Rp {item.total.toLocaleString('id-ID')}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-100 font-bold border-t-2 border-b-2 border-black">
                  <td colSpan={4} className="border border-black px-3 py-2 text-right uppercase tracking-wider text-[10.5pt]">
                    TOTAL KESELURUHAN (RAB):
                  </td>
                  <td className="border border-black px-3 py-2 text-right text-[11pt] font-black font-mono">
                    Rp {totalRAB.toLocaleString('id-ID')}
                  </td>
                </tr>
              </tfoot>
            </table>

            {/* Terbilang Block Resmi */}
            <div className="border border-black p-2.5 bg-gray-50/30 text-[10.5pt]">
              <p>
                <strong>Terbilang:</strong> <em>Empat Juta Seratus Sembilan Puluh Lima Ribu Rupiah.</em>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
