import React, { useState } from 'react';
import { 
  Award, 
  BookOpen, 
  Volume2, 
  Palette, 
  Mic, 
  CheckCircle, 
  Users, 
  MapPin, 
  Gift, 
  FileText, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { proposalData } from '../data/proposalData';

export default function CabangLombaSection() {
  const { cabangLomba } = proposalData;
  const [activeLombaId, setActiveLombaId] = useState(cabangLomba[0].id);

  const activeLomba = cabangLomba.find(l => l.id === activeLombaId) || cabangLomba[0];

  const getBranchIcon = (iconName, className = "w-5 h-5") => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className={className} />;
      case 'Volume2': return <Volume2 className={className} />;
      case 'Palette': return <Palette className={className} />;
      case 'Mic': return <Mic className={className} />;
      default: return <Award className={className} />;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Section Header */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-pm-green mb-2">
              <Award className="w-3.5 h-3.5" />
              <span>Petunjuk Teknis & Penilaian</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Cabang Perlombaan & Juknis
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Informasi lengkap kategori peserta, materi lomba, dewan juri, aspek penilaian, dan hadiah kejuaraan
            </p>
          </div>
          <div className="bg-emerald-50 border border-emerald-200 px-4 py-2.5 rounded-xl text-center">
            <span className="text-[10px] uppercase font-bold text-slate-500 block">Total Uang Pembinaan</span>
            <span className="text-lg font-black text-pm-green">Rp 975.000 + 4 Set Piala</span>
          </div>
        </div>
      </div>

      {/* Tabs Navigation for Competitions */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {cabangLomba.map((lomba, idx) => {
          const isSelected = lomba.id === activeLombaId;
          return (
            <button
              key={lomba.id}
              onClick={() => setActiveLombaId(lomba.id)}
              className={`p-4 rounded-xl text-left transition-all border relative flex flex-col justify-between ${
                isSelected
                  ? 'bg-pm-green text-white border-pm-green shadow-lg ring-2 ring-emerald-600/30'
                  : 'bg-white text-slate-700 border-slate-200 hover:border-emerald-300 hover:bg-slate-50'
              }`}
            >
              <div>
                <div className={`w-9 h-9 rounded-lg flex items-center justify-center mb-3 ${
                  isSelected ? 'bg-white/20 text-white' : 'bg-emerald-100 text-pm-green'
                }`}>
                  {getBranchIcon(lomba.icon)}
                </div>
                <div className="text-xs font-bold opacity-80 mb-0.5">Lomba #{idx + 1}</div>
                <h3 className="font-bold text-sm leading-snug line-clamp-1">{lomba.nama}</h3>
              </div>
              <span className={`text-[10px] font-semibold mt-3 px-2 py-0.5 rounded-full inline-block w-fit ${
                isSelected ? 'bg-white/20 text-white' : 'bg-slate-100 text-slate-600'
              }`}>
                {lomba.kategori}
              </span>
            </button>
          );
        })}
      </div>

      {/* Detailed Card for Selected Competition */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm space-y-6">
        {/* Title Bar */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-6 border-b border-slate-100 gap-4">
          <div className="flex items-center gap-4">
            <div className="w-14 h-14 rounded-2xl bg-emerald-100 text-pm-green flex items-center justify-center shrink-0">
              {getBranchIcon(activeLomba.icon, "w-7 h-7")}
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-xl sm:text-2xl font-black text-slate-900">
                  {activeLomba.nama}
                </h2>
                <span className="bg-pm-gold text-slate-950 text-xs font-bold px-2.5 py-0.5 rounded-full">
                  Gratis
                </span>
              </div>
              <p className="text-xs sm:text-sm font-semibold text-emerald-800 mt-0.5">
                Target Peserta: {activeLomba.kategori}
              </p>
            </div>
          </div>

          <div className="flex items-center gap-2 text-xs bg-slate-50 p-2.5 rounded-xl border border-slate-100">
            <MapPin className="w-4 h-4 text-pm-green shrink-0" />
            <span className="text-slate-700 font-medium">{activeLomba.tempat}</span>
          </div>
        </div>

        {/* Materi & Dewan Juri */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80">
            <span className="text-[11px] font-bold uppercase tracking-wider text-pm-green flex items-center gap-1.5 mb-2">
              <FileText className="w-3.5 h-3.5" />
              Materi Perlombaan
            </span>
            <p className="text-sm font-semibold text-slate-800 leading-relaxed">
              {activeLomba.materi}
            </p>
          </div>

          <div className="bg-emerald-50/50 rounded-xl p-5 border border-emerald-200/80">
            <span className="text-[11px] font-bold uppercase tracking-wider text-emerald-800 flex items-center gap-1.5 mb-2">
              <Users className="w-3.5 h-3.5" />
              Dewan Juri
            </span>
            <div className="space-y-1">
              {activeLomba.juri.map((juriName, i) => (
                <div key={i} className="flex items-center gap-2 text-sm font-bold text-slate-900">
                  <span className="w-2 h-2 rounded-full bg-pm-green"></span>
                  <span>{juriName}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Aspek Penilaian (Criteria & Weights) */}
        <div>
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
            <Award className="w-4 h-4 text-pm-green" />
            <span>Kriteria & Aspek Penilaian</span>
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
            {activeLomba.aspekPenilaian.map((aspek, i) => (
              <div key={i} className="bg-white rounded-xl p-4 border border-slate-200 hover:border-emerald-300 shadow-sm flex flex-col justify-between">
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="font-bold text-slate-900 text-sm">{aspek.aspek}</span>
                    <span className="bg-emerald-100 text-pm-green text-xs font-black px-2 py-0.5 rounded">
                      {aspek.bobot}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {aspek.keterangan}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Juknis (Petunjuk Teknis) */}
        <div>
          <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
            <CheckCircle className="w-4 h-4 text-pm-green" />
            <span>Petunjuk Teknis & Tata Tertib (Juknis)</span>
          </h3>
          <div className="bg-slate-50 rounded-xl p-5 border border-slate-200/80">
            <ul className="space-y-2.5">
              {activeLomba.juknis.map((juknisText, i) => (
                <li key={i} className="flex items-start gap-2.5 text-xs sm:text-sm text-slate-700">
                  <span className="w-5 h-5 rounded-full bg-emerald-200 text-emerald-900 flex items-center justify-center font-bold text-[11px] shrink-0 mt-0.5">
                    {i + 1}
                  </span>
                  <span>{juknisText}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Hadiah & Penghargaan */}
        <div className="bg-gradient-to-r from-amber-500 via-pm-gold to-yellow-500 rounded-xl p-5 text-slate-950 shadow-md">
          <div className="flex items-center gap-2.5 font-black text-sm uppercase tracking-wider mb-2">
            <Gift className="w-5 h-5" />
            <span>Hadiah & Penghargaan Juara {activeLomba.nama}</span>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 text-xs">
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-amber-300">
              <span className="font-bold block text-slate-900">Tropi / Piala:</span>
              <span>{activeLomba.hadiah.tropi}</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-amber-300">
              <span className="font-bold block text-slate-900">Sertifikat:</span>
              <span>{activeLomba.hadiah.sertifikat}</span>
            </div>
            <div className="bg-white/80 backdrop-blur-sm p-3 rounded-lg border border-amber-300">
              <span className="font-bold block text-slate-900">Uang Pembinaan:</span>
              <span className="font-black text-emerald-900">{activeLomba.hadiah.uangPembinaan}</span>
            </div>
          </div>
        </div>
      </div>

      {/* Rangkuman 4 Lomba dalam Bentuk Tabel Ringkas */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <h3 className="text-lg font-bold text-slate-900 mb-4">
          Tabel Matriks 4 Cabang Lomba MUHIBBIN 2026
        </h3>
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-left border-collapse">
            <thead>
              <tr className="bg-slate-100 text-slate-700 font-bold border-b border-slate-300">
                <th className="p-3">No</th>
                <th className="p-3">Cabang Lomba</th>
                <th className="p-3">Kategori Peserta</th>
                <th className="p-3">Materi Singkat</th>
                <th className="p-3">Dewan Juri</th>
                <th className="p-3">Uang Pembinaan</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-slate-200">
              {cabangLomba.map((lomba, i) => (
                <tr key={lomba.id} className="hover:bg-emerald-50/40">
                  <td className="p-3 font-bold text-slate-600">{i + 1}</td>
                  <td className="p-3 font-bold text-slate-900">{lomba.nama}</td>
                  <td className="p-3 text-slate-700">{lomba.kategori}</td>
                  <td className="p-3 text-slate-600 max-w-xs">{lomba.materi}</td>
                  <td className="p-3 text-emerald-900 font-medium">{lomba.juri.join(' & ')}</td>
                  <td className="p-3 font-bold text-pm-green">
                    {lomba.id === 'pildacil' ? 'Rp 300.000' : 'Rp 225.000'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}
