import { getAuthors } from "@/app/lib/data";
import { Author } from "@/app/lib/definitions";
import Image from "next/image";

export default async function AuthorsList() {
  const profiles = await getAuthors();
  const profilesWithRoles = profiles.map((el: Author) => ({
    ...el,
    role: el.description.split("|")[0],
    description: el.description.split("|")[1],
  }));
  return (
    <ul className="flex flex-col gap-20">
      {profilesWithRoles.map((profile: Author, i: number) => (
        <li
          key={profile.name}
          className={`w-[80vw] sm:w-full h-auto flex flex-col items-center justify-center text-center gap-4 ${
            i % 2 !== 0
              ? "sm:flex-row-reverse sm:text-right"
              : "sm:flex-row sm:text-left"
          }`}
        >
          <div className="w-1/6 h-full flex items-center justify-center">
            <Image
              alt="profile pic"
              src={profile.avatar.url}
              width={100}
              height={100}
            />
          </div>
          <div className="w-full sm:w-4/6 h-full flex flex-col justify-center">
            <h3 className="text-2xl font-bold mb-1">
              {profile.firstName} {profile.lastName}
            </h3>
            <h4 className="text-lg font-semibold mb-2">{profile.role}</h4>
            <p>{profile.description}</p>
          </div>
        </li>
      ))}
    </ul>
  );
}
