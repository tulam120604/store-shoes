/* eslint-disable react/prop-types */
import { useEffect } from "react"
import { useForm } from "react-hook-form"
import { useNavigate, useParams } from "react-router-dom"
import { getOneProductsAll } from "../../data/productAll"


const EditProductAdmin = ({ onUpdateProduct }) => {
    // promise form = useParam:
    const { id } = useParams()

    const naVi = useNavigate()
    const { register, handleSubmit, reset } = useForm()
    const onSubmit = (data) => {
        onUpdateProduct(data)
        naVi('/admin/products-manager')
    }

    const promiseFormData = () => {
        (async () => {
            const data = await getOneProductsAll(id)
            reset(data)
        })()
    }
    useEffect(promiseFormData, [id]) // id o day la no se render lai giao dien dua theo id,
    //   neu id thay doi no se call lai api
    return (<>
        <div className="addProductsAdmin">
            <span>edit products</span>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">image</label>
                    <input name="image" type="text" {...register('image')} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">name</label>
                    <input name="name" type="text" {...register('name')} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">price</label>
                    <input name="price" type="number" {...register('price')} className="form-control" id="exampleInputPassword1" min={0} />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">title</label>
                    <input name="title" type="text" {...register('title')} className="form-control" id="exampleInputPassword1" />
                </div>
                <div className="mb-3">
                    <label htmlFor="exampleInputPassword1" className="form-label">feedback</label>
                    <input name="feedback" type="number" {...register('feedback')} className="form-control" id="exampleInputPassword1" min={1} max={5} />
                </div>
                <button type='submit' className="border rounded-lg p-2 hover:bg-sky-500 btn-primary">Edit Product</button>
            </form>

        </div>
    </>)
}

export default EditProductAdmin