import React, { useState, useEffect, useRef } from 'react';

const blockname = 'select-dropdown';

interface MutableRefObject<T> {
  current: T;
}

type Option= {
  text: string,
  value: string
}

type SelectProps= {
  id: string,
  options: Option[],
  onSelect: (selectedOpt: Option) => void,
  label: string,
  placeholder: string,
  preSelectedOption: Option | undefined
}

const Select = ({ id, options, onSelect, label, placeholder, preSelectedOption }: SelectProps): JSX.Element => {
  const [selectedOption, setSelectedOption] = useState(preSelectedOption || options[0]);
  const [isOpen, setIsOpen] = useState(false);
  const container = useRef<HTMLInputElement>(null);

  const handleOutsideClick= (e : Event) => {
    if (container.current && !container.current.contains(e.target as Element)) {
      setIsOpen(false);
    }
  }

  useEffect(() => {
    window.addEventListener("mousedown", handleOutsideClick);
    return () => {
      window.removeEventListener("mousedown", handleOutsideClick);
    };
  }, []);

  const onOptionClick = (opt: Option) => {
    onSelect(opt);
    setSelectedOption(opt);
    setIsOpen(false);
  }

  const handleButtonClick = () => {
    setIsOpen(!isOpen);
  }

  const getOptions = () => (
    options.map((opt, i) => (
      <li
        key={i}
        className={`${blockname}__list-item`}
        onClick={() => onOptionClick(opt)}
      >
        {opt.text}
      </li>
    ))
  );

  return (
    <div className={blockname} ref={container} data-testid="select">
      <label
        className={`${blockname}__label`}
        htmlFor={id}>{label}</label>
      <div className={`${blockname}__dropdown`} id={id} >
        <button className={`${blockname}__button`}
          type="button"
          data-testid={ placeholder }
          onClick={() => handleButtonClick()}
        >
          {selectedOption.text || placeholder}
          <i className={isOpen ? 'arrow-up' : 'arrow-down'}></i>
        </button>
        {isOpen && (
          <div className={`${blockname}__list`} data-testid="list">
            <ul>
              {getOptions()}
            </ul>
          </div>
        )}
      </div>
    </div>
  )
};

export default Select;
