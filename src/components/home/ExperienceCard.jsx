import React from 'react';

import {
  Col,
} from "react-bootstrap";

const ExperienceCard = ({ data }) => {
  return (
    // <Col lg="6" >
    <Col >
      <div className="text-center">
        <img className=" bg-white mb-3" src={data.companylogo} alt="" height={150}/>
        <p className="lead">
          <b>{data.role}</b>
          <br />
          {data.company}
          <br />
          {data.date}
        </p>

      </div>
    </Col>
  );
}

export default ExperienceCard;