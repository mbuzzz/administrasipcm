import React from 'react';
import { Trophy, Award, ArrowRight, ArrowLeft } from 'lucide-react';
import { proposalData } from '../data/proposalData';

export default function ApresiasiHadiahTab({ setActiveTab }) {
  const { cabangLomba } = proposalData;

  // Data Rincian Uang Pembinaan & Hadiah per Cabang Lomba
  const rincianHadiah = [
    {
      no: 1,
      cabang: "Tartil Al-Qur'an (SD/MI Kelas 2–5)",
      juara1: "Piala + Sertifikat Juara + Uang Pembinaan Rp 100.000",
      juara2: "Piala + Sertifikat Juara + Uang Pembinaan Rp 75.000",
      juara3: "Piala + Sertifikat Juara + Uang Pembinaan Rp 50.000",
      totalUang: 225000
    },
    {
      no: 2,
      cabang: "Adzan dan Iqomah (SD/MI Kelas 2–5 Putra)",
      juara1: "Piala + Sertifikat Juara + Uang Pembinaan Rp 100.000",
      juara2: "Piala + Sertifikat Juara + Uang Pembinaan Rp 75.000",
      juara3: "Piala + Sertifikat Juara + Uang Pembinaan Rp 50.000",
      totalUang: 225000
    },
    {
      no: 3,
      cabang: "Mewarnai Kaligrafi (TK & TPA Usia TK)",
      juara1: "Piala + Sertifikat Juara + Uang Pembinaan Rp 100.000",
      juara2: "Piala + Sertifikat Juara + Uang Pembinaan Rp 75.000",
      juara3: "Piala + Sertifikat Juara + Uang Pembinaan Rp 50.000",
      totalUang: 225000
    },
    {
      no: 4,
      cabang: "Pidato Da'i Cilik / Pildacil (SD/MI Kelas 4–6)",
      juara1: "Piala + Sertifikat Juara + Uang Pembinaan Rp 150.000",
      juara2: "Piala + Sertifikat Juara + Uang Pembinaan Rp 100.000",
      juara3: "Piala + Sertifikat Juara + Uang Pembinaan Rp 50.000",
      totalUang: 300000
    }
  ];

  return (
    <div className="space-y-6 w-full">
      {/* Top Section Toolbar (no-print) */}
      <div className="bg-white rounded-lg p-3 sm:p-4 border border-slate-300 shadow-sm flex flex-wrap items-center justify-between gap-3 no-print max-w-4xl mx-auto">
        <div className="flex items-center gap-2">
          <Trophy className="w-5 h-5 text-amber-500" />
          <div>
            <h2 className="text-sm font-bold text-slate-900">BAB III: Apresiasi & Hadiah Kejuaraan</h2>
            <p className="text-xs text-slate-500">Format Dokumen Resmi A4 (Times New Roman)</p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={() => setActiveTab('pelaksanaan')}
            className="flex items-center gap-1.5 bg-slate-100 hover:bg-slate-200 text-slate-700 text-xs font-semibold px-3 py-2 rounded transition-all"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Kembali BAB II</span>
          </button>
          <button
            onClick={() => setActiveTab('kepanitiaan_rab')}
            className="flex items-center gap-1.5 bg-pm-green hover:bg-emerald-800 text-white text-xs font-bold px-3 py-2 rounded shadow-sm transition-all"
          >
            <span>Lanjut BAB IV (Panitia & RAB)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* A4 Paper Sheet Container */}
      <div className="a4-sheet-container font-tnr text-black select-text">
        <div className="a4-sheet bg-white min-h-[297mm] space-y-5 border border-slate-300 shadow-lg avoid-break-inside">
          
          {/* Judul Bab III */}
          <div className="text-center my-2">
            <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider">
              BAB III : APRESIASI DAN HADIAH KEJUARAAN
            </h2>
          </div>

          {/* Pengantar BAB III */}
          <div className="space-y-2 text-[11pt] leading-relaxed text-justify">
            <p className="indent-8">
              Sebagai bentuk apresiasi, motivasi, dan penghargaan atas dedikasi serta prestasi para santri/siswa yang berpartisipasi dalam ajang MUHIBBIN (Musabaqah li Thulab wa Tholibin) 2026, Panitia Pelaksana Pimpinan Cabang Pemuda Muhammadiyah Cluring menyediakan penghargaan dan apresiasi kejuaraan bagi para pemenang pada masing-masing cabang perlombaan sebagai berikut:
            </p>
          </div>

          {/* A. Rincian Bentuk Apresiasi */}
          <div className="space-y-2 text-[11pt] leading-relaxed text-justify pt-1">
            <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wide">
              A. BENTUK PENGHARGAAN & APRESIASI
            </h3>
            <ol className="list-decimal ml-8 space-y-1 text-[10.5pt]">
              <li>
                <strong>Piala / Trophy Kejuaraan:</strong> Diberikan kepada Juara 1, Juara 2, dan Juara 3 untuk setiap cabang perlombaan (Total 4 Set / 12 buah piala kejuaraan).
              </li>
              <li>
                <strong>Piagam Penghargaan / Sertifikat Pemenang:</strong> Diberikan kepada seluruh Juara 1, 2, dan 3 sebagai bukti prestasi resmi tingkat cabang.
              </li>
              <li>
                <strong>Uang Pembinaan:</strong> Diberikan secara langsung sebagai bentuk motivasi belajar dan pembinaan bakat santri.
              </li>
              <li>
                <strong>Sertifikat Seluruh Peserta:</strong> Diberikan kepada seluruh santri/pelajar yang telah berpartisipasi aktif dalam kegiatan MUHIBBIN 2026.
              </li>
            </ol>
          </div>

          {/* B. Rincian Hadiah Kejuaraan */}
          <div className="space-y-2 text-[11pt] leading-relaxed pt-2 avoid-break-inside">
            <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wide">
              B. RINCIAN HADIAH & UANG PEMBINAAN
            </h3>
            
            <table className="w-full border-collapse border border-black text-[10pt]">
              <thead>
                <tr className="bg-gray-100 font-bold border-b border-black text-center">
                  <th className="border border-black px-2 py-2 w-10">No</th>
                  <th className="border border-black px-3 py-2 text-left">Cabang Perlombaan</th>
                  <th className="border border-black px-2 py-2 text-center w-24">Juara 1</th>
                  <th className="border border-black px-2 py-2 text-center w-24">Juara 2</th>
                  <th className="border border-black px-2 py-2 text-center w-24">Juara 3</th>
                  <th className="border border-black px-2 py-2 text-right w-28">Total Hadiah</th>
                </tr>
              </thead>
              <tbody>
                {rincianHadiah.map((item) => (
                  <tr key={item.no}>
                    <td className="border border-black px-2 py-2 text-center">{item.no}</td>
                    <td className="border border-black px-3 py-2 font-semibold text-left">
                      {item.cabang}
                    </td>
                    <td className="border border-black px-2 py-2 text-center text-[9.5pt]">
                      Piala + Piagam<br />
                      <span className="font-bold">{item.no === 4 ? 'Rp 150.000' : 'Rp 100.000'}</span>
                    </td>
                    <td className="border border-black px-2 py-2 text-center text-[9.5pt]">
                      Piala + Piagam<br />
                      <span className="font-bold">{item.no === 4 ? 'Rp 100.000' : 'Rp 75.000'}</span>
                    </td>
                    <td className="border border-black px-2 py-2 text-center text-[9.5pt]">
                      Piala + Piagam<br />
                      <span className="font-bold">Rp 50.000</span>
                    </td>
                    <td className="border border-black px-2 py-2 text-right font-bold font-mono">
                      Rp {item.totalUang.toLocaleString('id-ID')}
                    </td>
                  </tr>
                ))}
              </tbody>
              <tfoot>
                <tr className="bg-gray-100 font-bold border-t-2 border-black">
                  <td colSpan={5} className="border border-black px-3 py-2 text-right uppercase tracking-wider text-[10pt]">
                    TOTAL ALOKASI UANG PEMBINAAN:
                  </td>
                  <td className="border border-black px-2 py-2 text-right text-[10.5pt] font-black font-mono">
                    Rp 975.000
                  </td>
                </tr>
              </tfoot>
            </table>

            <p className="text-[10pt] italic pt-1">
              *Catatan: Pembagian piala, sertifikat, dan uang pembinaan akan diserahkan langsung pada sesi Penutupan & Pengumuman Juara.
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
