import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import CoverPengesahanTab from './components/CoverPengesahanTab';
import PendahuluanTab from './components/PendahuluanTab';
import PelaksanaanTab from './components/PelaksanaanTab';
import ApresiasiHadiahTab from './components/ApresiasiHadiahTab';
import KepanitiaanRABTab from './components/KepanitiaanRABTab';
import PenutupTab from './components/PenutupTab';
import SuratMenyuratTab from './components/SuratMenyuratTab';
import LampiranJuknisTab from './components/LampiranJuknisTab';
import ProposalPrintView from './components/ProposalPrintView';
import { proposalData } from './data/proposalData';
import { 
  Menu, 
  Printer, 
  Sparkles, 
  ZoomIn, 
  ZoomOut, 
  RotateCcw,
  Calendar,
  MapPin
} from 'lucide-react';

export default function App() {
  const [activeTab, setActiveTab] = useState('cover_pengesahan');
  const [zoomLevel, setZoomLevel] = useState(1);
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const { identitas } = proposalData;

  const handleTriggerPrint = () => {
    window.print();
  };

  // Keyboard shortcut listener for Ctrl+P / Cmd+P
  useEffect(() => {
    const handleKeyDown = (e) => {
      if ((e.ctrlKey || e.metaKey) && e.key === 'p') {
        // Allow default print dialog
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const getActiveTabTitle = () => {
    switch (activeTab) {
      case 'cover_pengesahan': return 'Cover Proposal (Sampul Depan)';
      case 'pendahuluan': return 'BAB I : Pendahuluan (Selayang Pandang)';
      case 'pelaksanaan': return 'BAB II : Pelaksanaan Kegiatan & Petunjuk Teknis';
      case 'apresiasi_hadiah': return 'BAB III : Apresiasi & Hadiah Kejuaraan';
      case 'kepanitiaan_rab': return 'BAB IV : Susunan Kepanitiaan & RAB';
      case 'penutup': return 'BAB V : Penutup & Lembar Pengesahan';
      case 'surat_menyurat': return 'Modul Generator Surat Resmi';
      case 'lampiran_juknis': return 'Lampiran Petunjuk Teknis Per Lomba (A4)';
      case 'cetak_full': return 'Dokumen Proposal Lengkap (A4)';
      default: return 'Proposal MUHIBBIN 2026';
    }
  };

  const renderCurrentTab = () => {
    switch (activeTab) {
      case 'cover_pengesahan':
        return <CoverPengesahanTab setActiveTab={setActiveTab} onTriggerPrint={handleTriggerPrint} />;
      case 'pendahuluan':
        return <PendahuluanTab setActiveTab={setActiveTab} />;
      case 'pelaksanaan':
        return <PelaksanaanTab setActiveTab={setActiveTab} />;
      case 'apresiasi_hadiah':
        return <ApresiasiHadiahTab setActiveTab={setActiveTab} />;
      case 'kepanitiaan_rab':
        return <KepanitiaanRABTab setActiveTab={setActiveTab} />;
      case 'penutup':
        return <PenutupTab setActiveTab={setActiveTab} />;
      case 'surat_menyurat':
        return <SuratMenyuratTab setActiveTab={setActiveTab} />;
      case 'lampiran_juknis':
        return <LampiranJuknisTab setActiveTab={setActiveTab} />;
      case 'cetak_full':
        return <ProposalPrintView setActiveTab={setActiveTab} />;
      default:
        return <CoverPengesahanTab setActiveTab={setActiveTab} onTriggerPrint={handleTriggerPrint} />;
    }
  };

  return (
    <div className="min-h-screen flex bg-slate-200/80 text-slate-800 font-sans selection:bg-emerald-600 selection:text-white">
      {/* Sidebar Navigation */}
      <Sidebar 
        activeTab={activeTab} 
        setActiveTab={setActiveTab} 
        onTriggerPrint={handleTriggerPrint}
        zoomLevel={zoomLevel}
        setZoomLevel={setZoomLevel}
        sidebarOpen={sidebarOpen}
        setSidebarOpen={setSidebarOpen}
      />

      {/* Main Content Area (Offset by Sidebar on Desktop) */}
      <div className="flex-1 flex flex-col min-w-0 lg:pl-72 transition-all duration-300 app-main">
        
        {/* Top Header Bar (Mobile & Quick Controls) */}
        <header className="sticky top-0 z-30 bg-slate-900 text-white shadow-md no-print px-4 py-2.5 flex items-center justify-between">
          <div className="flex items-center gap-3">
            {/* Mobile Hamburger Toggle */}
            <button
              onClick={() => setSidebarOpen(true)}
              className="lg:hidden p-1.5 text-slate-300 hover:text-white hover:bg-slate-800 rounded-lg focus:outline-none"
              aria-label="Buka Menu Sidebar"
            >
              <Menu className="w-5 h-5" />
            </button>

            <div>
              <h1 className="text-xs sm:text-sm font-bold text-white flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                <span>{getActiveTabTitle()}</span>
              </h1>
              <p className="text-[10px] text-slate-400 hidden sm:block">
                PCPM Cluring • MUHIBBIN 2026 • Format Dokumen Resmi A4
              </p>
            </div>
          </div>

          {/* Quick Header Actions */}
          <div className="flex items-center gap-2">
            {/* Zoom Controls on Top for Convenience */}
            <div className="hidden sm:flex items-center gap-1 bg-slate-800 px-2 py-1 rounded-lg border border-slate-700 text-xs">
              <button 
                onClick={() => setZoomLevel(prev => Math.max(prev - 0.1, 0.6))}
                className="text-slate-400 hover:text-white px-1"
                title="Perkecil (-)"
              >
                -
              </button>
              <span className="font-mono text-[11px] text-emerald-400 font-bold px-1">
                {Math.round(zoomLevel * 100)}%
              </span>
              <button 
                onClick={() => setZoomLevel(prev => Math.min(prev + 0.1, 1.4))}
                className="text-slate-400 hover:text-white px-1"
                title="Perbesar (+)"
              >
                +
              </button>
            </div>

            <button
              onClick={handleTriggerPrint}
              className="flex items-center gap-1.5 bg-pm-green hover:bg-emerald-700 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-sm transition-all"
              title="Cetak format A4 (Ctrl+P)"
            >
              <Printer className="w-3.5 h-3.5 text-amber-300" />
              <span className="hidden sm:inline">Cetak Dokumen</span>
              <span className="sm:hidden">Cetak</span>
            </button>
          </div>
        </header>

        {/* Main Document Canvas Viewport with Zoom Scale */}
        <main className="flex-1 p-3 sm:p-6 lg:p-8 flex justify-center overflow-x-auto">
          <div 
            style={{ 
              transform: `scale(${zoomLevel})`,
              transformOrigin: 'top center',
              transition: 'transform 0.15s ease-out'
            }}
            className="w-full flex flex-col items-center document-canvas"
          >
            {renderCurrentTab()}
          </div>
        </main>

        {/* Floating Mobile Bottom Switcher (no-print) */}
        <nav aria-label="Navigasi Bawah Mobile" className="fixed bottom-3 right-4 z-40 lg:hidden flex items-center gap-2 no-print">
          <button
            onClick={() => setSidebarOpen(true)}
            className="bg-slate-900 text-white p-3 rounded-full shadow-2xl border border-slate-700 flex items-center justify-center"
            title="Buka Menu"
          >
            <Menu className="w-5 h-5 text-emerald-400" />
          </button>
        </nav>

      </div>
    </div>
  );
}
