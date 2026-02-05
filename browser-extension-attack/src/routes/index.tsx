import InfoRow from '@/components/info-row'
import { createFileRoute } from '@tanstack/react-router'
import { useEffect, useRef, useState } from 'react'
export const Route = createFileRoute('/')({
  component: App,
})

export default function App() {
  const accountRef = useRef<HTMLSpanElement>(null)
  const [hacked, setHacked] = useState(false)

  useEffect(() => {
    if (!accountRef.current) return

    // /**
    //  * 🛡️ SECTION: PROTECTION SYSTEM (MutationObserver)
    //  * วิธีทดสอบ:
    //  * 1. ลอง Comment ส่วนนี้ออก -> แล้วรันสคริปต์แก้ DOM -> เลขจะเปลี่ยนแต่ไม่มี Alert
    //  * 2. เปิด Comment ส่วนนี้ -> แล้วรันสคริปต์แก้ DOM -> ระบบจะตรวจจับและบล็อกทันที
    //  */
    // const observer = new MutationObserver(() => {
    //   setHacked(true) // เปลี่ยน State ทันทีที่พบการแก้ไข DOM
    // })

    // observer.observe(accountRef.current, {
    //   childList: true,
    //   characterData: true,
    //   subtree: true,
    // })

    // return () => observer.disconnect()
    // // --------------------------------------------------------
  }, [])

  const currentDate = new Date().toLocaleDateString('th-TH', {
    year: 'numeric',
    month: 'long',
    day: 'numeric',
  })
  const currentTime = new Date().toLocaleTimeString('th-TH', {
    hour: '2-digit',
    minute: '2-digit',
  })

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-50 to-slate-100 flex items-center justify-center p-6">
      <div className="w-full max-w-2xl">
        {/* Header */}
        <div className="bg-white rounded-t-2xl px-8 py-6 border-b border-slate-200">
          <div className="flex items-center justify-between">
            <div>
              <h1 className="text-2xl font-semibold text-slate-800">
                ยืนยันการโอนเงิน
              </h1>
              <p className="text-sm text-slate-500 mt-1">
                กรุณาตรวจสอบข้อมูลก่อนทำรายการ
              </p>
            </div>
            <div className="w-12 h-12 bg-blue-600 rounded-xl flex items-center justify-center">
              <svg
                className="w-7 h-7 text-white"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z"
                />
              </svg>
            </div>
          </div>
        </div>

        {/* Content */}
        <div
          className={`bg-white rounded-b-2xl shadow-xl transition-all duration-300 ${
            hacked ? 'ring-4 ring-red-500 ring-opacity-50' : ''
          }`}
        >
          {/* Alert Banner */}
          {hacked && (
            <div className="bg-red-50 border-l-4 border-red-600 px-8 py-4">
              <div className="flex items-start">
                <svg
                  className="w-6 h-6 text-red-600 mr-3 shrink-0"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
                  />
                </svg>
                <div>
                  <h3 className="text-sm font-semibold text-red-800">
                    ⚠️ ตรวจพบการแทรกแซงข้อมูล
                  </h3>
                  <p className="text-sm text-red-700 mt-1">
                    ระบบตรวจพบการเปลี่ยนแปลงข้อมูลโดยไม่ได้รับอนุญาต
                    กรุณาตรวจสอบความปลอดภัยของอุปกรณ์
                  </p>
                </div>
              </div>
            </div>
          )}

          {/* Transaction Details */}
          <div className="px-8 py-6 space-y-6">
            {/* Amount */}
            <div className="text-center py-6 bg-slate-50 rounded-xl">
              <p className="text-sm text-slate-600 mb-2">จำนวนเงินที่โอน</p>
              <p className="text-4xl font-bold text-slate-900">฿ 15,000.00</p>
            </div>

            {/* Recipient Details */}
            <div className="space-y-4">
              <InfoRow label="ธนาคารผู้รับ" value="ธนาคารกสิกรไทย" />
              <InfoRow
                label="เลขที่บัญชีผู้รับ"
                value={
                  <span ref={accountRef} className="font-mono">
                    123-4-56789-0
                  </span>
                }
                highlight
              />
              <InfoRow label="ชื่อบัญชีผู้รับ" value="นายสมชาย ใจดี" />
            </div>

            <div className="border-t border-slate-200 my-6"></div>

            {/* Transaction Info */}
            <div className="space-y-4">
              <InfoRow label="วันที่ทำรายการ" value={currentDate} />
              <InfoRow label="เวลา" value={`${currentTime} น.`} />
              <InfoRow label="หมายเลขอ้างอิง" value="TXN202602050001234" mono />
              <InfoRow label="หมายเหตุ" value="ค่าสินค้า" />
            </div>
          </div>

          {/* Actions */}
          <div className="px-8 py-6 bg-slate-50 rounded-b-2xl flex gap-4">
            <button className="flex-1 px-6 py-3 bg-white border-2 border-slate-300 text-slate-700 font-medium rounded-xl hover:bg-slate-50 transition-colors">
              ยกเลิก
            </button>
            <button
              className={`flex-1 px-6 py-3 font-medium rounded-xl transition-all ${
                hacked
                  ? 'bg-slate-300 text-slate-500 cursor-not-allowed'
                  : 'bg-blue-600 text-white hover:bg-blue-700 shadow-lg shadow-blue-600/30'
              }`}
              disabled={hacked}
            >
              {hacked ? 'ไม่สามารถดำเนินการได้' : 'ยืนยันการโอนเงิน'}
            </button>
          </div>
        </div>

        {/* Footer Notice */}
        <div className="mt-6 text-center">
          <p className="text-xs text-slate-500">
            � การทำรายการของคุณได้รับการเข้ารหัสและปลอดภัย
          </p>
        </div>
      </div>
    </div>
  )
}
