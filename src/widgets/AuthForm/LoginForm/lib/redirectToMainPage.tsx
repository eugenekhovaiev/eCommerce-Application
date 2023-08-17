import { Navigate } from 'react-router-dom';

const redirectToMainPage = (): void => {
  setTimeout(() => {
    console.log('Redirect to main');
    return <Navigate to="/" />;
    // console.log('Redirect to main');
  }, 1500);
};

export default redirectToMainPage;
