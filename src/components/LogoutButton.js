import { auth } from './Firebase';

function LogoutButton() {
  return (
    auth.currentUser && (
      <button className="signOut" onClick={() => auth.signOut()}>
        Sign Out
      </button>
    )
  );
}

export default LogoutButton;
