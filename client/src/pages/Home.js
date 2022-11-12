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
<<<<<<< HEAD
      <div className="flex-row justify-center">
        <div
          className="col-12 col-md-10 mb-3 p-3"
          style={{ border: '1px dotted #1a1a1a' }}
        >
          Yo! It's Working! 
        </div>
        <div className="col-12 col-md-8 mb-3">
          {/* {loading ? (
            <div>Loading...</div>
          ) : (
            "Something here"
          )} */}
        </div>
      </div>
=======
      <MDBContainer fluid>
        <JobListingCard />
        <JobListingCard />
        <JobListingCard />
    </MDBContainer>
>>>>>>> 83ee9cbe2f3d97436e5b36a92a2dc4b952326609
    </main>
  );
};

export default Home;
