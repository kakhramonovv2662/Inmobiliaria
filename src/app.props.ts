import { getSubdomain } from '@utils/url';
import { useMemo, useState } from 'react';

export const useAppProps = () => {
  const [ready, setReady] = useState(false);
  const hasSubDomain = useMemo(() => getSubdomain(), []);

  return {
    ready,
    hasSubDomain
  };
};
