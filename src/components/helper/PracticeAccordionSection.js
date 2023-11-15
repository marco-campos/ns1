import React from 'react';

const PracticeAccordionSection = ({ title, section, index, content }) => {
    return (
          <div className="accordion-item">
            <h2 className="accordion-header">
              <button
                className="accordion-button collapsed"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target={`#flush-collapse${index}`}
                aria-expanded="false"
                aria-controls={`flush-collapse${index}`}
              >
                {title}
              </button>
            </h2>
            <div id={`flush-collapse${index}`} className="accordion-collapse collapse" data-bs-parent={`#accordionFlushP${section}`}>
              <div className="accordion-body">
                {content}
              </div>
            </div>
          </div>
    );
  };
  
export default PracticeAccordionSection