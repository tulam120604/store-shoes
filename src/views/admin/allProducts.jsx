/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import 'E:/Shoes_Store/src/styles/admin/dashboard.css'

const AllProductsAdmin = ({ SP, onRemove }) => {
    const SPHot = SP.hot;
    const allSP = SP.all;
    return (<>
        <div className="all">
            <section>
                <span className="h3">products add new</span>
                <Link to='addProducts'> <button className='btn btn-primary ml-3'> Add +</button></Link>
            </section>

            <table className="table capitalize">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID product</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Title</th>
                        <th scope="col">Feedback</th>
                        <th scope="col">status</th>
                        <th scope="col">options</th>
                    </tr>
                </thead>
                {SPHot.map((pr, i) => {
                    return (<>
                        <tbody>
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <th>{pr.id}</th>
                                <td style={{ width: '80px', height: '75px' }}><img style={{ height: '100%' }} src={pr.image} alt={pr.name} /></td>
                                <td>{pr.name}</td>
                                <td>{pr.price}</td>
                                <td>{pr.title}</td>
                                <td>{pr.feedback}</td>
                                <td>{(pr.new) === 1 ? 'new' : 'old'}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => onRemove(pr.id)}>Xoa</button>
                                    <Link to={`${pr.id}/edit_product`}><button className='btn btn-primary ml-3'>Sua</button></Link>
                                </td>
                            </tr>
                        </tbody>
                    </>)
                })}
            </table>

            {/* all san pham */}
            <section>
                <span className='h3'>all products</span>
            </section>
            <table className="table">
                <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">ID product</th>
                        <th scope="col">Image</th>
                        <th scope="col">Name product</th>
                        <th scope="col">Price</th>
                        <th scope="col">Title</th>
                        <th scope="col">Feedback</th>
                        <th scope="col">options</th>
                    </tr>
                </thead>
                {allSP.map((pr, i) => {
                    return (<>
                        <tbody>
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <th >{pr.id}</th>
                                <td style={{ width: '80px', height: '80px' }}><img style={{ height: '100%' }} src={pr.image} alt={pr.name} /></td>
                                <td>{pr.name}</td>
                                <td>{pr.price}</td>
                                <td>{pr.title}</td>
                                <td>{pr.feedback}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => onRemove(pr.id)}>Xoa</button>
                                    <Link to={`${pr.id}/edit_product`}><button className='btn btn-primary ml-3'>Sua</button></Link>
                                </td>
                            </tr>
                        </tbody>
                    </>)
                })}
            </table>
        </div >
    </>);
}

export default AllProductsAdmin;