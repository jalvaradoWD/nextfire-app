import type { NextPage } from 'next';
import Link from 'next/link';

import Loader from '../components/Loader';

const Home: NextPage = () => {
  return (
    <div>
      <Loader show={true} />
    </div>
  );
};

export default Home;
