import React from 'react';
import { Printer, ArrowLeft } from 'lucide-react';
import { proposalData, totalRAB } from '../data/proposalData';

export default function ProposalPrintView({ setActiveTab }) {
  const { 
    identitas, 
    pengesahan, 
    bab1, 
    cabangLomba, 
    alokasiWaktuDanLokasi, 
    rundownAcara, 
    catatanKhususRundown, 
    susunanPanitia, 
    anggaranBiaya, 
    bab5 
  } = proposalData;

  const handlePrint = () => {
    window.print();
  };

  return (
    <div className="space-y-6 w-full">
      {/* Print Controls Toolbar (no-print) */}
      <div className="bg-white rounded-lg p-3 sm:p-4 border border-slate-300 shadow-sm flex flex-wrap items-center justify-between gap-3 no-print max-w-4xl mx-auto">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setActiveTab('cover_pengesahan')}
            className="p-1.5 text-slate-600 hover:text-slate-900 hover:bg-slate-100 rounded transition-colors"
            title="Kembali ke Cover"
          >
            <ArrowLeft className="w-5 h-5" />
          </button>
          <div>
            <h2 className="text-sm font-bold text-slate-900">
              Dokumen Lengkap Proposal MUHIBBIN 2026
            </h2>
            <p className="text-xs text-slate-500">
              Format Buku Proposal Resmi A4 (Times New Roman &bull; Siap Cetak / Export PDF)
            </p>
          </div>
        </div>

        <button
          onClick={handlePrint}
          className="flex items-center gap-2 bg-pm-green hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded shadow-sm transition-all"
        >
          <Printer className="w-4 h-4 text-amber-300" />
          <span>Cetak Dokumen Lengkap (Ctrl+P)</span>
        </button>
      </div>

      {/* DOKUMEN PROPOSAL A4 LENGKAP - PURE TIMES NEW ROMAN (TANPA LEMBAR PENGESAHAN) */}
      <div className="a4-sheet-container space-y-8 font-tnr text-black select-text">
        
        {/* ========================================================================= */}
        {/* 1. HALAMAN COVER (SAMPUL DEPAN) */}
        {/* ========================================================================= */}
        <div className="cover-a4-sheet page-break-after avoid-break-inside">
          
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

        {/* ========================================================================= */}
        {/* 2. BAB I : PENDAHULUAN */}
        {/* ========================================================================= */}
        <div className="a4-sheet space-y-5 page-break-after">
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
            <h3 className="font-bold text-xs sm:text-sm uppercase">
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
            <h3 className="font-bold text-xs sm:text-sm uppercase">
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
            <h3 className="font-bold text-xs sm:text-sm uppercase">
              D. SASARAN KEGIATAN
            </h3>
            <p className="indent-8">
              {bab1.sasaranKegiatan}
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 3. BAB II : PELAKSANAAN KEGIATAN & PETUNJUK TEKNIS */}
        {/* ========================================================================= */}
        <div className="a4-sheet space-y-5 page-break-after">
          <div className="text-center my-3">
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

        {/* ========================================================================= */}
        {/* 4. BAB III : APRESIASI DAN HADIAH KEJUARAAN */}
        {/* ========================================================================= */}
        <div className="a4-sheet space-y-5 page-break-after avoid-break-inside">
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
                <tr>
                  <td className="border border-black px-2 py-2 text-center">1</td>
                  <td className="border border-black px-3 py-2 font-semibold text-left">Tartil Al-Qur'an (SD/MI)</td>
                  <td className="border border-black px-2 py-2 text-center text-[9.5pt]">Piala + Piagam<br /><span className="font-bold">Rp 100.000</span></td>
                  <td className="border border-black px-2 py-2 text-center text-[9.5pt]">Piala + Piagam<br /><span className="font-bold">Rp 75.000</span></td>
                  <td className="border border-black px-2 py-2 text-center text-[9.5pt]">Piala + Piagam<br /><span className="font-bold">Rp 50.000</span></td>
                  <td className="border border-black px-2 py-2 text-right font-bold font-mono">Rp 225.000</td>
                </tr>
                <tr>
                  <td className="border border-black px-2 py-2 text-center">2</td>
                  <td className="border border-black px-3 py-2 font-semibold text-left">Adzan dan Iqomah (SD/MI)</td>
                  <td className="border border-black px-2 py-2 text-center text-[9.5pt]">Piala + Piagam<br /><span className="font-bold">Rp 100.000</span></td>
                  <td className="border border-black px-2 py-2 text-center text-[9.5pt]">Piala + Piagam<br /><span className="font-bold">Rp 75.000</span></td>
                  <td className="border border-black px-2 py-2 text-center text-[9.5pt]">Piala + Piagam<br /><span className="font-bold">Rp 50.000</span></td>
                  <td className="border border-black px-2 py-2 text-right font-bold font-mono">Rp 225.000</td>
                </tr>
                <tr>
                  <td className="border border-black px-2 py-2 text-center">3</td>
                  <td className="border border-black px-3 py-2 font-semibold text-left">Mewarnai Kaligrafi (TK/TPA)</td>
                  <td className="border border-black px-2 py-2 text-center text-[9.5pt]">Piala + Piagam<br /><span className="font-bold">Rp 100.000</span></td>
                  <td className="border border-black px-2 py-2 text-center text-[9.5pt]">Piala + Piagam<br /><span className="font-bold">Rp 75.000</span></td>
                  <td className="border border-black px-2 py-2 text-center text-[9.5pt]">Piala + Piagam<br /><span className="font-bold">Rp 50.000</span></td>
                  <td className="border border-black px-2 py-2 text-right font-bold font-mono">Rp 225.000</td>
                </tr>
                <tr>
                  <td className="border border-black px-2 py-2 text-center">4</td>
                  <td className="border border-black px-3 py-2 font-semibold text-left">Pildacil Santri (SD/MI)</td>
                  <td className="border border-black px-2 py-2 text-center text-[9.5pt]">Piala + Piagam<br /><span className="font-bold">Rp 150.000</span></td>
                  <td className="border border-black px-2 py-2 text-center text-[9.5pt]">Piala + Piagam<br /><span className="font-bold">Rp 100.000</span></td>
                  <td className="border border-black px-2 py-2 text-center text-[9.5pt]">Piala + Piagam<br /><span className="font-bold">Rp 50.000</span></td>
                  <td className="border border-black px-2 py-2 text-right font-bold font-mono">Rp 300.000</td>
                </tr>
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
              *Catatan: Pembagian piala, piagam, dan uang pembinaan diserahkan langsung pada sesi Penutupan & Pengumuman Juara.
            </p>
          </div>
        </div>

        {/* ========================================================================= */}
        {/* 5. BAB IV : SUSUNAN KEPANITIAAN & RENCANA ANGGARAN BIAYA (RAB) */}
        {/* ========================================================================= */}
        <div className="a4-sheet space-y-6 page-break-after">
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
                  <td className="py-1.5 font-bold align-top">Sekretaris</td>
                  <td className="py-1.5 align-top">:</td>
                  <td className="py-1.5">{susunanPanitia.sekretaris.nama}</td>
                </tr>
                <tr>
                  <td className="py-1.5 font-bold align-top">Bendahara</td>
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

        {/* ========================================================================= */}
        {/* 6. BAB V : PENUTUP & LEMBAR TANDA TANGAN */}
        {/* ========================================================================= */}
        <div className="a4-sheet flex flex-col justify-between avoid-break-inside">
          <div>
            <div className="text-center my-4">
              <h2 className="text-base sm:text-lg font-bold uppercase tracking-wider">
                BAB V : PENUTUP
              </h2>
            </div>

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

          {/* Tanda Tangan Penutup Resmi */}
          <div className="mt-4 pt-1 avoid-break-inside text-[11pt]">
            <div className="flex items-center justify-end text-[11pt] text-right mb-2">
              <span className="mr-1.5 whitespace-nowrap font-normal">Cluring,</span>
              <div className="inline-flex flex-col items-center text-center">
                <span className="leading-tight px-1 font-normal">30 Agustus 2026 M</span>
                <div className="w-full border-b border-black"></div>
                <span className="leading-tight px-1 font-normal">16 Shafar 1448 H</span>
              </div>
            </div>

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
