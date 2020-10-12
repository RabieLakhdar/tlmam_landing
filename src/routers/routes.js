import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import Theme from 'themes/theme-principal'
import DownloadPage from 'components/DownloadSection/DownloadPage'
import SubscribePage from 'components/SubscribeSection/SubscribePage'
import ThankYou from 'components/InnerSection/ThankYou'
import ComingSoon from 'components/InnerSection/ComingSoon'
import Faq from 'components/FaqSection/Faq'
import ErrorPage from 'components/ErrorPage/404'
import ContactPage from 'components/ContactSection/ContactPage'


const MyRouts = () => {
  return (
    <div>
       <Router>
          <Switch>
            <Route exact path="/" component={ComingSoon} />
            <Route path="/download-page" component={DownloadPage} />
            <Route path="/subscribe-page" component={SubscribePage} />
            <Route path="/thank-you" component={ThankYou} />
            <Route path="/coming-soon" component={Theme} />
            <Route path="/faq" component={Faq} />
            <Route path="/error-page" component={ErrorPage} />
            <Route path="/contact-page" component={ContactPage} />
          </Switch>
        </Router>
    </div>
  )
}
export default MyRouts;
