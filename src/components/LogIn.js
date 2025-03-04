import { signInWithGoogle } from './Firebase';
import { guestSignIn } from './Firebase';

function LogIn() {
  return (
    <div className="loginContainer">
      <img
        src="https://upload.wikimedia.org/wikipedia/commons/9/93/Facebook_logo_%282023%29.svg"
        className="loginLogo"
        alt="facebook"
      />
      <button className="sign-in" onClick={signInWithGoogle}>
        Log In with Google
      </button>
      <button className="sign-in" onClick={guestSignIn}>
        Use Guest Account
      </button>
      <div className="login-links">
        {' '}
        <a href="https://github.com/skeanster" target="_blank" rel="noreferrer">
          Github
        </a>{' '}
        -{' '}
        <a
          href="https://www.linkedin.com/in/ryanskeans/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn
        </a>{' '}
        -{' '}
        <a href="https://skeanster.github.io/" target="_blank" rel="noreferrer">
          Ryan Inc.
        </a>
      </div>
    </div>
  );
}

export default LogIn;
