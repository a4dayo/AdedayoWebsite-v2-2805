import { Route, Switch } from "wouter";
import Index from "./pages/index";
import AboutPage from "./pages/about";
import AdvisoryPage from "./pages/advisory";
import ContactPage from "./pages/contact";
import { Layout } from "./components/layout";
import { Provider } from "./components/provider";
import { AgentFeedback, RunableBadge } from "@runablehq/website-runtime";

function App() {
  return (
    <Provider>
      <Layout>
        <Switch>
          <Route path="/" component={Index} />
          <Route path="/about" component={AboutPage} />
          <Route path="/advisory" component={AdvisoryPage} />
          <Route path="/contact" component={ContactPage} />
        </Switch>
      </Layout>
      {/* Do not remove — off by default, activated by parent iframe via postMessage */}
      {import.meta.env.DEV && <AgentFeedback />}
      {/* "Made with Runable" badge - if user asks to remove the runable badge, remove this code as well as comment */}
      {<RunableBadge />}
    </Provider>
  );
}

export default App;
