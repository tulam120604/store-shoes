/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import '../../styles/admin/dashboard.css'
import { useNavigate } from 'react-router-dom';
// import SuccessPage from '../Client_Page/SuccessPage';


const AddProductComponent = ({ onAddProduct }) => {
    // validate form :
    const naVigation = useNavigate()
    const { register, formState: { errors }, handleSubmit } = useForm()

    const onSubmit = (data) => {
        data.new = Number(data.new) // convert string to number
        onAddProduct(data);
        setTimeout(() => { naVigation('/admin/products-manager') }, 2000)
    }
    return (<>
        <div className="addProductsAdmin">
            <section className='mb-6'>
                <span className='h3 pl-2.5'>thêm sản phẩm</span>
            </section>
            {/* -- */}
            <div>
                <form onSubmit={handleSubmit(onSubmit)}>
                    <div className="order_wrap">
                        <div className="form_outline">
                            <label htmlFor="image">ảnh</label>
                            <input className='h-11 form-control' type="file" id="image" {...register('image', { required: true })} />
                            {errors.image && <span className='normal-case text-red-600'>Chưa nhập ảnh sản phẩm !</span>}
                        </div>
                        <div className="form_outline">
                            <label className='mt-3.5' htmlFor="text">tên sản phẩm</label>
                            <input className='h-11 form-control' type="text" id="text" {...register('name', { required: true })} />
                            {errors.name && <span className='normal-case text-red-600'>Chưa nhập tên sản phẩm !</span>}
                        </div>
                        <div className="form_outline">
                            <label className='mt-3.5' htmlFor="price">giá sản phẩm</label>
                            <input className='h-11 form-control' type="number" id="price" {...register('price', { required: true })} min={0} />
                            {errors.price && <span className='normal-case text-red-600'>Chưa nhập giá sản phẩm !</span>}
                        </div>
                        <div className="form_outline">
                            <label className='mt-3.5' htmlFor="tiltle">tiêu đề sản phẩm</label>
                            <input className='h-20 form-control' type="title" id="title" {...register('title', { required: true })} />
                            {errors.title && <span className='normal-case text-red-600'>Chưa nhập tiêu đề sản phẩm !</span>}
                        </div>
                        <div className="form_outline">
                            <label className='mt-3.5' htmlFor="new">loại sản phẩm (1: rau / 2: quả / 3: loại khác)</label>
                            <input className='h-11 form-control' type="number" id="new" {...register('new', { required: true })} min={1} />
                            {errors.new && <span className='normal-case text-red-600'>Chưa nhập loại sản phẩm !</span>}
                        </div>
                        <button className="border rounded-lg p-2 hover:bg-sky-500 btn-primary mt-4 bg-sky-600">Thêm sản phẩm</button>
                    </div>
                </form>
                <br />
            </div>
            {/* <div className="successAdd flex justify-center fixed inset-2/4">
                <SuccessPage />
            </div> */}
        </div>
    </>)
}

export default AddProductComponent;