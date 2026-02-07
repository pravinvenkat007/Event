
import "./Location.css";


export default function Location() {
return (
<section className="location-section" id="location">
<h2>Our Location</h2>
<p>Mangayarkarasi College of Engineering, Paravai, Madurai - 625402</p>


<div className="map-container">
<iframe
title="College Location"
src="https://www.google.com/maps?q=Mangayarkarasi+College+of+Engineering+Madurai&output=embed"
loading="lazy"
referrerPolicy="no-referrer-when-downgrade"
></iframe>
</div>
<footer>
    <h3>Created by student of mce</h3>
</footer>
</section>

);
}