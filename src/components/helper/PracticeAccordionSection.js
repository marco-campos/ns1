import React from 'react';

const PracticeAccordionSection = ({ SectionComponent, sectionTitle, pageIndex }) => {
    return(
        <div class="accordion-item">
            <h2 class="accordion-header">
                <button class="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target={`#flush-collapse${pageIndex}`} aria-expanded="false" aria-controls={`flush-collapse${pageIndex}`}>
                {sectionTitle}
                </button>
            </h2>
            <div id={`flush-collapse${pageIndex}`} class="accordion-collapse collapse" data-bs-parent="#accordionFlushExample">
                <div class="accordion-body">
                {SectionComponent}
                </div>
            </div>
        </div>
    )
}

export default PracticeAccordionSection