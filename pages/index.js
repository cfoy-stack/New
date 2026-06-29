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
        <meta name="description" content="Elite sports nutrition technology that is precise, innovative and performance focused." />
      </Head>

      <style jsx global>{`
        html, body {
          margin: 0;
          padding: 0;
          font-family:
            -apple-system, BlinkMacSystemFont,
            "Segoe UI", Roboto,
            Oxygen, Ubuntu,
            Cantarell, "Open Sans",
            "Helvetica Neue",
            sans-serif;
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
          text-align: center;
          user-select: text;
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
          z-index: 2;
          color: #F7F7F7;
        }
        .infographic-content {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
          margin-top: 4rem;
          max-width: 1000px;
          margin-left: auto;
          margin-right: auto;
        }
        .infographic-card {
          background: linear-gradient(145deg, #f4f9ff, #dbe9ff);
          padding: 3rem 2.5rem;
          border-radius: 2rem;
          box-shadow: 0 20px 25px rgba(0, 0, 0, 0.25);
          width: 280px;
          min-height: 180px;
          color: #293c4a;
          font-weight: 700;
          font-size: clamp(2.5rem, 6vw, 4.5rem);
          line-height: 1.1;
          display: flex;
          flex-direction: column;
          justify-content: center;
          user-select: none;
          text-align: center;
        }
        .infographic-card p {
          font-weight: 500;
          font-size: 1.25rem;
          margin-top: 1.2rem;
          color: #657a9a;
          font-weight: 600;
          letter-spacing: 0.02em;
        }
        /* System Section */
        .system {
          background: linear-gradient(180deg, #293C4A 0%, #1C262D 100%);
          padding-top: 8rem;
          padding-bottom: 12rem;
          color: #f7f7f7;
          text-align: center;
          position: relative;
          z-index: 2;
        }
        .system h2 {
          margin-bottom: 4rem;
        }
        .system-cards {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: 3rem;
          max-width: 1200px;
          margin: 0 auto;
        }
        .glass-card {
          background: rgba(255 255 255 / 0.15);
          backdrop-filter: blur(24px);
          border-radius: 1.5rem;
          padding: 2.5rem 3rem;
          box-shadow: 0 15px 30px rgba(0, 0, 0, 0.6);
          cursor: default;
          user-select: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
        }
        .glass-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 25px 45px rgba(0, 0, 0, 0.9);
        }
        .glass-card h3 {
          font-weight: 900;
          margin-bottom: 1rem;
          color: #bbe1e1;
          letter-spacing: 0.02em;
        }
        .glass-card p {
          font-weight: 500;
          font-size: 1.1rem;
          line-height: 1.5;
          color: #d1e8eb;
        }
        /* Founders Section */
        .founders {
          padding: 8rem 3rem 12rem;
          background: linear-gradient(135deg, #1C262D 40%, #293C4A 100%);
          position: relative;
          z-index: 2;
          color: #f7f7f7;
        }
        .founders h2 {
          text-align: center;
          margin-bottom: 6rem;
          font-weight: 900;
          letter-spacing: 0.03em;
        }
        .founders-grid {
          display: flex;
          justify-content: center;
          gap: 3rem;
          flex-wrap: wrap;
          max-width: 1100px;
          margin: 0 auto;
        }
        .founder {
          max-width: 280px;
          border-radius: 2rem;
          background: rgba(255 255 255 / 0.1);
          backdrop-filter: blur(16px);
          padding: 2.5rem 2rem;
          box-shadow: 0 15px 30px rgba(0,0,0,0.6);
          user-select: none;
          transition: transform 0.25s ease, box-shadow 0.25s ease;
          cursor: default;
          text-align: center;
        }
        .founder:hover {
          transform: translateY(-12px);
          box-shadow: 0 30px 55px rgba(0,0,0,0.9);
        }
        .founder h3 {
          margin-bottom: 0.4rem;
          font-weight: 900;
          font-size: 1.7rem;
          color: #94e5ff;
          letter-spacing: 0.025em;
        }
        .founder p {
          color: #cde7ea;
          font-weight: 500;
          font-size: 1rem;
          line-height: 1.5;
        }
        /* Benefits Section */
        .benefits {
          padding: 7rem 3rem 10rem;
          background: linear-gradient(180deg, #293C4A 40%, #1C262D 100%);
          color: #f7f7f7;
          text-align: center;
          position: relative;
          z-index: 2;
        }
        .benefits h2 {
          margin-bottom: 4rem;
          letter-spacing: 0.03em;
          font-weight: 900;
        }
        .benefits-list {
          max-width: 700px;
          margin: 0 auto;
          text-align: left;
          font-weight: 500;
          font-size: 1.25rem;
          line-height: 1.8;
          list-style-position: inside;
          user-select: text;
          color: #bde6f8;
        }
        /* Enquire Section */
        .enquire {
          padding: 6rem 3rem 9rem;
          text-align: center;
          color: #f7f7f7;
          position: relative;
          z-index: 2;
        }
        .enquire h2 {
          font-weight: 900;
          font-size: 3rem;
          margin-bottom: 3rem;
          letter-spacing: 0.04em;
          user-select: none;
        }
        .contact-form {
          max-width: 480px;
          margin: 0 auto;
          display: flex;
          flex-direction: column;
          gap: 1rem;
          text-align: left;
        }
        label {
          font-weight: 700;
          user-select: none;
        }
        input, textarea {
          padding: 0.75rem 1rem;
          border-radius: 12px;
          border: none;
          font-size: 1rem;
          background: rgba(255 255 255 / 0.14);
          color: #f7f7f7;
          resize: none;
          outline-offset: 2px;
          outline-color: #94e5ff;
          transition: background-color 0.3s ease, outline-offset 0.3s ease;
        }
        input::placeholder, textarea::placeholder {
          color: rgba(247 247 247 / 0.6);
        }
        input:focus, textarea:focus {
          background-color: rgba(255 255 255 / 0.3);
          outline-offset: 7px;
        }
        button[type="submit"] {
          margin-top: 2rem;
          padding: 1.15rem 2.8rem;
          border-radius: 48px;
          font-size: 1.15rem;
          font-weight: 900;
          letter-spacing: 0.04em;
          background: linear-gradient(90deg, #293C4A, #1C262D);
          box-shadow: 0 0 17px #293C4A;
          border: none;
          cursor: pointer;
          color: #f7f7f7;
          user-select: none;
          transition: all 0.4s ease;
        }
        button[type="submit"]:hover {
          background: linear-gradient(90deg, #1C262D, #293C4A);
          box-shadow: 0 0 28px #1C262D;
          transform: translateY(-5px);
        }
        .thankyou {
          margin-top: 3rem;
          font-weight: 700;
          font-size: 1.4rem;
          color: #7ADB8C;
          text-align: center;
          user-select: none;
        }
        /* Footer */
        footer.footer {
          background: #000000;
          padding: 1.5rem 1.5rem;
          font-size: 0.9rem;
          color: #5a6e82;
          text-align: center;
          user-select: none;
        }
        /* Responsive */
        @media (max-width: 768px) {
          .infographic-content {
            flex-direction: column;
            gap: 2.5rem;
            max-width: 400px;
            margin: 3rem auto 0;
          }
          .system-cards {
            grid-template-columns: 1fr !important;
            gap: 2.5rem;
          }
          .founders-grid {
            flex-direction: column;
            max-width: 400px;
            margin: 0 auto;
          }
          section {
            padding: 5rem 1rem 7rem;
          }
          h1 {
            font-size: 3rem !important;
          }
        }
      `}</style>
    </>
  );
}
