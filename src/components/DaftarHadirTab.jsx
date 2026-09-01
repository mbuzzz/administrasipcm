import React, { useState } from 'react';
import { 
  Printer, 
  UserCheck, 
  Users, 
  Award, 
  Layers, 
  Check, 
  ArrowRight,
  ShieldCheck
} from 'lucide-react';
import KopSurat from './KopSurat';
import { proposalData } from '../data/proposalData';

export default function DaftarHadirTab({ setActiveTab }) {
  const { identitas, pengesahan, susunanPanitia, cabangLomba } = proposalData;
  const [activeDaftarHadir, setActiveDaftarHadir] = useState('panitia_juri');

  const handlePrint = () => {
    window.print();
  };

  // 1. Data Lengkap Panitia & Dewan Juri
  const listPanitiaJuri = [
    // PCPM & Pimpinan Inti
    { no: 1, nama: susunanPanitia.penanggungJawab.nama, unsur: 'Penanggung Jawab / Ketua PCPM' },
    { no: 2, nama: susunanPanitia.ketua.nama, unsur: 'Ketua Panitia Pelaksana' },
    { no: 3, nama: susunanPanitia.sekretaris.nama, unsur: 'Sekretaris Panitia' },
    { no: 4, nama: susunanPanitia.bendahara.nama, unsur: 'Bendahara Panitia' },
    // Dewan Juri 4 Cabang Lomba
    { no: 5, nama: 'Ustadz Zulfian Al Hilal', unsur: 'Dewan Juri Tartil Al-Qur\'an' },
    { no: 6, nama: 'Ustadz Wildan', unsur: 'Dewan Juri Adzan dan Iqomah' },
    { no: 7, nama: 'Ustadz Rahmad', unsur: 'Dewan Juri Adzan dan Iqomah' },
    { no: 8, nama: 'Guru / Ustadzah TK Dinar', unsur: 'Dewan Juri Mewarnai Kaligrafi' },
    { no: 9, nama: 'Guru / Ustadzah TK \'Aisyiyah Tampo', unsur: 'Dewan Juri Mewarnai Kaligrafi' },
    { no: 10, nama: 'Ustadz Yanto', unsur: 'Dewan Juri Pildacil' },
    { no: 11, nama: 'Ustadz Fahmi', unsur: 'Dewan Juri Pildacil' },
    // Seksi-Seksi Kepanitiaan
    { no: 12, nama: 'Azhar Adaby', unsur: 'Koordinator Sie Acara' },
    { no: 13, nama: 'Ahmad Fauzan', unsur: 'Anggota Sie Acara' },
    { no: 14, nama: 'Rifqy Iza Fahrizal', unsur: 'Anggota Sie Acara' },
    { no: 15, nama: 'Rudi Arifin', unsur: 'Koordinator Sie Perlengkapan' },
    { no: 16, nama: 'Wildan', unsur: 'Anggota Sie Perlengkapan' },
    { no: 17, nama: 'Agung', unsur: 'Anggota Sie Perlengkapan' },
    { no: 18, nama: 'Rafli', unsur: 'Koordinator Sie PDD & Dokumentasi' },
    { no: 19, nama: 'Sahrul', unsur: 'Anggota Sie PDD' },
    { no: 20, nama: 'Niejaar Fatwa Prasojo', unsur: 'Anggota Sie PDD' },
    { no: 21, nama: 'Lukman', unsur: 'Koordinator Sie Keamanan' },
    { no: 22, nama: 'Bima', unsur: 'Anggota Sie Keamanan' },
    { no: 23, nama: '', unsur: 'Panitia Tambahan / Relawan' },
    { no: 24, nama: '', unsur: 'Panitia Tambahan / Relawan' }
  ];

  // 2. Data 50 Baris Peserta (Dibagi 2 Halaman A4 @ 25 Baris)
  const pesertaHalaman1 = Array.from({ length: 25 }, (_, i) => i + 1);
  const pesertaHalaman2 = Array.from({ length: 25 }, (_, i) => i + 26);

  return (
    <div className="space-y-6 w-full">
      {/* Top Toolbar Navigation & Controls (no-print) */}
      <div className="bg-white rounded-lg p-3 sm:p-4 border border-slate-300 shadow-sm flex flex-wrap items-center justify-between gap-3 no-print max-w-5xl mx-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-pm-green">
            <UserCheck className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">Daftar Hadir Resmi (Presensi Ber-Tanda Tangan)</h2>
            <p className="text-xs text-slate-500">
              Format Cetak A4: 1. Panitia & Dewan Juri &bull; 2. Peserta Lomba (50 Peserta)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 bg-pm-green hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded shadow-sm transition-all"
          >
            <Printer className="w-4 h-4 text-amber-300" />
            <span>
              Cetak {activeDaftarHadir === 'panitia_juri' ? 'Daftar Hadir Panitia & Juri' : 'Daftar Hadir 50 Peserta (2 Lembar)'} (Ctrl+P)
            </span>
          </button>
        </div>
      </div>

      {/* Switcher Tab Antara Panitia & Juri vs Peserta (no-print) */}
      <div className="bg-white rounded-lg p-2.5 border border-slate-300 shadow-sm no-print max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-2">
          <span className="text-xs font-bold text-slate-700 mr-1 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            Pilih Jenis Daftar Hadir:
          </span>

          <button
            onClick={() => setActiveDaftarHadir('panitia_juri')}
            className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 border ${
              activeDaftarHadir === 'panitia_juri'
                ? 'bg-pm-green text-white border-pm-green shadow-xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            <Users className="w-3.5 h-3.5" />
            <span>1. Panitia & Dewan Juri (1 Lembar A4)</span>
          </button>

          <button
            onClick={() => setActiveDaftarHadir('peserta')}
            className={`px-3 py-1.5 rounded-md text-xs font-bold transition-all flex items-center gap-1.5 border ${
              activeDaftarHadir === 'peserta'
                ? 'bg-pm-green text-white border-pm-green shadow-xs'
                : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
            }`}
          >
            <UserCheck className="w-3.5 h-3.5" />
            <span>2. Peserta Lomba (50 Peserta / 2 Lembar A4)</span>
          </button>
        </div>

        {setActiveTab && (
          <button
            onClick={() => setActiveTab('form_penilaian')}
            className="text-xs text-pm-green hover:text-emerald-800 font-semibold flex items-center gap-1"
          >
            <span>Buka Form Penilaian Juri</span>
            <ArrowRight className="w-3.5 h-3.5" />
          </button>
        )}
      </div>

      {/* A4 Sheet Print Sheets Container */}
      <div className="a4-sheet-container space-y-8 font-tnr text-black select-text">
        
        {/* ========================================================================= */}
        {/* MACAM 1: DAFTAR HADIR PANITIA & DEWAN JURI (PAS 1 LEMBAR A4) */}
        {/* ========================================================================= */}
        {(activeDaftarHadir === 'panitia_juri' || activeDaftarHadir === 'all') && (
          <div className="a4-sheet bg-white min-h-[297mm] flex flex-col justify-between border border-slate-300 shadow-lg page-break-after avoid-break-inside text-[10.5pt] leading-tight">
            <div>
              {/* Kop Surat Resmi */}
              <KopSurat compact={true} />

              {/* Judul Dokumen */}
              <div className="text-center my-2 text-black">
                <h1 className="text-base sm:text-lg font-bold uppercase tracking-wide">
                  DAFTAR HADIR PANITIA & DEWAN JURI
                </h1>
                <p className="text-[11pt] font-bold uppercase text-slate-900 mt-0.5">
                  MUHIBBIN 2026 &bull; MUSABAQAH LI THULAB WA THOLIBIN
                </p>
                <p className="text-[9.5pt] font-semibold text-slate-800">
                  {identitas.waktu} &bull; {identitas.lokasiUtama}
                </p>
                <div className="w-36 h-[1px] bg-black mx-auto mt-1.5"></div>
              </div>

              {/* Tabel Daftar Hadir Panitia & Juri */}
              <div className="my-2">
                <table className="w-full border-collapse border border-black text-[9.5pt]">
                  <thead>
                    <tr className="bg-gray-100 font-bold border-b border-black text-center">
                      <th className="border border-black p-1 w-8">No</th>
                      <th className="border border-black p-1 text-left w-56">Nama Lengkap</th>
                      <th className="border border-black p-1 text-left w-52">Jabatan / Unsur</th>
                      <th className="border border-black p-1 w-28">No. HP / Kontak</th>
                      <th className="border border-black p-1 text-center w-36" colSpan={2}>Tanda Tangan</th>
                    </tr>
                  </thead>
                  <tbody>
                    {listPanitiaJuri.map((item, idx) => {
                      const isGanjil = item.no % 2 === 1;
                      return (
                        <tr key={item.no} className="h-6">
                          <td className="border border-black p-0.5 text-center font-semibold">{item.no}</td>
                          <td className="border border-black p-0.5 font-semibold text-left">{item.nama}</td>
                          <td className="border border-black p-0.5 text-left text-[9pt]">{item.unsur}</td>
                          <td className="border border-black p-0.5 text-center text-[8.5pt]"></td>
                          
                          {/* Kolom Tanda Tangan Kiri (Ganjil) */}
                          <td className="border border-black p-0.5 w-18 text-left align-top text-[8.5pt]">
                            {isGanjil ? `${item.no}. .............` : ''}
                          </td>
                          {/* Kolom Tanda Tangan Kanan (Genap) */}
                          <td className="border border-black p-0.5 w-18 text-left align-top text-[8.5pt]">
                            {!isGanjil ? `${item.no}. .............` : ''}
                          </td>
                        </tr>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>

            {/* Pengesahan Tanda Tangan Penutup */}
            <div className="mt-2 pt-1 border-t border-black text-[9.5pt]">
              <div className="flex justify-between items-end">
                <div className="text-center w-1/2">
                  <p className="text-[9pt]">Ketua Panitia Pelaksana,</p>
                  <div className="h-10"></div>
                  <p className="font-bold underline uppercase text-[9.5pt]">{pengesahan.panitia.ketua.nama}</p>
                </div>
                <div className="text-center w-1/2">
                  <p className="text-[9pt]">Cluring, 6 September 2026</p>
                  <p className="text-[9pt]">Ketua PCPM Cluring,</p>
                  <div className="h-10"></div>
                  <p className="font-bold underline uppercase text-[9.5pt]">{pengesahan.pcpm.ketua.nama}</p>
                </div>
              </div>
            </div>

          </div>
        )}

        {/* ========================================================================= */}
        {/* MACAM 2: DAFTAR HADIR PESERTA (50 PESERTA - 2 LEMBAR A4) */}
        {/* ========================================================================= */}
        {(activeDaftarHadir === 'peserta' || activeDaftarHadir === 'all') && (
          <>
            {/* HALAMAN 1: NO 1 - 25 */}
            <div className="a4-sheet bg-white min-h-[297mm] flex flex-col justify-between border border-slate-300 shadow-lg page-break-after avoid-break-inside text-[10.5pt] leading-tight">
              <div>
                {/* Kop Surat Resmi */}
                <KopSurat compact={true} />

                {/* Judul Dokumen */}
                <div className="text-center my-2 text-black">
                  <h1 className="text-base sm:text-lg font-bold uppercase tracking-wide">
                    DAFTAR HADIR SANTRI / PESERTA LOMBA
                  </h1>
                  <p className="text-[11pt] font-bold uppercase text-slate-900 mt-0.5">
                    MUHIBBIN 2026 &bull; (HALAMAN 1: NO. 01 – 25)
                  </p>
                  <p className="text-[9.5pt] font-semibold text-slate-800">
                    {identitas.waktu} &bull; {identitas.lokasiUtama}
                  </p>
                  <div className="w-36 h-[1px] bg-black mx-auto mt-1.5"></div>
                </div>

                {/* Tabel Peserta No 1 - 25 */}
                <div className="my-2">
                  <table className="w-full border-collapse border border-black text-[9.5pt]">
                    <thead>
                      <tr className="bg-gray-100 font-bold border-b border-black text-center">
                        <th className="border border-black p-1 w-8">No</th>
                        <th className="border border-black p-1 w-16">No. Und</th>
                        <th className="border border-black p-1 text-left w-48">Nama Lengkap Santri</th>
                        <th className="border border-black p-1 text-left w-40">Asal Lembaga / Sekolah</th>
                        <th className="border border-black p-1 text-left w-36">Cabang Lomba</th>
                        <th className="border border-black p-1 text-center w-36" colSpan={2}>Tanda Tangan / Paraf</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pesertaHalaman1.map((num) => {
                        const isGanjil = num % 2 === 1;
                        return (
                          <tr key={num} className="h-6">
                            <td className="border border-black p-0.5 text-center font-semibold">{num}</td>
                            <td className="border border-black p-0.5 text-center"></td>
                            <td className="border border-black p-0.5 text-left"></td>
                            <td className="border border-black p-0.5 text-left text-[9pt]"></td>
                            <td className="border border-black p-0.5 text-left text-[9pt]"></td>
                            
                            {/* Kolom TTD Ganjil */}
                            <td className="border border-black p-0.5 w-18 text-left align-top text-[8.5pt]">
                              {isGanjil ? `${num}. .............` : ''}
                            </td>
                            {/* Kolom TTD Genap */}
                            <td className="border border-black p-0.5 w-18 text-left align-top text-[8.5pt]">
                              {!isGanjil ? `${num}. .............` : ''}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Footer Keterangan Halaman 1 */}
              <div className="mt-2 pt-1 border-t border-black text-[9pt] flex justify-between items-center">
                <p className="italic">*Daftar hadir santri/peserta MUHIBBIN 2026 - Halaman 1 dari 2</p>
                <p className="font-semibold">Panitia Pelaksana / Sie Kesekretariatan</p>
              </div>
            </div>

            {/* HALAMAN 2: NO 26 - 50 */}
            <div className="a4-sheet bg-white min-h-[297mm] flex flex-col justify-between border border-slate-300 shadow-lg page-break-after avoid-break-inside text-[10.5pt] leading-tight">
              <div>
                {/* Kop Surat Resmi */}
                <KopSurat compact={true} />

                {/* Judul Dokumen */}
                <div className="text-center my-2 text-black">
                  <h1 className="text-base sm:text-lg font-bold uppercase tracking-wide">
                    DAFTAR HADIR SANTRI / PESERTA LOMBA
                  </h1>
                  <p className="text-[11pt] font-bold uppercase text-slate-900 mt-0.5">
                    MUHIBBIN 2026 &bull; (HALAMAN 2: NO. 26 – 50)
                  </p>
                  <p className="text-[9.5pt] font-semibold text-slate-800">
                    {identitas.waktu} &bull; {identitas.lokasiUtama}
                  </p>
                  <div className="w-36 h-[1px] bg-black mx-auto mt-1.5"></div>
                </div>

                {/* Tabel Peserta No 26 - 50 */}
                <div className="my-2">
                  <table className="w-full border-collapse border border-black text-[9.5pt]">
                    <thead>
                      <tr className="bg-gray-100 font-bold border-b border-black text-center">
                        <th className="border border-black p-1 w-8">No</th>
                        <th className="border border-black p-1 w-16">No. Und</th>
                        <th className="border border-black p-1 text-left w-48">Nama Lengkap Santri</th>
                        <th className="border border-black p-1 text-left w-40">Asal Lembaga / Sekolah</th>
                        <th className="border border-black p-1 text-left w-36">Cabang Lomba</th>
                        <th className="border border-black p-1 text-center w-36" colSpan={2}>Tanda Tangan / Paraf</th>
                      </tr>
                    </thead>
                    <tbody>
                      {pesertaHalaman2.map((num) => {
                        const isGanjil = num % 2 === 1;
                        return (
                          <tr key={num} className="h-6">
                            <td className="border border-black p-0.5 text-center font-semibold">{num}</td>
                            <td className="border border-black p-0.5 text-center"></td>
                            <td className="border border-black p-0.5 text-left"></td>
                            <td className="border border-black p-0.5 text-left text-[9pt]"></td>
                            <td className="border border-black p-0.5 text-left text-[9pt]"></td>
                            
                            {/* Kolom TTD Ganjil */}
                            <td className="border border-black p-0.5 w-18 text-left align-top text-[8.5pt]">
                              {isGanjil ? `${num}. .............` : ''}
                            </td>
                            {/* Kolom TTD Genap */}
                            <td className="border border-black p-0.5 w-18 text-left align-top text-[8.5pt]">
                              {!isGanjil ? `${num}. .............` : ''}
                            </td>
                          </tr>
                        );
                      })}
                    </tbody>
                  </table>
                </div>
              </div>

              {/* Pengesahan Tanda Tangan Panitia Pelaksana */}
              <div className="mt-2 pt-1 border-t border-black text-[9.5pt]">
                <div className="flex justify-between items-end">
                  <div className="text-center w-1/2">
                    <p className="text-[9pt]">Sekretaris Panitia,</p>
                    <div className="h-10"></div>
                    <p className="font-bold underline uppercase text-[9.5pt]">{pengesahan.panitia.sekretaris.nama}</p>
                  </div>
                  <div className="text-center w-1/2">
                    <p className="text-[9pt]">Cluring, 6 September 2026</p>
                    <p className="text-[9pt]">Ketua Panitia Pelaksana,</p>
                    <div className="h-10"></div>
                    <p className="font-bold underline uppercase text-[9.5pt]">{pengesahan.panitia.ketua.nama}</p>
                  </div>
                </div>
              </div>

            </div>
          </>
        )}

      </div>
    </div>
  );
}
