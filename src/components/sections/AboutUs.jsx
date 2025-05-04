import { Container } from "reactstrap";

import SectionHeader from "./SectionHeader";

const AboutUs = () => {
    return (
        <Container id="about">
            <SectionHeader name="About Us" />
            <p className="text-center">
                Synergy Health has been a trusted part of the Bethesda, MD community for over 18 years. Conveniently
                located inside Montgomery Mall, we specialize in acupressure and foot reflexology to promote your
                overall well-being and relaxation. Our experienced practitioners are dedicated to providing personalized
                treatments tailored to your unique needs, whether you're seeking stress relief, pain management, or a
                rejuvenating experience. At Synergy Health Center, we blend traditional techniques with a welcoming
                environment to help you achieve harmony and health. Visit us today at Montgomery Mall and discover the
                benefits of our expert care. Experience the synergy of mind and body wellness with Synergy Health!
            </p>
        </Container>
    );
};

export default AboutUs;
