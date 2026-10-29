import Image from 'next/image'
import { PHOTOS } from '@/data/photos'

export function TheatreImage({ image, height, loading = 'lazy' }) {
  const media = PHOTOS[image]

  return (
    <div className={`relative w-full ${height} overflow-hidden rounded-2xl bg-[#eaefeb]`}>
      <Image
        src={media.src}
        alt={media.alt}
        fill
        loading={loading}
        sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 600px"
        className="object-cover"
        style={{ objectPosition: media.position || 'center' }}
      />
    </div>
  )
}
