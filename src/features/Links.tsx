import Link from 'next/link';
import { HiOutlineExternalLink } from 'react-icons/hi';

export const Links = () => {
  return (
    <div className="flex flex-col gap-2 w-full">
      <span className="text-xl tracking-tighter">Projects</span>
      <div>
        <Link
          href="https://www.sweat.sh"
          className="flex items-center underline font-bold italic text-blue-600"
        >
          You &#8594; More Fit
        </Link>
        <p className="font-light">
          web based workout generation, optimizing muscle groups every day
        </p>
      </div>
    </div>
  );
};
