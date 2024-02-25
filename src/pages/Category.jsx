/* eslint-disable react/prop-types */
import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import { getCategories, getProductOfCatogogy } from "../api/product";

const CategoryPage = () => {
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
    console.log(products)
    console.log(categories)
    const { id } = useParams()

    useEffect(() => {
        (async () => {
            const data = await getCategories();
            setCategories(data)
        })();
    }, [])

    useEffect(() => {
        (async () => {
            const data = await getProductOfCatogogy(id);
            console.log(data)
            setProducts(data.products)
        })();
    }, [id])

    return (
        <div className="app__container">
            <div className="grid wide">
                <div className="row">
                    <div className="col c-0 m-0 l-2">
                        <nav className="category">
                            <h3 className="category__heading"><i className="category__heading-icon fa-solid fa-list" />Danh
                                mục</h3>
                            <ul className="category-list">
                                <li className="category-item category-item--active">
                                    <Link to={`/`} className="category-item__link">Tất cả sản phẩm</Link>
                                </li>
                                {categories.map((category, index) => (
                                    <li className="category-item category-item--active" key={index}>
                                        <Link to={`/category/${category.id}`} className="category-item__link">{category.name}</Link>
                                    </li>
                                ))}
                            </ul>
                        </nav>
                    </div>
                    <div className="col c-12 m-12 l-10">
                        <div className="home-filter hide-on-mobile-tablet">
                            <span className="home-filter__lable">Sắp xếp theo</span>
                            <button className="home-filter__btn btn">Phổ biến</button>
                            <button className="home-filter__btn btn btn--primary">Mới nhất</button>
                            <button className="home-filter__btn btn">Bán chạy</button>
                            <div className="select-input">
                                <span className="select-input-lable">Giá</span>
                                <i className="select-input__icon fa-solid fa-sort-down" />
                                <ul className="select-input__list">
                                    <li className="select-input__item">
                                        <a href className="select-input__link">Giá: Thấp đến cao</a>
                                    </li>
                                    <li className="select-input__item">
                                        <a href className="select-input__link">Giá: Cao đến thấp</a>
                                    </li>
                                </ul>
                            </div>
                            <div className="home-filter__page">
                                <span className="home-filter__page-num">
                                    <span className="home-filter__page-current">1</span>/14
                                </span>
                                <div className="home-filter__page-control">
                                    <a href className="home-filter__page-btn">
                                        <i className="home-filter__page-icon fa-solid fa-angle-left" />
                                    </a>
                                    <a href className="home-filter__page-btn">
                                        <i className="home-filter__page-icon fa-solid fa-angle-right" />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="home-product">
                            <div className="row">
                                {products.map((product, index) => (
                                    <div className="col course-item c-6 m-3 l-2-4" key={index}>
                                        <Link to={`/products/${product.id}`} className="home-product-item">
                                            <div className="home-product-item__img" style={{ backgroundImage: `url(${product.image})` }}>
                                            </div>
                                            <h4 className="home-product-item__name">{product.name}</h4>
                                            <div className="home-product-item__price">
                                                <span className="home-product-item__price-old">{product.old_price}</span>
                                                <span className="home-product-item__price-current">{product.price}</span>
                                            </div>
                                            <div className="home-product-item__action">
                                                <span className="home-product-item__like home-product-item__liked">
                                                    <i className="home-product-item-heart1 fa-regular fa-heart" />
                                                    <i className="home-product-item-heart2 fa-solid fa-heart" />
                                                </span>
                                                <div className="home-product-item__rating">
                                                    <i className="home-product-item__star--gold fa-solid fa-star" />
                                                    <i className="home-product-item__star--gold fa-solid fa-star" />
                                                    <i className="home-product-item__star--gold fa-solid fa-star" />
                                                    <i className="home-product-item__star--gold fa-solid fa-star" />
                                                    <i className="fa-solid fa-star" />
                                                </div>
                                                <span className="home-product-item__sold">
                                                    88 đã bán
                                                </span>
                                            </div>
                                            <div className="home-product-item__origin">
                                                <span className="home-product-item__brand">{product.brand}</span>
                                                <spna className="home-product-item_origin-name">{product.made_in}</spna>
                                            </div>
                                            <div className="home-product-item__favourite">
                                                <i className="fa-solid fa-check" />
                                                <span>Yêu thích</span>
                                            </div>
                                            <div className="home-product-item__sale-off">
                                                <span className="home-product-item__sale-off-precent">10%</span>
                                                <span className="home-product-item__sale-off-lable">GIẢM</span>
                                            </div>
                                        </Link>
                                    </div>

                                ))}
                            </div>
                        </div>
                        <ul className="pagination home-product__pagination">
                            <li className="pagination-item">
                                <a href className="pagination-item__link">
                                    <i className="pagination-item__icon home-filter__page-icon fa-solid fa-angle-left" />
                                </a>
                            </li>
                            <li className="pagination-item pagination-item__active">
                                <a href className="pagination-item__link">1</a>
                            </li>
                            <li className="pagination-item">
                                <a href className="pagination-item__link">2</a>
                            </li>
                            <li className="pagination-item">
                                <a href className="pagination-item__link">3</a>
                            </li>
                            <li className="pagination-item">
                                <a href className="pagination-item__link">4</a>
                            </li>
                            <li className="pagination-item">
                                <a href className="pagination-item__link">5</a>
                            </li>
                            <li className="pagination-item">
                                <a href className="pagination-item__link">...</a>
                            </li>
                            <li className="pagination-item">
                                <a href className="pagination-item__link">14</a>
                            </li>
                            <li className="pagination-item">
                                <a href className="pagination-item__link">
                                    <i className="pagination-item__icon home-filter__page-icon fa-solid fa-angle-right" />
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage