function About() {
  return (
    <section className="about" id="about">
      <h2 className="heading">About <span>Me</span></h2>
      <div className="about-img">
        <img src="/Mahdy.jpeg" alt="" />
        <span className="circle-spin"></span>
      </div>
      <div className="about-content">
        <h3>Frontend Developer!</h3>
        <p>I am a passionate frontend developer focused on building modern, responsive, and visually appealing web applications. I enjoy turning ideas into interactive digital experiences using clean and efficient code. With a strong attention to detail and a user-first mindset, I strive to create websites that are both functional and engaging. I am always eager to learn new technologies and continuously improve my skills to deliver high-quality results.</p>
        <div className="btn-box btns">
          <a href="#" className="btn">Read More</a>
        </div>
      </div>
    </section>
  );
}

export default About;