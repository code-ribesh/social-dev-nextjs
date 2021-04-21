import { useContext } from 'react';
import Link from 'next/link';
import { UserContext } from '../../lib/context';
import { auth } from '../../lib/firebase';

export default function UserProfilePage({}) {
  const { user } = useContext(UserContext);

  return (
    <main>
      {user && (
        <>
          <h2>User Profile Page</h2>
          <li>{user?.displayName}</li>
          <li>{user?.email}</li>

          <Link href='/'>
            <button className='btn-blue' onClick={() => auth.signOut()}>
              Sign Out
            </button>
          </Link>
        </>
      )}{' '}
      {!user && (
        <>
          <Link href='/enter'>
            <button className='btn-blue'>Sign In</button>
          </Link>
        </>
      )}
    </main>
  );
}
