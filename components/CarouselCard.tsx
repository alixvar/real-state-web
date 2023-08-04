import Image from "next/image";

type CardProps = {
  src?: string;
  width?: number;
  height?: number;
  alt?: string;
  title?: string;
  desc?: string;
};

function CarouselCard({ src, width, height, alt, desc, title }: CardProps) {
  return (
    <div>
      {/* <Image src={src} width={width} height={height} alt={alt || ""} /> */}
      <div className="bg-white p-2 flex gap-2">
        <div>
          <p className="font-semibold">{title}</p>
          <p className="text-sm text-slate-500">{desc}</p>
        </div>
        <button className="outline_btn border-blue-800">Detail</button>
      </div>
    </div>
  );
}

export default CarouselCard;
