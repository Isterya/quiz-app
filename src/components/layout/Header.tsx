import Image from 'next/image';

import Logo from '@/components/common/Logo';

export default function Header() {
  return (
    <header className="flex items-center justify-between pt-[33px]">
      <Logo />

      <div className="flex-1 max-w-md mx-8">
        <div className="relative">
          <div className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4">
            <Image
              src="/icons/search.svg"
              alt="User placeholder"
              width="4"
              height={4}
            />
          </div>
          <input
            type="text"
            placeholder="Search Quiz"
            className="w-full pl-10 pr-4 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="bg-blue-600 hover:bg-blue-700 text-white px-6 py-2 rounded-lg font-medium text-sm transition-colors">
          Start Quiz
        </button>

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
