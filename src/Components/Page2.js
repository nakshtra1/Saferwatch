import React from 'react'
import '../Css/Page2.css'
import Page3 from './Page3';


function Page2() {
    var organizationId = "2fe766f0-aace-11e9-bf68-c7083192226e";
    var organizationName = "SaferWatch QA Organization";
    return (
        <div className='container'>
            <div className="text-center my-3 darkl" id="header_update_alerts">
                <a id="saferLogo" href="https://www.saferwatchapp.com">
                    <img src="https://dx27og91dz39q.cloudfront.net/images/SaferWatch-Logo.png" alt="SaferWatch Logo" width="250" className="dark-logo" />
                </a>
            </div>
            <div className="pa-container" style={{}}>

                {/* Top Sticky Navbar */}
                <nav className="navbar navbar-toggleable-md navbar-inverse fixed-top sticky-navbar" style={{ top: "40px" }}>

                    {/* //nav logo */}

                    <a id="saferlogo" href="/saferwatch-qa-organization">
                        <img src="https://dx27og91dz39q.cloudfront.net/images/SaferWatch-Logo.png" alt="SaferWatch Logo" className="image-on-navbar img-fluid" width="250" />
                    </a>

                    {/* //nav button */}

                    <div className="navbar-brand">
                        <div className="hideInResponsive">
                            <span className="download-app-text" id="download-app-text-mobile">Now Available</span>
                            <a href="https://itunes.apple.com/us/app/saferwatch/id1409514604?mt=8" target="_blank">
                                <img src="https://dx27og91dz39q.cloudfront.net/images/top-store-img/iphone-badge.png" className="an play-store-img img-fluid" alt="Download from the App Store" />
                            </a>
                            <a href="https://play.google.com/store/apps/details?id=com.ad.saferwatch" target="_blank" className="ml-2">
                                <img src="https://dx27og91dz39q.cloudfront.net/images/top-store-img/android-badge.png" className="apple-store-img img-fluid" alt="Get it from Google Play" />
                            </a>
                        </div>
                    </div>


                    <div className="showInResponsive">
                        <div className="download-app-text" id="download-app-text-web">Now Available</div>
                        <a href="https://itunes.apple.com/us/app/saferwatch/id1409514604?mt=8" target="_blank">
                            <img src="https://dx27og91dz39q.cloudfront.net/images/top-store-img/iphone-badge.png" className="play-store-img img-fluid" alt="Download from the App Store" />
                        </a>
                        <a href="https://play.google.com/store/apps/details?id=com.ad.saferwatch" target="_blank">
                            <img src="https://dx27og91dz39q.cloudfront.net/images/top-store-img/android-badge.png" className="apple-store-img img-fluid" alt="Get it from Google Play" />
                        </a>
                    </div>
                </nav>
                <div className="red-stripe-container">
                    <div className="red-stripe" id="red-stripe">In the case of an emergency call 911</div>
                </div>
                <div className="white-line-container "></div>

                {/* Banner Image with Logo */}

                <div className="cover-image">
                    <img src="https://dx27og91dz39q.cloudfront.net/images/car.png" className="banner-img img-fluid " width="100%" alt="SaferWatch QA Organization Alerts" />
                    <div className="profile-image">
                        <a href="http://saferwatchapp.com">
                            <img id="profileimage" className="img-fluid rounded-logo img-circle" src="https://dx27og91dz39q.cloudfront.net/images/logo-img.jpg" alt="SaferWatch QA Organization Logo"  />
                        </a>
                    </div>
                </div>
                <p className="my-2 d-none d-sm-block">&nbsp;</p>


                {/* Form Start */}
                <Page3 />
                {/* pa-container div */}
            </div>

            //container div
        </div>
    )
}

export default Page2
