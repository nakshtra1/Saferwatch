import React from 'react'
import '../Css/Page3.css'
import Card from './Card'
import Right from './Right'
import { Data } from './Data'


function Page3() {
    // console.log('Data======>', Data);
    return (
        <form id="publicAlertsForm" method="GET" action="">

            {/* Container Area */}

            <div className="col-md-12">
                <div className="row">
                    {/* left container */}
                    <div className="col-12 col-sm-12 col-md-12 col-lg-8">

                        {/* Category Tabs  */}
                        <div className="row">
                            <div className="pull-left px-3">
                                <div className="pa-alert-text" id="heading_page">Alerts</div>
                            </div>
                            <div className="pull-left pa-category-tabs">
                                <ul className="nav nav-pills">
                                    <li className="nav-item">
                                        <a className="nav-link active" data-toggle="pill" href="#all" data-category="0" id="all_tab">All</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#emergency" data-category="3" id="emergency_tab">Emergency</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#non-emergency" data-category="2" id="non_emergency_tab">Non-Emergency</a>
                                    </li>
                                    <li className="nav-item">
                                        <a className="nav-link" data-toggle="pill" href="#bolo-alert" data-category="5" id="bolo_alert_tab">BOLO Alerts</a>
                                    </li>
                                </ul>

                                {/* Tab panes */}
                                <div className="tab-content">
                                    <div className="tab-pane container active" id="all"></div>
                                    <div className="tab-pane container fade" id="emergency"></div>
                                    <div className="tab-pane container fade" id="non-emergency"></div>
                                    <div className="tab-pane container fade" id="bolo-alert"></div>
                                </div>
                            </div>
                        </div>
                        <div className="row my-4">
                            <div className="col-md-2">
                                <label htmlFor="ddlLocation" style={{ display: "flex", color: "#0F75BC", fontWeight: "500" }} id="filter_location_label">Filter Location </label>
                            </div>
                            <div className="col-md-10">
                                <select className="form-control select2-select select2-hidden-accessible" defaultValue={'DEFAULT'} name="location_id" id="ddlLocation" data-select2-id="ddlLocation" tabIndex="-1" data-hidden="true">
                                    <option value="DEFAULT" data-select2-id="2">All Locations</option>
                                    <option value="98da9490-c169-11ea-a5db-656b53812c4e" data-select2-id="12">100 Mile Locations</option>
                                    <option value="b494f2d0-e8f6-11e9-8a4e-f76520f941bf" data-select2-id="13">A Wide Loc  Update Check</option>
                                    <option value="f7725700-d920-11ed-b14c-53f7a3dc2ed3" data-select2-id="14">C21 MALL</option>
                                    <option value="0b5061f0-896d-11eb-acce-2f7fbcf44cbc" data-select2-id="15">CA Test Loc</option>
                                    <option value="4b3ea120-568b-11ea-aee1-1dbb33ad4c63" data-select2-id="16">Facebook Headquarters</option>
                                    <option value="c9bdbf70-d920-11ed-b14c-53f7a3dc2ed3" data-select2-id="17">MALL</option>
                                    <option value="18e29ee0-119f-11ec-b6f6-2352b717b4eb" data-select2-id="18">PATRAKAR AREA</option>
                                    <option value="bff927a0-93c5-11ec-bc89-fd024a3aa981" data-select2-id="19">Test2</option>
                                    <option value="6921bfa0-d919-11e9-831c-47ebf806c864" data-select2-id="20">Updated moved location</option>
                                    <option value="852554c0-122c-11ec-b7ab-ff7cad0a5ed5" data-select2-id="21">Uset test location</option>
                                </select>
                            </div>
                        </div>

                        <div className="row my-4">
                            <div className="col-md-2">
                                <label htmlFor="transalte_alert_card" style={{ display: "flex", color: "#0F75BC", fontweight: "500" }} id="translate_alert_label">Translate Alerts</label>
                            </div>
                            <div className="col-md-10">
                                <select className="form-control select2-select select2-hidden-accessible" defaultValue={'DEFAULT'} name="transalte_alert_card" id="transalte_alert_card" data-select2-id="transalte_alert_card" tabIndex="-1" data-hidden="true">
                                    <option value="en" selected="" data-select2-id="4">English</option>
                                    <option value="es">Spanish</option>
                                    <option value="pt">Portuguese</option>
                                    <option value="ht">Haitian</option>
                                    <option value="zh-CN">Chinese</option>
                                </select>
                            </div>
                        </div>

                        {/* CARD */}
                        {
                            Data.map((res, index) => {
                                return <Card key={index} {...res} />
                            })
                        }
                    </div>

                    {/* right container */}

                    <Right />

                    {/* main row div */}

                </div>

            </div>
        </form>

    )
}

export default Page3
