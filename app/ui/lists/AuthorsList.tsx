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
          className={`w-[80vw] sm:w-[60vw] h-auto flex flex-col sm:items-start items-center justify-center text-center border-2 border-black dark:border-white rounded-3xl ${
            i % 2 !== 0 ? "sm:text-right" : "sm:text-left"
          }`}
        >
          <div
            className={`flex flex-col w-full ${
              i % 2 !== 0
                ? "sm:flex-row-reverse sm:text-right"
                : "sm:flex-row sm:text-left"
            }`}
          >
            <div className="sm:w-1/6 h-20 sm:h-24 flex items-center justify-center pt-4 sm:pt-0 relative">
              <Image
                alt="profile pic"
                src={profile.avatar.url}
                fill={true}
                className={`${
                  i % 2 !== 0
                    ? "rounded-t-3xl sm:rounded-tr-3xl sm:rounded-tl-none"
                    : "rounded-t-3xl sm:rounded-tl-3xl sm:rounded-tr-none"
                }`}
                style={{ objectFit: "cover" }}
              />
            </div>

            <div
              className={`w-full bg-base-light dark:bg-base-dark text-black flex flex-col justify-center py-4 sm:h-24 h-auto ${
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
          </div>
          <p className="p-6">{profile.description}</p>
        </li>
      ))}
    </ul>
  );
}
