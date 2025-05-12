import { Container, UncontrolledCarousel } from "reactstrap";

import SectionHeader from "./SectionHeader";

import image0 from "../../assets/images/0.jpg";
import image1 from "../../assets/images/1.jpg";
import image2 from "../../assets/images/2.jpg";
import image3 from "../../assets/images/3.jpg";
import image4 from "../../assets/images/4.jpg";

const Gallery = () => {
    return (
        <Container id="gallery">
            {/* <h2 className="text-center">Gallery</h2> */}
            <SectionHeader name="Gallery" />
            <UncontrolledCarousel
                items={[
                    {
                        altText: "0",
                        src: image0,
                    },
                    // {
                    //     altText: "0",
                    //     src: image1,
                    // },
                    // {
                    //     altText: "0",
                    //     src: image2,
                    // },
                    {
                        altText: "0",
                        src: image3,
                    },
                    {
                        altText: "0",
                        src: image4,
                    },
                ]}
            />
        </Container>
    );
};

export default Gallery;
