export default function Loading() {
  return (
    <div className="loading-shell">
      <div className="loading-card">
        <div className="loading-leaf" aria-hidden="true">
          🌱
        </div>
        <h2 className="loading-title">Bikram Daya Foundation</h2>
        <p className="loading-subtitle">Preparing a better tomorrow...</p>
        <div className="loading-progress" aria-hidden="true">
          <span className="loading-progress-fill" />
        </div>
      </div>
    </div>
  );
}
