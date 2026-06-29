import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({ name: "", email: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);

  const handleInput = (e) => setForm({ ...form, [e.target.name]: e.target.value });
  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <Head>
        <title>Pro-Dispense | Precision Sports Nutrition Technology</title>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta
          name="description"
          content="Elite sports nutrition technology that is precise, innovative, and performance focused."
        />
      </Head>

      <style jsx global>{`
        @font-face {
          font-family: 'AEONIK';
          src: url('/fonts/aeonik-regular.woff2') format('woff2'),
               url('/fonts/aeonik-regular.woff') format('woff');
          font-weight: 400;
          font-style: normal;
          font-display: swap;
        }
        html, body {
          margin: 0;
          padding: 0;
          font-family: 'AEONIK', sans-serif;
          background-color: #1C262D;
          color: #F7F7F7;
          scroll-behavior: smooth;
          -webkit-font-smoothing: antialiased;
          -moz-osx-font-smoothing: grayscale;
        }
        a, button {
          font-weight: 700;
          cursor: pointer;
          border-radius: 48px;
          padding: 1.1rem 3rem;
          text-decoration: none;
          letter-spacing: 0.05em;
          background: linear-gradient(90deg, #293C4A, #1C262D);
          color: #F7F7F7;
          box-shadow: 0 0 12px #293C4A;
          transition: box-shadow 0.3s ease, background 0.3s ease, transform 0.3s ease;
          display: inline-block;
          user-select: none;
          border: none;
        }
        a:hover, button:hover {
          background: linear-gradient(90deg, #1C262D, #293C4A);
          box-shadow: 0 0 30px #1C262D;
          transform: translateY(-3px);
        }
        main {
          max-width: 1200px;
          margin: 0 auto;
        }
        section {
          position: relative;
          padding: 8rem 3rem;
          overflow: visible;
        }
        .centered {
          max-width: 800px;
          margin-left: auto;
          margin-right: auto;
          text-align: center;
          user-select: text;
        }
        h1, h2, h3 {
          font-weight: 900;
          margin-bottom: 1rem;
          letter-spacing: -0.01em;
          line-height: 1.1;
          text-align: center;
          user-select: none;
        }
        h1 {
          font-size: clamp(3rem, 8vw, 5rem);
          color: #F7F7F7;
        }
        h1 span {
          background: linear-gradient(45deg, #293C4A, #1C262D);
          padding: 0 1rem;
          border-radius: 1rem;
          box-shadow: 0 0 18px rgba(41, 60, 74, 0.5);
          color: #F7F7F7;
          user-select: none;
        }
        h2 {
          font-size: clamp(2rem, 4vw, 3rem);
          color: #93a3b2;
        }
        p {
          font-weight: 400;
          font-size: clamp(1rem, 2.5vw, 1.2rem);
          line-height: 1.6;
          margin-bottom: 2.5rem;
          color: #bbc6d2;
        }
        /* Hero Section */
        .hero {
          background: linear-gradient(135deg, #293C4A 0%, #1C262D 100%);
          height: 100vh;
          position: relative;
          display: flex;
          justify-content: center;
          align-items: center;
          padding: 0 2rem;
          text-align: center;
          overflow: hidden;
          z-index: 1;
        }
        .hero-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
        }
        .hero-content p {
          font-weight: 600;
          font-size: clamp(1.6rem, 3vw, 2.2rem);
          margin-bottom: 3rem;
        }
        .powder-man {
          position: absolute;
          bottom: -15%;
          right: -10%;
          width: 50vw;
          max-width: 650px;
          height: auto;
          background: url('/powder-man.png') no-repeat center / contain;
          filter: drop-shadow(0 0 25px rgba(0, 0, 0, 0.6));
          opacity: 0.3;
          pointer-events: none;
          user-select: none;
          mix-blend-mode: screen;
          will-change: transform;
          transform-style: preserve-3d;
          z-index: 1;
        }
        /* Section Transitions */
        .section-gradient-transition {
          height: 140px;
          background: linear-gradient(135deg, #1C262D 0%, #293C4A 90%);
          clip-path: polygon(0 0, 100% 100%, 100% 0, 0 100%);
          margin: -7rem 0 -5rem 0;
          z-index: 1;
          position: relative;
          user-select: none;
        }
        /* Story Section */
        .story {
          background: #1C262D;
          color: #bbc6d2;
          padding-top: 6rem;
          padding-bottom: 12rem;
          text-align: center;
          position: relative;
          z-index: 2;
        }
        /* Infographic Section */
        .infographic {
          background: linear-gradient(135deg, #293C4A, #1C262D);
          padding: 6rem 3rem 9rem;
          text-align: center;
          position: relative;
          z-index:
