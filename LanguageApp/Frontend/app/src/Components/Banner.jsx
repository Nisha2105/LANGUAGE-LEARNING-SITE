import { useState } from "react";
import { Link } from "react-router-dom";
import slide3 from '../assets/bg.jpg';
import { Button, Carousel, CarouselCaption, CarouselItem } from "react-bootstrap";
import '../components/Banner.css';

export const Banner = () => {
  const [showLanguages, setShowLanguages] = useState(false);

  const handleQuizClick = () => {
    setShowLanguages(!showLanguages);
  };

  return (
    <Carousel>
      <CarouselItem>
        <img src={slide3} alt="first slide" />
        <CarouselCaption>
          <h4>🖥️ Learn to Code from Scratch</h4>
          <h5>Start Your Coding Journey Today!</h5>
          <p>Learn programming from the ground up with interactive lessons in HTML, CSS, JavaScript, Python, and more.</p>
          <Button>Get Started</Button>
        </CarouselCaption>
      </CarouselItem>

      <CarouselItem>
        <img src={slide3} alt="second slide" />
        <CarouselCaption>
          <h4>Test Your Knowledge</h4>
          <p>Take quizzes and improve your coding skills.</p>
          <Button className="quiz-btn" variant="success" as={Link} to="/select-language">
            Take a Quiz
          </Button>

        </CarouselCaption>
      </CarouselItem>

      <CarouselItem>
        <img src={slide3} alt="third slide" />
        <CarouselCaption>
          <h4>🎯 Learn Anytime, Anywhere</h4>
          <h5>Flexible Learning for Every Developer</h5>
          <p>Access engaging tutorials, live coding exercises, and expert guidance from any device.</p>
          <Button>Get Started</Button>
        </CarouselCaption>
      </CarouselItem>
    </Carousel>
  );
};

export default Banner;
