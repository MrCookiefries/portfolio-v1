import pages from "../styles/page.module.scss";
import classnames from "classnames";

const Page = ({ children }: { children?: JSX.Element }) => {
  return <section className={classnames(pages.page)}>{children}</section>;
};

export default Page;
