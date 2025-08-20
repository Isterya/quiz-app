import Image from 'next/image';

const UserProfile = () => {
  return (
    <div className="flex">
      <div className="flex items-center gap-5">
        <div className="w-8 h-8 rounded-full overflow-hidden">
          <Image
            src="/images/user-placeholder.png"
            alt="Michael Clifford"
            width={60}
            height={60}
            className="w-full h-full object-cover"
          />
        </div>
        <span className="text-[19px] font-normal text-[#696f79]">
          Michael Clifford
        </span>
      </div>
    </div>
  );
};

export default UserProfile;
