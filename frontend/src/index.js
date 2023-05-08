import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { FronteggProvider } from '@frontegg/react';

const contextOptions = {
	baseUrl: 'https://app-ej335jjmuul9.frontegg.com',
	clientId: 'ca837454-18e2-441b-b620-007a509db5cd'
};

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
	<FronteggProvider contextOptions={contextOptions} hostedLoginBox={true}>
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</FronteggProvider>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
