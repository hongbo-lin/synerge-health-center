import { Container, UncontrolledCarousel } from "reactstrap";

import SectionHeader from "./SectionHeader";

import image0 from "../../assets/images/0.jpeg";
import image1 from "../../assets/images/1.jpeg";
import image2 from "../../assets/images/2.jpeg";

const Gallery = () => {
    return (
        <Container id="gallery">
            <SectionHeader name="Gallery" />
            <UncontrolledCarousel
                items={[
                    {
                        altText: "image",
                        src: image0,
                    },
                    {
                        altText: "image",
                        src: image1,
                    },
                    {
                        altText: "image",
                        src: image2,
                    },
                ]}
            />
        </Container>
    );
};

export default Gallery;
