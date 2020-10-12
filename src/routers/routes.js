import React, { lazy, Suspense } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import ErrorBoundary from 'components/ErrorBoundary';

const Theme = lazy(() => import('themes/theme-principal'));
const BlogTwoColumn = lazy(() => import('components/Blogs/BlogTwoColumn'));
const BlogThreeColumn = lazy(() => import('components/Blogs/BlogThreeColumn'));
const BlogLeftSidebar = lazy(() => import('components/Blogs/BlogLeftSidebar'));
const BlogRightSidebar = lazy(() => import('components/Blogs/BlogRightSidebar'));
const BlogDetailsLeftSidebar = lazy(() => import('components/Blogs/BlogDetailsLeftSidebar'));
const BlogDetailsRightSidebar = lazy(() => import('components/Blogs/BlogDetailsRightSidebar'));
const Reviews = lazy(() => import('components/ReviewSection/Reviews'));
const Pricing = lazy(() => import('components/PricingSection/Pricing'));
const DownloadPage = lazy(() => import('components/DownloadSection/DownloadPage'));
const SubscribePage = lazy(() => import('components/SubscribeSection/SubscribePage'));
const ThankYou = lazy(() => import('components/InnerSection/ThankYou'));
const ComingSoon = lazy(() => import('components/InnerSection/ComingSoon'));
const Faq = lazy(() => import('components/FaqSection/Faq'));
const ErrorPage = lazy(() => import('components/ErrorPage/404'));
const ContactPage = lazy(() => import('components/ContactSection/ContactPage'));

const MyRouts = () => {
  return (
<div>
        <ErrorBoundary>
          <Suspense fallback={<div>Loading...</div>}>
            <Router>
              <Switch>
                <Route exact path="/" component={Theme} />
                <Route path="/blog-two-column" component={BlogTwoColumn} />
                <Route path="/blog-three-column" component={BlogThreeColumn} />
                <Route path="/blog-left-sidebar" component={BlogLeftSidebar} />
                <Route path="/blog-right-sidebar" component={BlogRightSidebar} />
                <Route path="/blog-details-left-sidebar" component={BlogDetailsLeftSidebar} />
                <Route path="/blog-details-right-sidebar" component={BlogDetailsRightSidebar} />
                <Route path="/reviews" component={Reviews} />
                <Route path="/pricing" component={Pricing} />
                <Route path="/download-page" component={DownloadPage} />
                <Route path="/subscribe-page" component={SubscribePage} />
                <Route path="/thank-you" component={ThankYou} />
                <Route path="/coming-soon" component={ComingSoon} />
                <Route path="/faq" component={Faq} />
                <Route path="/error-page" component={ErrorPage} />
                <Route path="/contact-page" component={ContactPage} />
              </Switch>
            </Router>
          </Suspense>
        </ErrorBoundary>
      </div>
  )
}
export default MyRouts;