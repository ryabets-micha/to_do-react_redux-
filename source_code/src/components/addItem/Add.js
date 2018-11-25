import React from 'react';
import { Link } from 'react-router-dom';

import plus from './plus.svg';

function Add() {
  return (
    <Link to='/addForm' className="add-link">
      <img className="plus" src={plus} alt="plus"/>
    </Link>
  );
} 

export default Add;