import Page from "./Page";
import flex from "../styles/flex.module.scss";
import classnames from "classnames";
import text from "../styles/text.module.scss";

const Home = () => {
  return (
    <Page>
      <div className={classnames(flex.row, flex.wrap, flex.spaceBetween)}>
        <div>
          <h1 className={text.title}>Hello,</h1>
          <h2 className={text.subtitle}>Web Dev Here!</h2>
        </div>
        <div>
          <p>No employee can promote you 27/7, but a website can</p>
        </div>
      </div>
    </Page>
  );
};

export default Home;
