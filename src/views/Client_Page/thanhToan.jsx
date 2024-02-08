
const ThanhToan_Page = () => {
    return (<>
        <div className="container mt-24">
            <form className="needs-validation" name="frmthanhtoan" method="post" action="#">
                <input type="hidden" name="kh_tendangnhap" defaultValue="dnpcuong" />
                <div className="py-5 text-center">
                    <i className="fa fa-credit-card fa-4x" aria-hidden="true" />
                    <h2>Thanh toán</h2>
                    <p className="lead">Vui lòng kiểm tra thông tin Khách hàng, thông tin Giỏ hàng trước khi Đặt hàng.</p>
                </div>
                <div className="row">
                    <div className="col-md-4 order-md-2 mb-4">
                        <h4 className="d-flex justify-content-between align-items-center mb-3">
                            <span>Giỏ hàng</span>
                            <span className="badge badge-secondary badge-pill">2</span>
                        </h4>
                        <ul className="list-group mb-3">
                            <input type="hidden" name="sanphamgiohang[1][sp_ma]" defaultValue={2} />
                            <input type="hidden" name="sanphamgiohang[1][gia]" defaultValue={11800000.00} />
                            <input type="hidden" name="sanphamgiohang[1][soluong]" defaultValue={2} />
                            <li className="list-group-item d-flex justify-content-between lh-condensed">
                                <div>
                                    <h6 className="my-0">Apple Ipad 4 Wifi 16GB</h6>
                                    <small>210</small>
                                </div>
                                <span>210</span>
                            </li>
                            <input type="hidden" name="sanphamgiohang[2][sp_ma]" defaultValue={4} />
                            <input type="hidden" name="sanphamgiohang[2][gia]" defaultValue={210} />
                            <input type="hidden" name="sanphamgiohang[2][soluong]" defaultValue={8} />
                            <li className="list-group-item d-flex justify-content-between">
                                <span>Tổng thành tiền</span>
                                <strong>210</strong>
                            </li>
                        </ul>
                        <div className="input-group">
                            <input type="text" className="form-control" placeholder="Mã khuyến mãi" />
                            <div className="input-group-append">
                                <button type="submit" className="btn btn-secondary bg-neutral-800">Xác nhận</button>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-8 order-md-1">
                        <h4 className="mb-3">Thông tin khách hàng</h4>
                        <div className="row">
                            <div className="col-md-12">
                                <label htmlFor="kh_ten">Họ tên</label>
                                <input type="text" className="form-control" name="kh_ten" id="kh_ten" />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="kh_diachi">Địa chỉ</label>
                                <input type="text" className="form-control" name="kh_diachi" id="kh_diachi" />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="kh_dienthoai">Điện thoại</label>
                                <input type="text" className="form-control" name="kh_dienthoai" id="kh_dienthoai" />
                            </div>
                            <div className="col-md-12">
                                <label htmlFor="kh_email">Email</label>
                                <input type="text" className="form-control" name="kh_email" id="kh_email" />
                            </div>
                        </div>
                        <h4 className="mb-3">Hình thức thanh toán</h4>
                        <div className="d-block my-3">
                            <div className="custom-control custom-radio">
                                <input id="httt-1" name="httt_ma" type="radio" className="custom-control-input" required defaultValue={1} />
                                <label className="custom-control-label" htmlFor="httt-1">Thanh toán khi nhận hàng</label>
                            </div>
                        </div>
                        <hr className="mb-4" />
                        <button className="btn btn-primary btn-lg bg-indigo-500" type="submit" name="btnDatHang">Đặt
                            hàng</button>
                    </div>
                </div>
            </form>
        </div>

    </>)
}

export default ThanhToan_Page