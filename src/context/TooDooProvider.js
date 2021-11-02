import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TooDooContext from './TooDooContext';

function TooDooProvider({ children }) {
  const [ taskList, setTaskList ] = useState([]);
  const [ inputText, setInputText ] = useState('');

  const contextValue = {
    taskList,
    setTaskList,
    inputText,
    setInputText
  }

  return(
    <TooDooContext.Provider value={ contextValue }>
      { children }
    </TooDooContext.Provider>
  );
}

TooDooProvider.propTypes = {
  children: PropTypes.element.isRequired,
}

export default TooDooProvider;
