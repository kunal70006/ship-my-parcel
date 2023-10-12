import { useWindowSize } from '@/utils/useWindowResize';
import Image from 'next/image';
import { useEffect, useState } from 'react';

const PopupImage = () => {
  const [show, setShow] = useState(true);
  const [width] = useWindowSize();
  useEffect(() => {
    setTimeout(() => {
      setShow(false);
    }, 2000);
  }, []);

  return show ? (
    <div className="fixed overflow-hidden h-screen w-full bg-black/75 flex items-center justify-center z-50 overflow-y-hidden">
      <Image
        src="/uk_banner.jpg"
        alt="popup"
        width={width > 700 ? 500 : 300}
        height={width > 700 ? 500 : 300}
      />
    </div>
  ) : null;
};

export default PopupImage;
