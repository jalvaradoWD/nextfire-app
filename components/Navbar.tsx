import React from 'react';
import Link from 'next/link';
import Image from 'next/image';

const Navbar = () => {
  const user = true;
  const username = true;

  return (
    <nav className="navbar">
      <ul>
        <li>
          <Link href="/">Feed</Link>
        </li>
      </ul>

      {username && (
        <>
          <li className="push-left">
            <Link href="/admin">
              <button className="btn-blue">Write Posts</button>
            </Link>
          </li>
          <li>
            <Link href={`/${username}`}>
              Test
              {/* <Image src={user?.photoURL ? '' : ''} alt="" /> */}
            </Link>
          </li>
        </>
      )}
      {!username && (
        <>
          <li>
            <Link href="/enter">
              <button className="btn-blue">Log In</button>
            </Link>
          </li>
        </>
      )}
    </nav>
  );
};

export default Navbar;
