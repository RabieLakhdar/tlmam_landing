import React, { Component } from 'react';

import Header from 'components/HeaderSection/Header';
import HeroSection from 'components/HeroSection';
import FeatureSection from 'components/Features/index';
import ServiceSection from 'components/ServiceSection/index';
import DiscoverSection from 'components/DiscoverSection/index';
import Work from 'components/WorkSection/Work';
import Download from 'components/DownloadSection/Download';
import Subscribe from 'components/SubscribeSection/Subscribe';
import ContactSection from 'components/ContactSection/Contact';
import FooterSection from 'components/FooterSection/Footer';

class Theme extends Component {
    render() {
        return (
            <div className="homepage-3">
                {/*====== Scroll To Top Area Start ======*/}
                <div id="scrollUp" title="Scroll To Top">
                    <i className="fas fa-arrow-up" />
                </div>
                {/*====== Scroll To Top Area End ======*/}
                <div className="main">
                    <Header imageData={"/img/logo-white.png"} />
                    <HeroSection />
                    <FeatureSection />
                    <Work />
                    <ServiceSection />
                    <DiscoverSection />
                    <Subscribe />
                    <Download />
                    <ContactSection />
                    <FooterSection />
                </div>
            </div>
        );
    }
}

export default Theme;