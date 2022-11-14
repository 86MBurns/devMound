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

const JobListingCard3 = () => {

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
                        src="client\public\images\generic-code.jpg"
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
                    <h5>"Tesla "</h5>
                    <div className="d-flex flex-row">
                        <div className="text-danger mb-1 me-2">
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        </div>
                        <span>Software Engineer, Linux Update Systems</span>
                    </div>
                    <div className="mt-1 mb-0 text-muted small">
                        <span>Internship for Cloud Engineeringn.</span>
                        <span className="text-primary"> • </span>
                        <span>Qualified in EE/CE/CS, or the equivalent in experience with evidence of exceptional ability. Several years of experience working with and writing software for embedded Linux systems; experience with software/kernel updates is plus. Proficiency in C/Go Programming, experience in Python/Perl/Bash scripting. Understanding of software code signing, authenticated encryption, or other cryptographic techniques for ensuring secure software deployment. Excellent debugging and troubleshooting skills. Network programming experience with a focus on any of the following: TFTP, HTTP(s), websockets, or integrating custom TCP/IP protocols. Experience with serial, I2C, and SPI protocols is a plus.</span>
                        <span className="text-primary"> • </span>
                        <span>
                        The Update Systems teams builds and maintains the Linux services that perform the Over-the-Air (OTA) update of Tesla's vehicle and energy products spanning across both our customer and engineering fleets. In addition to infotainment and autopilot software updates, our systems orchestrate the update of a wide array of other components ranging from individual body controllers to navigation map data and video games. We work closely with several other teams to provide a fast, flexible, and reliable update platform to ensure Tesla products can improve quickly and deliver new experiences to our customers. What You’ll Do:  Deliver high reliability C/Go code for updating firmware or software components on Linux hosts or attached peripherals. Work with a variety of teams to design, develop, and integrate new software update mechanisms and flow. Troubleshoot update issues and work closely with our validation teams to build testing infrastructure for more resilient systems. Analyze fleet update metrics to find potential issues and suggest improvements.
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
                        <h4 className="mb-1 me-1">$90-125K a year</h4>
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




export default JobListingCard3;