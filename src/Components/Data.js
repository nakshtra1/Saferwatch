import GoogleMapReact from "google-map-react";
const AnyReactComponent = ({ text }) => <div>{text}</div>;
const defaultProps = {
    center: {
        lat: 22.7441207,
        lng: 75.8940231,
        href: "https://maps.google.com/?q=263, Orbit Mall, AB Rd, Scheme 54 PU4, Indore, Madhya Pradesh 452010, India",
    },
    zoom: 11,
};

const Data = [{

    name: "Location:",
    id: "0",
    fname: "Emergency",
    sname: "Physical Violence",
    mile: "100 Mile Locations",
    date_time: "06/07/23 04:08:18 pm",
    active: "Resolved:",
    description: "This is a test Drill:",
    locationlogo: <svg className="svg-inline--fa fa-map-marker-alt fa-w-12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg="">
        <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>,
    address: "987 ft from Classic Hills, Gajanan Nagar, Indore, Madhya Pradesh, India",
    map: <GoogleMapReact
        bootstrapURLKeys={{
            key: "AIzaSyD-EpiaCiksOBH-c69peQrgKa__MWsZYis",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
    >
        <AnyReactComponent
            lat={22.7441207}
            lng={75.8940231}
            text="My Marker"
            href="https://maps.google.com/?q=263, Orbit Mall, AB Rd, Scheme 54 PU4, Indore, Madhya Pradesh 452010, India"
        />
    </GoogleMapReact>,
},
{
    name: "tanish",
    id: "0",
    fname: "Emergency",
    sname: "Physical Violence",
    mile: "SaferWatch QA Organization - C21 MALL",
    date_time: "06/01/23 04:30:30 PM",
    active: "Active:",
    description: "This is a test description",
    locationlogo: <svg className="svg-inline--fa fa-map-marker-alt fa-w-12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg="">
        <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>,
    address: "400 ft from 263, Orbit Mall, AB Rd, Scheme 54 PU4, Indore, Madhya Pradesh 452010, India",
    map: <GoogleMapReact
        bootstrapURLKeys={{
            key: "AIzaSyD-EpiaCiksOBH-c69peQrgKa__MWsZYis",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
    >
        <AnyReactComponent
            lat={22.7441207}
            lng={75.8940231}
            text="My Marker"
            href="https://maps.google.com/?q=263, Orbit Mall, AB Rd, Scheme 54 PU4, Indore, Madhya Pradesh 452010, India"
        />
    </GoogleMapReact>

},
{
    name: "tanish",
    id: "0",
    fname: "Emergency",
    sname: "Physical Violence",
    mile: "SaferWatch QA Organization - C21 MALL",
    date_time: "06/01/23 04:30:30 PM",
    active: "Active:",
    description: "This is a test description",
    locationlogo: <svg className="svg-inline--fa fa-map-marker-alt fa-w-12" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="map-marker-alt" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512" data-fa-i2svg="">
        <path fill="currentColor" d="M172.268 501.67C26.97 291.031 0 269.413 0 192 0 85.961 85.961 0 192 0s192 85.961 192 192c0 77.413-26.97 99.031-172.268 309.67-9.535 13.774-29.93 13.773-39.464 0zM192 272c44.183 0 80-35.817 80-80s-35.817-80-80-80-80 35.817-80 80 35.817 80 80 80z"></path></svg>,
    address: "400 ft from 263, Orbit Mall, AB Rd, Scheme 54 PU4, Indore, Madhya Pradesh 452010, India",
    map: <GoogleMapReact
        bootstrapURLKeys={{
            key: "AIzaSyD-EpiaCiksOBH-c69peQrgKa__MWsZYis",
        }}
        defaultCenter={defaultProps.center}
        defaultZoom={defaultProps.zoom}
    >
        <AnyReactComponent
            lat={22.7441207}
            lng={75.8940231}
            text="My Marker"
            href="https://maps.google.com/?q=263, Orbit Mall, AB Rd, Scheme 54 PU4, Indore, Madhya Pradesh 452010, India"
        />
    </GoogleMapReact>

},

]

export { Data }





  {/* <h1>
                            <div className="intel-top-tab intel-red-tab">
                                <span id="top-archived-6aabc0b0-051f-11ee-aa62-d7ff462d9d84">{item.alert_description}</span>
                            </div>
                            <div className="intel-top-tab intel-blue-tab">
                                <img className="mr-2" width="10" src="https://safermedia.saferwatchapp.com/f40591c0-885a-11e8-b39d-dd2d4b00f27f/0/1531708488106.png" />
                                {item.alert_description}
                            </div>
                        </h1>
                        <h1>
                        <div className="intel-top-tab2 intel-blue-tab">
                            <img width="10" src="https://safermedia.saferwatchapp.com/f40591c0-885a-11e8-b39d-dd2d4b00f27f/0/1531708488106.png" />
                            {item.alert_description}
                        </div>
                        </h1> */}