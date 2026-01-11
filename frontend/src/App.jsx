import { useState, useEffect } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import ProductForm from './components/ProductForm';
import InfoCard from './components/InfoCard';
import ProductList from './components/ProductList';

console.log("Current API URL:", import.meta.env.VITE_API_BASE_URL);

const API_BASE_URL = import.meta.env.VITE_API_BASE_URL || "http://localhost:8000";


// Placeholder data for visual verification if API is down
const MOCK_DATA = [
  { id: '101', name: 'Wireless Headset', description: 'Noise cancelling', price: 199.99, quantity: 15 },
  { id: '102', name: 'Ergo Mouse', description: 'Vertical mouse', price: 49.99, quantity: 30 },
];

function App() {
  const [products, setProducts] = useState([]);
  const [error, setError] = useState(null);
  const [editingProduct, setEditingProduct] = useState(null);
  const [searchQuery, setSearchQuery] = useState('');

  const fetchProducts = async () => {
    try {
      // Attempt fetch
      const res = await fetch(`${API_BASE_URL}/products`);
      if (!res.ok) throw new Error('Failed to fetch');
      const data = await res.json();
      setProducts(data);
      setError(null);
    } catch (err) {
      console.warn("API not available, using mock data for demo", err);
      // Fallback to mock data only if we haven't loaded anything yet or explicit refresh
      // For this demo, let's just create a better experience by showing mock data if API fails
      if (products.length === 0) setProducts(MOCK_DATA);
      setError("Could not connect to backend. Showing demo data.");
    }
  };

  const handleAddProduct = async (product) => {
    try {
      const isEditing = !!editingProduct;
      const url = isEditing
        ? `${API_BASE_URL}/products/${product.id}`
        : `${API_BASE_URL}/products`;
      const method = isEditing ? 'PUT' : 'POST';

      const res = await fetch(url, {
        method: method,
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(product)
      });

      if (res.ok) {
        fetchProducts();
      } else {
        // If API fails, just add/update to local state for demo
        if (isEditing) {
          setProducts(prev => prev.map(p => p.id === product.id ? product : p));
        } else {
          setProducts(prev => [...prev, product]);
        }
      }
    } catch (err) {
      console.error("Failed to add/update product", err);
      // Fallback for demo
      if (editingProduct) {
        setProducts(prev => prev.map(p => p.id === product.id ? product : p));
      } else {
        setProducts(prev => [...prev, product]);
      }
    }
    setEditingProduct(null); // Reset editing state
  };

  const handleDeleteProduct = async (id) => {
    try {
      const res = await fetch(`${API_BASE_URL}/products/${id}`, {
        method: 'DELETE',
      });
      if (res.ok) {
        fetchProducts();
      } else {
        setProducts(prev => prev.filter(p => p.id !== id));
      }
    } catch (err) {
      console.error("Failed to delete product", err);
      setProducts(prev => prev.filter(p => p.id !== id));
    }
  };

  const handleEditClick = (product) => {
    setEditingProduct(product);
  };

  const handleCancelEdit = () => {
    setEditingProduct(null);
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  const filteredProducts = products.filter(product =>
    product.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
    product.id.toString().includes(searchQuery)
  );

  return (
    <div className="app-container">
      <Navbar onRefresh={fetchProducts} />
      {error && <div className="error-banner">{error}</div>}
      <div className="main-content">
        <div className="top-section">
          <ProductForm
            onAddProduct={handleAddProduct}
            editingProduct={editingProduct}
            onCancelEdit={handleCancelEdit}
          />
          <InfoCard
            searchQuery={searchQuery}
            onSearch={setSearchQuery}
          />
        </div>
        <ProductList
          products={filteredProducts}
          onDelete={handleDeleteProduct}
          onEdit={handleEditClick}
        />
      </div>
    </div>
  )
}

export default App;
