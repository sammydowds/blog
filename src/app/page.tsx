import { Links } from '@/features/Links';
import { ProfilePicture } from '@/features/ProfilePicture';

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center pt-12">
      <div className="w-[300px] flex flex-col gap-6">
        <ProfilePicture />
        <Links />
      </div>
    </main>
  );
}
