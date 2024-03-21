import React, { useState } from 'react';
import './style.css';
import BUILT_APPS from './Built_Apps';
import CLIENT_PROJECTS from './Client_Projects';
// import { Row, Col } from "react-bootstrap";
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';

const MyPortfolioTabs = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  // const tabTitles = ['Client Project Examples', 'Application Showcase'];

  // const goToNextTab = () => {
  //   setActiveIndex((prevIndex) => (prevIndex + 1) % tabTitles.length);
  // };

  // const goToPreviousTab = () => {
  //   setActiveIndex((prevIndex) => (prevIndex - 1 + tabTitles.length) % tabTitles.length);
  // };

  return (
    <Tabs selectedIndex={activeIndex} onSelect={index => setActiveIndex(index)}>
      <TabList>
        <Tab>View Client Projects</Tab>
        <Tab>View Applications</Tab>
      </TabList>
      <TabPanel>
        <div>
          <CLIENT_PROJECTS />
        </div>
      </TabPanel>
      <TabPanel>
        <div>
          <BUILT_APPS />
        </div>
      </TabPanel>
    </Tabs>
  );
};


export default MyPortfolioTabs;
