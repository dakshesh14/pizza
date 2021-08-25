import React, { memo } from 'react'

export default memo(function Spinner() {
    return (
        <div className="w-100 mt-5 d-flex justify-content-center">
            <div className="spinner-border" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
        </div>
    )
})
