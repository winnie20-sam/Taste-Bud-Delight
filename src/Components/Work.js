import React from "react";
import PickMeals from "../Assets/pick-meals-image.png";
import ChooseMeals from "../Assets/choose-image.png";
import DeliveryMeals from "../Assets/delivery-image.png";

const Work = () => {
  const workInfoData = [
    {
      image: PickMeals,
      title: "Pick Meals",
      text: "Appetizer,MainCourse,Dessert.  "
  
    },
    {
      image: ChooseMeals,
      title: "Choose How Often",
      text: " Feel free to adjust the ingredients or preparations according to your preferences and dietary restrictions. Enjoy your meal! ",
    },
    {
      image: DeliveryMeals,
      title: "Fast Deliveries",
      text: "We have an In-House Delivery: Dedicated delivery drivers to ensure fast and efficient delivery.",
    },
  ];
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Work</p>
        <h1 className="primary-heading">How It Works</h1>
        <p className="primary-text">
          In Taste Buds Delight we offer elegant ambiance, coupled with the impeccable service, that makes you feel like royalty. 
          The menu offered a variety of options
        </p>
      </div>
      <div className="work-section-bottom">
        {workInfoData.map((data) => (
          <div className="work-section-info" key={data.title}>
            <div className="info-boxes-img-container">
              <img src={data.image} alt="" />
            </div>
            <h2>{data.title}</h2>
            <p>{data.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Work;
