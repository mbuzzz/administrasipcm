import React from 'react';
import { 
  Calendar, 
  MapPin, 
  Award, 
  Users, 
  DollarSign, 
  CheckCircle2, 
  ArrowRight, 
  BookOpen, 
  Volume2, 
  Palette, 
  Mic, 
  Download, 
  Printer, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { proposalData, totalRAB } from '../data/proposalData';

export default function HeroOverview({ setActiveTab, onTriggerPrint }) {
  const { identitas, cabangLomba } = proposalData;

  const getBranchIcon = (iconName) => {
    switch (iconName) {
      case 'BookOpen': return <BookOpen className="w-5 h-5" />;
      case 'Volume2': return <Volume2 className="w-5 h-5" />;
      case 'Palette': return <Palette className="w-5 h-5" />;
      case 'Mic': return <Mic className="w-5 h-5" />;
      default: return <Award className="w-5 h-5" />;
    }
  };

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Hero Banner Section */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-pm-green via-emerald-900 to-slate-900 text-white shadow-xl">
        {/* Background Islamic Geometric Motif */}
        <div className="absolute inset-0 opacity-10 islamic-pattern pointer-events-none"></div>
        <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 bg-pm-gold/20 rounded-full blur-3xl pointer-events-none"></div>
        <div className="absolute bottom-0 left-1/3 -mb-10 w-60 h-60 bg-emerald-500/20 rounded-full blur-2xl pointer-events-none"></div>

        <div className="relative z-10 px-6 py-10 sm:px-10 sm:py-14 max-w-5xl mx-auto text-center">
          {/* Tagline / Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-xs font-semibold text-emerald-200 mb-6">
            <Sparkles className="w-4 h-4 text-pm-gold animate-pulse" />
            <span>Peringatan Maulid Nabi Muhammad SAW 1448 H / 2026 M</span>
          </div>

          <h3 className="text-xs sm:text-sm md:text-base font-bold tracking-widest text-pm-gold uppercase font-serif mb-2">
            PIMPINAN CABANG PEMUDA MUHAMMADIYAH CLURING
          </h3>

          <h1 className="text-3xl sm:text-5xl md:text-6xl font-black tracking-tight text-white uppercase drop-shadow-sm mb-3">
            PROPOSAL KEGIATAN <span className="text-transparent bg-clip-text bg-gradient-to-r from-pm-gold via-amber-300 to-yellow-200">MUHIBBIN</span>
          </h1>

          <p className="text-sm sm:text-base md:text-lg text-emerald-100 font-medium tracking-wide mb-6">
            (Musabaqah li Thulab wa Tholibin)
          </p>

          {/* Theme Banner Box */}
          <div className="max-w-2xl mx-auto bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 sm:p-5 mb-8 shadow-inner">
            <span className="text-[11px] uppercase tracking-wider text-emerald-300 font-bold block mb-1">
              Tema Kegiatan:
            </span>
            <p className="text-xl sm:text-2xl md:text-3xl font-extrabold text-white tracking-wide">
              &ldquo;{identitas.tema}&rdquo;
            </p>
            <p className="text-xs text-emerald-200 mt-1 italic">
              — {identitas.semboyan} —
            </p>
          </div>

          {/* Info Badges Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 max-w-3xl mx-auto mb-8 text-left">
            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-300">
                <Calendar className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-emerald-300 uppercase font-semibold">Waktu Pelaksanaan</p>
                <p className="text-xs sm:text-sm font-bold text-white leading-tight">{identitas.waktu}</p>
                <p className="text-[10px] text-emerald-200">{identitas.jam}</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-emerald-500/30 flex items-center justify-center shrink-0 text-emerald-300">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-emerald-300 uppercase font-semibold">Lokasi Acara</p>
                <p className="text-xs sm:text-sm font-bold text-white leading-tight">{identitas.lokasiUtama}</p>
                <p className="text-[10px] text-emerald-200">Desa Tampo, Kec. Cluring</p>
              </div>
            </div>

            <div className="bg-white/10 backdrop-blur-sm border border-white/15 rounded-lg p-3 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg bg-pm-gold/30 flex items-center justify-center shrink-0 text-pm-gold">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <p className="text-[10px] text-amber-200 uppercase font-semibold">Biaya Pendaftaran</p>
                <p className="text-xs sm:text-sm font-bold text-pm-gold leading-tight">{identitas.biayaPendaftaran}</p>
                <p className="text-[10px] text-emerald-200">Terbuka TK, TPA & SD/MI</p>
              </div>
            </div>
          </div>

          {/* Action CTAs */}
          <div className="flex flex-wrap items-center justify-center gap-3">
            <button
              onClick={() => setActiveTab('cetak')}
              className="flex items-center gap-2 bg-pm-gold hover:bg-amber-400 text-slate-950 font-bold px-5 py-3 rounded-xl shadow-lg hover:shadow-amber-500/25 transition-all text-sm group"
            >
              <Printer className="w-4 h-4" />
              <span>Lihat Format A4 Siap Cetak</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>

            <button
              onClick={() => setActiveTab('surat')}
              className="flex items-center gap-2 bg-white/15 hover:bg-white/25 text-white font-semibold px-4 py-3 rounded-xl border border-white/30 backdrop-blur-sm transition-all text-sm"
            >
              <span>Generator Surat Menyurat</span>
            </button>
          </div>
        </div>
      </div>

      {/* Quick Summary Highlights Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-emerald-50 text-pm-green flex items-center justify-center font-bold">
            <Award className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-black text-slate-900">4 Cabang</p>
            <p className="text-xs text-slate-500 font-medium">Perlombaan Islami</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-amber-50 text-amber-700 flex items-center justify-center font-bold">
            <Users className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-black text-slate-900">200+ Peserta</p>
            <p className="text-xs text-slate-500 font-medium">Santri TK & SD/MI</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-700 flex items-center justify-center font-bold">
            <DollarSign className="w-6 h-6" />
          </div>
          <div>
            <p className="text-xl sm:text-2xl font-black text-slate-900">Rp {totalRAB.toLocaleString('id-ID')}</p>
            <p className="text-xs text-slate-500 font-medium">Total Anggaran (RAB)</p>
          </div>
        </div>

        <div className="bg-white rounded-xl p-5 border border-slate-200/80 shadow-sm flex items-center gap-4">
          <div className="w-12 h-12 rounded-xl bg-purple-50 text-purple-700 flex items-center justify-center font-bold">
            <ShieldCheck className="w-6 h-6" />
          </div>
          <div>
            <p className="text-2xl font-black text-slate-900">4 Set Piala</p>
            <p className="text-xs text-slate-500 font-medium">+ Uang Pembinaan</p>
          </div>
        </div>
      </div>

      {/* 4 Cabang Lomba Quick Showcase */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200/80 shadow-sm">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-6">
          <div>
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-6 bg-pm-green rounded-full inline-block"></span>
              <h2 className="text-xl font-bold text-slate-900">Cabang Perlombaan</h2>
            </div>
            <p className="text-xs text-slate-500 mt-1">
              Musabaqah li Thulab wa Tholibin dalam Rangka Memperingati Maulid Nabi Muhammad SAW
            </p>
          </div>
          <button
            onClick={() => setActiveTab('lomba')}
            className="inline-flex items-center gap-1.5 text-xs font-bold text-pm-green hover:text-emerald-700 hover:underline"
          >
            <span>Lihat Detail Juknis & Aspek Penilaian</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {cabangLomba.map((lomba, idx) => (
            <div 
              key={lomba.id}
              onClick={() => setActiveTab('lomba')}
              className="p-5 rounded-xl border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50/40 transition-all cursor-pointer group relative overflow-hidden"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-emerald-100 text-pm-green flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform">
                  {getBranchIcon(lomba.icon)}
                </div>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-2">
                    <h3 className="font-bold text-slate-900 group-hover:text-pm-green transition-colors text-base">
                      {idx + 1}. {lomba.nama}
                    </h3>
                    <span className="text-[11px] font-bold px-2 py-0.5 rounded-full bg-slate-100 text-slate-700 shrink-0">
                      {lomba.kategori}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 mt-1.5 line-clamp-2">
                    <strong className="text-slate-700">Materi:</strong> {lomba.materi}
                  </p>
                  <div className="mt-3 pt-3 border-t border-slate-100 flex items-center justify-between text-xs text-slate-500">
                    <span><strong>Juri:</strong> {lomba.juri.join(' & ')}</span>
                    <span className="text-pm-green font-semibold group-hover:translate-x-0.5 transition-transform">
                      Detail &rarr;
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Ringkasan Susunan Panitia & RAB Quick Preview */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Panitia Card */}
        <div className="lg:col-span-1 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <Users className="w-5 h-5 text-pm-green" />
              <h3 className="font-bold text-slate-900 text-base">Struktur Kepanitiaan</h3>
            </div>
            <div className="space-y-3 text-xs">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                <span className="text-slate-500 block text-[10px]">Penanggung Jawab:</span>
                <span className="font-bold text-slate-900 text-xs sm:text-sm">Respati Surya Pramana</span>
                <span className="text-[10px] text-emerald-700 block">Ketua PCPM Cluring</span>
              </div>
              <div className="p-2.5 rounded-lg bg-emerald-50/60 border border-emerald-100">
                <span className="text-slate-500 block text-[10px]">Ketua Panitia:</span>
                <span className="font-bold text-pm-green text-xs sm:text-sm">Muhammad Adi P.</span>
              </div>
              <div className="grid grid-cols-2 gap-2">
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 block text-[10px]">Sekretaris:</span>
                  <span className="font-semibold text-slate-800">Mohammad Mukhlis</span>
                </div>
                <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100">
                  <span className="text-slate-500 block text-[10px]">Bendahara:</span>
                  <span className="font-semibold text-slate-800">Sandika</span>
                </div>
              </div>
            </div>
          </div>
          <button
            onClick={() => setActiveTab('panitia')}
            className="mt-4 w-full py-2 px-3 text-xs font-bold text-pm-green bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors text-center"
          >
            Lihat Semua Seksi Kepanitiaan &rarr;
          </button>
        </div>

        {/* Rekap Anggaran Card */}
        <div className="lg:col-span-2 bg-white rounded-2xl p-6 border border-slate-200/80 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center justify-between mb-4">
              <div className="flex items-center gap-2">
                <DollarSign className="w-5 h-5 text-emerald-600" />
                <h3 className="font-bold text-slate-900 text-base">Ringkasan Rencana Anggaran (RAB)</h3>
              </div>
              <span className="text-xs font-bold bg-emerald-100 text-emerald-800 px-2.5 py-1 rounded-full">
                Total: Rp {totalRAB.toLocaleString('id-ID')}
              </span>
            </div>

            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs">
                <thead>
                  <tr className="border-b border-slate-200 text-slate-500 font-semibold">
                    <th className="pb-2">No</th>
                    <th className="pb-2">Kebutuhan Item</th>
                    <th className="pb-2">Volume</th>
                    <th className="pb-2 text-right">Subtotal</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-100">
                  {proposalData.anggaranBiaya.slice(0, 5).map((item, i) => (
                    <tr key={item.id} className="hover:bg-slate-50/50">
                      <td className="py-2 text-slate-500">{i + 1}</td>
                      <td className="py-2 font-medium text-slate-800">{item.item}</td>
                      <td className="py-2 text-slate-600">{item.volume} {item.satuan}</td>
                      <td className="py-2 text-right font-bold text-slate-900">
                        Rp {item.total.toLocaleString('id-ID')}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <p className="text-[11px] text-slate-500 mt-2 italic">
              *Ditampilkan 5 dari 8 item anggaran. Klik di bawah untuk melihat rincian lengkap.
            </p>
          </div>

          <div className="flex items-center gap-3 mt-4 pt-3 border-t border-slate-100">
            <button
              onClick={() => setActiveTab('kepanitiaan_rab')}
              className="flex-1 py-2 px-3 text-xs font-bold text-pm-green bg-emerald-50 hover:bg-emerald-100 rounded-lg transition-colors text-center"
            >
              Lihat Detail RAB Lengkap &rarr;
            </button>
            <button
              onClick={() => setActiveTab('cetak')}
              className="py-2 px-4 text-xs font-bold text-slate-700 bg-slate-100 hover:bg-slate-200 rounded-lg transition-colors flex items-center gap-1.5"
            >
              <Printer className="w-3.5 h-3.5" />
              <span>Cetak A4</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
