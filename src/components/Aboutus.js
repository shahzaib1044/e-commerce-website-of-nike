import React from 'react';
import videoSource from './pexels_videos_2601 (1080p).mp4';

const AboutUs = () => {
  return (
    <div>
      <video
        src={videoSource}
        autoPlay
        muted
        loop
        style={{
          position: 'absolute',
          top: 0,
          left: 0,
          width: '100%',
          height: '170%',
          objectFit: 'cover',
          zIndex: -1,
        }}
      />
      <div
        style={{
          maxWidth: '800px',
          margin: '0 auto',
          padding: '20px',
          position: 'relative',
        }}
      >
        <h1 style={{ fontSize: '28px', color: '#333', marginBottom: '10px' }}>About Us</h1>
        <p style={{ fontSize: '16px', color: 'white', lineHeight: '1.5' }}>
          <span style={{ fontSize: '48px', fontWeight: 'bold' }}>BRING</span><br />
          <span style={{ fontSize: '48px', fontWeight: 'bold' }}>INSPIRATION</span><br />
          <span style={{ fontSize: '48px', fontWeight: 'bold' }}>AND</span><br />
          <span style={{ fontSize: '48px', fontWeight: 'bold' }}>INNOVATION</span><br />
          <span style={{ fontSize: '48px', fontWeight: 'bold' }}>TO</span><br />
          <span style={{ fontSize: '48px', fontWeight: 'bold' }}>EVERY</span><br />
          <span style={{ fontSize: '48px', fontWeight: 'bold' }}>ATHLETE*</span><br />
          <span style={{ fontSize: '48px', fontWeight: 'bold' }}>IN THE</span><br />
          <span style={{ fontSize: '48px', fontWeight: 'bold' }}>WORLD</span>
        </p>
        <p style={{ fontSize: '16px', color: 'white', lineHeight: '1.5' }}>
          At Nike, we believe in the power of sport to unleash human potential. We are a global leader in athletic footwear, apparel, equipment, and accessories, dedicated to inspiring and enabling athletes of all levels to reach their full potential.
        </p>
        <p style={{ fontSize: '16px', color: 'white', lineHeight: '1.5' }}>
          Since our founding in 1964 by Bill Bowerman and Phil Knight, Nike has continuously pushed the boundaries of innovation, design, and performance. We strive to create products that not only enhance athletic performance but also reflect the dynamic spirit of sport.
        </p>
        <p style={{ fontSize: '16px', color: 'white', lineHeight: '1.5' }}>
          Our mission goes beyond just creating exceptional products. We are committed to creating positive change in the world through sport. Nike actively supports and promotes diversity, inclusivity, and equality, both within our organization and throughout the communities we serve. We believe in the power of sport to break barriers, bridge divides, and bring people together.
        </p>
        <p style={{ fontSize: '16px', color: 'white', lineHeight: '1.5' }}>
          With a diverse range of athletes, teams, and partnerships across various sports and disciplines, Nike remains at the forefront of athletic excellence. We collaborate with top athletes and harness their insights to inform our product development, ensuring that every Nike innovation is rooted in real-world performance needs.
        </p>
        <p style={{ fontSize: '16px', color: 'white', lineHeight: '1.5' }}>
          Our commitment to sustainability is also a fundamental part of who we are. We strive to minimize our environmental impact and maximize positive social impact. Through innovative technologies and responsible practices, we are working towards a more sustainable future, aiming to protect the planet for generations to come.
        </p>
        <p style={{ fontSize: '16px', color: 'white', lineHeight: '1.5' }}>
          Whether you're an elite athlete striving for greatness or someone who simply enjoys being active, Nike is here to support and inspire you. Our products are designed to empower you to unleash your potential and push the boundaries of what you thought was possible.
        </p>
        <p style={{ fontSize: '16px', color: 'white', lineHeight: '1.5' }}>
          Join us in our mission to ignite the athlete in everyone. Together, we can redefine sport and create a better, more inclusive world through the power of sport.
        </p>
      </div>
    </div>
  );
};

export default AboutUs;
