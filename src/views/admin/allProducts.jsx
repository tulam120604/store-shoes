import { useEffect, useState } from "react";
import { getAllProducts } from "../../data/productAll";

const AllProductsAdmin = () => {
    const [allSanPhamAdmin, setAllSanPhamAdmin] = useState([])
    const getAllSanPhamAdmin = () => {
        (async () => {
            const data = await getAllProducts();
            setAllSanPhamAdmin(data)
        })()
    }
    useEffect(getAllSanPhamAdmin, [])
    console.log(allSanPhamAdmin);
    return (<>
        <div className="all">
            <table>
                <thead>
                    <tr>
                        <th>id</th>
                        <th>image</th>
                        <th>name</th>
                        <th>price</th>
                        <th>title</th>
                        <th>feedback</th>
                        <th></th>
                    </tr>
                    {allSanPhamAdmin.map((e) => {
                        return (<>
                            <tr>
                                <td scope="col">{e.id}</td>
                                <td scope="col">{e.image}</td>
                                <td scope="col">{e.name}</td>
                                <td scope="col">{e.price}</td>
                                <td scope="col">{e.title}</td>
                                <td scope="col">{e.feedback}</td>
                            </tr>
                        </>)
                    })}


                </thead>
            </table>
        </div >
    </>);
}

export default AllProductsAdmin;