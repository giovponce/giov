import React, { useState } from "react";
import PropTypes from "prop-types";
import Tabs from "@mui/material/Tabs";
import Tab from "@mui/material/Tab";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import "./TabPanel.scss";

function TabPanel(props) {
  const { children, value, index, ...other } = props;

  return (
    <div
      role="tabpanel"
      hidden={value !== index}
      id={`simple-tabpanel-${index}`}
      aria-labelledby={`simple-tab-${index}`}
      {...other}
    >
      {value === index && (
        <Box sx={{ p: 3 }}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </div>
  );
}

TabPanel.propTypes = {
  children: PropTypes.node,
  index: PropTypes.number.isRequired,
  value: PropTypes.number.isRequired,
};

function a11yProps(index) {
  return {
    id: `simple-tab-${index}`,
    "aria-controls": `simple-tabpanel-${index}`,
  };
}

export default function BasicTabs() {
  const [value, setValue] = useState(0);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Box sx={{ borderBottom: 1, borderColor: "divider" }}>
        <Tabs
          value={value}
          onChange={handleChange}
          indicatorColor="secondary"
          aria-label="basic tabs example"
          variant="scrollable"
          scrollButtons
          allowScrollButtonsMobile
        >
          <Tab label="IBM" {...a11yProps(0)} />
          <Tab label="Brightcove" {...a11yProps(1)} />
          <Tab label="Wizeline" {...a11yProps(2)} />
          <Tab label="Neon Domain" {...a11yProps(3)} />
          <Tab label="Laboratoria" {...a11yProps(4)} />
        </Tabs>
      </Box>
      <TabPanel value={value} index={0}>
        <div>
          <p>
            <p className="job-title">Applications Developer </p>
            <a
              href="https://www.ibm.com"
              rel="noreferrer"
              target="_blank"
            >
              @IBM
            </a>
          </p>
          <p className="smaller">Nov 2024 - Present</p>
          <ul className="ul-list">
            <li>
              Contributed to the creation of 30+ modular, reusable React
              components, wired to backend services through typed APIs and
              shared data contracts.
            </li>
            <li>
              Contributed to an enterprise-scale initiative with $0.59B+ USD in
              first-year revenue impact, focusing on frontend reliability and
              user experience in high-traffic environments.
            </li>
            <li>
              Partnered with cross-functional teams to deliver features using
              React, TypeScript, and Tailwind CSS.
            </li>
            <li>
              Supported revenue-driving product customization flows involving
              dynamic measurements, validation rules, and pricing calculations.
            </li>
            <li>
              Collaborated closely with product, design, and backend teams to
              translate business requirements into reliable, maintainable
              application features.
            </li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel value={value} index={1}>
        <div>
          <p>
            <p className="job-title">Web Developer </p>
            <a
              href="https://www.brightcove.com/en"
              rel="noreferrer"
              target="_blank"
            >
              @Brightcove
            </a>
          </p>
          <p className="smaller">Apr 2024 - Aug 2024</p>
          <ul className="ul-list">
            <li>
              Spearheaded the migration from Gatsby to React and Next.js and the
              development of accessible features in the application.
            </li>
            <li>
              Identified key areas for improvement and fixed the three major
              causes of navigation issues impacting users.
            </li>
            <li>
              Integrated Contentful for streamlined content management to
              implement innovative features and optimize user experience.
            </li>
            <li>
              Collaborated and worked with technologies like Vercel, Styled
              Components, and AWS.
            </li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel value={value} index={2}>
        <div>
          <p>
            <p className="job-title">Software Engineer II </p>
            <a
              href="https://www.wizeline.com/"
              rel="noreferrer"
              target="_blank"
            >
              @Wizeline
            </a>
          </p>
          <p className="smaller">Jan 2022 - Apr 2024</p>
          <ul className="ul-list">
            <li>
              Actively engaged in the software development lifecycle utilizing
              Scrum and Agile methodologies, ensuring timely delivery of
              high-quality components.
            </li>
            <li>
              Collaborated on multiple projects, analyzing UX and design
              requirements and transforming them into functional components while
              debugging and optimizing applications.
            </li>
            <li>
              Developed with Angular, React, React Native, and ARC XP across
              diverse client engagements.
            </li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel value={value} index={3}>
        <div>
          <p>
            <p className="job-title">Front End Developer </p>
            <a href="https://neondomain.com/" rel="noreferrer" target="_blank">
              @Neon Domain
            </a>
          </p>
          <p className="smaller">May 2020 - Dec 2021</p>
          <ul className="ul-list">
            <li>
              Developed and implemented tailored software solutions based on
              client requirements, focusing on UX/UI enhancements and responsive
              design for mobile devices.
            </li>
            <li>
              Conducted thorough error checking and debugging, leveraging
              technologies like Angular, Sass, REST APIs, and Git to deliver
              robust, user-friendly applications.
            </li>
          </ul>
        </div>
      </TabPanel>
      <TabPanel value={value} index={4}>
        <div>
          <p>
            <p className="job-title">Front End Developer Bootcamp </p>
            <a
              href="https://www.laboratoria.la/"
              rel="noreferrer"
              target="_blank"
            >
              @Laboratoria
            </a>
          </p>
          <p className="smaller">Oct 2019 - May 2020</p>
          <ul className="ul-list">
            <li>Simulated work environment.</li>
            <li>Learning TDD using Jest and React Testing Library.</li>
            <li>
              Learning the basics of Agile, Scrum and Kanban methodologies,
              while applying them on projects.
            </li>
            <li>
              Developing with technologies such as ReactJS, HTML5, CSS3,
              Firebase, Git, ES6, Bootstrap, etc.
            </li>
            <li>
              Best Project:{" "}
              <a
                href="https://laboratoriadiyers.firebaseapp.com/"
                target="_blank"
                rel="noreferrer"
              >
                DIYers
              </a>
            </li>
          </ul>
        </div>
      </TabPanel>
    </Box>
  );
}
