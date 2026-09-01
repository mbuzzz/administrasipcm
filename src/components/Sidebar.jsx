import React from 'react';
import { 
  FileCheck, 
  BookOpen, 
  Award, 
  Users, 
  Mail, 
  Printer, 
  Sparkles, 
  Calendar, 
  MapPin, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Menu,
  X,
  ChevronRight,
  ShieldCheck,
  Download,
  Trophy,
  FileText,
  ClipboardList
} from 'lucide-react';
import { proposalData } from '../data/proposalData';

export default function Sidebar({ 
  activeTab, 
  setActiveTab, 
  onTriggerPrint, 
  zoomLevel, 
  setZoomLevel,
  sidebarOpen,
  setSidebarOpen
}) {
  const { identitas } = proposalData;

  const navItems = [
    { 
      id: 'cover_pengesahan', 
      label: 'Cover Proposal', 
      sublabel: 'Sampul Depan Resmi', 
      icon: FileCheck,
      nomor: '01'
    },
    { 
      id: 'pendahuluan', 
      label: 'BAB I : Pendahuluan', 
      sublabel: 'Selayang Pandang, Dasar & Tujuan', 
      icon: BookOpen,
      nomor: '02'
    },
    { 
      id: 'pelaksanaan', 
      label: 'BAB II : Pelaksanaan & Juknis', 
      sublabel: '4 Lomba & Susunan Acara', 
      icon: Award,
      nomor: '03'
    },
    { 
      id: 'apresiasi_hadiah', 
      label: 'BAB III : Apresiasi & Hadiah', 
      sublabel: 'Piala, Piagam & Uang Hadiah', 
      icon: Trophy,
      nomor: '04'
    },
    { 
      id: 'kepanitiaan_rab', 
      label: 'BAB IV : Panitia & RAB', 
      sublabel: 'Struktur Organisasi & Anggaran', 
      icon: Users,
      nomor: '05'
    },
    { 
      id: 'penutup', 
      label: 'BAB V : Penutup & TTD', 
      sublabel: 'Lembar Penutup & Pengesahan', 
      icon: FileText,
      nomor: '06'
    },
    { 
      id: 'surat_menyurat', 
      label: 'Modul Surat Menyurat', 
      sublabel: 'Generator 7 Surat Resmi', 
      icon: Mail,
      nomor: '07'
    },
    { 
      id: 'lampiran_juknis', 
      label: 'Lampiran Juknis Lomba', 
      sublabel: '4 Lembar A4 Siap Print', 
      icon: Award,
      nomor: '08'
    },
    { 
      id: 'form_penilaian', 
      label: 'Form Penilaian Juri', 
      sublabel: 'Score Sheet Siap Print (A4)', 
      icon: ClipboardList,
      nomor: '09'
    },
    { 
      id: 'cetak_full', 
      label: 'Cetak Proposal Full (A4)', 
      sublabel: 'Dokumen Utuh Siap PDF', 
      icon: Printer,
      nomor: '10',
      highlight: true
    },
  ];

  const handleSelectTab = (id) => {
    setActiveTab(id);
    setSidebarOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  const handleZoomIn = () => {
    setZoomLevel(prev => Math.min(prev + 0.1, 1.4));
  };

  const handleZoomOut = () => {
    setZoomLevel(prev => Math.max(prev - 0.1, 0.6));
  };

  const handleZoomReset = () => {
    setZoomLevel(1);
  };

  return (
    <>
      {/* Mobile Overlay Backdrop */}
      {sidebarOpen && (
        <div 
          onClick={() => setSidebarOpen(false)}
          className="fixed inset-0 bg-slate-900/60 backdrop-blur-sm z-40 lg:hidden no-print"
        />
      )}

      {/* Sidebar Container */}
      <aside className={`fixed top-0 left-0 bottom-0 z-50 w-72 bg-slate-900 text-slate-300 flex flex-col justify-between border-r border-slate-800 shadow-2xl transition-transform duration-300 ease-in-out no-print ${
        sidebarOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        
        {/* Top Brand Header */}
        <div className="p-4 border-b border-slate-800 flex items-center justify-between">
          <div 
            onClick={() => handleSelectTab('cover_pengesahan')}
            className="flex items-center gap-3 cursor-pointer group"
          >
            <div className="w-10 h-10 rounded-full bg-white p-1 flex items-center justify-center shrink-0 shadow-md group-hover:scale-105 transition-transform">
              <img 
                src="/Logo-Pemuda-Muhammadiyah.png" 
                alt="Logo PCPM" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-black text-white text-base tracking-tight">MUHIBBIN</span>
                <span className="bg-pm-gold text-slate-950 text-[10px] font-extrabold px-1.5 py-0.2 rounded">2026</span>
              </div>
              <p className="text-[10px] text-emerald-400 font-semibold leading-tight">
                PCPM Cluring Banyuwangi
              </p>
            </div>
          </div>

          <button 
            onClick={() => setSidebarOpen(false)}
            className="lg:hidden p-1.5 text-slate-400 hover:text-white rounded-lg hover:bg-slate-800"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Navigation Menu Links */}
        <div className="flex-1 overflow-y-auto p-3 space-y-1.5 custom-scrollbar">
          <div className="px-3 pt-2 pb-1 text-[10px] uppercase tracking-wider font-bold text-slate-400">
            Daftar Isi Proposal & Administrasi
          </div>

          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeTab === item.id;

            if (item.highlight) {
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  className={`w-full text-left p-3 rounded-xl transition-all flex items-center justify-between mt-3 ${
                    isActive
                      ? 'bg-gradient-to-r from-pm-green to-emerald-700 text-white font-bold shadow-lg ring-2 ring-emerald-500/40'
                      : 'bg-emerald-950/70 hover:bg-emerald-900/80 text-emerald-200 border border-emerald-800/80'
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg bg-white/15 flex items-center justify-center shrink-0">
                      <Icon className="w-4 h-4 text-pm-gold" />
                    </div>
                    <div>
                      <p className="text-xs font-bold text-white">{item.label}</p>
                      <p className="text-[10px] text-emerald-300 opacity-90">{item.sublabel}</p>
                    </div>
                  </div>
                  <ChevronRight className="w-4 h-4 text-emerald-400 shrink-0" />
                </button>
              );
            }

            return (
              <button
                key={item.id}
                onClick={() => handleSelectTab(item.id)}
                className={`w-full text-left px-3 py-2.5 rounded-xl transition-all flex items-center justify-between group ${
                  isActive
                    ? 'bg-emerald-600/20 text-emerald-400 font-bold border border-emerald-500/40 shadow-inner'
                    : 'text-slate-300 hover:text-white hover:bg-slate-800/60'
                }`}
              >
                <div className="flex items-center gap-2.5 min-w-0">
                  <span className={`text-[10px] font-mono font-bold px-1.5 py-0.5 rounded ${
                    isActive ? 'bg-emerald-500 text-slate-950' : 'bg-slate-800 text-slate-400'
                  }`}>
                    {item.nomor}
                  </span>
                  <div className="truncate">
                    <p className="text-xs font-semibold truncate">{item.label}</p>
                    <p className="text-[10px] text-slate-400 truncate group-hover:text-slate-300">{item.sublabel}</p>
                  </div>
                </div>
                <ChevronRight className={`w-3.5 h-3.5 shrink-0 transition-transform ${
                  isActive ? 'text-emerald-400 translate-x-0.5' : 'text-slate-500 opacity-0 group-hover:opacity-100'
                }`} />
              </button>
            );
          })}
        </div>

        {/* Bottom Section: Zoom Toolbar & Print CTA */}
        <div className="p-3 border-t border-slate-800 bg-slate-950/60 space-y-3">
          {/* Zoom Controls */}
          <div className="flex items-center justify-between px-2 py-1.5 rounded-lg bg-slate-900 border border-slate-800 text-xs">
            <span className="text-[11px] text-slate-400 font-medium">Skala A4:</span>
            <div className="flex items-center gap-1">
              <button
                onClick={handleZoomOut}
                className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                title="Perkecil Tampilan"
              >
                <ZoomOut className="w-3.5 h-3.5" />
              </button>
              <button
                onClick={handleZoomReset}
                className="px-1.5 py-0.5 font-mono text-[10px] text-emerald-400 font-bold hover:bg-slate-800 rounded"
                title="Reset ke 100%"
              >
                {Math.round(zoomLevel * 100)}%
              </button>
              <button
                onClick={handleZoomIn}
                className="p-1 text-slate-400 hover:text-white hover:bg-slate-800 rounded transition-colors"
                title="Perbesar Tampilan"
              >
                <ZoomIn className="w-3.5 h-3.5" />
              </button>
            </div>
          </div>

          {/* Primary Action Button */}
          <button
            onClick={onTriggerPrint}
            className="w-full flex items-center justify-center gap-2 bg-gradient-to-r from-pm-green via-emerald-600 to-emerald-700 hover:from-emerald-700 hover:to-emerald-800 text-white py-2.5 px-3 rounded-xl font-bold text-xs shadow-lg shadow-emerald-950/50 transition-all group"
          >
            <Printer className="w-4 h-4 text-pm-gold group-hover:scale-110 transition-transform" />
            <span>Cetak / Export PDF (Ctrl+P)</span>
          </button>

          {/* Mini Event Notice */}
          <div className="text-[10px] text-slate-400 text-center leading-tight">
            <span>Minggu, 6 Sep 2026 • Masjid Al Hidayah & TK 'Aisyiyah Tampo</span>
          </div>
        </div>

      </aside>
    </>
  );
}
