import React, { useState } from 'react';
import { 
  Printer, 
  Award, 
  Check, 
  BookOpen, 
  Volume2, 
  Palette, 
  Mic, 
  Layers,
  ArrowRight
} from 'lucide-react';
import KopSurat from './KopSurat';
import { proposalData } from '../data/proposalData';

export default function LampiranJuknisTab({ setActiveTab }) {
  const { identitas, pengesahan, cabangLomba } = proposalData;
  const [filterLomba, setFilterLomba] = useState('all');

  const getLombaIcon = (id) => {
    switch (id) {
      case 'tartil': return BookOpen;
      case 'adzan': return Volume2;
      case 'mewarnai': return Palette;
      case 'pildacil': return Mic;
      default: return Award;
    }
  };

  const handlePrint = () => {
    window.print();
  };

  const displayedLomba = filterLomba === 'all' 
    ? cabangLomba 
    : cabangLomba.filter(l => l.id === filterLomba);

  return (
    <div className="space-y-6 w-full">
      {/* Top Toolbar Navigation & Controls (no-print) */}
      <div className="bg-white rounded-lg p-3 sm:p-4 border border-slate-300 shadow-sm flex flex-wrap items-center justify-between gap-3 no-print max-w-5xl mx-auto">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-emerald-100 flex items-center justify-center text-pm-green">
            <Award className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-sm font-bold text-slate-900">Lampiran Petunjuk Teknis (Juknis) Per Lomba</h2>
            <p className="text-xs text-slate-500">
              Format Resmi A4 Per Cabang Lomba (Dipisah Page-Break • Siap Cetak & Dilampirkan)
            </p>
          </div>
        </div>

        <div className="flex items-center gap-2">
          <button
            onClick={handlePrint}
            className="flex items-center gap-1.5 bg-pm-green hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded shadow-sm transition-all"
          >
            <Printer className="w-4 h-4 text-amber-300" />
            <span>Cetak Juknis ({filterLomba === 'all' ? '4 Lembar A4' : '1 Lembar Terpilih'})</span>
          </button>
        </div>
      </div>

      {/* Filter Tabs / Quick Select Cabang Lomba (no-print) */}
      <div className="bg-white rounded-lg p-2.5 border border-slate-300 shadow-sm no-print max-w-5xl mx-auto flex flex-wrap items-center justify-between gap-2">
        <div className="flex items-center gap-1.5 flex-wrap">
          <span className="text-xs font-bold text-slate-700 mr-1 flex items-center gap-1">
            <Layers className="w-3.5 h-3.5 text-emerald-600" />
            Pilih Tampilan:
          </span>

          <button
            onClick={() => setFilterLomba('all')}
            className={`px-3 py-1.5 rounded-md text-xs font-semibold transition-all ${
              filterLomba === 'all'
                ? 'bg-slate-900 text-white shadow-xs font-bold'
                : 'bg-slate-100 hover:bg-slate-200 text-slate-700'
            }`}
          >
            Semua Cabang Lomba (4 Lembar)
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
            onClick={() => setActiveTab('surat_menyurat')}
            className="text-xs text-pm-green hover:text-emerald-800 font-semibold flex items-center gap-1"
          >
            <span>Buka Modul Surat</span>
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

              {/* 2. JUDUL LAMPIRAN PETUNJUK TEKNIS */}
              <div className="text-center my-2 text-black">
                <p className="text-[10pt] font-bold tracking-widest uppercase text-slate-800">
                  LAMPIRAN PETUNJUK TEKNIS (JUKNIS) PERLOMBAAN
                </p>
                <h1 className="text-base sm:text-lg font-bold uppercase tracking-wide mt-0.5">
                  CABANG LOMBA: {lomba.nama.toUpperCase()}
                </h1>
                <p className="text-[10pt] font-semibold text-slate-900">
                  Kategori: {lomba.kategori} &bull; MUHIBBIN 2026
                </p>
                <div className="w-28 h-[1px] bg-black mx-auto mt-1.5"></div>
              </div>

              {/* 3. INFORMASI POKOK PELAKSANAAN LOMBA */}
              <div className="my-2.5 bg-gray-50/60 border border-black p-2.5 text-[10.5pt]">
                <table className="w-full border-none border-collapse text-[10.5pt]">
                  <tbody>
                    <tr>
                      <td className="w-32 font-bold py-0.5 align-top">Hari, Tanggal</td>
                      <td className="w-3 py-0.5 align-top">:</td>
                      <td className="py-0.5 align-top font-semibold">{identitas.waktu}</td>
                    </tr>
                    <tr>
                      <td className="font-bold py-0.5 align-top">Waktu / Alokasi</td>
                      <td className="py-0.5 align-top">:</td>
                      <td className="py-0.5 align-top">Pukul {identitas.jam} &bull; Durasi: {lomba.durasiTampil}</td>
                    </tr>
                    <tr>
                      <td className="font-bold py-0.5 align-top">Tempat / Lokasi</td>
                      <td className="py-0.5 align-top">:</td>
                      <td className="py-0.5 align-top font-semibold">{lomba.lokasiDetail || lomba.tempat}</td>
                    </tr>
                    <tr>
                      <td className="font-bold py-0.5 align-top">Materi Lomba</td>
                      <td className="py-0.5 align-top">:</td>
                      <td className="py-0.5 align-top">{lomba.materi}</td>
                    </tr>
                    <tr>
                      <td className="font-bold py-0.5 align-top">Dewan Juri</td>
                      <td className="py-0.5 align-top">:</td>
                      <td className="py-0.5 align-top font-semibold">{lomba.juri.join(' & ')}</td>
                    </tr>
                    <tr>
                      <td className="font-bold py-0.5 align-top">Biaya Pendaftaran</td>
                      <td className="py-0.5 align-top">:</td>
                      <td className="py-0.5 align-top font-bold uppercase">{identitas.biayaPendaftaran} (100% Free)</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 4. ASPEK PENILAIAN & BOBOT NILAI */}
              <div className="my-2 text-[10.5pt]">
                <p className="font-bold mb-1 uppercase tracking-wide text-[10.5pt]">
                  A. Aspek Penilaian & Bobot Nilai Dewan Juri:
                </p>
                <table className="w-full border-collapse border border-black text-[10pt]">
                  <thead>
                    <tr className="bg-gray-100 font-bold border-b border-black text-left">
                      <th className="border border-black px-2.5 py-1.5 w-1/3">Kriteria Penilaian</th>
                      <th className="border border-black px-2.5 py-1.5 w-20 text-center">Bobot</th>
                      <th className="border border-black px-2.5 py-1.5">Deskripsi / Indikator Penilaian</th>
                    </tr>
                  </thead>
                  <tbody>
                    {lomba.aspekPenilaian.map((asp, idx) => (
                      <tr key={idx}>
                        <td className="border border-black px-2.5 py-1 font-semibold">{asp.aspek}</td>
                        <td className="border border-black px-2.5 py-1 text-center font-bold">{asp.bobot}</td>
                        <td className="border border-black px-2.5 py-1 italic">{asp.keterangan}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>

              {/* 5. KETENTUAN & TATA TERTIB TEKNIS LOMBA */}
              <div className="my-2.5 text-[10.5pt]">
                <p className="font-bold mb-1 uppercase tracking-wide text-[10.5pt]">
                  B. Ketentuan Teknis & Tata Tertib Perlombaan:
                </p>
                <ol className="list-decimal ml-6 space-y-0.5 text-[10pt] leading-relaxed text-justify">
                  {lomba.juknis.map((jk, idx) => (
                    <li key={idx}>{jk}</li>
                  ))}
                </ol>
              </div>

              {/* 6. APRESIASI & PENGHARGAAN JUARA */}
              <div className="my-2 p-2 bg-gray-50/40 border border-black text-[10pt]">
                <p className="font-bold uppercase mb-0.5">C. Apresiasi & Hadiah Kejuaraan:</p>
                <p>
                  &bull; <strong>Penghargaan:</strong> {lomba.hadiah.tropi} + {lomba.hadiah.sertifikat}
                </p>
                <p>
                  &bull; <strong>Uang Pembinaan:</strong> {lomba.hadiah.uangPembinaan}
                </p>
              </div>
            </div>

            {/* 7. PENGESAHAN TANDA TANGAN PANITIA PELAKSANA */}
            <div className="mt-3 pt-1 avoid-break-inside text-[10.5pt]">
              {/* Tanggal Resmi Surat */}
              <div className="flex items-center justify-end text-[10.5pt] text-right mb-1">
                <span className="mr-1.5 whitespace-nowrap font-normal">Cluring,</span>
                <div className="inline-flex flex-col items-center text-center">
                  <span className="leading-tight px-1 font-normal">30 Agustus 2026 M</span>
                  <div className="w-full border-b border-black"></div>
                  <span className="leading-tight px-1 font-normal">16 Shafar 1448 H</span>
                </div>
              </div>

              <div className="text-center mb-0.5 font-bold uppercase tracking-wider text-[10pt]">
                PANITIA PELAKSANA MUHIBBIN 2026
              </div>

              <table className="w-full border-none border-collapse text-center my-0.5 text-[10.5pt]">
                <tbody>
                  <tr>
                    <td className="w-1/2 align-top pb-10 font-normal">Ketua Panitia,</td>
                    <td className="w-1/2 align-top pb-10 font-normal">Sekretaris Panitia,</td>
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
            </div>

          </div>
        ))}
      </div>
    </div>
  );
}
