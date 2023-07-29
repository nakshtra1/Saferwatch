import React, { useState, useEffect } from 'react';
import '../Css/Card.css';
import img from '../Img/img9.png';
import img2 from '../Img/img1.PNG';
import axios from 'axios';

function Card(Data) {
    console.log("carddata=====>", Data.map)
    const [apiData, setApiData] = useState([]);
    const [loading, setLoading] = useState(true);

    const params = {
        alert_id: '',
        category: 0,
        location_id: '',
        organization_id: 'saferwatch-qa-organization',
        pagekey: '',
        can_comment: '',
        pagesize: 50,
    };

    const fetchData = async () => {
        try {
            const response = await axios.post(
                'https://stagealerts.saferwatchapp.com/loadpublicalertfeeds',
                params
            );
            const data = response.data;
            console.log('data=====>', data?.alerts);
            setApiData(data?.alerts || []);
            setLoading(false);
        } catch (error) {
            console.error('Error fetching data:', error);
            setApiData([]);
            setLoading(false);
        }
    };

    useEffect(() => {
        fetchData();
    }, []);


    return (
        <div id="ALERTTable">
            {apiData.map((item) => (
                <div key={item.alert_id} className="dvRow mb-4 alert-card-6aabc0b0-051f-11ee-aa62-d7ff462d9d84" >
                    <div className="w-100">
                        {item.is_geofence_alert === true ? (

                            <>
                                <div className="intel-top-tab intel-red-tab">{Data.fname}</div>
                                <div className="intel-top-tab intel-blue-tab">
                                    <img className="mr-2" width="10" src="https://safermedia.saferwatchapp.com/f40591c0-885a-11e8-b39d-dd2d4b00f27f/0/1531708488106.png" />
                                    {item.incident.title}
                                </div>
                            </>

                        ) : (
                            <>
                                <div className="intel-top-tab2 intel-blue-tab">
                                    <img width="10" src="https://safermedia.saferwatchapp.com/f40591c0-885a-11e8-b39d-dd2d4b00f27f/0/1531708488106.png" />
                                    {item.incident.title}
                                </div>
                            </>
                        )}

                        <div className="intel-card">
                            <div className="row">
                                <div className="col-md-11 col-sm-10 col-10">
                                    <div className="row">
                                        <div className="pr-2 pl-3">
                                            <img className="intel-user-profile" src={item.organization.logo} />
                                        </div>

                                        <div className="float-md-left textleft-responsive">
                                            <div className="text-capitalize font-weight-bold text-body">
                                                <span className="intel-location">{item.submit_as.name}</span> -
                                                <span>{item.locations[0].name}</span>
                                            </div>
                                            <div className="pull-left text-capitalize">
                                                <div className="intel-date dvDate" a-date="">
                                                    <span>{item.created_datetime}</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="col-md-1 col-sm-2 col-2">
                                    <img className='img2' src={img2} alt="" />
                                </div>
                            </div>
                            {/* Alert Description */}
                            <div className="clearfix mt-2 mb-2 alert_description">
                                {item.is_safety_checkin && (
                                    <span className="happening-now">
                                        <span>{item.alert_description}</span>
                                    </span>
                                )}
                                {!item.is_safety_checkin && (
                                    <span className="alert_description">{item.alert_description}</span>
                                )}
                            </div>
                            {/* Address */}
                            <div className="mb-2">
                                <a
                                    className="intel-address"
                                    target="_blank"
                                    href={`https://maps.google.com/?q=${item.incident_geofence.address}`}
                                >
                                   {Data.locationlogo}  {item.incident_geofence.address}
                                </a>
                            </div>
                            {/* Map */}
                            {item.is_geofence_alert && (
                                <div className="map-margin">
                                    <div style={{ height: '50vh', width: '100%' }}>{Data.map}</div>
                                </div>
                            )}
                            <hr />
                            <div class="pa-alert-action row" style={{ padding: "0 15px 0 15px" }}>
                                {item.can_comment ? (
                                    <>
                                        <span
                                            className="text-left"
                                            data-toggle="modal"
                                            data-target="#markedReceived"
                                            style={{ color: "#69777D", fontWeight: "500", width: "33.33%" }}
                                            return={item.can_comment.toString()}
                                        >
                                            <img
                                                className="pr-1"
                                                style={{ marginTop: "-2px" }}
                                                src="/images/bolo_tip/received.png"
                                                width="25"
                                                alt=""
                                            />
                                            {item.can_comment.toString()}
                                        </span>

                                        <span
                                            className="text-center"
                                            data-toggle="modal"
                                            data-target="#makeCommentModal"
                                            style={{ color: "#69777D", fontWeight: "500", width: "33.33%" }}
                                            can_comment={+true}
                                        >

                                            {item.can_comment.toString()}
                                        </span>

                                        <span
                                            className="text-right"
                                            href="javascript:void(0);"
                                            style={{ color: "#69777D", fontWeight: "500", width: "33.33%" }}
                                            return={item.can_comment.toString()}
                                        >

                                            {item.can_comment.toString()}
                                        </span>
                                    </>
                                ) : (
                                    <>
                                        <span
                                            className="w-50 text-center"
                                            data-toggle="modal"
                                            data-target="#markedReceived"
                                            style={{ color: "#69777D", fontWeight: "500" }}
                                        >
                                            <img
                                                className="pr-1"
                                                style={{ marginTop: "-2px;" }}
                                                width="25"
                                            />
                                            {item.can_comment.toString()}
                                        </span>
                                        <span
                                            className="w-50 text-center"
                                            href="javascript:void(0);"
                                            return false
                                            style={{ color: "#69777D", fontWeight: "500" }}
                                        >

                                            {item.can_comment.toString()} 
                                        </span>
                                    </>
                                )}

                            </div>
                        </div>
                    </div>
                </div>
            ))}
            {apiData.length === 0 && <div>No data available</div>}
        </div>
    );
}

export default Card;


{/* {item.is_geofence_alert && (
                                <div className="map-margin">
                                    <div style={{ height: '50vh', width: '100%' }}>{item.organization.name}</div>
                                </div>
                            )} */}




                        //     <div class="pa-alert-action row" style={{ padding: "0 15px 0 15px" }}>
                        //     <span class="w-50 text-center" data-toggle="modal"
                        //         data-target="#markedReceived" style={{ color: "#69777D", fontWeight: "500" }}>
                        //         <img class="pr-1" style={{ marginTop: "-2px;" }}
                        //             src="/images/bolo_tip/received.png" width="25" />Received</span>

                        //     <span class="w-50 text-center" href="javascript:void(0);" return false style={{ color: "#69777D", fontWeight: "500" }}>
                        //         <svg class="svg-inline--fa fa-bell fa-w-14 font-size-fontAwesome transform grey-icon"
                        //             aria-hidden="true" focusable="false"
                        //             data-prefix="fal" data-icon="bell" role="img"
                        //             xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512" data-fa-i2svg="">
                        //         </svg> View Updates </span>
                        // </div>