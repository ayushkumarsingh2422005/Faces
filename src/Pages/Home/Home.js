import './Home.css';
import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';
import { Routes, Route, useNavigate } from 'react-router-dom';
import Navbar from '../../Components/Navbar/Navbar';

const Home = () => {

  const navigate = useNavigate();
  const navigateToGallery = () => {
    navigate('/gallery'); 
  };
  const options = {
    loop: true,
    autoplay: true,
    autoplayTimeout: 1500,
    responsiveClass: true,
    margin: 15,
    center: true,
    autoplayHoverPause: true,
    stagePadding: 50,
    dots: true,
    responsive: {
      0: {
        items: 1
      },
      600: {
        items: 2
      },
      1000: {
        items: 3
      }
    }
  };

  return (
    <>
    
      <div className="container-faces">
        <video autoPlay loop muted plays-inline="true" className="backvideo-faces">
          <source src="../images/Frontpage/frontbg.mp4" type="video/mp4" />
        </video>

        <img src="../images/Frontpage/faceslogo.png" className="logo-faces" alt='' />
        <Navbar className="nevbar"></Navbar>
        <div className="content-faces">
          <h1>F<span style={{ color: "red" }}>ine </span> A<span style={{ color: "rgb(255, 248, 48)" }}>rts</span> C<span style={{ color: "rgb(77, 255, 46)" }}>lub</span> <span style={{ color: "rgb(255, 161, 30)" }}>For</span></h1>
          <h1>E<span style={{ color: "rgb(30, 255, 244)" }}>ngineering</span> S<span style={{ color: "rgb(102, 102, 255)" }}>tudents</span></h1>
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
      <hr/>



      {/*---------------------- About Section----------------------*/}

      <section className="text-black-600 body-font about-faces1">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
            <img className="object-cover object-center rounded" alt="hero" src="https://i.pinimg.com/736x/c9/3e/f6/c93ef66e62d8dda8de0f5c337d7ecde0.jpg" />
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
            <img className="object-cover object-center rounded" alt="hero" src="https://static.timesofisrael.com/www/uploads/2022/12/Ofir-Liberman2-abstract-portrait-sculpture-in-style-of-brutalist.jpeg" />
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
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="images/Frontpage/event-1.jpeg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Shooting Stars</h1>
                  <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="images/Frontpage/event-2.jpeg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1>
                  <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="images/Frontpage/event-3.jpeg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The 400 Blows</h1>
                  <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="images/Frontpage/event-4.jpeg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Neptune</h1>
                  <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="images/Frontpage/event-5.jpeg" />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">THE SUBTITLE</h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">Holden Caulfield</h1>
                  <p className="leading-relaxed">Photo booth fam kinfolk cold-pressed sriracha leggings jianbing microdosing tousled waistcoat.</p>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <img alt="gallery" className="absolute inset-0 w-full h-full object-cover object-center" src="images/Frontpage/event-6.jpeg" />
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
      <hr />











      {/* --------Gallery Section-------------- */}
      <div className='gallery-faces'>
        <h1 className='gallery-heading'>Art Gallery</h1>

        <OwlCarousel className="owl-theme"  {...options}>
          <div className="hover01">  <img className="img1 img-faces" src="images/Frontpage/castle.jpg" alt="" />
            <p>Digital Art</p>
          </div>
          <div className="hover01">  <img className="img2 img-faces" src="images/Frontpage/gall.jpg" alt="" />
            <p>  Digital Art</p>
          </div>
          <div className="hover01">  <img className="img1 img-faces" src="images/Frontpage/castle.jpg" alt="" />
            <p>  Digital Art</p>
          </div>
          <div className="hover01">  <img className="img2 img-faces" src="images/Frontpage/gall.jpg" alt="" />
            <p>  Digital Art</p>
          </div>
          <div className="hover01">  <img className="img1 img-faces" src="images/Frontpage/castle.jpg" alt="" />
            <p>  Digital Art</p>
          </div>
          <div className="hover01">  <img className="img2 img-faces" src="images/Frontpage/gall.jpg" alt="" />
            <p>  Digital Art</p>
          </div>
          <div className="hover01">  <img className="img1 img-faces" src="images/Frontpage/castle.jpg" alt="" />
            <p>  Digital Art</p>
          </div>
          <div className="hover01">  <img className="img2 img-faces" src="images/Frontpage/gall.jpg" alt="" />
            <p>Digital Art</p>
          </div>
        </OwlCarousel>
        <button className="btn" onClick={navigateToGallery}>Explore More !</button>
      </div>











      {/* --------WorkShop-------------- */}
      <div className="workshop-header-div">
        <h1 className="workshop-heading" style={{ color: "whitesmoke" }}>workshops</h1>
      </div>
      <div className="root">
        <div className="div1">
          <img className='work-img' src="images/Frontpage/work_pic1.jpg" alt="" />
          <br />
          <u><h3>Mandala Art Session By Supriya Jamuar</h3></u>
          <p className="workshop-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            cupiditate amet necessitatibus animi sed beatae quibusdam debitis nulla
            provident ducimus non quam nihil dicta,
            Adipisci, id.
            Neque reiciendis corporis quos ducimus a necessitatibus minima sit amet,
            non unde nobis voluptatum sequi eius provident, porro voluptatibus
          </p>
          <br />
        </div>
        <div className="div1">
          <img className='work-img' src="images/Frontpage/work_pic2.jpg" alt="" />
          <br />
          <u><h3>Art Session By Bivek Sir</h3></u>
          <p className="workshop-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
            cupiditate amet necessitatibus animi sed beatae quibusdam debitis nulla
            provident ducimus non quam nihil dicta, tempore sunt iusto dolores!
            Culpa, pariatur.
            Adipisci, id.
            Neque reiciendis corporis quos ducimus a necessitatibus minima sit amet,
            non unde nobis voluptatum sequi eius provident, porro voluptatibus
          </p>
          <br />
        </div>
        <div className="div1">
          <img className='work-img' src="images/Frontpage/work_pic3.jpg" alt="" />
          <br />
          <u><h3>Art Session By Mr. Praween Karmakar</h3></u>
          <p className="workshop-para">Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quasi
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

      <section className="text-black-600 body-font king">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-black-600">Our Team</h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">Alone we can do so little, together we can do so much. Coming together is a beginning. Keeping together is progress. Working together is success.</p>
          </div>
          <div className="flex flex-wrap -m-2">
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://img.freepik.com/free-photo/portrait-white-man-isolated_53876-40306.jpg" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Ravi Prakash</h2>
                  <p className="text-white-500">General Seceratary</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://img.freepik.com/free-photo/handsome-young-man-with-new-stylish-haircut_176420-19636.jpg" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Bilwaraj</h2>
                  <p className="text-white-500">General Seceratary</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://dqt8gd4elnkw6.cloudfront.net/image/Face-makeup-tips-for-flawless-looking-skin%20%281%29.png" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Anshi</h2>
                  <p className="text-white-500">Joint Seceratary</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://images.pexels.com/photos/2379005/pexels-photo-2379005.jpeg" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Deepak</h2>
                  <p className="text-white-500">Treasurer</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Indrakaran Bose</h2>
                  <p className="text-white-500">Creative head</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mQBDG7wjtk1-muS50ywiu5y_Dsuwi_8J3dKQKGmYmGIZvPQMoUYoeqNp1mvLlVkikQs&usqp=CAU" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Akriti</h2>
                  <p className="text-white-500">Creative head</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR6mQBDG7wjtk1-muS50ywiu5y_Dsuwi_8J3dKQKGmYmGIZvPQMoUYoeqNp1mvLlVkikQs&usqp=CAU" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Mounica</h2>
                  <p className="text-white-500">Editorial head</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://img.freepik.com/premium-photo/close-up-young-handsome-man-with-beard-smiling-camera-with-confidence-standing-white-background_1258-49635.jpg?w=360" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Asmit</h2>
                  <p className="text-white-500">PG head</p>
                </div>
              </div>
            </div>
            <div className="p-2 lg:w-1/3 md:w-1/2 w-full">
              <div className="h-full flex items-center border-gray-200 border p-4 rounded-lg">
                <img alt="team" className="w-16 h-16 bg-gray-100 object-cover object-center flex-shrink-0 rounded-full mr-4" src="https://img.freepik.com/premium-photo/portrait-young-handsome-guy-gray-t-shirt_150254-1028.jpg" />
                <div className="flex-grow">
                  <h2 className="text-gray-900 title-font font-medium">Dhruva</h2>
                  <p className="text-white-500">Corportate Affair</p>
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
<section>
<footer class="relative py-20 flex flex-col items-center bg-cyan-900 overflow-hidden md:py-40">
    <div class="relative z-[1] container m-auto px-6 md:px-12 ">
                 <div class="text-white">
                    Faces NIT JAMSHEDPUR
                  </div>
        <div class="m-auto md:w-10/12 lg:w-8/12 xl:w-6/12">
            <div class="flex flex-wrap items-center justify-between md:flex-nowrap">
                <div class="w-full space-x-12 flex justify-center text-gray-300 sm:w-7/12 md:justify-start">
                    <ul class="list-disc list-inside space-y-8">

                        <li><a href="#" class="hover:text-sky-400 transition">Home</a></li>
                        <li><a href="#event" class="hover:text-sky-400 transition">Event</a></li>
                        <li><a href="#gallery" class="hover:text-sky-400 transition">Gallery</a></li>
                        <li><a href="#people" class="hover:text-sky-400 transition">People</a></li>
                        <li><a href="#contact" class="hover:text-sky-400 transition">Contact</a></li>
                    </ul>

                    <ul role="list" class="space-y-8">
                        {/* <li>
                            <a href="#" class="flex items-center space-x-3 hover:text-sky-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5" viewBox="0 0 16 16">
<path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                                </svg>
                                <span>Twitter</span>
                            </a>
                        </li> */}
                        <li>
                            <a href="https://www.youtube.com/channel/UCLPaKlaZBa4JaB7SXBJyUzA" class="flex items-center space-x-3 hover:text-sky-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5" viewBox="0 0 16 16">
<path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                                </svg>
                                <span>YouTube</span>
                            </a>
                        </li>

                        <li>
                            <a href="https://www.facebook.com/nitjsr.faces/" class="flex items-center space-x-3 hover:text-sky-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5" viewBox="0 0 16 16">
<path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                                </svg>
                                <span>Facebook</span>
                            </a>
                        </li>
                        <li>
                            <a href="https://www.instagram.com/faces_nit_jsr/" class="flex items-center space-x-3 hover:text-sky-400 transition">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="w-5" viewBox="0 0 16 16">
                                    <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                                </svg>
                                <span>Instagram</span>
                            </a>
                        </li>
                        
                    </ul>
                </div>
                <div class="w-10/12 m-auto  mt-16 space-y-6 text-center sm:text-left sm:w-5/12 sm:mt-auto">
                    <span class="block text-gray-300"></span>

                    <span class="block text-gray-300">&copy; 2023. All Rights Reserved.</span>

                    <span class="flex justify-between text-white"> 
                        <a href="#" class="font-semibold"> </a>
                        <a href="#" class="font-semibold"> </a> 
                    </span>

                    <span class="block text-gray-300">Need help? <a href="#contact" class="font-semibold text-white"> Contact Us</a></span>
                </div>
            </div>
        </div>
    </div>
    <div aria-hidden="true" class="absolute h-full inset-0 flex items-center">
        <div aria-hidden="true" class="bg-layers bg-scale w-56 h-56 m-auto blur-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-purple-600 rounded-full md:w-[30rem] md:h-[30rem] md:blur-3xl"></div>
    </div>
    <div aria-hidden="true" class="absolute inset-0 w-full h-full bg-[#020314] opacity-80"></div>
</footer>
</section>
</>
    )
  }

export default Home;