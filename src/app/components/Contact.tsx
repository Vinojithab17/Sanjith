"use client"


import React from "react";
import styled from "styled-components";

const Section = styled.section`
  padding: 80px 20px;
  background-color: #0a192f;
  color: #ccd6f6;
  text-align: center;
`;

const Title = styled.h2`
  font-size: 2rem;
  margin-bottom: 1rem;
  color: #64ffda;
`;

const Text = styled.p`
  margin-bottom: 2rem;
`;

const EmailLink = styled.a`
  color: #64ffda;
  text-decoration: none;
  font-weight: bold;

  &:hover {
    text-decoration: underline;
  }
`;

const ContactSection: React.FC = () => {
  return (
    <Section id="contact">
      <Title>Contact Me</Title>
      <Text>
        I am always open to new opportunities and interesting projects. Feel
        free to reach out!
      </Text>
      <EmailLink href="mailto:vinojithab17@gmail.com">
        vinojithab17@gmail.com
      </EmailLink>
    </Section>
  );
};

export default ContactSection;
