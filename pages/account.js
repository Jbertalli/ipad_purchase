import { useRouter } from 'next/router';
import { Button } from 'semantic-ui-react';

export default function Account() {

  const router = useRouter();

  return (
    <>
      <Button
        onClick={() =>router.push('/')}
        style={{
          background: 'rgb(0, 113, 227)',
          color: 'white',
          fontWeight: '100'
        }}
      >
        Return Home
      </Button>
    </>
  );
}
