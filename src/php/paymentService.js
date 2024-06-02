// services/paymentService.js
import midtransClient from 'midtrans-client'

const snap = new midtransClient.Snap({
  isProduction: false, // Setel ke true jika Anda ingin menggunakan mode produksi
  serverKey: 'SB-Mid-server-y7Jbk2UWIfvtDPYkNKCG0xlF', // Ganti dengan server key Anda
  clientKey: 'SB-Mid-client-Fk9hLaOKsWxkcfTu' // Ganti dengan client key Anda
})

export const createTransaction = async (orderId, amount, items, paymentInfo) => {
  try {
    const transactionDetails = {
      transaction_details: {
        order_id: orderId,
        gross_amount: amount
      },
      item_details: items.map((item) => ({
        id: item.productId,
        price: item.price,
        quantity: item.quantity,
        name: item.name
      })),
      customer_details: {
        email: paymentInfo.email,
        first_name: paymentInfo.name,
        ticket: paymentInfo.ticket
      }
    }

    const transaction = await snap.createTransaction(transactionDetails)
    return transaction.redirect_url
  } catch (error) {
    console.error('Failed to create transaction:', error)
    throw error
  }
}
