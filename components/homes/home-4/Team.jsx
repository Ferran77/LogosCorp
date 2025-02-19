import { teamMembers } from "@/data/team";
import React from "react";
import Image from "next/image";
import Link from "next/link";
export default function Team() {
  return (
    <div className="team-section section-padding">
      <div className="container">
        <div className="row align-items-center">
          <div className="col-xl-6 col-lg-6 order-2 order-lg-1">
            <div className="team-members-wrap">
              <div className="row">
                {teamMembers.map((member, index) => (
                  <div
                    key={index}
                    className="col-xl-6 col-lg-6 col-md-6 wow fadeInUp"
                    data-wow-delay={member.delay}
                  >
                    <div className="single-team-member">
                      <div className="team-bg">
                        <Image
                          alt=""
                          src={member.image}
                          width={570}
                          className="height-auto"
                          height={696}
                        />
                      </div>
                      <div className="team-hover-info">
                        <div className="team-title">
                          <h5>{member.name}</h5>
                          <span>{member.role}</span>
                        </div>
                      </div>
                      {/* <div className="social-icon">
                        {member.socials.map((social, socialIndex) => (
                          <a key={socialIndex} href={social.link}>
                            <i className={social.icon} />
                          </a>
                        ))}
                      </div> */}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="col-xl-6 col-lg-6 order-1 order-lg-2">
            <div className="team-content-wrap">
              <div className="section-title">
                <h6>Our Team</h6>
                <h2>Rare talent &amp; true workmanship</h2>
              </div>
              <p>
                Adipiscing elit, sed do eiusmod tempor incididunt ut labore et
                dolore magna aliqua. Ut enim ad minim. Adipiscing elit, sed do
                eiusmod tempor incididunt ut labore.
              </p>
              <Link href={`/about`} className="theme-btn mt-30">
                About Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
