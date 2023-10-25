import bullet from "./moon_1.png";

type Props = {
  url: string;
  text: string;
  icon?: string;
  i: number;
};

export default function Link({ url, icon, text, i }: Props) {
  const posShift = i % 2 === 0 ? "-left-[10rem]" : "-right-[10rem]";

  return (
    <div className="relative">
      <img
        src={bullet}
        className={`absolute -top-24 ${posShift} scale-[0.2]`}
      />
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-200 bg-opacity-40 h-fit flex gap-3 justify-center text-2xl p-4 border-gray-300 border-opacity-20 border-2 rounded-sm shadow-md"
      >
        <i className={icon}></i>
        <span>{text}</span>
      </a>
    </div>
  );
}
