# Tugas Pertemuan 4 – Props & State (React Native + Expo)

**Nama Mahasiswa**: Putu Raditya Dharma Putra  
**NIM**: 240040015  
**Mata Kuliah**: Aplikasi Berbasis Platform  
**Program Studi**: S1 Teknologi Informasi – ITB STIKOM Bali  

---

## 📱 Cat Cafe Mobile Order (Aplikasi Pemesanan Kafe Kucing)

Aplikasi seluler pemesanan katalog Kafe Kucing berbasis React Native yang mengimplementasikan arsitektur modular, pemisahan tugas pengiriman data (**Props**), pengelolaan data dinamis (**State**), serta mekanisme **Lifting State Up**.

---

## 📑 Gambaran Proyek

Proyek ini dibuat untuk memenuhi Tugas Pertemuan 4 mata kuliah Aplikasi Berbasis Platform / Pemrograman Perangkat Bergerak dengan spesifikasi arsitektur terpisah:

- **`App` (Parent Component)**: Mengelola state global `totalPesanan`, mendefinisikan array data statis `DAFTAR_MENU`, dan mendistribusikan callback serta data ke child component.
- **`OrderSummary` (Child Component 1)**: Menerima props `totalCount` dari parent untuk merender total akumulasi pesanan serta menampilkan label promo 10% secara kondisional saat `totalCount >= 5`.
- **`MenuItem` (Child Component 2)**: Menerima props `nama`, `harga`, dan callback `onTambahPesanan`. Memiliki state lokal mandiri `qty` untuk menghitung kuantitas tiap menu dan memicu pertambahan total di parent saat tombol ditekan.

---

## 🛠️ Tech Stack & Konsep Inti

- **Framework**: React Native (Expo SDK 58)
- **State Management**: React Hooks (`useState`)
- **Container List**: `ScrollView`
- **Konsep React Native**:
  - *Props Immutability & Object Destructuring*
  - *Component Encapsulation & Modularity*
  - *Lifting State Up Pattern*
  - *Conditional Rendering*

---

## 🚀 Cara Menjalankan Proyek

1. **Clone repositori**
   ```bash
   git clone https://github.com/radtyadharma/cat-cafe-mobile-order.git
   cd cat-cafe-mobile-order
   ```

2. **Pasang dependensi**
   ```bash
   npm install
   ```

3. **Jalankan aplikasi dengan Expo**
   ```bash
   npx expo start
   ```

4. **Testing pada Perangkat / Emulator**
   - Tekan `a` untuk membuka di Android Emulator / Android Device.
   - Pindai QR Code menggunakan aplikasi **Expo Go** pada ponsel fisik.
