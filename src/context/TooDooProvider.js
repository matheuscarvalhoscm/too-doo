import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TooDooContext from './TooDooContext';

function TooDooProvider(children) {
  const { taskList, setTaskList } = useState();

  const contextValue = {
    taskList,
    setTaskList
  }

  return(
    <TooDooContext value={ contextValue }>
      { children }
    </TooDooContext>
  );
}

TooDooProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default TooDooProvider;
