import React from 'react';
import ContentLoader from 'react-content-loader';

const MyLoader = (props) => (
  <ContentLoader
    speed={2}
    width={365}
    height={375}
    viewBox="0 0 365 375"
    backgroundColor="#f3f3f3"
    foregroundColor="#ecebeb"
    {...props}
  >
    <rect x="0" y="0" rx="10" ry="10" width="360" height="184" />
    <rect x="3" y="195" rx="10" ry="10" width="355" height="30" />
    <rect x="4" y="232" rx="10" ry="10" width="355" height="90" />
    <rect x="27" y="336" rx="10" ry="10" width="145" height="30" />
    <rect x="198" y="327" rx="10" ry="10" width="131" height="45" />
  </ContentLoader>
);

export default MyLoader;
