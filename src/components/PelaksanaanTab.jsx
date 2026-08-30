import React from 'react';
import { Printer, ArrowRight } from 'lucide-react';
import { proposalData } from '../data/proposalData';

export default function PelaksanaanTab({ setActiveTab }) {
  const { identitas, cabangLomba, alokasiWaktuDanLokasi, rundownAcara, catatanKhususRundown } = proposalData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 w-full">
      {/* Top Notice Toolbar (no-print) */}
      <div className="bg-white rounded-lg p-3 sm:p-4 border border-slate-300 shadow-sm flex flex-wrap items-center justify-between gap-3 no-print max-w-4xl mx-auto">
        <div>
          <h2 className="text-sm font-bold text-slate-900">BAB II: Pelaksanaan & Petunjuk Teknis</h2>
          <p className="text-xs text-slate-500">Format Dokumen Resmi A4 (Times New Roman)</p>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3 py-2 rounded shadow-sm transition-all"
          >
            <Printer className="w-3.5 h-3.5 text-amber-400" />
            <span>Cetak BAB II (A4)</span>
          </button>
          <button
            onClick={() => setActiveTab('apresiasi_hadiah')}
            className="flex items-center gap-1.5 bg-pm-green hover:bg-emerald-800 text-white text-xs font-bold px-3 py-2 rounded shadow-sm transition-all"
          >
            <span>Lanjut BAB III (Hadiah)</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>

      {/* A4 Sheet Container */}
      <div className="a4-sheet-container space-y-6 font-tnr text-black select-text">
        <div className="a4-sheet bg-white min-h-[297mm] space-y-5 border border-slate-300 shadow-lg page-break-after">
          
          {/* Judul Bab II */}
          <div className="text-center my-2">
            <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider">
              BAB II : PELAKSANAAN KEGIATAN & PETUNJUK TEKNIS
            </h2>
          </div>

          {/* A. Waktu dan Tempat */}
          <div className="space-y-2 text-[11pt] leading-relaxed">
            <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wide">
              A. WAKTU DAN TEMPAT PELAKSANAAN
            </h3>
            <table className="ml-4 border-none border-collapse text-[11pt]">
              <tbody>
                <tr>
                  <td className="pr-4 py-0.5 font-semibold w-40">Hari, Tanggal</td>
                  <td className="pr-2 py-0.5">:</td>
                  <td className="py-0.5 font-bold">{identitas.waktu}</td>
                </tr>
                <tr>
                  <td className="pr-4 py-0.5 font-semibold">Waktu Pelaksanaan</td>
                  <td className="pr-2 py-0.5">:</td>
                  <td className="py-0.5">{identitas.jam} (Rundown dimulai tepat pukul {identitas.jamRundownMulai})</td>
                </tr>
                <tr>
                  <td className="pr-4 py-0.5 font-semibold">Tempat / Lokasi</td>
                  <td className="pr-2 py-0.5">:</td>
                  <td className="py-0.5 font-bold">{identitas.lokasiUtama}</td>
                </tr>
                <tr>
                  <td className="pr-4 py-0.5 font-semibold">Biaya Pendaftaran</td>
                  <td className="pr-2 py-0.5">:</td>
                  <td className="py-0.5 font-bold">{identitas.biayaPendaftaran} (100% Free)</td>
                </tr>
              </tbody>
            </table>
          </div>

          {/* B. Petunjuk Teknis 4 Cabang Lomba */}
          <div className="space-y-4 text-[11pt] leading-relaxed pt-2">
            <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wide">
              B. PETUNJUK TEKNIS (JUKNIS) CABANG PERLOMBAAN
            </h3>

            {cabangLomba.map((lomba) => (
              <div key={lomba.id} className="border border-black mb-4 avoid-break-inside font-tnr text-black">
                {/* 1. Header Bar Cabang Lomba */}
                <div className="bg-gray-100 border-b border-black px-3.5 py-1.5 flex flex-wrap justify-between items-center gap-2">
                  <div className="font-bold text-[11pt] uppercase tracking-wide">
                    {lomba.nomor}. CABANG LOMBA: {lomba.nama} <span className="font-normal text-[10.5pt]">({lomba.kategori})</span>
                  </div>
                  <div className="text-[10pt] font-semibold">
                    Lokasi: {lomba.tempat}
                  </div>
                </div>

                <div className="p-3 space-y-2.5 text-[10.5pt]">
                  {/* 2. Informasi Pokok */}
                  <table className="w-full border-none border-collapse text-[10.5pt]">
                    <tbody>
                      <tr>
                        <td className="w-28 font-bold align-top py-0.5">Materi Lomba</td>
                        <td className="w-3 align-top py-0.5">:</td>
                        <td className="align-top py-0.5 leading-relaxed">{lomba.materi}</td>
                      </tr>
                      <tr>
                        <td className="font-bold align-top py-0.5">Dewan Juri</td>
                        <td className="align-top py-0.5">:</td>
                        <td className="align-top py-0.5 font-semibold">{lomba.juri.join(' & ')}</td>
                      </tr>
                      <tr>
                        <td className="font-bold align-top py-0.5">Durasi Waktu</td>
                        <td className="align-top py-0.5">:</td>
                        <td className="align-top py-0.5">{lomba.durasiTampil}</td>
                      </tr>
                    </tbody>
                  </table>

                  {/* 3. Aspek Penilaian & Bobot Tabel Mini */}
                  <div>
                    <p className="font-bold text-[10.5pt] mb-1">Aspek Penilaian & Bobot Nilai:</p>
                    <table className="w-full border-collapse border border-black text-[10pt]">
                      <thead>
                        <tr className="bg-gray-50 border-b border-black text-left">
                          <th className="border border-black px-2 py-1 w-1/3">Kriteria Penilaian</th>
                          <th className="border border-black px-2 py-1 w-20 text-center">Bobot</th>
                          <th className="border border-black px-2 py-1">Deskripsi / Indikator Penilaian</th>
                        </tr>
                      </thead>
                      <tbody>
                        {lomba.aspekPenilaian.map((asp, idx) => (
                          <tr key={idx}>
                            <td className="border border-black px-2 py-1 font-semibold">{asp.aspek}</td>
                            <td className="border border-black px-2 py-1 text-center font-bold">{asp.bobot}</td>
                            <td className="border border-black px-2 py-1 italic">{asp.keterangan}</td>
                          </tr>
                        ))}
                      </tbody>
                    </table>
                  </div>

                  {/* 4. Ketentuan Teknis Lomba */}
                  <div>
                    <p className="font-bold text-[10.5pt] mb-1">Ketentuan & Tata Tertib Teknis:</p>
                    <ol className="list-decimal ml-5 space-y-0.5 text-[10pt] leading-relaxed text-justify">
                      {lomba.juknis.map((jk, idx) => (
                        <li key={idx}>{jk}</li>
                      ))}
                    </ol>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* C. Alokasi Waktu & Lokasi Lomba (Required Table) */}
          <div className="space-y-2 text-[11pt] leading-relaxed pt-3 avoid-break-inside">
            <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wide">
              C. ALOKASI WAKTU & LOKASI PERLOMBAAN
            </h3>
            <table className="w-full border-collapse border border-black text-center text-[10.5pt]">
              <thead>
                <tr className="bg-gray-100 font-bold border-b border-black">
                  <th className="border border-black p-2 w-12">No</th>
                  <th className="border border-black p-2 text-left">Cabang Lomba</th>
                  <th className="border border-black p-2">Alokasi Waktu</th>
                  <th className="border border-black p-2">Lokasi Perlombaan</th>
                </tr>
              </thead>
              <tbody>
                {alokasiWaktuDanLokasi.map((row) => (
                  <tr key={row.no}>
                    <td className="border border-black p-1.5">{row.no}</td>
                    <td className="border border-black p-1.5 text-left font-semibold">{row.cabang}</td>
                    <td className="border border-black p-1.5">{row.alokasi}</td>
                    <td className="border border-black p-1.5">{row.lokasi}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* D. Tabel Susunan Acara / Rundown (Required Table) */}
          <div className="space-y-2 text-[11pt] leading-relaxed pt-3 avoid-break-inside">
            <h3 className="font-bold text-xs sm:text-sm uppercase tracking-wide">
              D. SUSUNAN ACARA / RUNDOWN (Dimulai Tepat Pukul 08.30 WIB)
            </h3>
            <table className="w-full border-collapse border border-black text-[10.5pt]">
              <thead>
                <tr className="bg-gray-100 font-bold border-b border-black text-center">
                  <th className="border border-black p-2 w-10">No</th>
                  <th className="border border-black p-2 text-left">Acara / Agenda</th>
                  <th className="border border-black p-2 text-left">Penanggung Jawab</th>
                  <th className="border border-black p-2 text-center w-28">Estimasi Waktu</th>
                </tr>
              </thead>
              <tbody>
                {rundownAcara.map((item) => (
                  <tr key={item.no}>
                    <td className="border border-black p-1.5 text-center">{item.no}</td>
                    <td className="border border-black p-1.5 font-semibold">{item.acara}</td>
                    <td className="border border-black p-1.5">{item.penanggungJawab}</td>
                    <td className="border border-black p-1.5 text-center">{item.durasi}</td>
                  </tr>
                ))}
              </tbody>
            </table>

            <p className="pt-2 text-[11pt]">
              <strong>Catatan Khusus: {catatanKhususRundown}</strong>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
