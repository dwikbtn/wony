// services/paymentService.js
import midtransClient from 'midtrans-client'

const snap = new midtransClient.Snap({
  isProduction: false, // Setel ke true jika Anda ingin menggunakan mode produksi
  serverKey: 'SB-Mid-server-y7Jbk2UWIfvtDPYkNKCG0xlF', // Ganti dengan server key Anda
  clientKey: 'SB-Mid-client-Fk9hLaOKsWxkcfTu' // Ganti dengan client key Anda
})

export const createTransaction = async (orderId, amount, items, paymentInfo) => {
  try {
    const fetchDirectUrl = fetch('http://localhost:3000/checkout', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({
        orderId,
        amount,
        items,
        paymentInfo
      })
    })
    const response = await fetchDirectUrl()
    return response.redirect_url
  } catch (error) {
    console.error('Failed to create transaction:', error)
    throw error
  }
}
