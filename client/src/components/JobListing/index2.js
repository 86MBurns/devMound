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

const JobListingCard2 = () => {

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
                        src="client/public/images/generic-code.jpg"
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
                    <h5>Apple</h5>
                    <div className="d-flex flex-row">
                        <div className="text-danger mb-1 me-2">
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        <MDBIcon fas icon="star" />
                        </div>
                        <span>Data Scientist</span>
                    </div>
                    <div className="mt-1 mb-0 text-muted small">
                        <span>Data Science</span>
                        <span className="text-primary"> • </span>
                        <span>You have superb coding skills and hands-on experience with Big Data. You are proficient in writing code in one of the following languages: Python, R, Java, Perl, in addition to Hadoop experience (MapReduce, Hive, Spark SQL), and SQL. You have strong product intuition, data analysis skills, as well as business presentation skills to share your findings. You work comfortably with large sets of data using groundbreaking tools. You have a deep understanding of predictive modeling and algorithms for classification, regression, clustering, and anomaly detection. You have practical experience solving real-world problems using creative methods and researching state-of-the art. You are delivery-oriented, able to lead and execute modeling efforts from start to finish. Above all, we are seeking a phenomenal teammate with excellent interpersonal skills, and a self-starter.</span>
                        <br></br>
                        <span className="text-primary"> • </span>
                        <span>
                        You will be faced with a variety of problems to solve, and you will be equipped with strong analytical and quantitative skills to take on these of challenges in sophisticated environments. Your creativity and critical thinking skills will be put to good use, deconstructing problems and transforming your insights into data backed recommendations. In this role, you will perform the following: Work with large volumes of data; extract and manipulate large datasets using tools such as Spark SQL, command line and scripting languages. Analyze data covering a wide range of information from user profile to user behavior signals and identify new engagement patterns through data mining Conduct hypothesis driven exploratory analysis, build feature engineering, design the best structure, and select the most appropriate modeling techniques from a variety of machine learning models.  Design, develop, validate and maintain big data-driven predictive models, tools and pipelines to improve user engagement using latest technologies in machine learning, user pattern recognition, and data modeling based on user lifecycle events. Research and prototype supervised and unsupervised machine learning solutions to a variety of problems using both structured and unstructured data Collaborate with product, engineering, business groups to translate a business question to a data science problem and formulate innovative solutions to experiment and implement advanced data mining techniques.  Communicate complex concepts and the results of the analyses in a clear and effective manner to senior management.
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
                       <h4 className="mb-1 me-1">$100-135K a year</h4>
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

export default JobListingCard2;