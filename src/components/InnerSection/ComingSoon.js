import React, { Component } from 'react';
import Header from '../HeaderSection/Header';

const initData = {
    heading: "Nous arrivons bientôt!",
    content: "Notre application mobile est en cours de construction. Nous serons bientôt là avec notre nouvelle super première solution financière et sociale en Afrique du Nord, abonnez-vous pour être averti.",
    btnText: "Notify"
}

class ComingSoon extends Component {
    state = {
        initData: []
    }
    componentDidMount(){
        this.setState({
            initData: initData
        })
    }
    render() {
        return (
            <div className="homepage-3 inner inner-pages">
                <div className="main">
                    <Header imageData={"/img/logo-white.png"} />
                    <section id="home" className="section welcome-area inner-area bg-overlay h-100vh overflow-hidden">
                        <div className="container h-100">
                            <div className="row align-items-center justify-content-center h-100">
                                <div className="col-12 col-md-7">
                                    <div className="welcome-intro text-center">
                                        <h1 className="text-white">{this.state.initData.heading}</h1>
                                        <p className="text-white my-4">{this.state.initData.content}</p>
                                        <div className="countdown-times mb-4">
                                            <div className="countdown d-flex justify-content-center" data-date="2021-01-01" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </section>
                </div>
            </div>
        );
    }
}

export default ComingSoon;