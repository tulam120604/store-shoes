import instance from "./config";

const getDanhMuc = async () => {
    try {
        const { data } = await instance.get('/danh_muc')
        return data
    } catch (error) {
        console.log(error);
    }
}

// them danh muc
const add_DanhMuc = async (danh_muc_moi) => {
    try {
        const { data } = await instance.post(`/danh_muc${danh_muc_moi}`, danh_muc_moi);
        return data
    } catch (error) {
        console.log(error);
    }
}


// xoa danh muc

const delete_danhMuc = async (id_dm) => {
    try {
        const { data } = await instance.delete(`/danh_muc`, id_dm);
        return data
    } catch (error) {
        console.log(error);
    }
}

export { getDanhMuc, add_DanhMuc, delete_danhMuc }