import Image from "next/image";

interface ImageWithForegroundProps {}

export default function ImageWithForeground({}: ImageWithForegroundProps) {
  return (
    <div className="w-full h-full relative">
      <Image
        src="/images/bg.jpg"
        alt=""
        height={200}
        width={200}
        unoptimized
        className="bg-cover bg-no-repeat w-full h-full object-cover"
      />
      <div className="absolute inset-0 bg-black opacity-30"></div>
      <div className="absolute inset-0 flex-col flex gap-3 items-center justify-center">
        <div className="h-[200px]"></div>
        <Image src="/images/logo.png" height={175} width={175} alt="" />
        <h1 className="text-white text-5xl font-bold">World Modern Shotokan</h1>
        <span className="h-[4px] w-[350px] bg-orange-400"></span>
        <h1 className="text-white text-5xl font-bold">Karate Federation</h1>
      </div>
    </div>
  );
}
