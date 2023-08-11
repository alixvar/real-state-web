import Image, { StaticImageData } from "next/image";

type CardProps = {
  src?: StaticImageData;
  width?: number;
  height?: number;
  alt?: string;
  title?: string;
  desc?: string;
};

function CarouselCard({ src, width, height, alt, desc, title }: CardProps) {
  return (
    <div className="rounded-3xl max-w-[340px] shadow-lg my-6">
      <Image
        src={src || "/assets/logo.svg"}
        width={width}
        height={height}
        alt={alt || ""}
        className="w-full h-full rounded-t-3xl object-cover max-h-[340px]"
      />
      <div className="bg-white px-3 py-6 flex items-end justify-between gap-3 rounded-b-3xl">
        <div className="flex flex-col gap-2 cursor-default">
          <p className="font-semibold text-xl">{title}</p>
          <p className="text-sm font-light text-slate-500 line-clamp-1">
            {desc}
          </p>
        </div>
        <button className="px-5 py-[3px] border rounded-full font-semibold  border-blue-700 text-blue-700">
          Detail
        </button>
      </div>
    </div>
  );
}

export default CarouselCard;
