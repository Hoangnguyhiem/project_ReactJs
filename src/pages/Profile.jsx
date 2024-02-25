import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { getUserById } from '../api/product'
import { useForm } from 'react-hook-form'

// eslint-disable-next-line react/prop-types
const Profile = ({onAdd}) => {
    const [profile, setProfile] = useState([])
    console.log(profile)
    const { register, handleSubmit, reset } = useForm();
    const { id } = useParams();
    useEffect(() => {
        (async () => {
            const data = await getUserById(id)
            setProfile(data)
            reset(data)
        })();
    }, [id])

    const onSubmit = async (data) => {
        onAdd(data)
    }

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ maxWidth: 1200, margin: '20px auto' }}>

            <div className="d-flex justify-content-between flex-wrap flex-md-nowrap align-items-center pt-3 pb-2 mb-3 border-bottom">
                <h1 className="h2">Profile</h1>
            </div>
            <div className="mb-3 mt-5">
                <label htmlFor="productName" className="form-label">
                    Email
                </label>
                <input type="text" {...register('email')} id="productName" className="form-control" readOnly />
            </div>
            <div className="mb-3 mt-5">
                <label htmlFor="productName" className="form-label">
                Password
                </label>
                <input type="password" {...register('password')} id="productName" className="form-control"  />
            </div>
            <div className="mb-3">
                <label htmlFor="productImg" className="form-label">
                    Ảnh
                </label>
                <input type="text" {...register('image')} id="productImg" className="form-control" />
                <img src={profile.image} />
            </div>
            <div className="mb-3">
                <label htmlFor="productPrice" className="form-label">
                    Số điện thoại
                </label>
                <input type="number" {...register('phone')} id="productPrice" className="form-control" />
            </div>

            <button type="submit" className="btn btn-danger">
                Cập nhật
            </button>
        </form>
    )
}

export default Profile