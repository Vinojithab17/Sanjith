"use client";

// import React from "react";

// const Footer: React.FC = () => {
//   return (
//     <footer style={styles.footer}>
//       <div style={styles.container}>
//         {/* Left Section */}
//         <div style={styles.section}>
//           <h3 style={styles.heading}>Let's Connect</h3>
//           <p style={styles.text}>
//             I'm always open to new opportunities and interesting conversations.
//           </p>
//           <a href="mailto:hello@sanjith.dev" style={styles.email}>
//             hello@sanjith.dev
//           </a>
//         </div>

//         {/* Right Section */}
//         <div style={styles.section}>
//           <h3 style={styles.heading}>Find Me Online</h3>
//           <div style={styles.socialLinks}>
//             <a
//               href="https://github.com/sanjith"
//               style={styles.socialLink}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <span style={styles.icon}>📱</span> GitHub
//             </a>
//             <a
//               href="https://linkedin.com/in/sanjith"
//               style={styles.socialLink}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <span style={styles.icon}>💼</span> LinkedIn
//             </a>
//             <a
//               href="https://twitter.com/sanjith"
//               style={styles.socialLink}
//               target="_blank"
//               rel="noopener noreferrer"
//             >
//               <span style={styles.icon}>🐦</span> Twitter
//             </a>
//           </div>
//         </div>
//       </div>

//       {/* Bottom copyright */}
//       <div style={styles.bottom}>
//         © {new Date().getFullYear()} Sanjith. All rights reserved.
//       </div>
//     </footer>
//   );
// };

// const styles: { [key: string]: React.CSSProperties } = {
//   footer: {
//     backgroundColor: "#222",
//     color: "#fff",
//     padding: "40px 20px 20px",
//     marginTop: "40px",
//     textAlign: "center",
//   },
//   container: {
//     display: "flex",
//     justifyContent: "space-between",
//     flexWrap: "wrap",
//     maxWidth: "1200px",
//     margin: "0 auto",
//     textAlign: "left",
//   },
//   section: {
//     flex: "1 1 300px",
//     margin: "10px",
//   },
//   heading: {
//     fontSize: "18px",
//     marginBottom: "10px",
//     color: "#f1f1f1",
//   },
//   text: {
//     fontSize: "14px",
//     lineHeight: "1.6",
//     marginBottom: "10px",
//     color: "#bbb",
//   },
//   email: {
//     color: "#4dabf7",
//     textDecoration: "none",
//     fontSize: "15px",
//   },
//   socialLinks: {
//     display: "flex",
//     flexDirection: "column",
//     gap: "8px",
//   },
//   socialLink: {
//     display: "flex",
//     alignItems: "center",
//     gap: "6px",
//     color: "#bbb",
//     textDecoration: "none",
//     fontSize: "15px",
//   },
//   icon: {
//     fontSize: "18px",
//   },
//   bottom: {
//     marginTop: "30px",
//     borderTop: "1px solid #444",
//     paddingTop: "15px",
//     fontSize: "13px",
//     color: "#777",
//   },
// };

// export default Footer;

import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

// const FooterSection = styled.footer`
//   background-color: #111; /* dark background */
//   padding: 1.2rem 0;
//   text-align: center;
// `;

const Container = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

// const FooterContent = styled.div`
//   display: flex;
//   flex-direction: column;
//   align-items: center;
//   gap: 1.5rem;
// `;

// const Copyright = styled.p`
//   color: #aaa;
//   font-size: 0.9rem;
// `;

// const SocialLinks = styled.div`
//   display: flex;
//   gap: 1.5rem;
// `;

// const SocialLink = styled(motion.a)`
//   color: #fff;
//   font-size: 1.5rem;
//   transition: color 0.2s ease;

//   &:hover {
//     color: #0070f3; /* Next.js blue */
//   }
// `;


const FooterSection = styled.footer`
  background-color: #111; /* dark background */
  padding: 0.8rem 0; /* smaller vertical padding */
  text-align: center;
`;

const FooterContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 1rem; /* reduce spacing between content */
`;

const Copyright = styled.p`
  color: #aaa;
  font-size: 0.8rem; /* smaller font */
`;

const SocialLink = styled(motion.a)`
  color: #fff;
  font-size: 1.2rem; /* smaller icons */
  transition: color 0.2s ease;

  &:hover {
    color: #0070f3; /* Next.js blue */
  }
`;

const SocialLinks = styled.div`
  display: flex;
  gap: 1rem; /* reduce spacing between icons */
`;

const Footer: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    {
      name: "GitHub",
      url: "https://github.com/Vinojithab17",
      icon: <FaGithub />,
    },
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/vinojith-g/",
      icon: <FaLinkedin />,
    },
    {
      name: "Email",
      url: "mailto:vinojithab17@gmail.com",
      icon: <FaEnvelope />,
    },
  ];

  return (
    <FooterSection>
      <Container>
        <FooterContent>
          <Copyright>© {currentYear} Vinojith. All rights reserved.</Copyright>
          <SocialLinks>
            {socialLinks.map((link, index) => (
              <SocialLink
                key={index}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                whileHover={{ y: -3 }}
                whileTap={{ scale: 0.95 }}
              >
                {link.icon}
              </SocialLink>
            ))}
          </SocialLinks>
        </FooterContent>
      </Container>
    </FooterSection>
  );
};

export default Footer;


