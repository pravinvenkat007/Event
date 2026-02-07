

import "./Cards.css";
import { Link } from "react-router-dom";
import { Button } from "./Button";

export default function Eventcard() {
return (
    
<section className="cards-wrapper" id="events">
   
<div className="card">
     
<img src="/day1.jpeg" alt="K-12" />
<div className="card-content">
<h3>Day 1</h3>
<p>Create highly engaging and secure online learning spaces to nurture young minds.</p>
{/* <span className="arrow">→</span> */}
<Link to="/Day1"><Button/></Link> 

</div>
</div>


<div className="card">
<img src="/day2.jpeg" alt="Education" />
<div className="card-content">
<h3>Day 2</h3>
<p>Get a custom LMS platform for your university, college, academy, or institute.</p>
<Link to="/Day2"><Button/></Link> 
</div>
</div>


<div className="card">
<img src="/day3.jpeg" alt="Vocational" />
<div className="card-content">
<h3>Day 3</h3>
<p>Bring your vocational courses online with Moodle LMS.</p>
<Link to="/Day3"><Button/></Link> 
</div>
</div>
</section>
);
}