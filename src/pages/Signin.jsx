import axios from "axios";
import { useState } from "react";
import { useForm } from "react-hook-form";


const Signin = () => {
    const [out, setOut] = useState(false);
    const {register , handleSubmit , formState: { errors } } = useForm();
    const onClickOut = () => {
      setOut(true);
    };
    const onSubmit = async (user) => {
      console.log(user);
      try {
        const { data } =  await axios.post(`http://localhost:3000/login`,user)
        localStorage.setItem("user", JSON.stringify(data));
        console.log(data)
        window.location.reload()
      } catch (error) {
        console.log(error)
      }
    }

  return (
   <div className="modal">
    <div className="modal__overlay">
  </div>
  <div className="modal__body">
    <form className="auth-form" onSubmit={handleSubmit(onSubmit)}>
      <div className="auth-form__container">
        <div className="auth-form__header">
          <h3 className="auth-form__heading">Đăng nhập</h3>
          <span className="auth-form__switch-btn">Đăng ký</span>
        </div>
        <div className="auth-form__form">
          <div className="auth-form__group">
            <input type="email" className="auth-form__input" placeholder="Nhap gmail cua ban"  {...register("email", { required: true })}/>
            {errors.email && errors.email.type === "required" && (<div className="form-text text-danger">Email không được để trống</div>)}
          </div>
          <div className="auth-form__group">
            <input type="password" className="auth-form__input" placeholder="Nhap password cua ban"  {...register("password", { required: true })}/>
            {errors.password && errors.password.type === "required" && (<div className="form-text text-danger">Email không được để trống</div>)}
          </div>
        </div>
        <div className="auth-form__aside">
          <div className="auth-form__help">
            <a href className="auth-form__help-link auth-form__help-link-qmk">Quên mật khẩu</a>
            <span className="auth-form__help-separete" />
            <a href className="auth-form__help-link auth-form__help-link-ctg">Cần trợ giúp?</a>
          </div>
        </div>
        <div className="auth-form__controls">
          <div className="btn" onClick={onClickOut}>TRỞ LẠI</div>
          <button className="btn btn--primary">ĐĂNG NHẬP</button>
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

export default Signin;
