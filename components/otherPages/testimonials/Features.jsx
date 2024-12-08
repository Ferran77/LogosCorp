import { chooseItems } from "@/data/features";
import Image from "next/image";
export default function Features() {
  return (
    <div className="why-choose-us-section section-padding">
      <div className="container">
        <div className="row">
          <div className="col-xl-4 col-lg-4">
            <div className="section-title">
              <h6>Take a look</h6>
              <h2>Why choose Factorix?</h2>
            </div>
          </div>
          <div className="offset-xl-1 col-xl-7 offset-lg-1 col-lg-7">
            {chooseItems.map((item) => (
              <div className="single-choose-item" key={item.id}>
                <div className="single-choose-inner">
                  <h5>
                    <span>{String(item.id).padStart(2, "0")}</span>
                    {item.title}
                  </h5>
                </div>
                <div className="choose-img">
                  <Image
                    alt={item.alt}
                    src={item.imgSrc}
                    className="height-auto"
                    width={612}
                    height={408}
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
