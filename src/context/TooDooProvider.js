import React, { useState } from 'react';
import PropTypes from 'prop-types';
import TooDooContext from './TooDooContext';

function TooDooProvider({ children }) {
  const [taskList, setTaskList] = useState(() => {
    const getFromLocalStorage = localStorage.getItem('list');
    const listFromLocalStorage = JSON.parse(getFromLocalStorage);
    return listFromLocalStorage || [];
  });
  const [inputText, setInputText] = useState('');
  const [editingInput, setEditingInput] = useState('');

  const contextValue = {
    taskList,
    setTaskList,
    inputText,
    setInputText,
    editingInput,
    setEditingInput,
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
// 
export default TooDooProvider;

// Reference to get the list from local storage: https://blog.logrocket.com/using-localstorage-react-hooks/#:~:text=To%20begin%20extracting%20the%20localStorage,key)%3B%20const%20initial%20%3D%20JSON.
// The link above helped me a lot. I was able to save items on local storage but I struggled on getting them. 
