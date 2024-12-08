import { teamMembers3 } from "@/data/team";
import React from "react";
import Image from "next/image";
export default function Team() {
  return (
    <div className="team-section gray-bg section-padding pb-90">
      <div className="container">
        <div className="row gx-5">
          {teamMembers3.map((member) => (
            <div
              key={member.id}
              className="col-xl-4 col-lg-4 col-md-4 wow fadeInUp"
              data-wow-delay={member.delay}
            >
              <div className="single-team-member">
                <div className="team-bg">
                  <Image
                    alt=""
                    className="height-auto"
                    src={member.imgSrc}
                    width={570}
                    height={696}
                  />
                </div>
                <div className="team-hover-info">
                  <div className="team-title">
                    <h5>{member.name}</h5>
                    <span>{member.role}</span>
                  </div>
                </div>
                <div className="social-icon">
                  {member.socials.map((social) => (
                    <a key={social.platform} href={social.url}>
                      <i className={social.iconClass} />
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
