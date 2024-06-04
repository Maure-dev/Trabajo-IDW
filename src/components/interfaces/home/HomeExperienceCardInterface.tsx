import { HomeExperienceCardType } from "../../../entities/entities";

export default function HomeExperienceCardInterface({
  profile,
  fullName,
  comment,
  isLast,
}: HomeExperienceCardType) {
  return (
    <div
      className={`bg-[#ffffff80] ${
        !isLast ? "mt-4 lg:mt-0 lg:mr-4" : ""
      } p-4 rounded-2xl flex flex-col justify-between`}
    >
      <div className="flex items-center mb-4 lg:mb-0">
        <img
          src={profile}
          className="rounded-full border-2 border-white mr-4"
          alt={`${fullName} - Perfil`}
          width="50"
        />
        <h1 className="font-bold text-xl">{fullName}</h1>
      </div>
      <p className="text-sm">{comment}</p>
      <span></span>
    </div>
  );
}
