import { useState, useEffect } from 'react';

const ProductForm = ({ onAddProduct, editingProduct, onCancelEdit }) => {
    const [product, setProduct] = useState({ id: '', name: '', description: '', price: '', quantity: '' });

    useEffect(() => {
        if (editingProduct) {
            setProduct(editingProduct);
        } else {
            setProduct({ id: '', name: '', description: '', price: '', quantity: '' });
        }
    }, [editingProduct]);

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!product.id || !product.name || !product.price || !product.quantity) return;
        onAddProduct(product);
        setProduct({ id: '', name: '', description: '', price: '', quantity: '' });
    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setProduct(prev => ({ ...prev, [name]: value }));
    };

    return (
        <div className="card product-form-card">
            <h3>{editingProduct ? 'Edit Product' : 'Add Product'}</h3>
            <form onSubmit={handleSubmit}>
                <div className="form-row">
                    <input className="input-field" name="id" placeholder="ID" value={product.id} onChange={handleChange} required disabled={!!editingProduct} />
                    <input className="input-field" name="name" placeholder="Name" value={product.name} onChange={handleChange} required />
                    <input className="input-field" name="description" placeholder="Description" value={product.description} onChange={handleChange} />
                    <input className="input-field" name="price" placeholder="Price" type="number" value={product.price} onChange={handleChange} required />
                    <input className="input-field" name="quantity" placeholder="Quantity" type="number" value={product.quantity} onChange={handleChange} required />
                </div>

                <button type="submit" className="add-btn">
                    {editingProduct ? 'Update Product' : 'Add Product'}
                </button>
                {editingProduct && (
                    <button
                        type="button"
                        className="cancel-btn"
                        onClick={onCancelEdit}
                    >
                        Cancel
                    </button>
                )}
            </form>
        </div>
    );
};
export default ProductForm;
