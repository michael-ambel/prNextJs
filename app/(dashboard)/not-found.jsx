import Link from "next/link";

export default function NotFound() {
    return (
      <div style={{ textAlign: 'center', marginTop: '100px' }}>
        <h1>Page Not Found</h1>
        <p>We can not seem to find the page you are looking for.</p>
        <p>Back to <Link href='/'>Dashboard</Link></p>
      </div>
    );
  }