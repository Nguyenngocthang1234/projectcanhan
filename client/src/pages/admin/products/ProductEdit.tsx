


const ProductEdit = () => {









  return (
    <div className="wrap-form">
    <div className="form">
    <form className="add-product-form">
      <h2>Thêm Sản Phẩm Mới</h2>
      <label htmlFor="product-name">Tên Sản Phẩm:</label>
      <input type="text" id="product-name" name="product-name" placeholder="Nhập tên sản phẩm" required />
      <label htmlFor="product-description">Mô Tả:</label>
      <textarea id="product-description" name="product-description" placeholder="Nhập mô tả sản phẩm" required defaultValue={""} />
      <label htmlFor="product-price">Giá:</label>
      <input type="number" id="product-price" name="product-price" placeholder="Nhập giá sản phẩm" required />
      <label htmlFor="product-image">Hình Ảnh:</label>
      <input type="file" id="product-image" name="product-image" accept="image/*" />
      <button type="submit" className="btn-form">Thêm Sản Phẩm</button>
    </form>
  </div>
  </div>
  );
};

export default ProductEdit;