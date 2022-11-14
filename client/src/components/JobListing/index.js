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
                    <h5>Quant trident shirts</h5>
                    <div className="d-flex flex-row">
                        <div className="text-danger mb-1 me-2">
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        </div>
                        <span>310</span>
                    </div>
                    <div className="mt-1 mb-0 text-muted small">
                        <span>100% cotton</span>
                        <span className="text-primary"> • </span>
                        <span>Light weight</span>
                        <span className="text-primary"> • </span>
                        <span>
                        Best finish
                        <br />
                        </span>
                    </div>
                    <div className="mb-2 text-muted small">
                        <span>Unique design</span>
                        <span className="text-primary"> • </span>
                        <span>For men</span>
                        <span className="text-primary"> • </span>
                        <span>
                        Casual
                        <br />
                        </span>
                    </div>
                    <p className="text-truncate mb-4 mb-md-0">
                        There are many variations of passages of Lorem Ipsum
                        available, but the majority have suffered alteration in some
                        form, by injected humour, or randomised words which don't
                        look even slightly believable.
                    </p>
                    </MDBCol>
                    <MDBCol
                    md="6"
                    lg="3"
                    className="border-sm-start-none border-start"
                    >
                    <div className="d-flex flex-row align-items-center mb-1">
                        <h4 className="mb-1 me-1">$13.99</h4>
                        <span className="text-danger">
                        <s>$20.99</s>
                        </span>
                    </div>
                    <h6 className="text-success">Free shipping</h6>
                    <div className="d-flex flex-column mt-4">
                        <MDBBtn color="primary" size="sm">
                        Details
                        </MDBBtn>
                        <MDBBtn outline color="primary" size="sm" className="mt-2">
                        Add to wish list
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