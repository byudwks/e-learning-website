import React from "react";

function Hero() {
  return (
    <section>
      <div className="container">
        {/* content */}
        <div className="">
          {/* title */}
          <div className="">
            <span className="">
              <img
                src="/Images/shape-1.png"
                alt="Title shape"
                width={39}
                height={43}
              />
            </span>
            <span className="">
              <img
                src="/Images/shape-2.png"
                alt="Title shape"
                width={48}
                height={48}
              />
            </span>
            <h1 className="">
              <span className="">Unlock</span>Your Potential with Our
            </h1>
          </div>
        </div>
        <p className="">with Online Design and Development Courses.</p>
        <p>Learn from Industry Experts and Enhance Your Skills.</p>
        {/* btn Wrapper */}
        <div className="">
          <button>Explore Courses</button>
          <button> View Pricing</button>
        </div>
        {/* banner */}
      </div>
    </section>
  );
}

export default Hero;
