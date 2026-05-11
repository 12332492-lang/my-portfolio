import './style.css';

function Home() {
  return (
    <section className="home" id="home">
      <div className="home-content">
        <h1>Hi, I'm <span>Mahdi Kashakesh</span></h1>
        <div className="text-animate">
          <h3>Frontend Developer</h3>
        </div>
        <p>I specialize in building responsive and user-friendly web interfaces using modern technologies. I’m passionate about creating seamless digital experiences, writing clean and maintainable code, and continuously learning to stay up to date with the latest trends in frontend development.</p>
        <div className="btn-box">
          <a href="#" className="btn">Hire me</a>
          <a href="#" className="btn">Let's talk</a>
        </div>
      </div>
      <div className="home-sci">
        <a href="#"><i className='bx bxl-facebook'></i></a>
        <a href="#"><i className='bx bxl-twitter'></i></a>
        <a href="#"><i className='bx bxl-linkedin'></i></a>
      </div>
      <div className="home-imgHover"></div>
    </section>
  );
}

export default Home;