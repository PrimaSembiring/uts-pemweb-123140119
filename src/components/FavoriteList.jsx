import React from "react";

export default function FavoriteList({ favorites, setFavorites }) {
  const removeFavorite = (img) => {
    const updated = favorites.filter((f) => f !== img);
    setFavorites(updated);
  };

  const clearFavorites = () => {
    if (window.confirm("Hapus semua?")) {
      setFavorites([]);
    }
  };

  if (favorites.length === 0) {
    return (
      <div className="favorites-section">
        <h3>Favorit Saya</h3>
        <p>Belum ada gambar favorit</p>
      </div>
    );
  }

  return (
    <div className="favorites-section">
      <div className="favorites-header">
        <h3>Favorit Saya ({favorites.length})</h3>
        <button onClick={clearFavorites} className="clear-btn">
          🗑️ Hapus Semua
        </button>
      </div>

      <div className="gallery">
        {favorites.map((img, i) => (
          <div key={i} className="card fav-card">
            <div className="img-wrapper">
              <img src={img} alt="Favorite Dog" />
              <button
                className="remove-btn"
                onClick={() => removeFavorite(img)}
                title="Hapus dari Favorit"
              >
                ✖
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
