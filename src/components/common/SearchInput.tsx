import Image from 'next/image';

const SearchInput = () => {
  return (
    <div className="ml-[98px] flex items-center w-[1163px] h-16 bg-white rounded-[10px] shadow-[0_15px_40px_5px_#ededed] px-[27px] gap-[13px]">
      <Image
        src="/icons/search.svg"
        alt="Search"
        width={20}
        height={20}
      />
      <input
        type="text"
        placeholder="Search Quiz"
        className="text-[#696f79] font-normal text-[19px] outline-none py-[18px] w-full"
      />
    </div>
  );
};

export default SearchInput;
