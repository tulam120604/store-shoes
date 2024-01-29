import instance from "./config";

const getAllProducts = async () => {
    try {
        const { data } = await instance.get('/productsAll')
        return data
    } catch (error) {
        console.log(error);
    }
}

const getOneProductsAll = async (id) => {
    try {
        const { data } = await instance.get(`/productsAll/${id}`);
        return data
    } catch (error) {
        console.log(error);
    }
}

const deleteProductsAll = async (id) => {
    try {
        const { data } = await instance.delete(`/productsAll${id}`)
        return data
    } catch (error) {
        console.log(error);
    }
}

const addProductsAll = async (san_pham_moi) => {
    try {
        const { data } = await instance.post(`/productsAll${san_pham_moi}`)
        return data
    } catch (error) {
        console.log(error);
    }
}

const updateProductsAll = async (sanPhamSua) => {
    try {
        const { data } = await instance.put(`/productsAll/${sanPhamSua.id}`, sanPhamSua)
        return data
    } catch (error) {
        console.log(error);
    }
}


export {
    getAllProducts, getOneProductsAll,
    deleteProductsAll, addProductsAll, updateProductsAll
}