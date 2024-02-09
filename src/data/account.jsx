import instance from "./config";

// đăng nhập
const loginAccount = async (account) => {
    try {
        const { data } = await instance.post(`login`, account);
        return data
    } catch (error) {
        console.log(error);
    }
}

// tạo tài khoản
const createAccount = async (acount) => {
    try {
        const { data } = await instance.post(`users`, acount);
        return data
    } catch (error) {
        console.log(error);
    }
}

export { loginAccount, createAccount }