import React from 'react';
import { Link } from 'react-router-dom';

import Auth from '../../utils/auth';
import { useQuery } from '@apollo/client';
import {
  MDBCard,
  MDBCardBody,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBRipple,
  MDBIcon,
} from 'mdb-react-ui-kit';

const JobListingCard = () => {

    return(
    <MDBRow className="justify-content-center mb-0">
        <MDBCol md="12" xl="10">
            <MDBCard className="shadow-0 border rounded-3 mt-5 mb-3">
                <MDBCardBody>
                <MDBRow>
                    <MDBCol md="12" lg="3" className="mb-4 mb-lg-0">
                    <MDBRipple
                        rippleColor="light"
                        rippleTag="div"
                        className="bg-image rounded hover-zoom hover-overlay"
                    >
                        <MDBCardImage
                        src="../../../microsoftiss.ico"
                        fluid
                        className="w-100"
                        />
                        <a href="#!">
                        <div
                            className="mask"
                            style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                        ></div>
                        </a>
                    </MDBRipple>
                    </MDBCol>
                    <MDBCol md="6">
                    <h5>"Microsoft "</h5>
                    <div className="d-flex flex-row">
                        <div className="text-danger mb-1 me-2">
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        </div>
                        <span>Cloud Networking Engineer: Intern Opportunities for University Graduates</span>
                    </div>
                    <div className="mt-1 mb-0 text-muted small">
                        <span>Internship for Cloud Engineeringn.</span>
                        <span className="text-primary"> • </span>
                        <span>Pursuing a bachelor's degree in Electrical Engineering, Optical Engineering, Computer Science, Engineering, Information Technology, or related field. OR technical experience in network design, development, or automation Must have at least one additional</span>
                        <span className="text-primary"> • </span>
                        <span>
                        Develops knowledge of network technologies to draw insights that aid in network design, implementation, and operation. Assists in the design of reliable, scalable, and high-performance network features or components with guidance from other engineers. 
                        <br />
                        </span>
                    </div>
                    <div className="mb-2 text-muted small">
                        <span></span>
                        <span className="text-primary"> • </span>
                        <span></span>
                        <span className="text-primary"> • </span>
                        <span>
                        <br />
                        </span>
                    </div>
                    <p className="text-truncate mb-4 mb-md-0">
                        
                    </p>
                    </MDBCol>
                    <MDBCol
                    md="6"
                    lg="3"
                    className="border-sm-start-none border-start"
                    >
                    <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">$70-100K a year</h4>
                        <span className="text-danger">
                        <s></s>
                        </span>
                    </div>
                    <h6 className="text-success"></h6>
                    <div className="d-flex flex-column mt-4">
                        <MDBBtn color="primary" size="sm">
                        Apply
                        </MDBBtn>
                        <MDBBtn outline color="primary" size="sm" className="mt-2">
                       Share
                        </MDBBtn>
                    </div>
                    </MDBCol>
                </MDBRow>
                </MDBCardBody>
            </MDBCard>
        </MDBCol>
    </MDBRow>
    
    )   
}




export default JobListingCard;