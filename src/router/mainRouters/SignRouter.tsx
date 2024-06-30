import React from 'react';
import { SignInPage } from 'pages/sign/SignInPage';
import SignUpPage from 'pages/sign/SignUpPage';

const SignRouter = [
  {path: '/signUp', element:<SignUpPage />},
  {path: '/signIn', element:<SignInPage />},
];
export default SignRouter
