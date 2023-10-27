type Props = {
  url: string;
  text: string;
  icon?: string;
};

export default function Link({ url, icon, text }: Props) {
  return (
    <div>
      <a
        href={url}
        target="_blank"
        rel="noopener noreferrer"
        className="bg-gray-200 bg-opacity-40 h-fit flex gap-3 justify-center text-2xl short:text-base p-2 border-gray-300 border-opacity-20 border-2 rounded-sm shadow-md"
      >
        <i className={icon}></i>
        <span>{text}</span>
      </a>
    </div>
  );
}
