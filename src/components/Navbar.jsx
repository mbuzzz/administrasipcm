import React, { useState } from 'react';
import { 
  FileCheck, 
  BookOpen, 
  Award, 
  Users, 
  Mail, 
  Printer, 
  Menu, 
  X, 
  Sparkles,
  Calendar, 
  MapPin,
  Home
} from 'lucide-react';

export default function Navbar({ activeTab, setActiveTab, onTriggerPrint }) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // 6 Struktur Menu Wajib Sesuai Permintaan User
  const navItems = [
    { id: 'cover_pengesahan', label: '1. Cover & Pengesahan', shortLabel: 'Cover & Sah', icon: FileCheck },
    { id: 'pendahuluan', label: '2. Pendahuluan', shortLabel: 'Pendahuluan', icon: BookOpen },
    { id: 'pelaksanaan', label: '3. Pelaksanaan & Juknis', shortLabel: 'Juknis & Rundown', icon: Award },
    { id: 'kepanitiaan_rab', label: '4. Kepanitiaan & RAB', shortLabel: 'Panitia & RAB', icon: Users },
    { id: 'surat_menyurat', label: '5. Modul Surat Menyurat', shortLabel: 'Surat Resmi', icon: Mail },
    { id: 'cetak_full', label: '6. Cetak Proposal Full', shortLabel: 'Cetak A4 Full', icon: Printer, highlight: true },
  ];

  const handleSelectTab = (id) => {
    setActiveTab(id);
    setMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <header className="sticky top-0 z-40 bg-white/95 backdrop-blur-md border-b border-emerald-100 shadow-sm no-print">
      {/* Top Notification Bar */}
      <div className="bg-gradient-to-r from-pm-green via-emerald-800 to-pm-green text-white py-1.5 px-4 text-xs font-medium text-center flex items-center justify-center gap-3">
        <span className="bg-pm-gold text-slate-950 font-bold px-2 py-0.5 rounded text-[10px] uppercase tracking-wider">
          SISTEM PROPOSAL RESMI
        </span>
        <span className="hidden md:inline">
          MUHIBBIN 2026 • Peringatan Maulid Nabi Muhammad SAW • Pimpinan Cabang Pemuda Muhammadiyah Cluring
        </span>
        <span className="md:hidden">MUHIBBIN 2026 • PCPM Cluring</span>
        <span className="inline-flex items-center gap-1 text-emerald-200">
          <Calendar className="w-3.5 h-3.5" /> 6 September 2026
        </span>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo & Brand Header */}
          <div 
            onClick={() => handleSelectTab('cover_pengesahan')} 
            className="flex items-center gap-3 cursor-pointer group shrink-0"
          >
            <div className="w-10 h-10 rounded-full bg-emerald-50 border border-emerald-200 p-1 flex items-center justify-center shadow-inner group-hover:scale-105 transition-transform">
              <img 
                src="/Logo-Pemuda-Muhammadiyah.png" 
                alt="Logo PCPM" 
                className="w-full h-full object-contain"
              />
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-extrabold text-slate-900 tracking-tight text-base sm:text-lg">MUHIBBIN</span>
                <span className="bg-emerald-100 text-pm-green text-[10px] font-bold px-1.5 py-0.5 rounded">2026</span>
              </div>
              <p className="text-[10px] text-slate-500 font-semibold leading-none">
                PCPM Cluring Banyuwangi
              </p>
            </div>
          </div>

          {/* Desktop Nav Items */}
          <nav className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              
              if (item.highlight) {
                return (
                  <button
                    key={item.id}
                    onClick={() => handleSelectTab(item.id)}
                    className={`ml-1 flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-bold transition-all shadow-sm ${
                      isActive 
                        ? 'bg-pm-green text-white ring-2 ring-emerald-600 ring-offset-1' 
                        : 'bg-emerald-600 hover:bg-emerald-700 text-white'
                    }`}
                  >
                    <Icon className="w-3.5 h-3.5 text-amber-300" />
                    <span>{item.label}</span>
                  </button>
                );
              }

              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  className={`flex items-center gap-1.5 px-2.5 py-2 rounded-lg text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-emerald-50 text-pm-green font-bold shadow-inner'
                      : 'text-slate-600 hover:text-pm-green hover:bg-slate-50'
                  }`}
                >
                  <Icon className={`w-3.5 h-3.5 ${isActive ? 'text-pm-green' : 'text-slate-400'}`} />
                  <span>{item.label}</span>
                </button>
              );
            })}
          </nav>

          {/* Compact Desktop Nav for medium screens */}
          <nav className="hidden lg:flex xl:hidden items-center gap-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  className={`flex items-center gap-1 px-2 py-1.5 rounded-md text-xs font-semibold transition-all ${
                    isActive
                      ? 'bg-pm-green text-white font-bold'
                      : 'text-slate-600 hover:bg-slate-100'
                  }`}
                  title={item.label}
                >
                  <Icon className="w-3.5 h-3.5" />
                  <span>{item.shortLabel}</span>
                </button>
              );
            })}
          </nav>

          {/* Quick Action Button & Mobile Toggle */}
          <div className="flex items-center gap-2">
            <button
              onClick={onTriggerPrint}
              className="hidden sm:inline-flex items-center gap-1.5 bg-slate-900 hover:bg-slate-800 text-white text-xs font-bold px-3 py-2 rounded-lg transition-colors shadow-sm"
              title="Cetak Tampilan Aktif (Ctrl+P)"
            >
              <Printer className="w-3.5 h-3.5 text-emerald-400" />
              <span>Cetak (A4)</span>
            </button>

            {/* Mobile Menu Button */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="lg:hidden p-2 rounded-lg text-slate-600 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Drawer Menu */}
      {mobileMenuOpen && (
        <div className="lg:hidden bg-white border-b border-slate-200 px-4 pt-2 pb-4 space-y-1 shadow-lg animate-in slide-in-from-top duration-200">
          <div className="grid grid-cols-2 gap-2 pt-2 pb-3 border-b border-slate-100 text-xs">
            <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 p-2 rounded">
              <Calendar className="w-4 h-4 text-pm-green shrink-0" />
              <span>6 Sep 2026</span>
            </div>
            <div className="flex items-center gap-1.5 text-slate-600 bg-slate-50 p-2 rounded">
              <MapPin className="w-4 h-4 text-pm-green shrink-0" />
              <span className="truncate">Masjid Al Hidayah</span>
            </div>
          </div>

          <div className="pt-2 space-y-1">
            {navItems.map((item) => {
              const Icon = item.icon;
              const isActive = activeTab === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleSelectTab(item.id)}
                  className={`w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-sm font-medium transition-all ${
                    isActive
                      ? 'bg-emerald-50 text-pm-green font-bold'
                      : 'text-slate-700 hover:bg-slate-50'
                  }`}
                >
                  <div className="flex items-center gap-2.5">
                    <Icon className={`w-4 h-4 ${isActive ? 'text-pm-green' : 'text-slate-400'}`} />
                    <span>{item.label}</span>
                  </div>
                  {item.highlight && (
                    <span className="text-[10px] bg-pm-green text-white font-bold px-2 py-0.5 rounded">
                      PDF / Print
                    </span>
                  )}
                </button>
              );
            })}
          </div>

          <div className="pt-3">
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                onTriggerPrint();
              }}
              className="w-full flex items-center justify-center gap-2 bg-slate-900 text-white py-2.5 rounded-lg text-sm font-semibold"
            >
              <Printer className="w-4 h-4 text-emerald-400" />
              <span>Cetak / Simpan PDF (A4)</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
