const ProductList = ({ products, onEdit, onDelete }) => {
    return (
        <div className="card product-list-card">
            <h3>Products</h3>
            <div className="table-container">
                <table>
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NAME</th>
                            <th>DESCRIPTION</th>
                            <th>PRICE</th>
                            <th>QUANTITY</th>
                            <th>ACTIONS</th>
                        </tr>
                    </thead>
                    <tbody>
                        {(!products || products.length === 0) ? (
                            <tr>
                                <td colSpan="6" className="no-products">
                                    <div className="empty-state">No products found.</div>
                                </td>
                            </tr>
                        ) : (
                            products.map(p => (
                                <tr key={p.id}>
                                    <td>{p.id}</td>
                                    <td>{p.name}</td>
                                    <td>{p.description}</td>
                                    <td>${p.price}</td>
                                    <td>{p.quantity}</td>
                                    <td>
                                        <button
                                            className="action-btn edit-btn"
                                            title="Edit"
                                            onClick={() => onEdit(p)}
                                        >
                                            Edit
                                        </button>
                                        <button
                                            className="action-btn delete-btn"
                                            title="Delete"
                                            onClick={() => onDelete(p.id)}
                                        >
                                            Delete
                                        </button>
                                    </td>
                                </tr>
                            ))
                        )}
                    </tbody>
                </table>
            </div>
        </div>
    );
};
export default ProductList;
