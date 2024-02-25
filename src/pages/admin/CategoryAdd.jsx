
import { useForm } from 'react-hook-form'
import { useNavigate } from 'react-router-dom';

// eslint-disable-next-line react/prop-types
const CategoryAdd = ({onAdd}) => {
    const {register , handleSubmit } = useForm();
    const navigate = useNavigate();
    const onSubmit = (data) => {
        onAdd(data)
        navigate(`/admin/products`)
    }
  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
        <h1 className="h2">Thêm danh mục</h1>
      </div>
      <div className="mb-3 mt-5">
        <label htmlFor="productName" className="form-label">
          Tên danh mục
        </label>
        <input type="text" {...register('name')} id="productName" className="form-control" />
      </div>
      <button type="submit" className="btn btn-primary">
        Thêm
      </button>
    </form>
  )
}

export default CategoryAdd