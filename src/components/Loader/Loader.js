import React from 'react'

export default function Loader() {
    return (
        <div className='d-flex'>
            <div className="spinner-border m-auto mt-5" role="status">
                <span className="visually-hidden">Loading...</span>
            </div>
            <h4 className='m-auto mt-5'>Loading ...</h4>
        </div>
    )
}
