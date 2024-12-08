const Selection = () => {
  return (
    <div>
      <nav className="navbar">
        <button className="nav-button active">Sleep</button>
        <button className="nav-button">Stress</button>
        <button className="nav-button">Anxiety</button>
        <button className="nav-button">Sleep</button>
        <button className="nav-button">Sleep</button>
      </nav>
    </div>
  );
}

// Add CSS styles for the navbar
const styles = `
.navbar {
  display: flex;
  background-color: #f0f0f0;
  padding: 10px;
}

.nav-button {
  background: none;
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  font-size: 16px;
}

.nav-button:hover {
  background-color: #e0e0e0;
}

.nav-button.active {
  background-color: #333;
  color: white;
}
`;

export default Selection;