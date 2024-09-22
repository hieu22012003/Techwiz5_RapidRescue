import React from 'react';
import Sidebar from './Sidebar';
import Nav from './Nav';

const RouteLocation = () => {
    return (
        <>
        <div>
          <div
            className="page-wrapper"
            id="main-wrapper"
            data-layout="vertical"
            data-navbarbg="skin6"
            data-sidebartype="full"
            data-sidebar-position="fixed"
            data-header-position="fixed">
            {/* left side-bar */}
            <Sidebar />
            {/* right */}
            <div className="body-wrapper">
              {/* header */}
              <Nav />
              {/* body */}
              <div
                className="container-fluid"
                style={{
                  maxWidth: "100%",
                  paddingLeft: "0",
                  paddingRight: "0",
                }}>
                <div className="row">
                  <div className="col-lg-12 d-flex align-items-stretch">
                    <div className="card w-100"></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </>
    );
};

export default RouteLocation;