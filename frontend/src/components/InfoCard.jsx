const InfoCard = ({ searchQuery, onSearch }) => {
    return (
        <div className="card info-card">
            <div className="search-bar-placeholder">
                <input
                    placeholder="Search by id, name or description..."
                    value={searchQuery}
                    onChange={(e) => onSearch(e.target.value)}
                />
            </div>
            <div className="info-content">
                <div className="info-badge">Inventory System</div>
                <h2>Track. Manage. Grow.</h2>
                <p className="subtitle">Streamline your inventory with smart product management that scales with your business.</p>
                <div className="powered-by">POWERED BY <span className="brand-highlight">SBM</span></div>
            </div>
        </div>
    );
};
export default InfoCard;
