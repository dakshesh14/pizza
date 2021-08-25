import React, { memo } from 'react'

export default memo(function Footer() {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-12">
                        <h2>Pizza</h2>
                        <p>Made By <a href="https://github.com/Dakshesh14" className="fancy-link">Dakshesh Jain</a></p>
                    </div>
                </div>
            </div>
        </footer>
    )
})
