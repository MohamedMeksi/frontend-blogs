import React from "react";
import styled from "styled-components";
import Card from "../Components/Card";
import Header from "../Components/Header";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";

const blogs = [
  {
    title: "Casablanca",
    description: "Casablanca est la plus grande ville du Maroc, connue pour son architecture moderne et ses plages.",
    country: "Maroc",
    image: "https://www.guidesulysse.com/imageswebp/destinations/iStock-484506846.webp",
    author: "John Doe"
  },
  {
    title: "Marrakech",
    description: "Marrakech est une ville historique, célèbre pour ses souks, ses jardins et ses monuments.",
    country: "Maroc",
    image: "https://www.marrakech-cityguide.com/wp-content/uploads/Marrakech-place-koutoubia-e1609154215571.jpg",
    author: "Jane Smith"
  },
  {
    title: "Fès",
    description: "Fès est une ville ancienne avec une médina classée au patrimoine mondial de l'UNESCO.",
    country: "Maroc",
    image: "https://i0.wp.com/reporterontheroad.com/wp-content/uploads/Fes_Maroc_Cover-scaled.jpg?fit=2560%2C1707&ssl=1",
    author: "Ali Ben"
  },
  {
    title: "Rabat",
    description: "Rabat est la capitale du Maroc, connue pour son histoire, ses monuments et ses plages.",
    country: "Maroc",
    image: "https://www.visitmorocco.com/sites/default/files/styles/thumbnail_destination_background_top5/public/thumbnails/image/tour-hassan-rabat-morocco-by-migel.jpg?itok=YP8GLwSi",
    author: "Maria Lopez"
  },
  {
    title: "Chefchaouen",
    description: "Chefchaouen est célèbre pour ses bâtiments peints en bleu et son ambiance tranquille.",
    country: "Maroc",
    image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR703erjGtMCy0_P4nWbTbXY8T5Q5bIKIFCuQ&s",
    author: "Ahmed Alami"
  }
];

const Home = () => {
  return (
    <StyledContainer>
      <header>
        <Header />
      </header>

      <div className="banner">
        <div className="content">
          <h1>Explorez, grandissez, inspirez-vous chaque jour !</h1>
          <p>Ta réussite, ton voyage, ton histoire.</p>
        </div>
      </div>

      <h1>Mon Blog</h1>
      <p>Chaque jour est une nouvelle aventure à écrire</p>

      <div className="blog-grid">
        {blogs.map((blog, index) => (
          <Card
            key={index}
            title={blog.title}
            description={blog.description}
            author={blog.author}
            image={blog.image}
          />
        ))}
      </div>

      <Footer />
    </StyledContainer>
  );
};

const Footer = () => {
  return (
    <StyledFooter>
      <div className="footer-container">
        <div className="footer-logo">
          <h2>MonSite</h2>
          <p>© 2025 Tous droits réservés</p>
        </div>

        <div className="footer-links">
          <a href="#">Accueil</a>
          <a href="#">À propos</a>
          <a href="#">Services</a>
          <a href="#">Contact</a>
        </div>

        <div className="footer-socials">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaTwitter /></a>
          <a href="#"><FaInstagram /></a>
          <a href="#"><FaLinkedin /></a>
        </div>
      </div>
    </StyledFooter>
  );
};

const StyledContainer = styled.div`
  text-align: center;
  background-color: white;
  color: black; /* Correction ici */

  header {
    margin-bottom: 10px;
  }

  h1 {
    font-size: 2.5rem;
    color: #ff6b00;
  }

  .banner {
    position: relative;
    height: 800px;
    width: 100%;
    overflow: hidden;
  }

  .banner::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url("https://www.guidesulysse.com/imageswebp/destinations/iStock-484506846.webp");
    background-size: cover;
    background-position: center;
    filter: blur(8px);
  }

  .content {
    position: relative;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    color: white;
    text-align: center;
    padding: 20px;
    border-radius: 8px;
    font-weight: bold;
  }

  .blog-grid {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(350px, 1fr));
    gap: 60px;
    justify-content: center;
    max-width: 1200px;
    margin: 0 auto;
  }
`;

const StyledFooter = styled.footer`
  background: #111;
  color: white;
  padding: 20px 0;
  text-align: center;
  margin-top: 40px;

  .footer-container {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-around;
    align-items: center;
    max-width: 1100px;
    margin: auto;
  }

  .footer-logo h2 {
    font-size: 24px;
    margin-bottom: 5px;
  }

  .footer-links a,
  .footer-socials a {
    color: white;
    text-decoration: none;
    margin: 0 10px;
    transition: 0.3s;
  }

  .footer-links a:hover,
  .footer-socials a:hover {
    color: #f39c12;
  }

  .footer-socials a {
    font-size: 20px;
  }
`;

export default Home;
