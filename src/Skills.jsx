function Contact() {
  return (

<section className="contact" id="contact">

<h2 className="heading">Contact <span>Me!</span></h2>

<form id="contact-form" action="action.php" method="POST">

<div className="input-box">

<div className="input-field field">
<input type="text" placeholder="Full Name" required id="name" className="item" autocomplete="off" />
<div className="error-txt">Full Name can't be blank</div>
<span className="focus"></span>
</div>


<div className="input-field field">
<input type="email" placeholder="Email Address" required id="email" className="item" autocomplete="off" />
<div className="error-txt">Email Address can't be blank</div>
<span className="focus"></span>
</div>

</div>

<div className="input-box">

<div className="input-field field">
<input type="tel" placeholder="Mobile Number" required id="phone" className="item" autocomplete="off" />
<div className="error-txt">Phone Number can't be blank</div>
<span className="focus"></span>
</div>


<div className="input-field field">
<input type="text" placeholder="Email Subject" required id="subject" className="item" autocomplete="off" />
<div className="error-txt">Subject can't be blank</div>
<span className="focus"></span>
</div>

</div>

<div className="textarea-field">
<textarea id="message" cols="30" rows="10" placeholder="Your Message" required></textarea>
<span className="focus"></span>
</div>

<div className="btn-box btns">
<button type="submit" className="btn">Submit</button>
</div>

</form>

</section>

  );
}

export default Contact;