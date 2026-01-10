const Navbar = ({ onRefresh }) => {
    return (
        <nav className="navbar">
            <div className="logo-container">
                <span className="box-icon">📦</span>
                <span className="logo-text">SBM</span>
            </div>
            <button className="refresh-btn" onClick={onRefresh}>Refresh</button>
        </nav>
    );
};
export default Navbar;
