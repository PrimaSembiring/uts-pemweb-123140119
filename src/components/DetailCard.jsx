import React, { useEffect, useState } from "react";

export default function DetailCard({
  mode,
  selectedBreed,
  favorites,
  setFavorites,
  imageCount, // jumlah gambar dari App.jsx
}) {
  const [images, setImages] = useState([]);

  useEffect(() => {
    if (mode === "dog") {
      const url = selectedBreed
        ? `https://dog.ceo/api/breed/${selectedBreed}/images/random/${imageCount}`
        : `https://dog.ceo/api/breeds/image/random/${imageCount}`;

      fetch(url)
        .then((res) => res.json())
        .then((data) => setImages(data.message))
        .catch((err) => console.error("Gagal ambil gambar:", err));
    }
  }, [mode, selectedBreed, imageCount]); // refetch kalau jumlah gambar berubah

  const toggleFavorite = (img) => {
    const updated = favorites.includes(img)
      ? favorites.filter((f) => f !== img)
      : [...favorites, img];
    setFavorites(updated);
  };

  if (mode !== "dog") return null;

  return (
    <div>
      {selectedBreed && (
        <h2 style={{ color: "#444" }}>
          Ras: <span style={{ color: "#ff9900" }}>{selectedBreed}</span>
        </h2>
      )}
      <div className="gallery">
        {images.map((img, i) => (
          <div key={i} className="card">
            <div className="img-wrapper">
              <img src={img} alt="Dog" />
              <button
                className={`fav-btn ${
                  favorites.includes(img) ? "active" : ""
                }`}
                onClick={() => toggleFavorite(img)}
                title={
                  favorites.includes(img)
                    ? "Hapus dari Favorit"
                    : "Tambah ke Favorit"
                }
              ></button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
