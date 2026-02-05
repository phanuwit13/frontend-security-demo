import { useCallback, useEffect, useState } from 'react'
import axios from 'axios'

// ตั้งค่า axios ให้ส่ง Cookie ไปด้วยทุกครั้ง
axios.defaults.withCredentials = true
// fix it
// axios.defaults.headers.common['X-Requested-With'] = 'XMLHttpRequest';

function App() {
  const [balance, setBalance] = useState(0)
  const [isLoggedIn, setIsLoggedIn] = useState(false)

  const transfer = async () => {
    try {
      const res = await axios.post('http://localhost:8080/transfer', {
        amount: 500,
        to: 'Friend',
      })
      setBalance(res.data.newBalance)
    } catch {
      alert('Transfer failed')
    }
  }

  const getBalance = useCallback(() => {
    axios
      .get('http://localhost:8080/balance')
      .then((res) => {
        setBalance(res.data.balance)
        setIsLoggedIn(true)
      })
      .catch(() => {
        setIsLoggedIn(false)
      })
  }, [])

  const login = useCallback(async () => {
    const res = await axios.post('http://localhost:8080/login')
    setBalance(res.data.balance)
    setIsLoggedIn(true)
    alert('Logged in successfully!')
    getBalance()
  }, [getBalance])

  useEffect(() => {
    getBalance()
  }, [getBalance])

  return (
    <div className='min-h-screen bg-gray-50 flex items-center justify-center p-6'>
      <div className='max-w-md w-full'>
        {/* Header */}
        <div className='text-center mb-8'>
          <h1 className='text-2xl font-semibold text-gray-900'>My Safe Bank</h1>
          <p className='text-sm text-gray-500 mt-1'>CSRF Protected Banking</p>
        </div>

        {/* Card */}
        <div className='bg-white border border-gray-200 rounded-lg p-8 space-y-6'>
          {/* Balance Section */}
          <div className='pb-6 border-b border-gray-100'>
            <p className='text-xs font-medium text-gray-500 uppercase tracking-wide mb-3'>
              Available Balance
            </p>
            <div className='flex items-baseline gap-2'>
              <span className='text-4xl font-semibold text-gray-900'>
                {balance.toLocaleString('th-TH')}
              </span>
              <span className='text-xl text-gray-600'>THB</span>
            </div>
            {isLoggedIn && (
              <div className='flex items-center gap-2 mt-3'>
                <div className='w-2 h-2 bg-green-500 rounded-full'></div>
                <span className='text-sm text-green-600'>Session Active</span>
              </div>
            )}
          </div>

          {/* Actions */}
          <div className='space-y-3'>
            {!isLoggedIn && (
              <button
                onClick={login}
                className='w-full px-4 py-3 bg-gray-900 text-white text-sm font-medium rounded-md hover:bg-gray-800 transition-colors'
              >
                Step 1: Login
              </button>
            )}

            {isLoggedIn && (
              <button
                onClick={transfer}
                className='w-full px-4 py-3 bg-white border border-gray-300 text-gray-900 text-sm font-medium rounded-md hover:bg-gray-50 transition-colors'
              >
                Step 2: Transfer 500 THB
              </button>
            )}
          </div>
        </div>

        {/* Footer */}
        <p className='text-center text-xs text-gray-400 mt-6'>
          Protected by CSRF Token
        </p>
      </div>
    </div>
  )
}

export default App
