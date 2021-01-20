import React, { Component } from 'react';
import Header from '../HeaderSection/Header';

const initData = {
    heading: "Votre compte a été activé",
    content: "vous pouvez maintenant vous connecter dans l'application, nous créons continuellement de nouvelles choses pour TLMAM Social Service et essayons de le maintenir à jour avec les nouvelles activités qui pourraient apparaître tout au long du processus de développement. Nous apprécions chacun de vous qui a activé un compte ou téléchargé l'application TLMAM et nous prenons en considération vos suggestions à chaque fois.",
    btnText: "Aller à la page d'accueil"
}

class ThankYou extends Component {
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
            <div className="inner inner-pages">
                <div className="main">
                    <Header imageData={"/img/logo-white.png"} />
                    <section id="home" className="section welcome-area inner-area bg-overlay h-100vh overflow-hidden">
                        <div className="container h-100">
                            <div className="row align-items-center h-100">
                                <div className="col-12 col-md-8">
                                    <div className="welcome-intro">
                                        <h1 className="text-white">{this.state.initData.heading}</h1>
                                        <p className="text-white my-4">{this.state.initData.content}</p>
                                        <a href="/" className="btn sApp-btn text-uppercase">{this.state.initData.btnText}</a>
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

export default ThankYou;