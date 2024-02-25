import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";


const Signup = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const [out, setOut] = useState(false);

  const onClickOut = () => {
    setOut(true);
  };

  const onSubmit = async (user) => {
    console.log(user);
    try {
      const { data } = await axios.post(`http://localhost:3000/register`, user)
      console.log(data)
      window.location.reload()
    } catch (error) {
      console.log(error)
    }
  }
  return (
    //login
    <div className="modal">
      <div className="modal__overlay">
      </div>
      <div className="modal__body">
        <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
          <div className="auth-form__container">
            <div className="auth-form__header">
              <h3 className="auth-form__heading">Đăng ký</h3>
              <span className="auth-form__switch-btn">Đăng nhập</span>
            </div>
            <div className="auth-form__form">

              <div className="auth-form__group">
                <input type="email" className="auth-form__input" placeholder="Nhap email cua ban"  {...register("email", { required: true })} />
                {errors.email && errors.email.type === "required" && (<div className="form-text text-danger">Email không được để trống</div>)}
              </div>

              <div className="auth-form__group">
                <input type="password" className="auth-form__input" placeholder="Nhap password cua ban"  {...register("password", { required: true })} />
                {errors.pass && errors.pass.type === "required" && (<div className="form-text text-danger">Tạo mật khẩu</div>)}
              </div>
              <input type="hidden" {...register('image')} id="productPrice" className="form-control" />
              <input type="hidden" {...register('phone')} id="productPrice" className="form-control" />

              {/* <div className="auth-form__group">
                <input type="password" className="auth-form__input" placeholder="Nhap lai mat khau"  {...register("enter_pass", { required: true })} />
                {errors.enter_pass && errors.enter_pass.type === "required" && (<div className="form-text text-danger">Nhập lại mật khẩu</div>)}
              </div> */}

            </div>
            <div className="auth-form__aside">
              <p className="auth-form__policy-text">
                Bằng việc đăng ký, bạn đẫ đồng ý với Shoppee
                <a href className="auth-form__text-link">Điều khoản dịch vụ</a> &amp;
                <a href className="auth-form__text-link">Chính sách bảo mật</a>
              </p>
            </div>
            <div className="auth-form__controls">
              <div className="btn" onClick={onClickOut}>TRỞ LẠI</div>
              <button className="btn btn--primary" type="submit">ĐĂNG KÝ</button>
            </div>
          </div>
          <div className="auth-form__sosials">
            <a href className="btn btn--size-s btn--with-icon auth-form__sosial-fb">
              <i className="fa-brands fa-square-facebook" />
              Kết nối với facebook
            </a>
            <a href className="btn btn--size-s btn--with-icon auth-form__sosial-gg">
              <i className="fa-brands fa-google" />
              Kết nối với facebook
            </a>
          </div>
        </form>
      </div>
      {out && window.location.reload()}
    </div>

  );
}

export default Signup;
