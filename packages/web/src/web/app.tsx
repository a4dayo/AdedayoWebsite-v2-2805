import { useEffect } from "react";
import { Link, Redirect, Route, Switch, useLocation } from "wouter";
import HomePage from "./pages/home";
import ServicesPage from "./pages/services";
import ExperiencePage from "./pages/experience";
import PortfolioPage from "./pages/portfolio";
import InsightsPage from "./pages/insights";
import WorkWithMePage from "./pages/work-with-me";
import { Layout } from "./components/layout";
import { Provider } from "./components/provider";
import { AgentFeedback } from "@runablehq/website-runtime";

/** Scroll to the top on page change, or to #anchor targets (e.g. /services#service-3). */
function ScrollManager() {
  const [location] = useLocation();
  useEffect(() => {
    const id = window.location.hash.slice(1);
    const target = id ? document.getElementById(id) : null;
    if (target) {
      requestAnimationFrame(() => target.scrollIntoView({ block: "start" }));
    } else {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return null;
}

function NotFound() {
  return (
    <section className="shell section-y">
      <p className="t-label mb-6">404</p>
      <h1 className="t-section max-w-[18ch]">That page isn't here.</h1>
      <Link to="/" className="link-underline mt-8 inline-block">Back to the home page</Link>
    </section>
  );
}

function App() {
  return (
    <Provider>
      <ScrollManager />
      <Layout>
        <Switch>
          <Route path="/" component={HomePage} />
          <Route path="/services" component={ServicesPage} />
          <Route path="/experience" component={ExperiencePage} />
          <Route path="/portfolio" component={PortfolioPage} />
          <Route path="/insights" component={InsightsPage} />
          <Route path="/work-with-me" component={WorkWithMePage} />
          {/* Old Phase 1 URLs */}
          <Route path="/about"><Redirect to="/experience" replace /></Route>
          <Route path="/advisory"><Redirect to="/services" replace /></Route>
          <Route path="/contact"><Redirect to="/work-with-me" replace /></Route>
          <Route component={NotFound} />
        </Switch>
      </Layout>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
    </Provider>
  );
}

export default App;
