
import './Home.css';
import OwlCarousel from 'react-owl-carousel';  
import 'owl.carousel/dist/assets/owl.carousel.css';  
import 'owl.carousel/dist/assets/owl.theme.default.css';
import {Routes, Route, useNavigate} from 'react-router-dom';

const Home=()=> {

  const navigate = useNavigate();
  const navigateToGallery = () => {
    navigate('/gallery');
  };
  const options={
    loop:true,
    autoplay:true,
    autoplayTimeout:1500,
    responsiveClass:true,
    margin:15,
    center:true,
    autoplayHoverPause:true,
    stagePadding:50,
    dots:true,
    responsive:{
        0:{
            items:1
        },
        600:{
            items:2
        },
        1000:{
            items:3
        }
    }
};

    return (
      <>

<div className="container-faces">
      <video autoPlay loop muted plays-inline="true" className="backvideo-faces">
      <source src="../images/Frontpage/frontbg.mp4" type="video/mp4"/>
      </video> 
      

        <img src="../images/Frontpage/faceslogo.png" className="logo-faces" alt=''/>
        <div className="content-faces">
            <h1>F<span style={{color:"red"}}>ine </span> A<span style={{color:"rgb(255, 248, 48)"}}>rts</span> C<span style={{color:"rgb(77, 255, 46)"}}>lub</span> <span style={{color:"rgb(255, 161, 30)"}}>For</span></h1>
            <h1>E<span style={{color:"rgb(30, 255, 244)"}}>ngineering</span> S<span style={{color:"rgb(102, 102, 255)"}}>tudents</span></h1>
        </div> 
        <div className="scroll">
          <span></span>
          <span></span>
        </div>
    </div>
<hr/>



{/*---------------------- About Section----------------------*/}

<section className="text-black-600 body-font about-faces1">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <img className="object-cover object-center rounded" alt="hero" src="https://i.pinimg.com/736x/c9/3e/f6/c93ef66e62d8dda8de0f5c337d7ecde0.jpg"/>
    </div>
    <div className="lg:flex-grow md:w-1/2 lg:pl-24 md:pl-16 flex flex-col md:items-start md:text-left items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white-900">What We Do ?
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
    </div>
  </div>
</section>
<section className="text-black-600 body-font about-faces">
  <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
    <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
      <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white-900">Who are we ?
      </h1>
      <p className="mb-8 leading-relaxed">Copper mug try-hard pitchfork pour-over freegan heirloom neutra air plant cold-pressed tacos poke beard tote bag. Heirloom echo park mlkshk tote bag selvage hot chicken authentic tumeric truffaut hexagon try-hard chambray.</p>
    </div>
    <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
      <img className="object-cover object-center rounded" alt="hero" src="https://static.timesofisrael.com/www/uploads/2022/12/Ofir-Liberman2-abstract-portrait-sculpture-in-style-of-brutalist.jpeg"/>
    </div>
  </div>
</section>







{/* --------Event Section-------------- */}

<section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto">
    <div className="flex flex-col text-center w-full mb-20">
      <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-gray-900">Master Cleanse Reliac Heirloom</h1>
      <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical gentrify, subway tile poke farm-to-table. Franzen you probably haven't heard of them man bun deep jianbing selfies heirloom.</p>
    </div>
    <div className="flex flex-wrap -m-4">
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="images/Frontpage/event-1.jpeg"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="images/Frontpage/event-2.jpeg"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="images/Frontpage/event-3.jpeg"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div class="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="images/Frontpage/event-4.jpeg"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" class="absolute inset-0 w-full h-full object-cover object-center" src="images/Frontpage/event-5.jpeg"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
      <div className="lg:w-1/3 sm:w-1/2 p-4">
        <div className="flex relative">
          <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="images/Frontpage/event-6.jpeg"/>
          <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
            <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
            <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Alper Kamu</h1>
            <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
          </div>
        </div>
      </div>
    </div>
    <button className="btn" >See More !</button> 
  </div>
</section>
<hr/>











{/* --------Gallery Section-------------- */}
<div className='gallery-faces'>
<h1 className='gallery-heading'>Art Gallery</h1>
     
     <OwlCarousel className="owl-theme"  {...options}>
       <div className="hover01">  <img className="img1 img-faces" src="images/Frontpage/castle.jpg" alt=""/>
         <p>Digital Art</p>
       </div>
       <div className="hover01">  <img className="img2 img-faces" src="images/Frontpage/gall.jpg" alt=""/>
         <p>  Digital Art</p>
       </div>
       <div className="hover01">  <img className="img1 img-faces" src="images/Frontpage/castle.jpg" alt=""/>
         <p>  Digital Art</p>
       </div>
       <div className="hover01">  <img className="img2 img-faces" src="images/Frontpage/gall.jpg" alt=""/>
         <p>  Digital Art</p>
       </div>
       <div className="hover01">  <img className="img1 img-faces" src="images/Frontpage/castle.jpg" alt=""/>
         <p>  Digital Art</p>
       </div>
       <div className="hover01">  <img className="img2 img-faces" src="images/Frontpage/gall.jpg" alt=""/>
         <p>  Digital Art</p>
       </div>
       <div className="hover01">  <img className="img1 img-faces" src="images/Frontpage/castle.jpg" alt=""/>
         <p>  Digital Art</p>
       </div>
       <div className="hover01">  <img className="img2 img-faces" src="images/Frontpage/gall.jpg" alt=""/>
         <p>Digital Art</p>
       </div>
   </OwlCarousel>
   <button className="btn" onClick={navigateToGallery}>Explore More !</button> 
   </div>











{/* --------WorkShop-------------- */}
   <div class="workshop-header-div">
      <h1 class="workshop-heading" style={{color:"whitesmoke"}}>workshops</h1>
    </div>
    <div class="root">
      <div class="div1">
        <img class='work-img' src="images/Frontpage/work_pic1.jpg" alt="" />
        <br />
        <u><h3>Mandala Art Session By Supriya Jamuar</h3></u>
        <p class="workshop-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
        cupiditate amet necessitatibus animi sed beatae quibusdam debitis nulla
        provident ducimus non quam nihil dicta,
        Adipisci, id.
        Neque reiciendis corporis quos ducimus a necessitatibus minima sit amet,
        non unde nobis voluptatum sequi eius provident, porro voluptatibus
        </p>
        <br />
      </div>
      <div class="div1">
        <img class='work-img' src="images/Frontpage/work_pic2.jpg" alt="" />
        <br />
        <u><h3>Art Session By Bivek Sir</h3></u>
        <p class="workshop-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
        cupiditate amet necessitatibus animi sed beatae quibusdam debitis nulla
        provident ducimus non quam nihil dicta, tempore sunt iusto dolores!
        Culpa, pariatur.
        Adipisci, id.
        Neque reiciendis corporis quos ducimus a necessitatibus minima sit amet,
        non unde nobis voluptatum sequi eius provident, porro voluptatibus
        </p>
        <br />
      </div>
      <div class="div1">
        <img class='work-img' src="images/Frontpage/work_pic3.jpg" alt="" />
        <br />
        <u><h3>Art Session By Mr. Praween Karmakar</h3></u>
        <p class="workshop-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
        cupiditate amet necessitatibus animi sed beatae quibusdam debitis nulla
        provident ducimus non quam nihil dicta, tempore sunt iusto dolores!
        Culpa, pariatur.
        Adipisci, id.
        non unde nobis voluptatum sequi eius provident, porro voluptatibus
        </p>
        <br />
      </div>
    </div>





{/* ---------------Our Team-------------------- */}
    
    <section class="text-black-600 body-font king">
  <div class="container px-5 py-24 mx-auto">
    <div class="flex flex-col text-center w-full mb-20">
      <h1 class="sm:text-3xl text-2xl font-medium title-font mb-4 text-black-600">Our Team</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base">Alone we can do so little, together we can do so much. Coming together is a beginning. Keeping together is progress. Working together is success.</p>
    </div>
    <div class="flex flex-wrap -m-2">
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Ravi Prakash</h2>
            <p class="text-white-500">General Seceratary</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19636.jpg"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Bilwaraj</h2>
            <p class="text-white-500">General Seceratary</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dqt8gd4elnkw6.cloudfront.net/image/Face-makeup-tips-for-flawless-looking-skin%20%281%29.png"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Anshi</h2>
            <p class="text-white-500">Joint Seceratary</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Deepak</h2>
            <p class="text-white-500">Treasurer</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Indrakaran Bose</h2>
            <p class="text-white-500">Creative head</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mQBDG7wjtk1-muS50ywiu5y_Dsuwi_8J3dKQKGmYmGIZvPQMoUYoeqNp1mvLlVkikQs&usqp=CAU"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Akriti</h2>
            <p class="text-white-500">Creative head</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mQBDG7wjtk1-muS50ywiu5y_Dsuwi_8J3dKQKGmYmGIZvPQMoUYoeqNp1mvLlVkikQs&usqp=CAU"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Mounica</h2>
            <p class="text-white-500">Editorial head</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://img.freepik.com/premium-photo/close-up-young-handsome-man-with-beard-smiling-camera-with-confidence-standing-white-background_1258-49635.jpg?w=360"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Asmit</h2>
            <p class="text-white-500">PG head</p>
          </div>
        </div>
      </div>
      <div class="p-2 lg:w-1/3 md:w-1/2 w-full">
        <div class="h-full flex items-center border-gray-200 border p-4 rounded-lg">
          <img alt="team" class="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://img.freepik.com/premium-photo/portrait-young-handsome-guy-gray-t-shirt_150254-1028.jpg"/>
          <div class="flex-grow">
            <h2 class="text-gray-900 title-font font-medium">Dhruva</h2>
            <p class="text-white-500">Corportate Affair</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


{/* ---------------Contact Us-------------------- */}
<section class="text-gray-600 body-font relative">
  <div class="absolute inset-0 bg-gray-300">
    <iframe width="100%" height="100%" frameborder="0" marginheight="0" marginwidth="0" title="map" scrolling="no" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3678.6863770647283!2d86.14192731496327!3d22.777017385078047!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39f5e4daa475a5cd%3A0xd87b53fadcd771a1!2sNational%20Institute%20of%20Technology%2C%20Jamshedpur!5e0!3m2!1sen!2sin!4v1679421626404!5m2!1sen!2sin"></iframe>
  </div>
  <div class="container px-5 py-24 mx-auto flex">
    <div class="lg:w-1/3 md:w-1/2 bg-white rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10 shadow-md">
      <h2 class="text-gray-900 text-lg mb-1 font-medium title-font">Contact Us</h2>
      <p class="leading-relaxed mb-5 text-gray-600">FACES which is the acronym for Fine Arts Club for Engineering Students</p>
      <div class="relative mb-4">
        <label for="email" class="leading-7 text-sm text-gray-600">Email</label>
        <input type="email" id="email" name="email" class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"/>
      </div>
      <div class="relative mb-4">
        <label for="message" class="leading-7 text-sm text-gray-600">Message</label>
        <textarea id="message" name="message" class="w-full bg-white rounded border border-gray-300 focus:border-green-500 focus:ring-2 focus:ring-green-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
      </div>
      <button class="text-white bg-green-500 border-0 py-2 px-6 focus:outline-none hover:bg-green-600 rounded text-lg">Button</button>
      <p class="text-xs text-gray-500 mt-3">A club full of talented artists.</p>
    </div>
  </div>
</section>

</>
    )
  }

export default Home;