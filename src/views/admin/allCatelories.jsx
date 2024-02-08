/* eslint-disable react/prop-types */

const AllCatelories = ({ catelories, onRemove }) => {

    return (<>
        <div className="all">
            <section>
                <span className="h3">catelories views</span>
            </section>
            <table className="table capitalize">
                <thead>
                    <tr>
                        <th scope="col">STT</th>
                        <th scope="col">ID product</th>
                        <th scope="col">Name product</th>
                        <th scope="col">options</th>
                    </tr>
                </thead>
                {catelories.map((item, i) => {
                    return (<>
                        <tbody>
                            <tr key={i}>
                                <th scope="row">{i + 1}</th>
                                <th>{item.id}</th>
                                <td>{item.name}</td>
                                <td>
                                    <button className='btn btn-danger' onClick={() => onRemove(item.id)}>Xoa</button>
                                    {/* <Link to={`${item.id}/edit_product`}><button className='btn btn-primary ml-3'>Sua</button></Link> */}
                                </td>
                            </tr>
                        </tbody>
                    </>)
                })}
            </table>
        </div>
    </>)
}

export default AllCatelories