import React from 'react'

const AccordionLearn = ({ section, content }) => {
    return (
      <div className="accordion-item">
        <h2 className="accordion-header" id={`heading${section}`}>
          <button
            className="accordion-button collapsed" // Add 'collapsed' here
            type="button"
            data-bs-toggle="collapse"
            data-bs-target={`#collapse${section}`}
            aria-expanded="false"
            aria-controls={`collapse${section}`}
          >
            {`Section ${section}`}
          </button>
        </h2>
        <div
          id={`collapse${section}`}
          className="accordion-collapse collapse"
          aria-labelledby={`heading${section}`}
          data-bs-parent={`#accordionSection${section.charAt(0)}`} // Make sure this is the ID of the parent accordion
        >
          <div className="accordion-body">
            {content}
          </div>
        </div>
      </div>
    );
  };
  
  export default AccordionLearn;
  
