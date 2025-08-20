import Logo from '@/components/common/Logo';
import SearchInput from '@/components/common/SearchInput';
import Button from '@/components/ui/Button';
import UserProfile from '@/components/common/UserProfile';

export default function Header() {
  return (
    <header className="flex items-center justify-between pt-[33px] pb-[36px]">
      <Logo />
      <SearchInput />
      <Button />
      <UserProfile />
    </header>
  );
}
