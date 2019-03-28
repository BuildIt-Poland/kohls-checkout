import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';
// import { faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

const AccordionHeader = styled.div`
  margin-bottom: 0.5rem;
`;

AccordionHeader.displayName = 'AccordionHeader';

const Label = styled.h2`
  text-align: center;
  cursor: pointer;
  margin: 0;
  text-transform: uppercase;
  font-size: 1rem;
`;

Label.displayName = 'Label';

// const ChevronDown = props => <FontAwesomeIcon className={props.className} icon={faChevronDown} />;
// const ChevronUp = props => <FontAwesomeIcon className={props.className} icon={faChevronUp} />;

const ChevronDown = props => <div />;
const ChevronUp = props => <div />;

const chevronStyles = css`
  float: right;
`;

const ChevronDownStyled = styled(ChevronDown)`
  ${chevronStyles}
`;
ChevronDownStyled.displayName = 'ChevronDown';

const ChevronUpStyled = styled(ChevronUp)`
  ${chevronStyles}
`;
ChevronUpStyled.displayName = 'ChevronUp';

const HR = styled.hr`
  border-top: 1px solid #e0e0e0;
`;

HR.displayName = 'HR';

const Accordion = ({ children, label, isOpenByDefault }) => {
  const [isAccordionOpen, handleAccordionToggle] = useState(isOpenByDefault);

  const toggleAccordion = () => {
    handleAccordionToggle(!isAccordionOpen);
  };

  return (
    <div>
      <AccordionHeader onClick={toggleAccordion}>
        <Label>
          {label}
          {isAccordionOpen ? <ChevronDownStyled /> : <ChevronUpStyled />}
        </Label>
      </AccordionHeader>
      {isAccordionOpen ? children : <HR />}
    </div>
  );
};

Accordion.defaultProps = {
  isOpenByDefault: true
};

Accordion.propTypes = {
  isOpenByDefault: PropTypes.bool,
  children: PropTypes.element,
  label: PropTypes.string.isRequired
};

export default Accordion;
