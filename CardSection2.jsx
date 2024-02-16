import React from "react";
import PieChart from "./Charts/PieChart";
import HorizontalBarChart from './Charts/HorizontalBarChart'
import 'bootstrap/dist/css/bootstrap.min.css';
import  VerticalProgressiveChart from './Charts/VerticalProgressChart'
import MapChart from "./Charts/MapChart";
import TopPages from "./Charts/TopPages";
import WeekChart from "./Charts/WeekChart";
import Referrels from "./Charts/Referrels";

const CardSection2 = () => {
  return (
    <div className="container mt-4">
      <div className="row">
        {/* First Row */}
        
        <div className="col-md-6 mb-4">
          <div className="card h-100 border-0 shadow">
            <div className="card-body d-flex flex-column">
              <div className="d-flex">
                <MapChart/>
              </div>
              <div></div>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100 border-0 shadow">
            <div className="card-body d-flex flex-column">
              <div>
              <div>
                  <button>ALL</button>
                  <button>1M</button>
                  <button>6M</button>
                </div>
              <HorizontalBarChart/>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        {/* Second Row */}
        <div className="col-md-6 mb-4">
          <div className="card h-100 border-0 shadow">
            <div className="card-body d-flex flex-column">
            < VerticalProgressiveChart/>
            </div>
          </div>
        </div>

        <div className="col-md-6 mb-4">
          <div className="card h-100 border-0 shadow">
            <div className="card-body d-flex flex-column">
             <WeekChart/>
            </div>
          </div>
        </div>
      </div>

      {/* Third Row */}
      <div className="row">
        {/* Card 1 */}
        <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
          <div className="card border-0 shadow">
            <div className="card-body">
               <PieChart/>
            </div>
          </div>
        </div>

        {/* Card 2 */}
        <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
          <div className="card border-0 shadow">
            <div className="card-body">
              <Referrels/>
            </div>
          </div>
        </div>

        {/* Card 3 */}
        <div className="col-lg-4 col-md-4 col-sm-12 mb-3">
          <div className="card border-0 shadow">
            <div className="card-body">
              <TopPages/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CardSection2;
