import React from 'react'
import '../Css/Right.css'

function Right() {
  return (
    <div className="col-12 col-sm-12 col-md-12 col-lg-4 sidebar_editor">
      <div className="sidebar-heading" id="report_a_non_head">Report a Non-Emergency</div>
      <div className="sidebar-links">
        <a href="https://itunes.apple.com/us/app/saferwatch/id1409514604?mt=8" target="_blank" id="download_safer_apple">Download SaferWatch from Apple</a>
      </div>
      <div className="sidebar-links mb-5">
        <a href="https://play.google.com/store/apps/details?id=com.ad.saferwatch" target="_blank" id="download_safer_google">Download SaferWatch from Google Play</a>
      </div>
      <div className="sidebar-heading" id="personal_safety">Personal Safety Resources</div>
      <div className="sidebar-links">
        <a href="http://www.missingkids.com/" target="_blank" id="national_missing">National Center for Missing and Exploited Children</a>
      </div>
      <div className="sidebar-links">
        <a href="https://suicidepreventionlifeline.org/" target="_blank" id="national_suicide">National Suicide Prevention Lifeline</a>
      </div>
      <div className="sidebar-links">
        <a href="https://centers.rainn.org/" id="incest_national" target="_blank">RAINN (Rape, Abuse &amp; Incest National Network</a>
      </div>
      <div className="sidebar-links">
        <a href=" https://www.thehotline.org/" id="domestc_violence" target="_blank">The National Domestic Violence Hotline</a>
      </div>
      <div className="sidebar-links">
        <a href="https://dare.org/" target="_blank" id="dare">D.A.R.E</a>
      </div>


    </div>
  )
}

export default Right
