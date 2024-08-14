import Image from 'next/image';

export const ProfilePicture = () => {
  return (
    <div className="flex flex-col gap-2">
      <div className="flex items-center gap-2">
        <Image
          src="/profile.jpeg"
          height={45}
          width={45}
          alt="Profile Picture"
          className="rounded-sm"
        />
        <div className="flex flex-col justify-between tracking-tighter">
          <div className="text-xl font-bold">Sammy</div>
          <span className="text-stone-500">A &#8594; B</span>
        </div>
      </div>
      <p className="text-stone-600">
        Pursue curiosity, solve problems, and be kind.
      </p>
    </div>
  );
};
