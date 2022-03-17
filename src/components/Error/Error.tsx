import { ReactNode } from 'react';
import Image from '../../components/Image';
import './error.scss';

type ErrorProps= {
    children: ReactNode
}

const blockname = 'error';

const Error = ({ children }: ErrorProps): JSX.Element => {
  return (
    <div className={blockname}>
      <Image
        src="/images/logo.png"
        alt="Auto1.com Logo"
        className={""}
      />
      { children }
    </div>
  );
};


export default Error;