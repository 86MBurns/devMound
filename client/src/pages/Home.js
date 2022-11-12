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
import JobListingEl from '../components/JobListing';

// import { QUERY_THOUGHTS } from '../utils/queries';

const Home = () => {
  // const { loading, data } = useQuery(QUERY_THOUGHTS);
  // const thoughts = data?.thoughts || [];

  return (
    <main>
      <MDBContainer fluid>
        <JobListingCard />
        <JobListingCard />
        <JobListingCard />
    </MDBContainer>
    </main>
  );
};

export default Home;
