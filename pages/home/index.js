import Backstory from "@/components/home/backstory";
import Card from "@/components/home/card";
import Form from "@/components/home/form";
import RreeResourse from "@/components/home/freeResourse";
import HomeScetion1 from "@/components/home/home-scetion1";
// import Carousal1 from "@/components/home/carousal1";
import HomeTabs from "@/components/home/home-tabs";
import Services from "@/components/home/services";
// import Reduxform from "@/components/home/reduxform"
import React from "react";

export default function index() {
  return (
    <>
      <HomeScetion1 />
      <HomeTabs />
      <Services />
      <Backstory />
      <RreeResourse />
      <Form />
    </>
  );
}
