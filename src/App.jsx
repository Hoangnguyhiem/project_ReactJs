import { useEffect, useState } from "react";
import ProductPage from "./pages/admin/Product";
import DashboardPage from "./pages/admin/Dashboard";
import { Route, Routes } from "react-router-dom";
import {
  addCategory,
  addProducts,
  getProducts,
  removeProductById,
  updateProducts,
  updateProfile,
} from "./api/product";
import { ToastContainer, toast } from "react-toastify";
import ProductAddPage from "./pages/admin/ProductAdd";
import ProductEditPage from "./pages/admin/ProductEdit";
import LayoutWebsite from "./components/layouts/layoutWebsite";
import LayoutAdmin from "./components/layouts/LayoutAdmin";
import ProductPageWebsite from "./pages/ProductPage";
import ProductDetalPage from "./pages/ProductDetalPage";

import CategoryPage from "./pages/Category";
import CategoryAdd from "./pages/admin/CategoryAdd";
import GetProductbyName from "./pages/ProductbyName";
import Profile from "./pages/Profile";

function App() {
  //load all danh mục và sản phẩm
  const [products, setProducts] = useState([]);
  console.log(products);
  useEffect(() => {
    (async () => {
      const data = await getProducts();
      setProducts(data);
    })();
  }, []);
  //Xóa sản phẩm
  const onHandleRemove = async (id) => {
    const confrim = window.confirm("Are you delete ok!");
    if (confrim) {
      try {
        await removeProductById(id);
        toast.success("Xóa sản phẩm thành công");
        setProducts(products.filter((product) => product.id !== id));
      } catch (error) {
        toast.error("Xóa sản phẩm không thành công");
      }
    }
  };
  //Thêm sản phẩm
  const onHandleAdd = async (product) => {
    try {
      const data = await addProducts(product);
      toast.success("Thêm sản phẩm thành công");
      setProducts([...products, data]);
    } catch (error) {
      toast.error(error);
    }
  };
  //Sửa sản phẩm
  const onHandleEdit = async (product) => {
    try {
      await updateProducts(product);
      toast.success("Cập nhật sản phẩm thành công");
      setProducts(
        products.map((item) => (item.id === product.id ? product : item))
      );
    } catch (error) {
      toast.error(error);
    }
  };
  //Them danh muc
  const categoryAdd = async (category) => {
    try {
      const data = await addCategory(category);
      toast.success("Thêm sản phẩm thành công");
      setProducts([...category, data]);
    } catch (error) {
      console.log(error)
    }
  } 
  //Update profile
  const profileAdd = async (profile) => {
    try {
      const data = await updateProfile(profile);
      console.log(data)
      toast.success("Cập nhập Profile success");
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Routes>
        <Route path="/" element={<LayoutWebsite products={products}/>}>
          <Route index element={<ProductPageWebsite products={products}/>} />
          <Route path="products/:productId" element={<ProductDetalPage />} />
          <Route path="category/:id" element={<CategoryPage />} />
          <Route path="product/:id" element={<GetProductbyName />} />
          <Route path="profile/:id" element={<Profile onAdd={profileAdd}/>}/>
        </Route>
        <Route path="admin" element={<LayoutAdmin />}>
          <Route index element={<DashboardPage />} />
          <Route path="category/add" element={<CategoryAdd onAdd={categoryAdd} />} />
          <Route
            path="products"
            element={
              <ProductPage products={products} onRemove={onHandleRemove} />
            }
          />
          <Route
            path="product/add"
            element={<ProductAddPage onAdd={onHandleAdd} />}
          />
          <Route
            path="product/:id/edit"
            element={<ProductEditPage onEdit={onHandleEdit} />}
          />
        </Route>
      </Routes>
      <ToastContainer />
    </>
  );
}

export default App;
