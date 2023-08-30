// import { useState } from 'react';
import AccordionElement from '../../shared/UI/accordionElement/AccordionElement';
import CheckboxElement from '../../shared/UI/checkboxElement/CheckboxElement';
import getFullClassName from '../../shared/lib/helpers/getFullClassName';
import { AccordionCheckboxProps } from '../../shared/types';

const AccordionCheckbox = (props: AccordionCheckboxProps): JSX.Element => {
  const fullClassName = getFullClassName('accordion', props.additionalClassName);
  const handleCountryClick = (index: number): void => {
    const updatedStates = [...props.states];
    updatedStates[index] = !updatedStates[index];
    props.setStates(updatedStates);
  };

  return (
    <AccordionElement
      additionalClassName={fullClassName}
      label={props.label}
      details={
        <div className="form__checkbox-wrapper">
          {props.selectItems &&
            Object.values(props.selectItems).map((item, ind) => (
              <div className="form__checkbox" key={item}>
                <CheckboxElement checked={props.states[ind]} onChange={(): void => handleCountryClick(ind)} />
                <div>{item}</div>
              </div>
            ))}
        </div>
      }
    />
  );
};

export default AccordionCheckbox;
