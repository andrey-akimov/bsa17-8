import 'babel-polyfill';
import React, { Component } from 'react';
import { render } from 'react-dom';
import './components/style.scss';
import App from './components/app.js';
import UsersList from './components/userslist.js';
import User from './components/user.js';
import AddUser from './components/adduser.js';

render(<App />, document.getElementById('app'));
