import { Color } from '@styles/styles';
import Link from 'next/link';

const { useRouter } = require('next/router');

const CustomLink = ({ href, title, className = '' }) => {
  const router = useRouter();

  return (
    <Link href={href} className={className}>
      {title}
    </Link>
  );
};
export default CustomLink;
