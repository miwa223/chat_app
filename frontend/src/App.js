import './App.css';
import {useAuth, useLoginWithRedirect, ContextHolder} from "@frontegg/react";

function App() {
	const { user, isAuthenticated } = useAuth();
	const loginWithRedirect = useLoginWithRedirect();
	const logout = () => {
		const baseUrl = ContextHolder.getContext().baseUrl;
		window.location.href = `${baseUrl}/oauth/logout?post_logout_redirect_uri=${window.location}`;
	}

  return (
	<div className="App">
		<header className="App-header">
			<p>Edit <code>src/App.js</code> and save to reload.</p>
		</header>
		{ isAuthenticated ? (
			<div>
				<div>
					<img src={user?.profilePictureUrl} alt={user?.name}/>
				</div>
				<div>
					<span>Loged in as: {user?.name}</span>
				</div>
				<div>
					<button onClick={() => alert(user.accessToken)}>What is my accrss token?</button>
				</div>
				<div>
					<button onClick={() => logout()}>Click to logout</button>
				</div>
			</div>
		) : (
			<div>
				<button onClick={() => loginWithRedirect()}>Click me to login</button>
			</div>
		)}
	</div>
  );
}

export default App;
