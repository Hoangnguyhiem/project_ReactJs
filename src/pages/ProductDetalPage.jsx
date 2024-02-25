import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import { getProductById } from '../api/product';

const ProductDetalPage = () => {
  const [product, setProduct] = useState({})
  console.log(product)
  const { productId } = useParams();
  useEffect(() => {
    (async () => {
      const data = await getProductById(productId);
      setProduct(data)
    })();
  }, [productId]);

  return (
    <div className="app__container">
      <div className="grids">
        <div className="product__img">
          <div className="home-product-item__img" style={{ backgroundImage: `url(${product.image})` }}>
          </div>
          <div className="product__img-list">
            <div className="product__img-list--click">
              <div className="home-product-item__img" style={{ backgroundImage: `url(${product.image})` }} />
            </div>
            <div className="product__img-list--click">
              <div className="home-product-item__img" style={{ backgroundImage: `url(${product.image})` }} />
            </div>
            <div className="product__img-list--click">
              <div className="home-product-item__img" style={{ backgroundImage: `url(${product.image})` }} />
            </div>
            <div className="product__img-list--click">
              <div className="home-product-item__img" style={{ backgroundImage: `url(${product.image})` }} />
            </div>
            <div className="product__img-list--click">
              <div className="home-product-item__img" style={{ backgroundImage: `url(${product.image})` }} />
            </div>
          </div>
          <div className="product__img-seachr">
            <span className="product__img-seachr1">Chia sẻ:
              <i className="fa-brands fa-facebook-messenger" />
              <i className="fa-brands fa-facebook fa-facebooks" />
              <i className="fa-brands fa-pinterest" />
              <i className="fa-brands fa-twitter" />
            </span>
            <span className="product__img-seachr2">
              <i className="fa-sharp fa-regular fa-heart" />
              Đã thích(5,5k)</span>
          </div>
        </div>
        <div className="product__info">
          <div>
            <span className="product__info-like">Yêu Thích+</span>
            <span className="product__info-title">{product.name}</span>
          </div>
          <div className="product__info-info">
            <div className="product__info-info--thongtin">
              <div className="info">
                <span className="start">5</span>
                <span>
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                  <i className="fa fa-star" aria-hidden="true" />
                </span>
              </div>
              <div className="info">
                <span className="danhgia">661</span>
                <span> Đánh Giá</span>
              </div>
              <div className="info">
                <span>{product.old_price} </span>
                <span>Đã bán</span>
              </div>
            </div>
            <div className="tocao">
              <span>Tố cáo: {product.made_in}</span>
            </div>
          </div>
          <div className="product__info-product">
            <span><sup>đ</sup>{product.old_price}</span>
            <span><sup>đ</sup>{product.price}</span>
            <span>50% GIẢM</span>
          </div>
          <div className="product__info-name">
            <div className="product__info-sale">
              <span className="product__info-sale1">Mã Giảm Giá<br />Của Shop</span>
              <span className="product__info-sale2">6% GIẢM</span>
              <span className="product__info-sale2">15% GIẢM</span>
              <span className="product__info-sale2">GIẢM 2.5k</span>
            </div>
            <div className="product__info-deal">
              <span className="product__info-deal1">Deal Sốc</span>
              <span className="product__info-deal2">Mua Kèm Deal Sốc</span>
            </div>
            <div className="product__info-color">
              <span className="product__info-color1">Màu Sắc</span>
              <span className="product__info-color2">Đen</span>
              <span className="product__info-color3">Trắng</span>
              <span className="product__info-color4">Be Sữa</span>
            </div>
            <div className="product__info-size">
              <span className="product__info-size1">Size</span>
              <span className="product__info-size2">M</span>
              <span className="product__info-size3">L</span>
              <span className="product__info-size4">XL</span>
            </div>
            <div className="product__info-sl">
              <span className="product__info-sl1">Số Lượng</span>
              <input className="product__info-sl2" type="number" name id defaultValue={1} min={1} max={100} />
              <span className="product__info-sl3">10586 sản phẩm có sẵn</span>
            </div>
            <div className="product__info-bank">
              <span className="product__info-bank1">
                <i className="fa-solid fa-cart-plus" />
                Thêm vào giỏ hàng</span>
              <span className="product__info-bank2">Mua Ngay</span>
            </div>
            <hr />
            <div className="product__info-baohanh">
              <span className="product__info-baohanh1">Shopee Đảm Bảo</span>
              <span className="product__info-baohanh2">3 Ngày Trả Hàng / Hoàn Tiền</span>
            </div>
          </div>
        </div>
      </div>
    </div>

  );
}

export default ProductDetalPage;
