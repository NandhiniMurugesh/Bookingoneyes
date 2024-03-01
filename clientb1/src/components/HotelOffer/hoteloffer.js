import React from "react";



export function Hoteloffer(){
    return(
        <>
    
  
      <div className='seperator'></div>
      <h3>BEST OFFERS ON GOING!!!</h3>

{/* offer carousel */}
<div id="carouselExampleAutoplaying" class="carousel slide" data-bs-ride="carousel">
<div class="carousel-inner">
<div class="carousel-item active">
 <div className="row">
    <div className="d-flex  ">
    
    <div class="offercard col-lg-5" >
<img src="https://www.easemytrip.com/images/hotel-img/grab20-28apr-mob2.png" class="card-img-top offercardimage" alt="..."/>

</div>
<div className="col-lg-1"></div>
    <div class="offercard col-lg-5" >
<img src="https://sa.adanione.com/-/media/Project/Campaigns/Valentine-s-Day/Hotel/Up-to-20-Hotel-Offers/DOMSTAY/domestic-landing-page-banner-mweb.jpg" class="card-img-top offercardimage" alt="..."/>

</div>
    </div>
 </div>
</div>
<div class="carousel-item">
<div className="row">
    <div className="d-flex  ">
    
    <div class="offercard col-lg-5" >
<img src="https://images.via.com/static/dynimg/search_page/40/normal/1016988951-1016988950_up-to-70-off-on-all-hotels-offer-994-x-415-1jpg.jpg" class="card-img-top offercardimage" alt="..."/>

</div>
<div className="col-lg-1"></div>
    <div class="offercard col-lg-5" >
<img src="https://i.pinimg.com/736x/9f/32/bd/9f32bd63ba48370f5f45cb6c4c8b9920.jpg"
class="card-img-top offercardimage" alt="..."/>

</div>
    </div>
 </div>
</div>
<div class="carousel-item">
<div className="row">
    <div className="d-flex  ">
    
    <div class="offercard col-lg-5" >
<img src="https://gos3.ibcdn.com/top-1549373929.jpg" class="card-img-top offercardimage" alt="..."/>

</div>
<div className="col-lg-1"></div>
    <div class="offercard col-lg-5" >
<img src="https://miro.medium.com/v2/resize:fit:720/0*SPF8SAHAVDPd9D4m.jpg" class="card-img-top offercardimage" alt="..."/>

</div>
    </div>
 </div>
</div>
</div>
<button class="carousel-control-prev" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="prev">
<span class="carousel-control-prev-icon" aria-hidden="true"></span>
<span class="visually-hidden">Previous</span>
</button>
<button class="carousel-control-next" type="button" data-bs-target="#carouselExampleAutoplaying" data-bs-slide="next">
<span class="carousel-control-next-icon" aria-hidden="true"></span>
<span class="visually-hidden">Next</span>
</button>
</div>
  


    </>
    );
}