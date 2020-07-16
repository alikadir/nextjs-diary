import React, { useEffect, useState } from 'react';
import { getUser } from '../operations/userOperation';
import { useRouter } from 'next/router';

export default WrappedComponent => {
  return props => {
    const router = useRouter();
    const [checking, setChecking] = useState(true);

    useEffect(() => {
      if (!getUser()) {
        router.push('/login?path=' + props.url.asPath);
      } else {
        setChecking(false);
      }
    });

    return checking ? <div>Checking...</div> : <WrappedComponent {...props} />;
  };
};
