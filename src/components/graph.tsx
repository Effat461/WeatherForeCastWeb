import React, { useEffect } from 'react';
import axios from 'axios';
import { BrowserRouter as Router, Route } from 'react-router-dom'
const App = () =>{
useEffect(() => {
    axios.get(`https://60fbca4591156a0017b4c8a7.mockapi.io/fakeData`)
        .then((response) => {
            // setAPIData(response.data);
        })
}, [])
};
export default App;