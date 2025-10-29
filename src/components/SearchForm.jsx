import React, { useEffect, useState } from "react";

export default function SearchForm({ onSubmitForm }) {
  const [breeds, setBreeds] = useState([]);
  const [formData, setFormData] = useState({
    breed: "",
    count: 0,
    agree: false,
  });

  // Ambil daftar ras dari API Dog CEO
  useEffect(() => {
    fetch("https://dog.ceo/api/breeds/list/all")
      .then((res) => res.json())
      .then((data) => setBreeds(Object.keys(data.message)))
      .catch((err) => console.error("Gagal ambil daftar breed:", err));
  }, []);

  // 🔹 Handle perubahan input
  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value,
    });
  };

  // 🔹 Handle submit
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.agree) {
      alert("Centang ini dulu");
      return;
    }

    if (!formData.breed || formData.count < 1) {
      alert("Isi terlebih dulu ras dan jumlah gambar");
      return;
    }

    // Kirim data ke App.jsx
    onSubmitForm(formData.breed, Number(formData.count));

    alert(` Data dikirim:
Ras: ${formData.breed}
Jumlah Gambar: ${formData.count}`);
  };

  return (
    <div className="breed-form">
      <h2> Pilih Ras dan Jumlah Gambar</h2>
      <form onSubmit={handleSubmit}>
        {/* Pilih Ras */}
        <label htmlFor="breed">Pilih Ras Anjing:</label>
        <select
          id="breed"
          name="breed"
          value={formData.breed}
          onChange={handleChange}
          required
        >
          <option value="">-- Pilih Ras --</option>
          {breeds.map((breed) => (
            <option key={breed} value={breed}>
              {breed}
            </option>
          ))}
        </select>

        <br />

        {/* Jumlah Gambar */}
        <label htmlFor="count">Jumlah Gambar:</label>
        <input
          id="count"
          type="number"
          name="count"
          min="1"
          max="30"
          value={formData.count}
          onChange={handleChange}
          required
        />

        <br />

        {/* Checkbox Persetujuan */}
        <label>
          <input
            type="checkbox"
            name="agree"
            checked={formData.agree}
            onChange={handleChange}
            required
          />{" "}
          Saya setuju dengan data yang saya masukkan
        </label>

        <br />

        <button type="submit" className="load-more">
          Kirim Data
        </button>
      </form>
    </div>
  );
}
