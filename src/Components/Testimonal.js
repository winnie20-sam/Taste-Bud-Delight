import React from "react";
import ProfilePic from "../Assets/img2.jpg";
import ProfilePic2 from "../Assets/img3.jpg";
import { AiFillStar } from "react-icons/ai";

const Testimonial = () => {
  return (
    <div className="work-section-wrapper">
      <div className="work-section-top">
        <p className="primary-subheading">Testimonial</p>
        <h1 className="primary-heading">Find out What People say</h1>
        <p className="primary-text">
          Here is what some of our esteemed customers have to say.
        </p>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic} alt="" />
        <p>
        "If you're looking for an authentic culinary journey, Taste Buds Delight is a must-visit. 
        The fusion of flavors and spices in their dishes takes you on a trip around the world. 
        Each bite is like a passport stamp, showcasing different cultures and culinary traditions. 
        The talented chefs have truly mastered their craft, and the passion they put into their creations is evident in every mouthwatering dish.
         Prepare to have your taste buds awakened and your foodie soul satisfied.
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Harvick</h2>
      </div>
      <div className="testimonial-section-bottom">
        <img src={ProfilePic2} alt="" />
        <p>
        "I had the most incredible dining experience at Taste Buds Delight. 
        From the moment I stepped in, the warm and inviting atmosphere set the tone for a memorable evening. 
        The attentive staff guided me through their exquisite menu, and every dish I tried was a masterpiece. 
        The flavors were perfectly balanced, and the presentation was simply stunning. 
        This restaurant truly knows how to create a culinary adventure that delights all the senses."
        </p>
        <div className="testimonials-stars-container">
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
          <AiFillStar />
        </div>
        <h2>Kestone</h2>
      </div>
    </div>
  );
};

export default Testimonial;
