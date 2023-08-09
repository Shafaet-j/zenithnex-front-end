import React from "react";
import Banner from "../Banner/Banner";
import Infrastructure from "../Infrastructure/Infrastructure";
import Credential from "../Credential/Credential";
import Process from "../Process/Process";
import Feature from "../Feature/Feature";
import Networks from "../Networks/Networks";
import UpcomingNetwork from "../UpcomingNetwork/UpcomingNetwork";
import Acclamation from "../Acclamation/Acclamation";
import Blogs from "../Blogs/Blog";
import Subscribe from "../Subscribe/Subscribe";
import Question from "../Question/Question";

const Home = () => {
  return (
    <div>
      <Banner />
      <Infrastructure />
      <Credential />
      <Process />
      <Feature />
      <Networks />
      <UpcomingNetwork />
      <Acclamation />
      <Blogs />
      <Subscribe />
      <Question />
    </div>
  );
};

export default Home;
