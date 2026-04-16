import { ImageResponse } from 'next/og';
import { SocialImage } from './social-image';
import { siteConfig } from '@/lib/site-config';

export const size = {
  width: 1200,
  height: 630,
};

export const contentType = 'image/png';

export default function OpenGraphImage() {
  return new ImageResponse(
    <SocialImage
      title={siteConfig.socialTitle}
      subtitle={siteConfig.socialSubtitle}
    />,
    size,
  );
}
