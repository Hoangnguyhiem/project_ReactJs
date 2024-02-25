const FooterWebsite = () => {
  return (
    <footer className="footer">
      <div className="grid wide">
        <div className="row">
          <div className="gird__column-2-4-footer col c-6 m-3 l-3">
            <h3 className="footer__heading">CHĂM SÓC KHÁCH HÀNG</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href className="footer-item__link">
                  Tung tâm trợ gup
                </a>
              </li>
              <li className="footer-item">
                <a href className="footer-item__link">
                  Shopee Mall
                </a>
              </li>
              <li className="footer-item">
                <a href className="footer-item__link">
                  Hướng dẫn mua hàng
                </a>
              </li>
            </ul>
          </div>
          <div className="gird__column-2-4-footer col c-6 m-3 l-3">
            <h3 className="footer__heading">VỀ TICKID</h3>
            <ul className="footer-list">
              <li className="footer-item">
                <a href className="footer-item__link">
                  Giới thiêu
                </a>
              </li>
              <li className="footer-item">
                <a href className="footer-item__link">
                  Tuyển dụng
                </a>
              </li>
              <li className="footer-item">
                <a href className="footer-item__link">
                  Diều khoản
                </a>
              </li>
            </ul>
          </div>
          <div className="gird__column-2-4-footer col c-6 m-3 l-3">
            <h3 className="footer__heading">THEO DÕI CHÚNG TÔI TRÊN</h3>
            <li className="footer-item">
              <a href className="footer-item__link">
                <i className="fa-brands fa-facebook footer-item__link-facebook" />
                Facebook
              </a>
            </li>
            <li className="footer-item">
              <a href className="footer-item__link">
                <img
                  className="footer-item__link-instagram"
                  src="src/assets/img/instagram.png"
                  alt
                  style={{ width: "13.5px" }}
                />
                Intagame
              </a>
            </li>
            <li className="footer-item">
              <a href className="footer-item__link">
                <i className="fa-brands fa-linkedin footer-item__link-linkedin" />
                Linkedin
              </a>
            </li>
          </div>
          <div className="gird__column-2-4-footer col c-6 m-3 l-3">
            <h3 className="footer__heading">THEO DÕI</h3>
            <li className="footer-item">
              <a href className="footer-item__link">
                Giới thiêu
              </a>
            </li>
            <li className="footer-item" />
            <a href className="footer-item__link">
              Tuyển dụng
            </a>
            <li className="footer-item">
              <a href className="footer-item__link">
                Diều khoản
              </a>
            </li>
          </div>
          <div className="col  col -footer">
            <h3 className="footer__heading">
              VÀO CỬA HÀNG TRÊN ỨNG DỤNG THICKID
            </h3>
            <div className="footer-item footer-item-download">
              <div className="footer__img">
                <li className="footer-item">
                  <a href>
                    <img src="src/assets/img/QR.png" alt />
                  </a>
                </li>
              </div>
              <div className="footer__img">
                <li className="footer-item">
                  <a href>
                    <img
                      className="footer-item-store"
                      src="src/assets/img/app_store.png"
                      alt
                    />
                  </a>
                </li>
                <li className="footer-item">
                  <a href>
                    <img
                      className="footer-item-google"
                      src="src/assets/img/google_play.png"
                      alt
                    />
                  </a>
                </li>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default FooterWebsite;
