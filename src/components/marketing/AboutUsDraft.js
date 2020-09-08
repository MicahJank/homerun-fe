import React from 'react';
import styled from 'styled-components';
import SidebarMarketing from "../marketing/Sidebar-Marketing.js";
import Navigation from "../marketing/Navigation";
import Footer from "../marketing/Footer";

const AboutUsDraft = () => {

  const users = [
    { name: "Vinni Hoke", image: "https://avatars1.githubusercontent.com/u/34225237?s=460&v=4", url: "https://github.com/vinnihoke" },
    { name: "Micah Jank", image: "https://avatars3.githubusercontent.com/u/40408940?s=460&v=4", url: "https://github.com/MicahJank" },
    { name: "Zach Taylor", image: "https://avatars0.githubusercontent.com/u/37271885?s=460&v=4", url: "https://github.com/zbtaylor" },
    { name: "Katrina Roaix", image: "https://avatars3.githubusercontent.com/u/5169760?s=460&v=4", url: "https://github.com/kroaix" },
    { name: "Heather Ridgill", image: "https://avatars3.githubusercontent.com/u/49896861?s=460&v=4", url: "https://github.com/heather-ridgill" },
    { name: "Yankho Trumble", image: "https://avatars2.githubusercontent.com/u/33339750?s=460&v=4", url: "https://github.com/Mayankho" },
  ]

  return (
    <>
      <SidebarMarketing />
      <Navigation />
      <h1>Our Team</h1>
      <CardContainer>
        {users.map(user => {
          return (
            <div className="ui card">
              <img className="ui image" src={user.image} />
              <div className="content">
                <h2>{user.name}</h2>
                <button className="ui button black" onClick={() =>
                  window.open(user.url, '_blank')
                }>
                  <i className="ui icon github large"></i>
            Github
          </button>
              </div>
            </div>
          )
        })}

      </CardContainer>
    </>
  )}
  
export default AboutUsDraft;