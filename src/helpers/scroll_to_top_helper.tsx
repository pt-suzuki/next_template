import { useRouter } from 'next/router';
import React from 'react';

const ScrollToTop: React.FC = () => {
  const pathname = useRouter().pathname;
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

export default ScrollToTop;
