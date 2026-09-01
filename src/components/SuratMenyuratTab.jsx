import React, { useState } from 'react';
import { 
  Printer, 
  FileText, 
  Check, 
  RotateCcw,
  Building,
  Award,
  CalendarCheck,
  Send
} from 'lucide-react';
import KopSurat from './KopSurat';
import { proposalData } from '../data/proposalData';

export default function SuratMenyuratTab() {
  const { identitas, pengesahan, cabangLomba } = proposalData;

  // Daftar Resmi Dewan Juri dari Proposal (Selain Ust. Adi P. dan Ust. Maman/Mohammad Mukhlis yang merupakan Panitia Inti)
  const daftarJuriProposal = [
    {
      id: 'juri_zulfian',
      nama: 'Ustadz Zulfian Al Hilal',
      namaSingkat: 'Ust. Zulfian Al Hilal',
      cabang: "Tartil Al-Qur'an",
      kategori: 'SD/MI Kelas 2–5',
      lokasi: 'Masjid Al Hidayah Tampo (Shaf Laki-laki)',
      kodeNomor: '1.2.1/06/2026'
    },
    {
      id: 'juri_wildan',
      nama: 'Ustadz Wildan',
      namaSingkat: 'Ust. Wildan',
      cabang: 'Adzan dan Iqomah',
      kategori: 'SD/MI Kelas 2–5',
      lokasi: "Gedung TK 'Aisyiyah Tampo (Ruang Kelas Khusus)",
      kodeNomor: '1.2.2/06/2026'
    },
    {
      id: 'juri_rahmad',
      nama: 'Ustadz Rahmad',
      namaSingkat: 'Ust. Rahmad',
      cabang: 'Adzan dan Iqomah',
      kategori: 'SD/MI Kelas 2–5',
      lokasi: "Gedung TK 'Aisyiyah Tampo (Ruang Kelas Khusus)",
      kodeNomor: '1.2.3/06/2026'
    },
    {
      id: 'juri_tk_dinar',
      nama: 'Guru / Ustadzah TK Dinar',
      namaSingkat: 'Guru TK Dinar',
      cabang: 'Mewarnai Kaligrafi',
      kategori: 'TK & TPA Usia TK',
      lokasi: "Ruang Kelas TK 'Aisyiyah Tampo",
      kodeNomor: '1.2.4/06/2026'
    },
    {
      id: 'juri_tk_aisyiyah',
      nama: 'Guru / Ustadzah TK \'Aisyiyah Tampo',
      namaSingkat: 'Guru TK \'Aisyiyah Tampo',
      cabang: 'Mewarnai Kaligrafi',
      kategori: 'TK & TPA Usia TK',
      lokasi: "Ruang Kelas TK 'Aisyiyah Tampo",
      kodeNomor: '1.2.5/06/2026'
    },
    {
      id: 'juri_yanto',
      nama: 'Ustadz Yanto',
      namaSingkat: 'Ust. Yanto',
      cabang: 'Pildacil (Da\'i Cilik)',
      kategori: 'SD/MI Kelas 4–6',
      lokasi: 'Masjid Al Hidayah Tampo (Shaf Perempuan)',
      kodeNomor: '1.2.6/06/2026'
    },
    {
      id: 'juri_fahmi',
      nama: 'Ustadz Fahmi',
      namaSingkat: 'Ust. Fahmi',
      cabang: 'Pildacil (Da\'i Cilik)',
      kategori: 'SD/MI Kelas 4–6',
      lokasi: 'Masjid Al Hidayah Tampo (Shaf Perempuan)',
      kodeNomor: '1.2.7/06/2026'
    }
  ];

  // 7 Jenis Template Surat Resmi Ringkas & Padat Sesuai Kebutuhan 1 Lembar A4
  const suratTemplates = [
    {
      id: 'sponsorship',
      title: '1. Permohonan Dana / Sponsorship',
      kodeNomor: '3.1/06/2026',
      hal: 'Permohonan Bantuan Dana & Sponsorship',
      lampiran: '1 (Satu) Berkas Proposal',
      tujuan: 'Pimpinan Perusahaan / Bpk/Ibu Donatur',
      tempatTujuan: 'Di Tempat',
      isiKhusus: `Sehubungan dengan pelaksanaan kegiatan MUHIBBIN (Musabaqah li Thulab wa Tholibin) dalam rangka Maulid Nabi Muhammad SAW 1448 H / 2026 M yang diselenggarakan secara GRATIS bagi santri/pelajar se-Kecamatan Cluring pada:

Hari, Tanggal : ${identitas.waktu}
Waktu         : Pukul ${identitas.jam} (Rundown mulai 08.30 WIB)
Tempat        : ${identitas.lokasiUtama}
Tema          : "${identitas.tema}"

Maka kami memohon kesediaan Bapak/Ibu/Pimpinan untuk berkenan memberikan bantuan dana/sponsorship demi kelancaran dan suksesnya kegiatan dakwah edukatif ini (proposal kegiatan dan RAB terlampir).`
    },
    {
      id: 'bantuan_mamiri',
      title: '2. Permohonan Bantuan Konsumsi MAMIRI',
      kodeNomor: '3.2/06/2026',
      hal: 'Permohonan Bantuan Konsumsi MAMIRI',
      lampiran: '1 (Satu) Berkas Proposal',
      tujuan: 'Bpk/Ibu Pimpinan Ranting Muhammadiyah & \'Aisyiyah Tampo',
      tempatTujuan: 'Di Tampo',
      isiKhusus: `Sehubungan dengan pelaksanaan kegiatan MUHIBBIN (Musabaqah li Thulab wa Tholibin) dalam rangka Maulid Nabi Muhammad SAW 1448 H / 2026 M yang diselenggarakan secara GRATIS bagi santri/pelajar se-Kecamatan Cluring pada:

Hari, Tanggal : ${identitas.waktu}
Waktu         : Pukul ${identitas.jam} (Rundown mulai 08.30 WIB)
Tempat        : ${identitas.lokasiUtama}
Tema          : "${identitas.tema}"

Maka kami memohon kepada Bapak/Ibu/Pimpinan untuk berkenan memberikan bantuan Konsumsi Mamiri (200 kotak) demi kelancaran dan suksesnya kegiatan dakwah edukatif ini.`
    },
    {
      id: 'juri',
      title: '3. Permohonan Menjadi Dewan Juri',
      kodeNomor: '1.2/06/2026',
      hal: 'Permohonan Menjadi Dewan Juri',
      lampiran: '1 (Satu) Lembar Juknis Lomba',
      tujuan: daftarJuriProposal[0].nama,
      namaJuri: daftarJuriProposal[0].nama,
      cabangLombaPilihan: daftarJuriProposal[0].cabang,
      tempatTujuan: 'Di Tempat',
      isiKhusus: `Sehubungan dengan pelaksanaan kegiatan musabaqah santri MUHIBBIN 2026 dalam rangka memperingati Maulid Nabi Muhammad SAW 1448 H / 2026 M pada:

Hari, Tanggal : ${identitas.waktu}
Waktu         : Pukul ${identitas.jam} (Rundown mulai 08.30 WIB)
Tempat        : ${identitas.lokasiUtama}

Maka kami memohon kesediaan Bapak/Ibu/Ustadz/Ustadzah untuk berkenan menjadi Dewan Juri pada Cabang Lomba: ${daftarJuriProposal[0].cabang} (${daftarJuriProposal[0].kategori}) bertempat di ${daftarJuriProposal[0].lokasi}.`
    },
    {
      id: 'izin_tempat',
      title: '4. Permohonan Peminjaman Tempat',
      kodeNomor: '1.7/06/2026',
      hal: 'Permohonan Peminjaman Tempat & Fasilitas',
      lampiran: '1 (Satu) Berkas Proposal',
      tujuan: 'Ketua Takmir Masjid Al Hidayah Tampo / Kepala TK \'Aisyiyah Tampo',
      tempatTujuan: 'Di Tampo - Cluring',
      isiKhusus: `Dalam rangka penyelenggaraan kegiatan musabaqah santri MUHIBBIN 2026 Memperingati Maulid Nabi Muhammad SAW 1448 H / 2026 M pada:

Hari, Tanggal : ${identitas.waktu}
Waktu         : Pukul 07.30 WIB s/d Selesai (Rundown mulai 08.30 WIB)
Peserta       : Santri TK, TPA, dan Pelajar SD/MI se-Kecamatan Cluring

Kami memohon izin dan perkenan Bapak/Ibu untuk meminjam dan menggunakan fasilitas Masjid Al Hidayah dan Gedung TK 'Aisyiyah Tampo beserta sarana pendukungnya demi kelancaran dan kekhidmatan acara tersebut.`
    },
    {
      id: 'undangan_peserta',
      title: '5. Surat Undangan Peserta Lomba',
      kodeNomor: '1.1/06/2026',
      hal: 'Undangan & Delegasi Peserta Lomba MUHIBBIN 2026',
      lampiran: '1 (Satu) Berkas Juknis & Formulir',
      tujuan: 'Kepala TK / Pengasuh TPA / Kepala SD-MI se-Kecamatan Cluring',
      tempatTujuan: 'Di Tempat',
      isiKhusus: `Dalam rangka menyemarakkan Maulid Nabi Muhammad SAW 1448 H / 2026 M, kami mengundang Bapak/Ibu untuk mengirimkan delegasi santri/siswa terbaik pada ajang musabaqah MUHIBBIN 2026 yang insya Allah akan dilaksanakan pada:

Hari, Tanggal : ${identitas.waktu} | Pukul 08.00 WIB s/d Selesai
Tempat        : Kompleks Masjid Al Hidayah & TK 'Aisyiyah Tampo
Cabang Lomba  : Tartil Qur'an, Adzan-Iqomah, Mewarnai Kaligrafi, dan Pildacil
Pendaftaran   : GRATIS (Tanpa Biaya Pendaftaran)`
    },
    {
      id: 'undangan_pcm',
      title: '6. Undangan Pembukaan (PCM Cluring)',
      kodeNomor: '1.0/06/2026',
      hal: 'Permohonan Menghadiri & Memberikan Sambutan Pembukaan',
      lampiran: '1 (Satu) Berkas Proposal',
      tujuan: 'Ketua Pimpinan Cabang Muhammadiyah Cluring',
      tempatTujuan: 'Di Tempat',
      isiKhusus: `Sehubungan dengan pelaksanaan kegiatan musabaqah santri MUHIBBIN (Musabaqah li Thulab wa Tholibin) dalam rangka memperingati Maulid Nabi Muhammad SAW 1448 H / 2026 M pada:

Hari, Tanggal : ${identitas.waktu}
Waktu         : Pukul 08.00 WIB s/d Selesai (Rundown Pembukaan mulai 08.30 WIB)
Tempat        : Kompleks Masjid Al Hidayah & TK 'Aisyiyah Tampo, Cluring
Tema          : "${identitas.tema}"

Maka kami memohon dengan hormat kesediaan Bapak Ketua beserta segenap jajaran Pimpinan Cabang Muhammadiyah (PCM) Cluring untuk berkenan hadir sekaligus memberikan sambutan dan membuka secara resmi kegiatan Musabaqah MUHIBBIN 2026 tersebut.`
    },
    {
      id: 'undangan_pca',
      title: '7. Undangan Pembukaan (PCA Cluring)',
      kodeNomor: '1.0/06/2026',
      hal: 'Undangan Menghadiri Pembukaan MUHIBBIN 2026',
      lampiran: '1 (Satu) Berkas Proposal',
      tujuan: 'Ketua Pimpinan Cabang \'Aisyiyah Cluring',
      tempatTujuan: 'Di Tempat',
      isiKhusus: `Sehubungan dengan pelaksanaan kegiatan musabaqah santri MUHIBBIN (Musabaqah li Thulab wa Tholibin) dalam rangka memperingati Maulid Nabi Muhammad SAW 1448 H / 2026 M pada:

Hari, Tanggal : ${identitas.waktu}
Waktu         : Pukul 08.00 WIB s/d Selesai (Rundown Pembukaan mulai 08.30 WIB)
Tempat        : Kompleks Masjid Al Hidayah & TK 'Aisyiyah Tampo, Cluring
Tema          : "${identitas.tema}"

Maka kami mengundang dengan hormat kehadiran Ibu Ketua beserta segenap jajaran Pimpinan Cabang 'Aisyiyah (PCA) Cluring dalam acara Pembukaan Musabaqah MUHIBBIN 2026 demi kelancaran, kekhidmatan, dan syiar dakwah persyarikatan.`
    }
  ];

  const [activeTemplateId, setActiveTemplateId] = useState('sponsorship');
  const [selectedJuriId, setSelectedJuriId] = useState(daftarJuriProposal[0].id);
  
  // State form yang bisa diedit
  const [formData, setFormData] = useState({
    nomorSurat: '3.1/06/2026',
    lampiran: '1 (Satu) Berkas Proposal',
    hal: 'Permohonan Bantuan Dana & Sponsorship',
    tanggalMasehi: '30 Agustus 2026 M',
    tanggalHijriah: '16 Shafar 1448 H',
    tujuanSurat: 'Pimpinan Perusahaan / Bpk/Ibu Donatur',
    tempatTujuan: 'Di Tempat',
    isiSurat: suratTemplates[0].isiKhusus,
    namaJuriKhusus: daftarJuriProposal[0].nama,
    cabangLombaJuri: daftarJuriProposal[0].cabang,
    lokasiLombaJuri: daftarJuriProposal[0].lokasi
  });

  const handleSelectTemplate = (template) => {
    setActiveTemplateId(template.id);
    let updatedIsi = template.isiKhusus;
    let targetTujuan = template.tujuan;
    let nomor = template.kodeNomor;
    
    if (template.id === 'juri') {
      const currentJuri = daftarJuriProposal.find(j => j.id === selectedJuriId) || daftarJuriProposal[0];
      targetTujuan = currentJuri.nama;
      nomor = currentJuri.kodeNomor;
      updatedIsi = `Sehubungan dengan pelaksanaan kegiatan musabaqah santri MUHIBBIN 2026 dalam rangka memperingati Maulid Nabi Muhammad SAW 1448 H / 2026 M pada:

Hari, Tanggal : ${identitas.waktu}
Waktu         : Pukul ${identitas.jam} (Rundown mulai 08.30 WIB)
Tempat        : ${identitas.lokasiUtama}

Maka kami memohon kesediaan Bapak/Ibu/Ustadz/Ustadzah untuk berkenan menjadi Dewan Juri pada Cabang Lomba: ${currentJuri.cabang} (${currentJuri.kategori}) bertempat di ${currentJuri.lokasi}.`;
    }

    setFormData(prev => ({
      ...prev,
      nomorSurat: nomor,
      lampiran: template.lampiran,
      hal: template.hal,
      tujuanSurat: targetTujuan,
      tempatTujuan: template.tempatTujuan,
      isiSurat: updatedIsi
    }));
  };

  const handlePilihJuriSpesifik = (juriItem) => {
    setSelectedJuriId(juriItem.id);
    setActiveTemplateId('juri');
    const newIsi = `Sehubungan dengan pelaksanaan kegiatan musabaqah santri MUHIBBIN 2026 dalam rangka memperingati Maulid Nabi Muhammad SAW 1448 H / 2026 M pada:

Hari, Tanggal : ${identitas.waktu}
Waktu         : Pukul ${identitas.jam} (Rundown mulai 08.30 WIB)
Tempat        : ${identitas.lokasiUtama}

Maka kami memohon kesediaan Bapak/Ibu/Ustadz/Ustadzah untuk berkenan menjadi Dewan Juri pada Cabang Lomba: ${juriItem.cabang} (${juriItem.kategori}) bertempat di ${juriItem.lokasi}.`;

    setFormData(prev => ({
      ...prev,
      nomorSurat: juriItem.kodeNomor,
      lampiran: '1 (Satu) Lembar Juknis Lomba',
      hal: 'Permohonan Menjadi Dewan Juri',
      tujuanSurat: juriItem.nama,
      tempatTujuan: 'Di Tempat',
      cabangLombaJuri: juriItem.cabang,
      lokasiLombaJuri: juriItem.lokasi,
      namaJuriKhusus: juriItem.nama,
      isiSurat: newIsi
    }));
  };

  const handlePrintSurat = () => {
    window.print();
  };

  return (
    <div className="space-y-6 w-full">
      {/* Top Toolbar (no-print) */}
      <div className="bg-white rounded-lg p-3 sm:p-4 border border-slate-300 shadow-sm flex flex-wrap items-center justify-between gap-3 no-print max-w-5xl mx-auto">
        <div className="flex items-center gap-2">
          <FileText className="w-5 h-5 text-pm-green" />
          <div>
            <h2 className="text-sm font-bold text-slate-900">Generator Surat Resmi MUHIBBIN 2026</h2>
            <p className="text-xs text-slate-500">Pilih template, sesuaikan teks, dan cetak langsung (Format Pas 1 Halaman A4)</p>
          </div>
        </div>

        <button
          onClick={handlePrintSurat}
          className="flex items-center gap-1.5 bg-pm-green hover:bg-emerald-800 text-white font-bold text-xs sm:text-sm px-4 py-2 rounded shadow-sm transition-all"
        >
          <Printer className="w-4 h-4 text-amber-300" />
          <span>Cetak Surat (Ctrl+P)</span>
        </button>
      </div>

      {/* Grid Layout: Form Controls (Kiri - no print) & Live Paper View (Kanan) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-7xl mx-auto items-start">
        
        {/* Left Side: Editor Sidebar (no-print) */}
        <div className="lg:col-span-4 space-y-4 no-print">
          
          {/* Template Selection Tabs */}
          <div className="bg-white rounded-lg border border-slate-300 p-3 shadow-sm space-y-2">
            <label className="text-xs font-bold uppercase text-slate-600 tracking-wider block">
              Pilih Jenis Surat:
            </label>
            <div className="grid grid-cols-1 gap-1.5">
              {suratTemplates.map((template) => {
                const isActive = activeTemplateId === template.id;
                return (
                  <button
                    key={template.id}
                    onClick={() => handleSelectTemplate(template)}
                    className={`w-full text-left p-2 rounded text-xs font-semibold flex items-center justify-between border transition-all ${
                      isActive 
                        ? 'bg-pm-green text-white border-pm-green shadow-sm' 
                        : 'bg-slate-50 hover:bg-slate-100 text-slate-700 border-slate-200'
                    }`}
                  >
                    <span className="truncate">{template.title}</span>
                    {isActive && <Check className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />}
                  </button>
                );
              })}
            </div>
          </div>

          {/* Form Quick Editor */}
          <div className="bg-white rounded-lg border border-slate-300 p-3 shadow-sm space-y-3 text-xs">
            <div className="flex items-center justify-between border-b border-slate-200 pb-2">
              <span className="font-bold text-slate-800 uppercase tracking-wider">
                Sesuaikan Isi Surat:
              </span>
              <button
                onClick={() => {
                  const currentT = suratTemplates.find(t => t.id === activeTemplateId);
                  if (currentT) handleSelectTemplate(currentT);
                }}
                className="text-[10px] text-slate-500 hover:text-pm-green flex items-center gap-1"
              >
                <RotateCcw className="w-3 h-3" /> Reset
              </button>
            </div>

            {/* Nomor Surat */}
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Nomor Surat:</label>
              <input 
                type="text" 
                value={formData.nomorSurat} 
                onChange={(e) => setFormData({...formData, nomorSurat: e.target.value})}
                className="w-full p-1.5 bg-slate-50 border border-slate-300 rounded text-slate-900 font-mono text-xs focus:ring-1 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            {/* Panel Khusus Pemilihan Dewan Juri Sesuai Proposal (Selain Adi & Maman) */}
            {activeTemplateId === 'juri' && (
              <div className="bg-emerald-50/60 p-2.5 rounded-lg border border-emerald-200 space-y-2">
                <div className="flex items-center justify-between">
                  <label className="block text-emerald-950 font-bold text-[11px] uppercase tracking-wider">
                    Pilih Nama Dewan Juri (Proposal):
                  </label>
                  <span className="text-[10px] text-emerald-700 font-semibold bg-emerald-100/80 px-1.5 py-0.5 rounded">
                    7 Juri Terdaftar
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-1">
                  {daftarJuriProposal.map((juri) => {
                    const isSelected = selectedJuriId === juri.id;
                    return (
                      <button
                        key={juri.id}
                        type="button"
                        onClick={() => handlePilihJuriSpesifik(juri)}
                        className={`w-full text-left p-1.5 rounded transition-all flex items-center justify-between border text-[11px] ${
                          isSelected
                            ? 'bg-pm-green text-white font-bold border-pm-green shadow-xs'
                            : 'bg-white hover:bg-emerald-100/50 text-slate-800 border-slate-200'
                        }`}
                      >
                        <div className="min-w-0 pr-1">
                          <p className="truncate font-semibold">{juri.nama}</p>
                          <p className={`text-[9.5pt] truncate ${isSelected ? 'text-amber-200' : 'text-slate-500'}`}>
                            {juri.cabang} • {juri.kategori}
                          </p>
                        </div>
                        {isSelected && <Check className="w-3.5 h-3.5 text-amber-300 flex-shrink-0" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            )}

            {/* Lampiran & Perihal */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Lampiran:</label>
                <input 
                  type="text" 
                  value={formData.lampiran} 
                  onChange={(e) => setFormData({...formData, lampiran: e.target.value})}
                  className="w-full p-1.5 bg-slate-50 border border-slate-300 rounded text-slate-900 text-xs focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Perihal:</label>
                <input 
                  type="text" 
                  value={formData.hal} 
                  onChange={(e) => setFormData({...formData, hal: e.target.value})}
                  className="w-full p-1.5 bg-slate-50 border border-slate-300 rounded text-slate-900 text-xs focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                />
              </div>
            </div>

            {/* Tanggal Masehi & Hijriah */}
            <div className="grid grid-cols-2 gap-2">
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Tanggal Masehi:</label>
                <input 
                  type="text" 
                  value={formData.tanggalMasehi} 
                  onChange={(e) => setFormData({...formData, tanggalMasehi: e.target.value})}
                  className="w-full p-1.5 bg-slate-50 border border-slate-300 rounded text-slate-900 text-xs focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                  placeholder="30 Agustus 2026 M"
                />
              </div>
              <div>
                <label className="block text-slate-700 font-semibold mb-1">Tanggal Hijriah:</label>
                <input 
                  type="text" 
                  value={formData.tanggalHijriah} 
                  onChange={(e) => setFormData({...formData, tanggalHijriah: e.target.value})}
                  className="w-full p-1.5 bg-slate-50 border border-slate-300 rounded text-slate-900 text-xs focus:ring-1 focus:ring-emerald-500 focus:outline-none"
                  placeholder="16 Shafar 1448 H"
                />
              </div>
            </div>

            {/* Tujuan Surat */}
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Kepada Yth.:</label>
              <input 
                type="text" 
                value={formData.tujuanSurat} 
                onChange={(e) => setFormData({...formData, tujuanSurat: e.target.value})}
                className="w-full p-1.5 bg-slate-50 border border-slate-300 rounded text-slate-900 text-xs focus:ring-1 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            <div>
              <label className="block text-slate-700 font-semibold mb-1">Tempat / Alamat:</label>
              <input 
                type="text" 
                value={formData.tempatTujuan} 
                onChange={(e) => setFormData({...formData, tempatTujuan: e.target.value})}
                className="w-full p-1.5 bg-slate-50 border border-slate-300 rounded text-slate-900 text-xs focus:ring-1 focus:ring-emerald-500 focus:outline-none"
              />
            </div>

            {/* Isi Surat Body */}
            <div>
              <label className="block text-slate-700 font-semibold mb-1">Isi Paragraf Khusus:</label>
              <textarea 
                rows={5}
                value={formData.isiSurat} 
                onChange={(e) => setFormData({...formData, isiSurat: e.target.value})}
                className="w-full p-2 bg-slate-50 border border-slate-300 rounded text-slate-900 text-xs focus:ring-1 focus:ring-emerald-500 focus:outline-none leading-relaxed"
              />
            </div>
          </div>
        </div>

        {/* Right Side: LIVE A4 PRINT-READY SHEET (PAS 1 LEMBAR A4 - 100% TIMES NEW ROMAN) */}
        <div className="lg:col-span-8 flex justify-center w-full">
          <div className="surat-a4-sheet font-tnr text-black bg-white text-[11.5pt] print:text-[11pt] leading-normal select-text relative shadow-lg border border-slate-300 avoid-break-inside">
            
            {/* 1. KOP SURAT RESMI (16pt Bold & Alamat 9pt Italic) */}
            <KopSurat compact={true} />

            {/* 2. LAFAZ ARAB WAJIB DI BAWAH KOP */}
            <div className="text-center my-3 print:my-2.5">
              <p className="font-arabic text-xl sm:text-2xl print:text-xl text-black leading-none">
                بِسْمِ اللَّهِ الرَّحْمَنِ الرَّحِيم
              </p>
            </div>

            {/* 3. BAGIAN NOMOR, LAMPIRAN, HAL & TANGGAL SURAT (11.5PT) */}
            <div className="flex justify-between items-start my-2.5 print:my-2 text-[11.5pt] print:text-[11pt]">
              {/* Kolom Kiri: Nomor, Lampiran, Hal */}
              <table className="border-collapse border-none text-left text-[11.5pt] print:text-[11pt]">
                <tbody>
                  <tr>
                    <td className="pr-2 py-0.5 font-normal align-top whitespace-nowrap">Nomor</td>
                    <td className="pr-2 py-0.5 align-top">:</td>
                    <td className="py-0.5 font-bold align-top">{formData.nomorSurat}</td>
                  </tr>
                  <tr>
                    <td className="pr-2 py-0.5 font-normal align-top whitespace-nowrap">Lampiran</td>
                    <td className="pr-2 py-0.5 align-top">:</td>
                    <td className="py-0.5 align-top">{formData.lampiran}</td>
                  </tr>
                  <tr>
                    <td className="pr-2 py-0.5 font-normal align-top whitespace-nowrap">Hal</td>
                    <td className="pr-2 py-0.5 align-top">:</td>
                    <td className="py-0.5 font-bold underline align-top">{formData.hal}</td>
                  </tr>
                </tbody>
              </table>

              {/* Kolom Kanan: Tanggal Surat Baku (Masehi di atas, Garis Pembatas, Hijriah di bawah, Cluring di samping kiri) */}
              <div className="flex items-center justify-end text-[11.5pt] print:text-[11pt] text-right">
                <span className="mr-1.5 whitespace-nowrap font-normal">Cluring,</span>
                <div className="inline-flex flex-col items-center text-center">
                  <span className="leading-tight px-1 font-normal">{formData.tanggalMasehi || '30 Agustus 2026 M'}</span>
                  <div className="w-full border-b border-black"></div>
                  <span className="leading-tight px-1 font-normal">{formData.tanggalHijriah || '16 Shafar 1448 H'}</span>
                </div>
              </div>
            </div>

            {/* 4. KEPADA YTH / TUJUAN SURAT (11.5PT) - Diberi Jarak Lebih Lega */}
            <div className="my-3.5 print:my-3 text-[11.5pt] print:text-[11pt] leading-normal">
              <p>Kepada Yth.</p>
              <p className="font-bold">{formData.tujuanSurat}</p>
              <p>{formData.tempatTujuan}</p>
            </div>

            {/* 5. SALAM PEMBUKA ARAB WAJIB - Diberi Jarak Lebih Lega */}
            <div className="my-3 print:my-2.5 text-left">
              <p className="font-arabic text-lg sm:text-xl print:text-lg text-black">
                السَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
              </p>
            </div>

            {/* 6. KALIMAT PEMBUKA & ISI SURAT BAKU RINGKAS (11.5PT) */}
            <div className="text-justify text-[11.5pt] print:text-[11pt] space-y-2 print:space-y-1.5 leading-normal print:leading-snug">
              <p className="indent-8">
                Puji syukur kita panjatkan kehadirat Allah SWT yang telah melimpahkan taufiq dan hidayah-Nya. Shalawat serta salam semoga senantiasa tercurah kepada junjungan kita Nabi Muhammad SAW.
              </p>

              {/* Paragraf Inti Ringkas & Padat */}
              <div className="whitespace-pre-line text-justify leading-normal print:leading-snug">
                {formData.isiSurat}
              </div>

              <p className="indent-8">
                Demikian surat ini kami sampaikan. Atas perhatian, perkenan, dan kerjasamanya kami ucapkan terima kasih (Jazakumullahu Khairan Katsiran).
              </p>
            </div>

            {/* 7. SEMBOYAN PENUTUP WAJIB (FASTABIQUL KHAIRÂT huruf miring) */}
            <div className="my-2.5 print:my-2 text-left">
              <p className="font-bold italic text-[11.5pt] print:text-[11pt]">
                FASTABIQUL KHAIRÂT.
              </p>
            </div>

            {/* 8. SALAM PENUTUP ARAB WAJIB - Diberi Jarak Nyaman */}
            <div className="my-2.5 print:my-2 text-left">
              <p className="font-arabic text-lg sm:text-xl print:text-lg text-black">
                وَالسَّلاَمُ عَلَيْكُمْ وَرَحْمَةُ اللهِ وَبَرَكَاتُهُ
              </p>
            </div>

            {/* 9. TANDA TANGAN RAPI & SEIMBANG (11.5PT) - Space Lebih Lebar untuk TTD & Stempel */}
            <div className="mt-4 print:mt-3 pt-1 avoid-break-inside text-[11.5pt] print:text-[11pt] surat-ttd-section">
              {/* Panitia Pelaksana */}
              <div className="text-center mb-1 font-bold uppercase tracking-wider text-[10.5pt] print:text-[10pt]">
                PANITIA PELAKSANA MUHIBBIN 2026
              </div>

              <table className="w-full border-none border-collapse text-center my-1 text-[11.5pt] print:text-[11pt]">
                <tbody>
                  <tr>
                    <td className="w-1/2 align-top pb-12 sm:pb-14 print:pb-11 font-normal">
                      Ketua Panitia,
                    </td>
                    <td className="w-1/2 align-top pb-12 sm:pb-14 print:pb-11 font-normal">
                      Sekretaris Panitia,
                    </td>
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

              {/* Mengetahui PCPM Cluring (Hanya Ketua) */}
              <div className="mt-3 print:mt-2.5 pt-0.5 text-center text-[11.5pt] print:text-[11pt]">
                <p className="text-[10pt] print:text-[9.5pt] font-normal">Mengetahui,</p>
                <div className="pt-0.5 pb-12 sm:pb-14 print:pb-11 text-center font-normal text-[10.5pt] print:text-[10pt]">
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
    </div>
  );
}
