import instance from "./config";

const ListMenuNavBarAdmin = async () => {
    try {
        const { data } = await instance.get(`/menus`)
        return data
    } catch (error) {
        console.log(error);
    }
}
export default ListMenuNavBarAdmin