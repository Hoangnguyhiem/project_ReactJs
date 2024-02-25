import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const ProductPage = ({products, onRemove}) => {
  console.log(products);
  return (
    <>
         <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
          <h1 className="h2">Quản lí sản phẩm</h1>
          <div className="btn-toolbar mb-2 mb-md-0">
            <div className="btn-group me-2">
              <Link to="/admin/product/add" className="align-items-center d-flex justify-content-center btn btn-sm btn-outline-success">Thêm sản phẩm</Link>
              <Link to="/admin/category/add" className="align-items-center d-flex justify-content-center btn btn-sm btn-outline-success">Thêm danh mục</Link>
            </div>
          </div>
        </div>
        <div className="table-responsive small">
          <table className="table table-striped table-sm">
            <thead>
              <tr>
                <th scope="col">#</th>
                <th scope="col">Ảnh</th>
                <th scope="col">Tên sản phẩm</th>
                <th scope="col">Giá cũ</th>
                <th scope="col">Giá mới</th>
                <th scope="col">Brand</th>
                <th scope="col">Made_in</th>
                <th scope="col">Header</th>
              </tr>
            </thead>
            <tbody>
              {products.map((product, index) => (
              
                  <tr key={index}>
                <td>{index + 1}</td>
                <td><img width={60} height={60} src={product.image} alt={product.name}/></td>
                <td><h4>{product.name}</h4></td>
                <td><h4>{product.old_price}</h4></td>
                <td><h4>{product.price}</h4></td>
                <td><h4>{product.brand}</h4></td>
                <td><span>{product.made_in}</span></td>
                <td>
                  <div className="d-flex">
                     <button className="btn btn-danger" onClick={() => onRemove(product.id)}>Xóa</button>
                     <Link to={`/admin/product/${product.id}/edit`} className="align-items-center d-flex justify-content-center btn btn-primary">Cập nhật</Link>
                  </div>
                </td>
              </tr>
                
            ))}
           
            </tbody>
          </table>
        </div>
    </>
  );
}

export default ProductPage;
