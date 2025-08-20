import Image from 'next/image';
import Link from 'next/link';

const Logo = () => {
  return (
    <Link
      href="/"
      className="flex items-center gap-2 w-[199px] h-[42px]"
    >
      <div className="w-[42px] h-[42px] bg-primary rounded-full flex items-center justify-center">
        <Image
          src="/icons/logo.svg"
          alt="Logo"
          width="22"
          height="22"
        />
      </div>
      <div className="font-bold text-[26px] tracking-[0.02em] text-primary">
        CyberQuiz
      </div>
    </Link>
  );
};

export default Logo;
