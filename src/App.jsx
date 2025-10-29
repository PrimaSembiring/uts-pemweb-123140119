import React, { useState, useEffect, useRef } from "react";
import Header from "./components/Header";
import SearchForm from "./components/SearchForm";
import DetailCard from "./components/DetailCard";
import DataTable from "./components/DataTable";
import FavoriteList from "./components/FavoriteList";
import "./App.css";

function App() {
  const [mode, setMode] = useState("dog");
  const [selectedBreed, setSelectedBreed] = useState("");
  const [imageCount, setImageCount] = useState(0);
  const [showImages, setShowImages] = useState(false);
  const [favorites, setFavorites] = useState(() => {
    const saved = localStorage.getItem("favorites");
    return saved ? JSON.parse(saved) : [];
  });

  const [hideHeader, setHideHeader] = useState(false); // sembunyikan header setelah klik mode
  const contentRef = useRef(null);

  useEffect(() => {
    localStorage.setItem("favorites", JSON.stringify(favorites));
  }, [favorites]);

  // Scroll ke konten setelah klik mode
  useEffect(() => {
    if (contentRef.current && hideHeader) {
      setTimeout(() => {
        contentRef.current.scrollIntoView({ behavior: "smooth" });
      }, 300);
    }
  }, [hideHeader]);

  // Fungsi ganti mode
  const handleModeChange = (newMode) => {
    setMode(newMode);
    setHideHeader(true); // sembunyikan header
  };

  // Tombol kembali ke tampilan utama
  const handleBackToMain = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    setHideHeader(false);
    setShowImages(false);
    setSelectedBreed("");
  };

  // Form Dog mode
  const handleFormSubmit = (breed, count) => {
    setSelectedBreed(breed);
    setImageCount(count);
    setShowImages(true);
  };

  return (
    <div className="App">
      {/* Header tampil hanya kalau belum pilih mode */}
      {!hideHeader && <Header mode={mode} onModeChange={handleModeChange} />}

      <div ref={contentRef}>
        {/* 🐶 Dog Mode */}
        {hideHeader && mode === "dog" && (
          <>
            <div className="back-btn-container">
              <button className="back-btn" onClick={handleBackToMain}>
                Kembali ke Tampilan Utama
              </button>
            </div>

            <SearchForm onSubmitForm={handleFormSubmit} />
            {showImages && (
              <>
                <DetailCard
                  mode={mode}
                  selectedBreed={selectedBreed}
                  favorites={favorites}
                  setFavorites={setFavorites}
                  imageCount={imageCount}
                />
                <FavoriteList
                  favorites={favorites}
                  setFavorites={setFavorites}
                />
              </>
            )}
          </>
        )}

        {/* 🐱 Cat Mode */}
        {hideHeader && mode === "cat" && (
          <>
            <div className="back-btn-container">
              <button className="back-btn" onClick={handleBackToMain}>
                Kembali ke Tampilan Utama
              </button>
            </div>

            <DataTable key="cat-mode-table" />
          </>
        )}
      </div>
    </div>
  );
}

export default App;
