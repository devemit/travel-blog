import Image from 'next/image';

type ImageProps = {
  src: string;
  alt: string;
  className: string;
};
export default function ImageComponent({
  src,
  alt,
  className = '',
}: ImageProps) {
  return <Image alt={alt} className={className} src={src} fill />;
}
