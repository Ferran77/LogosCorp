import { teamMembers2 } from "@/data/team";
import React from "react";
import Image from "next/image";
export default function Team() {
  return (
    <div className="team-section gray-bg section-padding pb-90">
      <div className="container">
        <div className="row gx-5 align-items-center">
          <div className="col-xl-4 col-lg-4">
            <div className="section-title">
              <h6>Meet the Elite</h6>
              <h2>The Best Workers</h2>
            </div>
          </div>
          <div className="col-xl-8 col-lg-8">
            <div className="team-desc">
              <p>
                Adipiscing elit, sed do euismod tempor incidunt ut labore et
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                exercitacion ullamco do euismod tempor incidunt quis nostrud
                exercitacion Lorem, ipsum dolor sit amet consectetur adipisicing
                elit.
              </p>
            </div>
          </div>
        </div>
        <div className="row gx-5">
          {teamMembers2.map((member) => (
            <div
              key={member.id}
              className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp"
              data-wow-delay={member.delay}
            >
              <div className="single-team-member">
                <div className="team-bg">
                  <Image
                    alt={member.name}
                    src={member.imgSrc}
                    className="height-auto"
                    width={570}
                    height={696}
                  />
                </div>
                <div className="team-hover-info">
                  <div className="team-title">
                    <h5>{member.name}</h5>
                    <span>{member.position}</span>
                  </div>
                </div>
                <div className="social-icon">
                  {member.socials.map((social, index) => (
                    <a key={index} href={social.link}>
                      <i className={social.icon} />
                    </a>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
