import { Jumbotron, Container } from "react-bootstrap";
import MyBadge from "./MyBadge";

const JumbotronPart = () => {
  return (
    <Jumbotron
      style={{
        height: "35vh",
        color: "white",
        backgroundImage:
          "url(" +
          "https://images.unsplash.com/photo-1507842217343-583bb7270b66?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1290&q=80" +
          ")",
        backgroundPosition: "center",
        backgroundSize: "cover",
      }}
    >
      {/*       <MyBadge text="Strive Books" color="warning" />
       */}{" "}
    </Jumbotron>
  );
};
export default JumbotronPart;
