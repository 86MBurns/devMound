import React from 'react';
import { useQuery } from '@apollo/client';
import {
  MDBCard,
  MDBCardBody,
  MDBCardTitle,
  MDBCardText,
  MDBCardImage,
  MDBBtn,
  MDBRow,
  MDBCol,
  MDBContainer,
  MDBRipple,
  MDBIcon,
} from 'mdb-react-ui-kit';
import JobListingCard from '../components/JobListing';
import JobListingCard2 from '../components/JobListing/index2';
import JobListingCard3 from '../components/JobListing/index3';

// import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const thoughts = data?.thoughts || [];

  return (
    <main>
      <MDBContainer fluid>
        <JobListingCard />
        <JobListingCard2 />
        <JobListingCard3 />
    </MDBContainer>
    </main>
  );
};

export default Home;
