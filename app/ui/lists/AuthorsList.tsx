import { getAuthors } from "@/app/lib/data";
import { Author } from "@/app/lib/definitions";
import Image from "next/image";

export default async function AuthorsList() {
  const profiles = await getAuthors();
  const profilesWithRoles = profiles.slice(1).map((el: Author) => ({
    ...el,
    role: el.description.split("|")[0],
    description: el.description.split("|")[1],
  }));
  return (
    <ul className="flex flex-col gap-20">
      {profilesWithRoles.map((profile: Author, i: number) => (
        <li
          key={profile.name}
          className={`w-[80vw] sm:w-[60vw] h-auto flex flex-col items-center justify-center text-center gap-4 border-2 border-black dark:border-white rounded-3xl ${
            i % 2 !== 0
              ? "sm:flex-row-reverse sm:text-right"
              : "sm:flex-row sm:text-left"
          }`}
        >
          <div className="w-1/6 h-full flex items-center justify-center pt-4 sm:pt-0">
            <Image
              alt="profile pic"
              src={profile.avatar.url}
              width={100}
              height={100}
            />
          </div>
          <div className="w-full h-full flex flex-col justify-center">
            <div
              className={`bg-base-light dark:bg-base-dark text-black flex flex-col justify-center py-4 mb-2 ${
                i % 2 !== 0
                  ? "sm:pr-4 sm:rounded-tl-3xl"
                  : "sm:pl-4 sm:rounded-tr-3xl"
              }`}
            >
              <h3 className="text-2xl font-bold">
                {profile.firstName} {profile.lastName}
              </h3>
              <h4 className="text-lg font-semibold">{profile.role}</h4>
            </div>
            <p
              className={`${
                i % 2 !== 0 ? "sm:pr-4 sm:pl-8" : "sm:pl-4 sm:pr-8"
              } mb-4 py-4 sm:py-0 px-4`}
            >
              {profile.description}
            </p>
          </div>
        </li>
      ))}
    </ul>
  );
}
