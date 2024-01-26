// import React from 'react'
import 'E:/Shoes_Store/src/styles/home/baner.css'

const BanerComponent = () => {
    return (<>

        <div className="baner">
            <div className="box-left">
                <h5>summer <span>collections</span></h5>
                <p>Lorem ipsum, dolor sit amet consectetur neque repudiandae nulla. Enim, facere.</p>
                <button>buy now</button>

                <div className="box-feedback">
                    <section>
                        <h6>90K+</h6>
                        <span>collections</span>
                    </section>
                    <section>
                        <h6>100K+</h6> <span>users</span>
                    </section>
                </div>
            </div>
            {/* ---- */}

            <div className="box-right">
                <div className="box-image">
                    <span>neki</span>
                    <img src="../src/images/shoes1.png" alt="" />
                </div>
            </div>
        </div>

    </>)
}

export default BanerComponent