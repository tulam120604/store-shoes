import '../../styles/Client_Page/successPage.css'

const SuccessPage = () => {
    return (<>
        <div className="successpage">
            <link href="https://fonts.googleapis.com/css?family=Nunito+Sans:400,400i,700,900&display=swap" rel="stylesheet" />
            <div className="card">
                <div style={{ borderRadius: 200, height: 200, width: 200, background: '#F8FAF5', margin: '0 auto' }}>
                    <i className="checkmark">✓</i>
                </div>
                <h1>Success</h1>
                <p>We received your purchase request;<br /> well be in touch shortly!</p>
            </div>
        </div>

    </>)
}
export default SuccessPage