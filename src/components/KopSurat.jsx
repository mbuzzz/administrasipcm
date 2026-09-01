import React from 'react';

export default function KopSurat({ compact = false }) {
  return (
    <div className={`w-full font-tnr ${compact ? 'pb-1.5 mb-2' : 'pb-2.5 mb-3'} border-b-[3px] sm:border-b-[3.5px] border-double border-[#2c1b6e] text-[#2c1b6e] select-none kop-surat-wrapper`}>
      <div className="w-full flex items-center justify-between">
        {/* 1. Logo Kiri: Logo Surat Biru */}
        <div className="w-20 sm:w-24 flex-shrink-0 flex justify-start items-center">
          <img 
            src="/logosurat.png" 
            alt="Logo Pemuda Muhammadiyah" 
            className="w-16 h-16 sm:w-20 sm:h-20 object-contain print:w-16 print:h-16"
          />
        </div>

        {/* 2. Teks Kop Surat: 16pt Bold & Alamat 9pt Italic Sesuai Permintaan */}
        <div className="flex-1 text-center px-1">
          <h2 className="text-[13pt] sm:text-[15pt] print:text-[14pt] font-bold tracking-wider uppercase leading-tight text-[#2c1b6e]">
            PIMPINAN CABANG
          </h2>
          <h1 className="text-[14pt] sm:text-[16pt] print:text-[15pt] font-bold tracking-tight uppercase leading-tight text-[#2c1b6e]">
            PEMUDA MUHAMMADIYAH CLURING
          </h1>
          <h3 className="text-[13pt] sm:text-[15pt] print:text-[14pt] font-bold tracking-wide uppercase leading-tight text-[#2c1b6e]">
            DAERAH BANYUWANGI
          </h3>

          <p className="text-[8.5pt] sm:text-[9pt] print:text-[8.5pt] italic leading-tight mt-0.5 text-[#2c1b6e]">
            Jl. Banyuwangi, Dusun Kepatihan, Benculuk, Kec. Cluring, Kabupaten Banyuwangi, Jawa Timur 68482
          </p>
        </div>

        {/* 3. Spacer Penyeimbang Kanan (Agar Teks Tepat Rata Tengah Halaman Penuh) */}
        <div className="w-20 sm:w-24 flex-shrink-0 hidden sm:block pointer-events-none" aria-hidden="true" />
      </div>
    </div>
  );
}
