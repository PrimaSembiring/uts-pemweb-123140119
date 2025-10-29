# 🐾 Animal Facts & Images App

**Nama:** Prima Sembiring  
**NIM:** 123140119  
**Mata Kuliah:** Pemrograman Web RB
**Link Varcel:** uts-pemweb-123140119.vercel.app
---

## Deskripsi Singkat
Aplikasi interaktif berbasis **ReactJS** yang menampilkan **fakta hewan (kucing dan anjing)** serta **galeri gambar acak** dari API publik.  
Pengguna dapat memilih mode **Dog 🐶** atau **Cat 🐱**, menampilkan **gambar acak**, menyimpan **gambar favorit**, dan melihat **fakta hewan** yang dapat diperbarui dengan tombol *Refresh Facts*.  

Aplikasi ini dikembangkan dengan memperhatikan prinsip **modular component**, **state management**, dan **responsive design**, sesuai capaian CPMK0501 & CPMK0502 mata kuliah Pemrograman Web.

---

## Teknologi yang Digunakan
| Komponen | Teknologi |
|-----------|------------|
| Framework | ReactJS (Create React App / Vite compatible) |
| Styling | CSS murni (Grid, Flexbox, pseudo-class, media queries) |
| State Management | React Hooks (`useState`, `useEffect`) |
| HTTP Client | Fetch API |
| Data Source | Dog CEO API, CatFact API |
| Deployment | Vercel |
| Repository | GitHub Public |

---

## 🧩 Fitur Utama
| No | Fitur | Deskripsi |
|----|--------|-----------|
| 1 |  Navigation Switch | Tombol untuk berpindah antara **Dog Mode 🐶** dan **Cat Mode 🐱** |
| 2 |  Form Breed | Dropdown daftar breed anjing dari API, dengan input jumlah gambar dan validasi |
| 3 |  Gallery Grid | Tampilan grid responsif untuk gambar hewan acak dengan efek bayangan dan hover |
| 4 |  Animal Facts Table | Tabel fakta kucing dinamis dengan tombol *Refresh Facts* |
| 5 |  Favorite List | Menyimpan gambar ke **localStorage**, bisa hapus satu atau semua, tampil di tengah layar |
| 6 |  Back to Main | Tombol kembali ke tampilan utama dari mode Dog/Cat |
| 7 |  Deployment Ready | Siap di-deploy ke **Vercel** untuk penilaian online |

---

## Cara Instalasi & Menjalankan Aplikasi
```bash
# 1. Clone repository
git clone https://github.com/<username>/<repo-name>.git

# 2. Masuk ke folder project
cd dog-cat-facts-app

# 3. Install dependencies
npm install

# 4. Jalankan aplikasi (Vite / CRA)
npm run dev
# atau
npm start
