import React from 'react';
import './index.css'

const Pagination = ({totalTaskCount, onChange, activePage}) => {

  const paginationLength = Math.ceil(totalTaskCount / 3)

  const onClickCreator = (value) => (e) => {
    e.preventDefault();
    onChange(value);
  };

  return (
      <ul className='pagination'>
        {Array.from({length: paginationLength}).map((_, index) => {
          return (
              <li key={index} className=''>
                <a
                    className={activePage === index + 1 ? 'active' : ''}
                    href={'?page=' + (index + 1)}
                    onClick={onClickCreator(index + 1)}>
                  {index + 1}
                </a>
              </li>
          );
        })}
      </ul>
  );
};

export default Pagination;
