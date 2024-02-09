/* eslint-disable react/prop-types */
import { useForm } from 'react-hook-form';
import '../../styles/admin/dashboard.css'
import { useNavigate } from 'react-router-dom';


const AddProductComponent = ({ onAddProduct }) => {
    // validate form :
    const naVigation = useNavigate()
    const { register, handleSubmit } = useForm()

    const onSubmit = (data) => {
        data.new = Number(data.new) // convert string to number
        if ((data.name, data.price, data.title) == '') {
            console.log('input value form rỗng');
        }
        else {
            onAddProduct(data);
            naVigation('/admin/products-manager')
        }
    }
    return (<>
        <div className="addProductsAdmin">
            <section className='mb-6'>
                <span className='h3'>add products</span>
            </section>
            {/* -- */}
            <div>
                <form action id="form" onSubmit={handleSubmit(onSubmit)}>
                    <div className="order_wrap">
                        <div className="form_count">
                            <label htmlFor="image">image</label>
                            <input className='h-11' type="file" name="image" id="image" {...register('image')} />
                        </div>
                        <div className="form_count">
                            <label htmlFor="text">name</label>
                            <input className='h-11' type="text" name="text" id="text" {...register('name')} />
                        </div>
                        <div className="form_count">
                            <label htmlFor="price">price</label>
                            <input className='h-11' type="number" name="price" id="price" {...register('price')} min={0} />
                        </div>
                        <div className="form_count">
                            <label htmlFor="tiltle">tiltle</label>
                            <input className='h-20' type="title" name="title" id="title" {...register('title')} />
                        </div>
                        <div className="form_count">
                            <label htmlFor="new">new</label>
                            <input className='h-11' type="number" name="new" id="new" {...register('new')} />
                        </div>
                        <button type='submit' className="border rounded-lg p-2 hover:bg-sky-500 btn-primary">Submit</button>


                    </div>
                </form>
                <br />
            </div>
        </div>
    </>)
}

export default AddProductComponent;