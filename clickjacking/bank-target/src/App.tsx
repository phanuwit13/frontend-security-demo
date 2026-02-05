
const VictimBank = () => {
  const handleConfirm = () => {
    alert(
      '💸 ระบบธนาคาร: ยืนยันการโอนเงิน 100,000 THB ไปยังบัญชี Hacker_001 สำเร็จ!'
    );
  };

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 via-white to-slate-100 flex flex-col items-center justify-center p-6">

      <div className="w-full max-w-md bg-white/80 backdrop-blur-xl rounded-3xl shadow-lg border border-slate-200/60 overflow-hidden">
        <div className="bg-linear-to-r from-slate-800 to-slate-700 px-6 py-5 text-white text-center font-semibold text-base tracking-wide">
          🏦 Secure Mobile Banking
        </div>

        <div className="p-8 text-center">
          <div className="mb-8">
            <p className="text-slate-400 text-xs uppercase tracking-wider font-medium mb-3">
              ยืนยันรายการโอนเงิน
            </p>
            <h2 className="text-4xl font-bold text-slate-800">
              100,000.00 THB
            </h2>
          </div>

          <div className="bg-slate-50 rounded-2xl p-5 mb-8 text-left border border-slate-100">
            <div className="flex justify-between mb-3">
              <span className="text-slate-400 text-sm">จากบัญชี:</span>
              <span className="text-slate-700 font-medium">
                ออมทรัพย์ (***-123)
              </span>
            </div>
            <div className="flex justify-between">
              <span className="text-slate-400 text-sm">ไปยัง:</span>
              <span className="text-red-500 font-medium">
                Hacker_Account_001
              </span>
            </div>
          </div>

          {/* 🚩 ปุ่มเป้าหมายที่ Hacker จะวางกับดักทับ */}
          <button
            onClick={handleConfirm}
            className="cursor-pointer w-full bg-linear-to-r from-slate-800 to-slate-700 hover:from-slate-700 hover:to-slate-600 text-white font-semibold py-4 rounded-2xl transition-all active:translate-y-0.5 shadow-lg shadow-slate-300/50 active:shadow-md"
          >
            ยืนยันการโอนเงิน
          </button>
        </div>
      </div>

      <p className="mt-8 text-slate-400 text-xs">
        🔒 SSL Secured | 256-bit Encryption
      </p>
    </div>
  );
};

export default VictimBank;
