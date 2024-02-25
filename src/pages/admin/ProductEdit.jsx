/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";
import { getCategories, getProductById } from "../../api/product";

const ProductEditPage = ({ onEdit }) => {
  const { id } = useParams()
  const { register, handleSubmit, reset } = useForm();
  const navigate = useNavigate();
  const [categories, setCatogorys] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getCategories();
      setCatogorys(data)
    })()
  }, [])

  useEffect(() => {
    (async () => {
      const data  = await getProductById(id)
      console.log(data)
      reset(data)
    })();
  }, [id]);

  const onSubmit = (data) => {
    onEdit(data)
    navigate("/admin/products");
  };
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Cập nhật sản phẩm</h1>
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
        <input type="text" {...register('old_price')} id="productPrice" className="form-control" />
      </div>
      <div className="mb-3">
        <label htmlFor="productPrice" className="form-label">
          Giá mới
        </label>
        <input type="text" {...register('price')} id="productPrice" className="form-control" />
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
          <option value="" disabled selected>Chọn danh mục</option>
          {categories.map((category, index) => (
            <option value={category.id} key={index}>{category.name}</option>
          ))}

        </select>
      </div>

      <button type="submit" className="btn btn-primary">
        Cập nhật
      </button>

    </form>
  );
};

export default ProductEditPage;
