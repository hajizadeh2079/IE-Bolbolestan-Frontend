import coverphoto from "../common/photos/cover photo.jpg";
import Carousel from "react-bootstrap/Carousel";

const Cover = () => {
  return (
    <Carousel>
      <Carousel.Item>
        <img className="cover-photo" src={coverphoto} alt="" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="cover-photo" src={coverphoto} alt="" />
      </Carousel.Item>
    </Carousel>
  );
};

export default Cover;
