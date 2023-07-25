import React from 'react'
import '../Css/Page.css'
import Page2 from './Page2'


function Page() {
    return (
        <>
            {/* Preloader - style you can find in spinners.css */}

            <div className="preloader hide" style={{ display: "none" }}>
                <div className="loader">
                    <div className="loader__figure"></div>
                    <p className="loader__label">SaferWatch</p>
                </div>
            </div>

            {/* push header */}

            <div className="notificationtop-bar fixed-top" id="notifi_bar" style={{ display: "block" }}>
                <p className="text-center m-0">SaferWatch needs permission to
                    <a href="javascript:void(0)" className="notifi_link" > enable desktop notifications</a>.</p>
                <a href="javascript:void(0)" className="close-notifi" >
                    <svg className="svg-inline--fa fa-times fa-w-11" aria-hidden="true" focusable="false" data-prefix="fa"
                        data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512" data-fa-i2svg="">
                       </svg></a>
            </div>
            <Page2 />
        </>
    )
}

export default Page
