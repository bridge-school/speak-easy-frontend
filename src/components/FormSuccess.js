import React from 'react';
import Button from './Button';
import { Link } from 'react-router-dom';

const FormSuccess = () => (
  <div className="w-60 center">
    <h2 className=" w-100 sans-serif pa0 f2 tl fw2 mh0 mt4 mb3">
      Submit an Event
    </h2>
    <div className="ba br3 b--lavender pa4 bg-white">
      Form submitted successfully!
      <div className="center mt3">
        <Link to="/">
          <Button title="View All Conferences" />
        </Link>
      </div>
    </div>
  </div>
);

export default FormSuccess;
