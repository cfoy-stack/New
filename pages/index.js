import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleInput = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

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
          content="Elite sports nutrition technology that is precise, innovative and performance focused."
        />
      </Head>

      <main
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          padding: "2rem",
          fontFamily:
            '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif',
          color: "#1C262D",
        }}
      >
        <section
          style={{
            padding: "4rem 1rem",
            background:
              "linear-gradient(135deg, #293C4A 0%, #1C262D 100%)",
            color: "#F7F7F7",
            textAlign: "center",
            borderRadius: "12px",
          }}
        >
          <h1 style={{ fontSize: "3rem", fontWeight: "900", marginBottom: "1rem" }}>
            Introducing <span style={{ color: "#94E5FF" }}>FLO</span>
          </h1>
          <p style={{ fontSize: "1.25rem", marginBottom: "2rem" }}>
            Next-level precision dispensing for elite sports nutrition
          </p>
          <a
            href="#enquire"
            style={{
              backgroundColor: "#94E5FF",
              color: "#1C262D",
              padding: "1rem 2.5rem",
              borderRadius: "50px",
              fontWeight: "700",
              textDecoration: "none",
            }}
          >
            Enquire Now
          </a>
        </section>

        <section style={{ marginTop: "5rem", textAlign: "center" }}>
          <h2>Our Story</h2>
          <p style={{ maxWidth: "650px", margin: "1rem auto" }}>
            Cameron Foy’s football career was cut short by injury. Partnering with product designer Andrew Davison, together they revolutionise sports nutrition technology.
          </p>
        </section>

        <section style={{ marginTop: "5rem", textAlign: "center" }}>
          <h2>The System</h2>
          <ul
            style={{
              listStyleType: "disc",
              maxWidth: "700px",
              margin: "1rem auto",
              textAlign: "left",
              color: "#293C4A",
              fontWeight: "600",
              fontSize: "1.1rem",
            }}
          >
            <li>Patent-pending smart dispenser for precise dosing</li>
            <li>Custom formulated drinks tailored to athletes</li>
            <li>Real-time tracking and optimisation</li>
            <li>Integrated software ecosystem</li>
          </ul>
        </section>

        <section
          id="enquire"
          style={{ marginTop: "5rem", textAlign: "center", color: "#1C262D" }}
        >
          <h2>Get In Touch</h2>
          {submitted ? (
            <p style={{ color: "green", fontWeight: "700" }}>
              Thank you for your enquiry! We will be in touch soon.
            </p>
          ) : (
            <form
              onSubmit={handleSubmit}
              style={{
                maxWidth: "400px",
                margin: "2rem auto",
                display: "flex",
                flexDirection: "column",
                gap: "1rem",
              }}
            >
              <label htmlFor="name">Name*</label>
              <input
                id="name"
                name="name"
                type="text"
                required
                value={form.name}
                onChange={handleInput}
                style={{ padding: "0.5rem", fontSize: "1rem" }}
              />

              <label htmlFor="email">Email*</label>
              <input
                id="email"
                name="email"
                type="email"
                required
                value={form.email}
                onChange={handleInput}
                style={{ padding: "0.5rem", fontSize: "1rem" }}
              />

              <label htmlFor="company">Company</label>
              <input
                id="company"
                name="company"
                type="text"
                value={form.company}
                onChange={handleInput}
                style={{ padding: "0.5rem", fontSize: "1rem" }}
              />

              <label htmlFor="message">Message*</label>
              <textarea
                id="message"
                name="message"
                required
                rows={4}
                value={form.message}
                onChange={handleInput}
                style={{ padding: "0.5rem", fontSize: "1rem" }}
              ></textarea>

              <button
                type="submit"
                style={{
                  padding: "1rem",
                  backgroundColor: "#94E5FF",
                  color: "#1C262D",
                  fontWeight: "700",
                  border: "none",
                  borderRadius: "50px",
                  cursor: "pointer",
                }}
              >
                Submit
              </button>
            </form>
          )}
        </section>
      </main>
    </>
  );
}
