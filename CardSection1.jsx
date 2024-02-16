import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.css';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUserGroup } from '@fortawesome/free-solid-svg-icons';
import { faChartLine } from '@fortawesome/free-solid-svg-icons';
import { faClock } from '@fortawesome/free-regular-svg-icons';
import img from '../images/image1.png';
const CardSection1 = () => {
  return (
    <div className="container cardsection1 mb-0">
      <div className="row">
        {/* First card in the first row */}
        <div className=" col-sm-12 upgrade-content">
          <div className="card border-0 shadow mb-3">
            {/* Card content goes here */}
            <div className="card-body">
              <div className="d-flex justify-content-between upgrade-heading text1">
                <div className="d-flex gap-2 ">
                  <i class="fa-solid fa-triangle-exclamation m-1"></i>
                  <p>Your free trial expired in 17 days</p>
                </div>
                <div>
                  <p style={{ borderBottom: "1px solid #CCCC00 " }}>Upgrade</p>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="d-flex flex-column">
                  <div className="d-flex gap-2">
                    <p>Upgrade your plan from a Free trial, to ‘Premium Plan</p>
                    <FontAwesomeIcon icon={faArrowRight} className="m-1" />
                  </div>
                  <div>
                    <button className="upgrate-btn ">Upgrade Account!</button>
                  </div>
                </div>
                <div className="img-container">
                  <img src={img} alt="" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Two cards in the second row */}
        <div className="col-md-6 col-sm-12">
          <div className="card-container">
            <div className="card border-0 shadow  mb-3">
              {/* Card content goes here */}
              <div className="card-body text2">
                <div className="d-flex justify-content-between">
                  <p>Users</p>
                  <div className="icons">
                    <FontAwesomeIcon icon={faUserGroup} />
                  </div>
                </div>
                <h3>28.10k</h3>
                <div className="d-flex">
                  <div className="d-flex arrow-btn">
                    <i class="fa-solid fa-arrow-up"></i>
                    <span>16.24%</span>
                  </div>
                  <p className="m-1">vs. previous month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="col-md-6 col-sm-12">
        <div className="card-container">
          <div className="card border-0 shadow  mb-3">
            {/* Card content goes here */}
            <div className="card-body text2">
              <div className="d-flex justify-content-between">
                <p>Users</p>
                <div className="icons">
                  <FontAwesomeIcon icon={faChartLine} />
                </div>
              </div>
              <h3>28.10k</h3>
              <div className="d-flex">
                <div className="d-flex arrow-btn">
                  <i class="fa-solid fa-arrow-up"></i>
                  <span>16.24%</span>
                </div>
                <p className="m-1">vs. previous month</p>
              </div>
            </div>
          </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Two cards in the third row */}
        <div className=" col-md-6 col-sm-12">
          <div className="card-container">
            <div className="card border-0 shadow  mb-3">
              {/* Card content goes here */}
              <div className="card-body text2">
                <div className="d-flex justify-content-between">
                  <p>Users</p>
                  <div className="icons">
                    <FontAwesomeIcon icon={faClock} />
                  </div>
                </div>
                <h3>28.10k</h3>
                <div className="d-flex">
                  <div className="d-flex arrow-btn">
                    <i class="fa-solid fa-arrow-up"></i>
                    <span>16.24%</span>
                  </div>
                  <p className="m-1">vs. previous month</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className=" col-md-6 col-sm-12">
        <div className="card-container">
          <div className="card border-0 shadow  mb-3">
            {/* Card content goes here */}
            <div className="card-body text2">
              <div className="d-flex justify-content-between">
                <p>Users</p>
                <div className="icons">
                  <i class="fa-solid fa-arrow-up-right-from-square"></i>
                </div>
              </div>
              <h3>28.10k</h3>
              <div className="d-flex">
                <div className="d-flex arrow-btn">
                  <i class="fa-solid fa-arrow-up"></i>
                  <span>16.24%</span>
                </div>
                <p className="m-1">vs. previous month</p>
              </div>
            </div>
          </div>
        </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection1;
