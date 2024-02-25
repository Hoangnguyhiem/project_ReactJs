/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { getCategories } from "../../api/product";

const ProductAddPage = ({ onAdd }) => {

  const [categorys, setProducts] = useState([]);
  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setProducts(data);
    })()
  }, []);

  const { register, handleSubmit } = useForm();

  const navigate = useNavigate();

  const onSubmit = (data) => {
    onAdd(data)
    navigate("/admin/products");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Thêm sản phẩm</h1>
      </div>
      <div className="mb-3 mt-5">
        <label htmlFor="productName" className="form-label">
          Tên sản phẩm
        </label>
        <input type="text" {...register('name')} id="productName" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="productImg" className="form-label">
          Ảnh sản phẩm
        </label>
        <input type="text" {...register('image')} id="productImg" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">
          Giá cũ
        </label>
        <input type="number" {...register('old_price')} id="productPrice" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">
          Giá mới
        </label>
        <input type="number" {...register('price')} id="productPrice" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">
          Brand
        </label>
        <input type="tel" {...register('brand')} id="productPrice" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">
          Made_in
        </label>
        <input type="text" {...register('made_in')} id="productPrice" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="category" className="form-label">
          Danh mục
        </label>
        <select id="category" {...register('categoryId')} className="form-select">
          {categorys.map((category, index) => (
            <option value={parseInt(category.id)} key={index}>{category.name}</option>
          ))}

        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Thêm
      </button>
    </form>
  );
};

export default ProductAddPage;
