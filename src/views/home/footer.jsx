import React from 'react'
import 'E:/Shoes_Store/src/styles/home/footer.css'


const FooterComponent = () => {
    return (<>
        <div className="footer">
            <div className="box1">
                <span>neki</span>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perspiciatis provident porro, commodi earum similique itaque nulla, rerum fugiat repellendus mollitia laudantium iusto officia voluptate facilis cupiditate. Sapiente alias quaerat in.</p>
                <input type="text" placeholder='abc@gmail.xyz' />
            </div>
            {/*  */}
            <div className="box2">
                <span>company</span>
                <li>+ 0987654321</li>
                <li>nike.shoes@gmail.xyz</li>
            </div>
            {/*  */}
            <div className="box3">
                <span>services</span>
                <li>abouts us</li>
                <li>carres</li>
                <li>delivery information</li>
                <li>privacy policy</li>
                <li>terms and conditions</li>
            </div>
            {/*  */}
            <div className="box4">
                <span>social media</span>
                <section>
                    <img src="../src/images/facebook.png" alt="" />
                    <img src="../src/images/instagram.png" alt="" />
                    <img src="../src/images/twitter.png" alt="" />
                </section>
            </div>
        </div>
    </>)
}

export default FooterComponent