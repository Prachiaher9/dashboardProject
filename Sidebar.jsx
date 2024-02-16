import React, { useState } from "react";
import styled from "styled-components";
import logo from "../images/logo.png";
import { FaHome, FaChartBar, FaMap, FaCog, FaTable } from "react-icons/fa";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
const SidebarContainer = styled.div`
  background-color: #274472;
  width: 250px;
  height: 100vh;
  padding: 20px;
  position: fixed;
  overflow-y: auto;
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;

  &::-webkit-scrollbar {
    width: 10px;
  }

  &::-webkit-scrollbar-track {
    background: transparent;
  }

  &::-webkit-scrollbar-thumb {
    background-color: transparent;
    border-radius: 20px;
    transition: background-color 0.3s;
  }

  &::-webkit-scrollbar-thumb:hover {
    background-color: #ccc;
  }
`;

const Label = styled.div`
  color: #ffffff;
  padding: 10px;
  margin-bottom: 10px;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    margin-right: 10px;
  }
`;

const LogoImage = styled.div`
  img {
    max-width: 100%;
  }
`;

const CustomCloseButton = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const CustomOffcanvas = styled.div`
  background-color: #274472;
  height: 100%;
`;

const Sidebar = ({ isSidebarVisible, toggleSidebar }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <section>
      {/* Large screen sidebar */}
      <div
        className={`sidebar d-lg-block  ${
          isSidebarVisible ? "visible" : "hidden"
        }`}
      >
        <div
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <SidebarContainer
            style={{
              scrollbarColor: isHovered
                ? "white white"
                : "transparent transparent",
            }}
          >
            <LogoImage>
              <img src={logo} alt="" />
            </LogoImage>

            {/* MENU */}
           
            <Label>
              <FaHome/>
              <span>Dashboards</span>
            </Label>
            
            <Label>
              <FaMap />
              <span>PAGES</span>
            </Label>
            <Label>
              <FaCog />
              <span>COMPONENTS</span>
            </Label>
            <Label>
              <FaCog />
              <span>Base UI</span>
            </Label>
            <Label>
              <FaCog />
              <span>Advance UI</span>
            </Label>
            <Label>
              <FaCog />
              <span>Widgets</span>
            </Label>
            <Label>
              <FaCog />
              <span>Forms</span>
            </Label>
            <Label>
              <FaTable />
              <span>Tables</span>
            </Label>
            <Label>
              <FaChartBar />
              <span>Charts</span>
            </Label>
            <Label>
              <FaCog />
              <span>Icons</span>
            </Label>
            <Label>
              <FaMap />
              <span>Maps</span>
            </Label>
            <Label>
              <FaCog />
              <span>Multi Level</span>
            </Label>
          </SidebarContainer>
        </div>
      </div>
    </section>
  );
};

export default Sidebar;

