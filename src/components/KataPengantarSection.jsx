import React from 'react';
import { 
  BookOpen, 
  Calendar, 
  MapPin, 
  CheckCircle2, 
  Quote, 
  Sparkles, 
  Compass, 
  Target,
  ArrowRight,
  Printer
} from 'lucide-react';
import { proposalData } from '../data/proposalData';

export default function KataPengantarSection({ setActiveTab }) {
  const { kataPengantar, maksudDanTujuan, identitas } = proposalData;

  return (
    <div className="space-y-8 animate-in fade-in duration-300">
      {/* Header Section */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm relative overflow-hidden">
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div>
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-50 border border-emerald-200 text-xs font-bold text-pm-green mb-2">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Dokumen Resmi Proposal</span>
            </div>
            <h1 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Kata Pengantar, Maksud & Tujuan
            </h1>
            <p className="text-slate-600 text-xs sm:text-sm mt-1">
              Landasan historis, spiritual, dan filosofis penyelenggaraan MUHIBBIN 2026
            </p>
          </div>

          <div className="flex items-center gap-2">
            <button
              onClick={() => setActiveTab('cetak')}
              className="flex items-center gap-2 bg-pm-green hover:bg-emerald-700 text-white text-xs font-bold px-4 py-2.5 rounded-lg shadow-sm transition-all"
            >
              <Printer className="w-4 h-4" />
              <span>Lihat Format Cetak A4</span>
            </button>
          </div>
        </div>
      </div>

      {/* Kata Pengantar Card */}
      <div className="bg-white rounded-2xl p-6 sm:p-10 border border-slate-200 shadow-sm relative">
        <div className="flex items-center gap-3 border-b border-slate-100 pb-4 mb-6">
          <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-pm-green">
            <Quote className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900 font-serif">
              Kata Pengantar Panitia Pelaksana
            </h2>
            <p className="text-xs text-slate-500 font-sans">
              Pimpinan Cabang Pemuda Muhammadiyah Cluring Daerah Banyuwangi
            </p>
          </div>
        </div>

        {/* Lafaz Basmalah */}
        <div className="text-center my-6">
          <p className="font-arabic text-2xl sm:text-3xl text-emerald-900 leading-loose">
            بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
          </p>
          <p className="font-arabic text-lg sm:text-xl text-slate-800 mt-1">
            السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
          </p>
        </div>

        {/* Content Paragraphs */}
        <div className="prose prose-slate max-w-none text-sm sm:text-base leading-relaxed text-slate-700 space-y-4">
          <p className="font-serif italic text-slate-600 bg-slate-50 p-4 rounded-xl border-l-4 border-pm-green">
            &ldquo;Puji syukur kita panjatkan kehadirat Allah SWT yang telah melimpahkan taufiq, hidayah serta kesehatan kepada kita semua sehingga kita dapat menjalankan perintah-Nya. Aamiin.&rdquo;
          </p>
          
          <p>
            Shalawat beriringkan salam senantiasa tercurah kepada junjungan alam Nabi Besar Muhammad SAW, suri teladan umat manusia yang telah membimbing kita menuju cahaya kebenaran Islam yang mencerahkan peradaban.
          </p>

          <p>
            Pimpinan Cabang Pemuda Muhammadiyah (PCPM) Cluring sebagai salah satu pilar kader persyarikatan senantiasa berkomitmen mengambil peran aktif dalam pembinaan generasi muda Islam. Dalam rangka menyemarakkan peringatan Maulid Nabi Muhammad SAW 1448 H / 2026 M, kami berinisiatif menyelenggarakan kegiatan <strong>MUHIBBIN (Musabaqah li Thulab wa Tholibin)</strong> dengan mengusung tema <strong>&ldquo;CERIA, BERAKHLAQ, DAN BERPRESTASI&rdquo;</strong>.
          </p>

          <p>
            Kegiatan ini dirancang sebagai wadah syiar dakwah yang menggembirakan, sekaligus ajang kompetisi edukatif untuk mengasah potensi spiritual, tilawah, vokal islami, kreativitas seni, dan dakwah bagi santri/pelajar tingkat TK, TPA, hingga SD/MI se-Kecamatan Cluring dan sekitarnya. Seluruh cabang lomba diselenggarakan secara <strong>GRATIS tanpa dipungut biaya pendaftaran</strong>.
          </p>

          <p>
            Proposal ini disusun sebagai pedoman penyelenggaraan kegiatan sekaligus permohonan dukungan dan kerjasama kepada seluruh pihak. Semoga ikhtiar mulia ini senantiasa mendapat limpahan rahmat dan ridho Allah SWT.
          </p>
        </div>

        {/* Closing Slogan & Signoff */}
        <div className="mt-8 pt-6 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div>
            <p className="font-arabic text-base text-slate-800">
              وَالسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
            </p>
            <p className="text-xs font-bold text-pm-green mt-1 font-serif italic">
              FASTABIQUL KHAIRÂT.
            </p>
          </div>
          <div className="text-right text-xs text-slate-500">
            <p className="font-semibold text-slate-800">Cluring, 20 Agustus 2026</p>
            <p>Panitia Pelaksana MUHIBBIN 2026</p>
          </div>
        </div>
      </div>

      {/* Maksud & Tujuan Grid */}
      <div className="bg-white rounded-2xl p-6 sm:p-8 border border-slate-200 shadow-sm">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-amber-50 flex items-center justify-center text-amber-700">
            <Target className="w-5 h-5" />
          </div>
          <div>
            <h2 className="text-lg sm:text-xl font-bold text-slate-900">
              Maksud dan Tujuan Kegiatan
            </h2>
            <p className="text-xs text-slate-500">
              Target luaran dan sasaran strategis yang ingin dicapai melalui kegiatan MUHIBBIN
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {maksudDanTujuan.map((item) => (
            <div 
              key={item.no}
              className="p-5 rounded-xl border border-slate-200 bg-slate-50/50 hover:bg-emerald-50/30 hover:border-emerald-200 transition-all flex items-start gap-4"
            >
              <div className="w-8 h-8 rounded-full bg-pm-green text-white flex items-center justify-center font-bold text-sm shrink-0">
                {item.no}
              </div>
              <div>
                <h3 className="font-bold text-slate-900 text-sm sm:text-base">
                  {item.judul}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 mt-1 leading-relaxed">
                  {item.deskripsi}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Waktu & Lokasi Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-gradient-to-br from-emerald-800 to-pm-green rounded-2xl p-6 text-white shadow-lg">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <h3 className="font-bold text-base text-white">Waktu & Jadwal Acara</h3>
              <p className="text-xs text-emerald-200">Hari & Tanggal Pelaksanaan</p>
            </div>
          </div>
          <div className="space-y-3 text-sm">
            <div className="bg-white/10 rounded-xl p-3 border border-white/10">
              <span className="text-[11px] text-emerald-200 block uppercase font-semibold">Hari & Tanggal</span>
              <span className="font-bold text-lg text-white">{identitas.waktu}</span>
            </div>
            <div className="bg-white/10 rounded-xl p-3 border border-white/10">
              <span className="text-[11px] text-emerald-200 block uppercase font-semibold">Waktu Pelaksanaan</span>
              <span className="font-bold text-lg text-white">{identitas.jam}</span>
            </div>
          </div>
        </div>

        <div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-3 mb-4">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-pm-green">
                <MapPin className="w-5 h-5" />
              </div>
              <div>
                <h3 className="font-bold text-base text-slate-900">Lokasi Pelaksanaan</h3>
                <p className="text-xs text-slate-500">Venue Utama & Ruang Lomba</p>
              </div>
            </div>
            <div className="space-y-3 text-xs sm:text-sm">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-900 block text-sm">
                  1. Masjid Al Hidayah Tampo
                </span>
                <span className="text-slate-600 text-xs">
                  Tempat Lomba Tartil Al-Qur'an & Adzan-Iqomah, serta Panggung Pembukaan
                </span>
              </div>
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                <span className="font-bold text-slate-900 block text-sm">
                  2. Gedung TK 'Aisyiyah Tampo
                </span>
                <span className="text-slate-600 text-xs">
                  Tempat Lomba Mewarnai Kaligrafi & Lomba Pildacil (Da'i Cilik)
                </span>
              </div>
            </div>
          </div>
          <div className="mt-4 pt-3 border-t border-slate-100 text-xs text-slate-500 flex items-center gap-1.5">
            <span className="font-semibold text-slate-700">Alamat:</span> {identitas.alamatLokasi}
          </div>
        </div>
      </div>
    </div>
  );
}
