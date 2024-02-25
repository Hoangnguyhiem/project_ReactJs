import instance from "./config";


// load all danh mục
export const getCategories = async () => {
    try {
        const { data } = await instance.get(`/categories`);
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
};

//load all sản phẩm theo danh mục
export const getProductOfCatogogy = async (id) => {
    try {
        const { data } = await instance.get(`categories/${id}?_embed=products`);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};


// Thêm sản phẩm
export const getProducts = async () => {
    try {
        const { data } = await instance.get(`/products`);
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getUserById = async (id) => {
    try {
        const { data } = await instance.get(`/users/${id}`);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const getProductById = async (id) => {
    try {
        const { data } = await instance.get(`/products/${id}`);
        console.log(data);
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const removeProductById = async (id) => {
    try {
        const { data } = await instance.delete(`/products/${id}`);
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
};

export const updateProducts = async (product) => {

    try {
        const { data } = await instance.put(`products/${product.id}`, product);
        return data;
    } catch (error) {
        console.log(error);
    }
};
export const addProducts = async (product) => {
    try {
        const { data } = await instance.post(`/products`, product);
        console.log(data)
        return data;
    } catch (error) {
        console.log(error);
    }
};
//Thêm danh mục
export const addCategory = async (category) => {
    try {
        const { data } = await instance.post(`/categories`, category)
        return data
    } catch (error) {
        console.log(error);
    }
}


export const updateProfile = async (profile) => {

    try {
        const { data } = await instance.put(`users/${profile.id}`, profile);
        return data;
    } catch (error) {
        console.log(error);
    }
};