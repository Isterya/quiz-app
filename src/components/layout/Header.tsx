import Image from 'next/image';

import Logo from '@/components/common/Logo';
import SearchInput from '@/components/common/SearchInput';
import Button from '../ui/Button';

export default function Header() {
  return (
    <header className="flex items-center justify-between pt-[33px] pb-[36px]">
      <Logo />
      <SearchInput />

      <div className="flex items-center gap-4">
        <Button />

        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded-full overflow-hidden">
            <Image
              src="/images/user-placeholder.jpg"
              alt="Michael Clifford"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
          <span className="text-sm font-medium text-gray-700">
            Michael Clifford
          </span>
        </div>
      </div>
    </header>
  );
}
