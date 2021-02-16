import React, { useState } from 'react';
import {useSelector} from 'react-redux';

// Basic functional component structure for React with default state
// value setup. When making a new component be sure to replace the
// component name TemplateFunction with the name for the new component.

function AdminAddItemForm() {
  // Using hooks we're creating local state for a "heading" variable with
  // a default value of 'Functional Component'
  const store = useSelector((store) => store);
  const [heading, setHeading] = useState('AdminAddItemForm Component');
  //"title", "poster", "description","genre_id"
  //local state variables

  return (
    <div className="addForm">
      <h2>{heading}</h2>
      {/*this will be a form for input*/}
    </div>
  );
}

export default AdminAddItemForm;