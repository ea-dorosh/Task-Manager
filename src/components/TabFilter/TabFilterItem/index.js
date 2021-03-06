import React from 'react';
import './index.css';
import {useDispatch} from 'react-redux';

const TabFilterItem = ({title, isActive, filterHandle}) => {
  const dispatch = useDispatch();

  return (
      <div
          className={`tab-filter__item 
          ${isActive ? 'active' : ''} 
          ${title === 'asc' || title === 'desc' ?
              title === 'asc' ?
                  'asc'
                  : 'desc'
              : ''}`}
          onClick={() => dispatch(filterHandle(title))}>
        {title === 'asc' || title === 'desc' ? '' : title}
      </div>
  );
}

export default TabFilterItem
