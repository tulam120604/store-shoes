/* eslint-disable react/prop-types */
import { useEffect, useState } from 'react';
import '../../styles/products/oneProducts.css'
import { useParams } from 'react-router-dom';
import { getOneProductsAll } from '../../data/productAll';
const OneProductsComponent = ({ wrapper }) => {
    const [oneProductsDeltail, setOneProductsDeltail] = useState({})
    const { id } = useParams();
    useEffect(() => {
        (async () => {
            const data = await getOneProductsAll(id)
            // console.log(data);
            setOneProductsDeltail(data)
        })();
    }, [id]);

    return (<>
        <div className="oneProduct">
            <div className="box_infor_products">
                <div className="left">
                    <img src={oneProductsDeltail.image} alt="" />
                    <div className="img_mini">
                        <img src={oneProductsDeltail.image} alt="" />
                        <img src={oneProductsDeltail.image} alt="" />
                        <img src={oneProductsDeltail.image} alt="" />
                        <img src={oneProductsDeltail.image} alt="" />
                    </div>
                </div>
                {/* --- */}

                <div className="right">
                    <span>{oneProductsDeltail.name}</span>
                    <p>{oneProductsDeltail.title}</p>
                    <div className="rating">
                        <section>
                            <img src="../src/images/star.png" alt="" />
                            <img src="../src/images/star.png" alt="" />
                            <img src="../src/images/star.png" alt="" />
                            <img src="../src/images/star.png" alt="" />
                            <img src="../src/images/star.png" alt="" />
                            <span>({oneProductsDeltail.feedback})</span>
                        </section>
                    </div>
                    <h6>$ {oneProductsDeltail.price}</h6>
                    <div className="add">
                        <select name="" id="">
                            <option style={{ background: wrapper ? 'white' : 'black' }} selected="">size</option>
                            <option style={{ background: wrapper ? 'white' : 'black' }} value="">35</option>
                            <option style={{ background: wrapper ? 'white' : 'black' }} value="">39</option>
                            <option style={{ background: wrapper ? 'white' : 'black' }} value="">42</option>
                        </select>
                        <button style={{ background: wrapper ? '#381DF5' : 'white', color: wrapper ? 'white' : 'black' }}>add to cart</button>
                    </div>
                </div>
            </div>
        </div>
    </>);
}

export default OneProductsComponent;