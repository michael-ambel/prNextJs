import Link from "next/link";
import { NextPage } from 'next';

const NotFoundPage = () => {
  return (
    <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>Ticket Not Found</h1>
        <p>We can not seem to find the page you are looking for.</p>
        <p>Back to <Link href='/tickets'>Tickets</Link></p>
      </div>
  );
};

export default NotFoundPage;


