import 'react-responsive-carousel/lib/styles/carousel.min.css'; // requires a loader
import { Carousel } from 'react-responsive-carousel';

const CarouselComponent: React.FC<{ urls: string[] }> = ({ urls }) => {
  return (
    <div className="flex flex-col items-center justify-center mx-8 mt-10">
      <h1 className="text-4xl mb-8 font-semibold text-center">Reviews</h1>
      <div className="h-[500px] w-full">
        <Carousel showThumbs={false} showIndicators={false} showStatus={false}>
          {urls?.map((url, idx) => (
            <div className="h-[500px]" key={idx}>
              {/*eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={url}
                alt={`review ${idx + 1}`}
                width={400}
                height={400}
                className="w-full h-full object-contain"
              />
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
};

export default CarouselComponent;
