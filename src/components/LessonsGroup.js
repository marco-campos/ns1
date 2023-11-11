import React from 'react';
import AccordionLearn from './accordions/AccordionLearn'
import Lesson1a from './lessons/lesson1/Lesson1a'

const LessonsGroup = () => {
  return (
    <>
      <ul className="nav nav-tabs" id="myTab" role="tablist">
        <li className="nav-item" role="presentation">
          <button
            className="nav-link active"
            id="section1-tab"
            data-bs-toggle="tab"
            data-bs-target="#section1"
            type="button"
            role="tab"
            aria-controls="section1"
            aria-selected="true"
          >
            Section 1
          </button>
        </li>
        <li className="nav-item" role="presentation">
          <button
            className="nav-link"
            id="section2-tab"
            data-bs-toggle="tab"
            data-bs-target="#section2"
            type="button"
            role="tab"
            aria-controls="section2"
            aria-selected="false"
          >
            Section 2
          </button>
        </li>
      </ul>

      <div className="tab-content" id="myTabContent">
        <div
          className="tab-pane fade show active"
          id="section1"
          role="tabpanel"
          aria-labelledby="section1-tab"
        >
          <div className="accordion" id="accordionSection1">
            <AccordionLearn section={"1a"} content={
              <Lesson1a />
            } />
            <AccordionLearn section={"1b"} content={"Coming Soon"} />
            <AccordionLearn section={"1c"} content={"Coming Soon"} />
            <AccordionLearn section={"1d"} content={"Coming Soon"} />
          </div>
        </div>

        <div
          className="tab-pane fade"
          id="section2"
          role="tabpanel"
          aria-labelledby="section2-tab"
        >
          {/* Accordion for Section 2 */}
          <div className="accordion" id="accordionSection2">
            <AccordionLearn section={"2a"} content={"Coming Soon"} />
            <AccordionLearn section={"2b"} content={"Coming Soon"} />
            <AccordionLearn section={"2c"} content={"Coming Soon"} />
          </div>
        </div>
      </div>
    </>
  );
};

export default LessonsGroup;
