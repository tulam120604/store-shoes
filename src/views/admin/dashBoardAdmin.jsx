/* eslint-disable react/prop-types */
const ThongKe = ({ SP, DM, soLuongSanPham }) => {
    return (<>
        <div className="container-fluid">
            <div className="row">
                <section className="flex justify-between">
                    <h1 className="h2">Dashboard</h1>
                </section>
                <div className="blockDashboard pt-3 pb-2 mb-3 border-top">
                    <table className='sanpham border-x-2 border-y-2'>
                        <thead>
                            <th className='p-2'>Sản Phẩm</th>
                        </thead>
                        <thead className='border-y'>
                            <td className='p-3'>Số lượng Sản Phẩm :</td>
                            {/* <td className='px-3'>{soLuongSanPham}</td> */}
                        </thead>
                        <thead className='border-y'>
                            <td className='p-3'>Sản Phẩm Hot :</td>
                            {/* <td className='px-3'>{SP.hot.length}</td> */}
                        </thead>
                        <thead className='border-y'>
                            <td className='p-3'>Sản Phẩm Còn Lại :</td>
                            {/* <td className='px-3'>{SP.all.length}</td> */}
                        </thead>
                    </table>
                    {/* danh muc */}
                    <table className='danhmuc border-x-2 border-y-2'>
                        <thead>
                            <th className='p-2'>Danh Mục</th>
                        </thead>
                        <thead className='border-y'>
                            <td className='p-3'>Số lượng Danh Mục :</td>
                            {/* <td className='px-3'>{DM.allDM.length}</td> */}
                        </thead>
                    </table>

                    {/* account */}
                    <table className='danhmuc border-x-2 border-y-2'>
                        <thead>
                            <th className='p-2'>Tài Khoản</th>
                        </thead>
                        <thead className='border-y'>
                            <td className='p-3'>Số lượng Tài Khoản :</td>
                            <td className='px-3'>0</td>
                        </thead>
                    </table>
                    {/* <AllProductsAdmin
                                    SanPham={{
                                        all: allSanPham,
                                        hot: sanPhamHot
                                    }}
                                /> */}
                </div>
            </div>
        </div>
    </>);
}

export default ThongKe