import React from "react";
import team1 from "../Pages/images/team/1.jpg";
import team2 from "../Pages/images/team/2.jpg";
import team3 from "../Pages/images/team/3.jpg";
import team4 from "../Pages/images/team/4.jpg";
import blogs from "../Pages/images/blogs.jpg";
import "../Pages/css/page/Blog.css"

const Blogs = () => {
    // Inline styles object for the background image
    const subheaderStyle = {
        height: "40vh", // 50% of the viewport height
        backgroundImage: `url(${blogs})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
    };

    return (
        
        <div className="no-bottom no-top zebra" id="content">
            <div id="top"></div>

            {/* Section Begin */}
            <section
                id="subheader"
                style={subheaderStyle}
                className="jarallax text-light"
            >
                <div className="center-y relative text-center">
                    <div className="container">
                        <div className="row">
                            <div className="col-md-12 text-center">
                                <h1>Blogs</h1>
                            </div>
                            <div className="clearfix" />
                        </div>
                    </div>
                </div>
            </section>
            <div className="blog-container">
  <nav className="sidebar">
    <ul>
      <li>
        <a href="#section1">Wound treatment</a>
      </li>
      <li>
        <a href="#section2">Drowning person</a>
      </li>
      <li>
        <a href="#section3"> Choking on foreign objects</a>
      </li>
      <li>
        <a href="#section4">Cardiopulmonary resuscitation for  suffocating</a>
      </li>
    </ul>
  </nav>
  <div className="content">
    <h2 id="section1">Wound treatment</h2>
    <p>Scratches, wounds (cuts, sprains, etc.) should be cleaned with clean water, and washed <br /> under running water as much as possible to remove the wound material and spread bacteria.
    <br /> - If the wound is muddy or sandy, use hydrogen peroxide to wash the wound to remove the mud.
    <br /> - Clean, rinse with soapy water and reduce pain with a towel.
    Treat deep, long wounds, multiple deep cuts on the limbs. <br /> - Use clean hands (use medical hand stretchers if available) firmly on the wound, creating pressure to stretch the blood vessels.
    <br /> - Use a soft cloth to cover the wound. <br />
    - Bandage the wound to create pressure to stop bleeding.
    <br /> - If there is enough bandage, there is no need to remove it, but continue to use additional gauze on top.</p>
    <img src="https://tamanhhospital.vn/wp-content/uploads/2021/10/Xu-ly-vet-thuong.jpg" alt="bangbo" />
        <p>Deep cut, profuse bleeding
    Call an ambulance/help from others.
    Wash hands and wear gloves (if available).
    <br /> - Exposing the wound requires removing foreign objects in a shallow position. Do not remove <br /> foreign objects that are deeply embedded in the wound.
    <br /> - Hemostatic control is achieved by applying a bandage directly to the wound, using a clean bandage.
    <br /> - Raise the injured limb above the level of the heart (if there is no fracture). We need to place the victim in a <br /> comfortable position with the head low.
    <br /> - Use a rolled bandage to apply pressure to the wound to help stop the bleeding (should use a sterile cloth pad in the middle).
    <br /> - For wounds with deep foreign objects, we need to bandage around the foreign object to fix it. <br /> - If the wound is still bleeding, we should not use additional gauze pad in the middle but reassess the wound <br /> and place a new pad in the correct position to stop the bleeding.
    <br /> - Continue to check the victim's airway and breathing. Monitor for signs of shock while waiting for emergency services to arrive.
    <br /> - Deep cut in the neck
    <br /> - Use your hand to apply pressure to the wound to stop the bleeding
    <br /> - Use an elastic bandage to wrap diagonally across the neck and armpit to apply pressure to stop the bleeding <br /> and quickly take the victim to the hospital.
    <br /> - Sprained ligament injury
    <br /> - When a sprain occurs, remove shoes and socks to compress the injured area.
    <br /> - Apply a towel wrapped in ice to help reduce swelling and relieve pain.
    <br /> - A bandage should be wrapped around the sprained joint, but not too tightly, as the wound will swell.
    <br /> - Take the victim to a medical facility immediately after bandaging.</p>

<img src="https://tamanhhospital.vn/wp-content/uploads/2021/10/So-cuu-bong-gan-ton-thuong-day-chang.jpg" alt="" />

    <h2 id="section2">Save the drowning person</h2>
    <p>When you see someone showing signs of drowning, give the victim something to hold on to to float, <br /> such as: a buoy, banana leaf, a large, tightly-lidded plastic can, etc.

    <br /> - If you cannot swim or are not confident in your ability, shout loudly to ask for help from those around you.

    <br /> - When using support objects such as sticks, ropes, etc., stand firmly and far enough away to avoid being pulled back into the water. <br /> - In case the victim is face down in the water, you need to immediately call emergency services such as 115 emergency...
    <br /> - When bringing the drowning victim to shore, check the victim's reaction and breathing.
    <br /> - If the victim is still breathing: Place the victim on one side.

If the victim cannot breathe, call 115 <br /> emergency and call for more help.
Perform cardiopulmonary resuscitation.</p>
<img src="https://tamanhhospital.vn/wp-content/uploads/2021/10/So-cuu-nguoi-duoi-nuoc.jpg" alt="" />
    <h2 id="section3">First aid for people choking on foreign objects</h2>
    <p>There are two types of foreign body aspiration: incomplete airway obstruction and complete airway obstruction. <br /> The following are signs of foreign body aspiration.

    <br /> - Incomplete airway obstruction, the victim often has symptoms: Coughing and trying to cough, trying to spit to <br /> expel the foreign body.
    <br /> - Complete airway obstruction
    <br /> - The victim cannot speak
    <br /> - Holding the neck
    <br /> - The victim has difficulty breathing, trying to breathe
    <br /> - Eyes roll back, face looks panicked.
    <br /> - The victim's face may be red, the blood vessels in the neck may swell
    <br /> - The lips and tongue gradually turn purple.
    <br /> - Perform first aid
    <br /> - In case the victim can cough on their own:
    <br /> - If breathing, encourage the victim to cough more to push the foreign object out.
    <br /> -  When the victim is coughing, absolutely do not hit the back.
    <br /> -  In case the victim cannot cough on his own

    <br /> - If the victim is an infant
    <br /> -  Use your hand to support the neck, place the child on his stomach on a pillow with his head slightly tilted down, <br /> use the palm of your hand to pat with moderate force on the bone area between the <br /> 2 shoulder blades, patting from below towards the nape of the neck.

    <br /> - Use 2 fingers to press 5 times on the middle of the child's chest. If the child shows signs of coughing,  <br />stop and let the child cough on his own.

    <br /> </p>
    <img src="https://tamanhhospital.vn/wp-content/uploads/2021/10/So-cap-cuu-tre-hoc-di-vat-1.jpg" alt="divat" />
    <h2 id="section4">How to perform cardiopulmonary <br /> resuscitation for  someone who is suffocating</h2>
    <p>Cardiopulmonary resuscitation is a necessary first aid skill for people with <br /> cardiac arrest, septic shock, hemorrhagic shock, unconsciousness or suffocation due to drowning, electric shock, etc.

    <br />-  Basic ways to detect a victim with cardiac arrest

   <br /> Coma, shaking but not waking
   <br /> No chest movement
   <br /> No pulse in neck or femoral artery
   <br />If you have 1 of the 3 signs above, call 115 or ask someone else to call for you before starting CPR. <br />
   <br />  If there is only you and the victim, perform CPR for 2 minutes before calling for emergency help.</p>
     <img src="https://tamanhhospital.vn/wp-content/uploads/2021/10/So-cap-cuu-hoi-suc-tim-phoi.jpg" alt="" />
  </div>
</div>


        

            <section
                id="section-call-to-action"
                className="bg-color-2 pt60 pb60 text-light"
            >
                <div className="container">
                    <div className="row align-items-center">
                        <div className="col-lg-8">
                            <h2 className="s2">
                                Call us for further information. Rentaly
                                customer care is here to help you anytime.
                            </h2>
                        </div>

                        <div className="col-lg-4 text-lg-center text-sm-center">
                            <div className="phone-num-big">
                                <i className="fa fa-phone"></i>
                                <span className="pnb-text">Call Us Now</span>
                                <span className="pnb-num">1 200 333 800</span>
                            </div>
                            <a href="" className="btn-main">
                                Contact Us
                            </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Blogs;
