// CRUD products
import instance from "./config";

const getProducts = async () => {
    try {
        const { data } = await instance.get(`/products`)
        // console.log(data);
        return data
    } catch (error) {
        console.log(error);
    }
}

// get one products:

const getOneProduct = async (id) => {
    try {
        const { data } = await instance.get(`/products/${id}`)
        return data
    } catch (error) {
        console.log(error);
    }
}


// delete product
const deleteProduct = async (id) => {
    try {
        const { data } = await instance.delete(`/products${id}`)
        return data
    } catch (error) {
        console.log(error);
    }
}


// edit product
const editProducts = async (product) => {
    try {
        const { data } = await instance.put(`/products/${product.id}`, product)
        return data
    } catch (error) {
        console.log(error);
    }
}

// add product
const addProducts = async (newProduct) => {
    try {
        const { data } = await instance.post(`/products`, newProduct)
        return data
    } catch (error) {
        console.log(error);
    }
}

export { getProducts, getOneProduct, deleteProduct, editProducts, addProducts }