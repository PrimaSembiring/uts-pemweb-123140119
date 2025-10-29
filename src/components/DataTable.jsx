import React, { useState, useEffect } from "react";

export default function DataTable() {
  const [facts, setFacts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFacts = async () => {
      try {
        const res = await fetch("https://catfact.ninja/facts?limit=20");
        if (!res.ok) throw new Error("Gagal ambil data dari API");
        const data = await res.json();
        setFacts(data.data || []);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };
    getFacts();
  }, []);

  if (loading) return <p style={{ fontWeight: "bold" }}> Memuat data kucing...</p>;
  if (error) return <p> Error: {error}</p>;

  return (
    <div className="facts-container">
      <h2>Fakta Tentang Kucing</h2>
      <button className="refresh-btn" onClick={() => window.location.reload()}>
        Muat Ulang
      </button>

      {facts.length === 0 ? (
        <p>Data kosong, coba klik "Muat Ulang".</p>
      ) : (
        <table className="facts-table">
          <thead>
            <tr>
              <th>No</th>
              <th>Fakta</th>
              <th>Panjang Fakta</th>
            </tr>
          </thead>
          <tbody>
            {facts.map((fact, index) => (
              <tr key={index}>
                <td>{index + 1}</td>
                <td>{fact.fact}</td>
                <td>{fact.length}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}
