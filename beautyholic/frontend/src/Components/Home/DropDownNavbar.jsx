
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getNavData, getProjectData } from "../../Redux/ProductPageRedux/action";

// // import { getData } from '../../api/api';
// import axios from "axios"
//  const getData = function (category) {
//   return axios(`https://backendcwnem.onrender.com/products/${category}`).then(r=> r.data).catch(err=> console.log(err))}

function DropDownNavbar() {
  const [show, setShow] = React.useState(false);
  // const [data,setData]=useState([]);
  // const { isOpen, onOpen, onClose } = useDisclosure()
  const navData = useSelector((state) => state.productPageReducer.navData);
  
  let dataArr = Array.from(navData);
  const dispatch = useDispatch();

 

  const [category, setCategory] = useState("blush");
  const navigate =useNavigate();
  useEffect(() => {
    if (navData.length === 0) {
      dispatch(getNavData());
    }
  }, [dispatch]);

 

  const handleChange = (e) => {
    setCategory(e.target.value);
    dispatch(getNavData(category));
  };
  const handleClick = (e) => {
    setCategory(e.target.value);
    dispatch(getProjectData(category));
    navigate("/ProductsPage")
    
  };
 





  return (
    <div class="navbar">
      <div class="dropdown">

        <button
          class="dropbtn onInside "
          onPointerEnter={handleChange}
          onClick={handleClick}
          value="blush"
        >
          BLUSH
          <i class="fa fa-caret-down"> </i>

        </button>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
              <br />

              <h5 className="dropdown-heading">GLUTEN FREE</h5>
              <br />

              {dataArr.length > 0 &&
                dataArr?.map((e, i) => {
                  for (var v = i; v < 14; v++) {
                    return (
                      <Link to={`/SingleProductPage/${e.id}`}>{e.name}</Link>
                    );
                  }
                })}
            </div>
            <div class="column">
              <br />
              <h5 className="dropdown-heading">NATURAL</h5>
              <br />

              {dataArr.length > 0 &&
                dataArr?.map((e, i) => {
                  var temp = i + 15;
                  for (var v = temp; v < 30; v++) {
                    return (
                      <Link to={`/SingleProductPage/${e.id}`}>{e.brand}</Link>
                    );
                  }
                })}
            </div>
            <div class="column">
              <br />
              <h5 className="dropdown-heading">ORGANIC</h5>
              <br />

              {dataArr.length > 0 &&
                dataArr?.map((e, i) => {
                  var temp = i + 31;
                  for (var v = temp; v < 46; v++) {
                    return (
                      <Link to={`/SingleProductPage/${e.id}`}>{e.name}</Link>
                    );
                  }
                })}
            </div>
            <div class="column">
              <br />
              <h5 className="dropdown-heading">VEGAN</h5>
              <br />

              {dataArr.length > 0 &&
                dataArr?.map((e, i) => {
                  for (var v = i + 47; v < 60; v++) {
                    return (
                      <Link to={`/SingleProductPage/${e.id}`}>{e.brand}</Link>
                    );
                  }
                })}
            </div>
            {/* <div class="column"> 
            <br/>
              <h5 className='dropdown-heading'>FACE</h5>
              <br/>

              <a href="#">BB CREAM </a>
              <a href="#">BLUSH</a>
              <a href="#">Bronzer </a>
              <a href="#">CC Cream </a>
              <a href="#">Contour </a>
              <a href="#">Concealer </a>
              <a href="#">Compact & Powder </a>
              <a href="#">Face Primer </a>
              <a href="#">Foundation </a>
              <a href="#">Highlighters </a>
              <a href="#">Loose Powder </a>
              <a href="#">Makeup Kits </a>
              <a href="#">Makeup Remover </a>
              <a href="#">Setting Spray </a>

            </div> */}
            {/* <div class="column">
              <br />
              <h5 className="dropdown-heading">EYE</h5>

              <br />
              <a href="#"> Contact Lenses </a>
              <a href="#"> Eye Kit </a>
              <a href="#"> Eyeliner </a>
              <a href="#"> Eye Shadow </a>
              <a href="#"> Eye Primer </a>
              <a href="#"> Eye-Palettes </a>
              <a href="#"> Eye Makeup Remover </a>
              <a href="#"> Eye Brow Enhancers </a>
              <a href="#"> False Eyelashes </a>
              <a href="#"> Kajal </a>
              <a href="#"> Mascara </a>
              <a href="#"> Under Eye Concealer </a>

            </div> */}
            {/* <div class="column">
              <br />
              <h5 className="dropdown-heading">LIPS</h5>

            
              <br />
              <a href="#">Lipstick</a>
              <a href="#">Liquid Lipstick</a>
              <a href="#">Lip Liner</a>
              <a href="#">Lip Gloss</a>
              <a href="#">Lip Balm</a>
              <a href="#">Lip Crayon</a>
              <a href="#">Lip Stain</a>
              <a href="#">Lip Stain</a>
            </div> */}


            {/* <div class="column">
              <br />
              <h5 className="dropdown-heading">NAILS</h5>

              <br />
              <a href="#">Manicure & Pedicure Kits</a>
              <a href="#">Nail Polish</a>
              <a href="#">Nail Care</a>
              <a href="#">Nail Polish Sets</a>
              <a href="#">Nail Art Kits</a>
              <a href="#">Nail Polish Remover</a>

            </div> */}
            {/* <div class="column">

              <br />
              <h5 className="dropdown-heading">TOOL BRUSHES</h5>
              <br />
              <a href="#">Blush Brush</a>
              <a href="#">Eyelash Curlers</a>
              <a href="#">Eye Brush</a>
              <a href="#">Face Brush</a>
              <a href="#">Lip Brush</a>
              <a href="#">Makeup Pouches</a>
              <a href="#">Mirrors</a>
              <a href="#">Sponges & Applicators</a>
              <a href="#">Sharpeners</a>
              <a href="#">Tweezers</a>
            </div> */}
          </div>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn" onPointerEnter={handleChange} onClick={handleClick}
        value="bronzer">
          BRONZER
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
              <br />

              <h5 className="dropdown-heading">GLUTEN FREE</h5>
              <br />

              {dataArr.length > 0 &&
                dataArr?.map((e, i) => {
                  for (var v = i; v < 14; v++) {
                    return (
                      <Link to={`/SingleProductPage/${e.id}`}>{e.name}</Link>
                    );
                  }
                })}
            </div>
            {/* <div class="column">
              <br />

              <h5 className="dropdown-heading">EYE CARE</h5>
              <br />
              <a href="skin1.html">Dark Circles </a>
              <a href="#">Eye Contour Care</a>
              <a href="#">Eye Cream</a>
              <a href="#"> Eye Masks </a>
              <a href="#"> Eye Serums </a>
              <a href="#">Puffiness </a>
              <a href="#">Under Eye Creams </a>
              <a href="#">Under Eye Wrinkles</a>

            </div> */}
            {/* <div class="column">

              <br />
              <h5 className="dropdown-heading">FACE CARE</h5>
              <br />
              <a href="#"> Anti- Ageing Creams </a>
              <a href="#"> Bleach Creams </a>
              <a href="#"> Brightening Cream </a>
              <a href="#"> Face Wash </a>
              <a href="#"> Facial Wipes </a>
              <a href="#"> Face Oil </a>
              <a href="#"> Face Cleansers </a>
              <a href="#"> Facial Kits </a>
              <a href="#"> Face Tools </a>
              <a href="#"> Moisturizer </a>
              <a href="#"> Mask & Peels </a>
              <a href="#">Serum</a>
              <a href="#">Toner & Astringents</a>
            </div> */}
            <div class="column">
              <br />
              <h5 className="dropdown-heading">BODY CARE</h5>
              <br />
              <a href="#"> All Cream</a>
              <a href="#">Body Moisturizers</a>
              <a href="#"> Body Toners</a>
              <a href="#">Body Sun Care</a>
              <a href="#">Brightening Lotion</a>
              <a href="#">Dark Circles & Wrinkles</a>
              <a href="#"> Day Cream</a>
              <a href="#">Foot Cream</a>
              <a href="#"> Hair Remover Cream</a>
              <a href="#"> Hand Creams</a>
              <a href="#">Hands & Feet</a>
              <a href="#"> Kits & Combost</a>
              <a href="#"> Night Cream</a>
              <a href="#"> Neck Creams</a>
            </div>
            <div class="column">
              <br />
              <h5 className="dropdown-heading">GLUTEN FREE</h5>
              <br />

              {dataArr.length > 0 &&
                dataArr?.map((e, i) => {
                  for (var v = i; v < 14; v++) {
                    return (
                      <Link to={`/SingleProductPage/${e.id}`}>{e.name}</Link>
                    );
                  }
                })}
            </div>

            <div class="column">
              <h5>
                <img
                  width="800px"
                  src="https://www.beautybebo.com/pub/media/mega-menu/SKIN_cATA.jpg"
                  alt=""
                />
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn" onPointerEnter={handleChange} onClick={handleClick} value="eyebrow">
          EYEBROW
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
              <br />
              <h5 className="dropdown-heading">HAIR CARE</h5>
              <br />
              <a href="#">Color Protection </a>
              <a href="#">Dandruff</a>
              <a href="#">Dry Shampoo</a>
              <a href="#"> Gels & Waxes </a>
              <a href="#">Hair Spray</a>
              <a href="#">Hair Color/ Dye</a>
              <a href="#">Hair Creams & Masks </a>
              <a href="#">Hair Styling</a>
              <a href="#">Hairfall & Thinning </a>
              <a href="#">Straighteners </a>
            </div>
            <div class="column">
              <br />
              <h5 className="dropdown-heading">HAIR LOSS</h5>
              <br />
              <a href="#"> Conditioner </a>
              <a href="#"> Hair Oil </a>
              <a href="#"> Hair Serum </a>
              <a href="#"> Hair Growth Solutions </a>
              <a href="#"> Shampoo </a>
            </div>
            <div class="column">
              <h5>
                <img
                  width="1000px"
                  src="https://www.beautybebo.com/pub/media/mega-menu/hair_cata.jpg"
                  alt=""
                />
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn" onPointerEnter={handleChange} onClick={handleClick} value="eyeliner">
          EYELINER
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
              <br />
              <h5 className="dropdown-heading">BATH & BODY</h5>
              <br />
              <a href="#">Body Cleansers </a>
              <a href="#">Body Massage Oil</a>
              <a href="#">Body Wash</a>
              <a href="#"> Creams </a>
              <a href="#">Essential Oils</a>
              <a href="#">Foot Cream</a>
              <a href="#">Scrubs & Exfoliants </a>
              <a href="#">Ubtan & Face Packs</a>
            </div>
            <div class="column">
              <br />
              <h5 className="dropdown-heading">BATHING ACCESSORIES</h5>
              <br />
              <a href="#"> Bath Brushes </a>
              <a href="#"> Loofahs </a>
              <a href="#"> Shower Caps </a>
              <a href="#"> Sponges </a>
            </div>
            <div class="column">
              <br />
              <h5 className="dropdown-heading">BATH & SHOWER</h5>
              <br />
              <a href="#"> Body Soaps </a>
              <a href="#"> Shower Ge </a>
              <a href="#"> Shower Caps </a>
            </div>
            <div class="column">
              <h5>
                <img
                  width="700px"
                  src="https://www.beautybebo.com/pub/media/mega-menu/personal_cata.jpg"
                  alt=""
                />
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <button class="dropbtn" onPointerEnter={handleChange} onClick={handleClick} value="eyeshadow">
          EYESHADOW
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
              <br />
              <h5 className="dropdown-heading">BABY CARE</h5>
              <br />
              <a href="#">Bath Time </a>
              <a href="#">Diapers</a>
              <a href="#">Lotions & Creams</a>
              <a href="#"> Creams </a>
              <a href="#"> Oils</a>
              <a href="#">Powder</a>
              <a href="#">Shampoo</a>
              <a href="#">Soaps</a>
              <a href="#">Sterilizer & Cleaners</a>
              <a href="#">Rash Cream</a>
              <a href="#">Wipes</a>
            </div>
            <div class="column">
              <br />
              <h5 className="dropdown-heading">MOM CARE</h5>
              <br />
              <a href="#"> Lotions & Creams </a>
              <a href="#"> Personal Care </a>
            </div>
            <div class="column">
              <h5>
                <img
                  width="1000px"
                  src="https://www.beautybebo.com/pub/media/mega-menu/mom_baby_cata.jpg"
                  alt=""
                />
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div class="dropdown">
        <button
          class="dropbtn"
          onPointerEnter={handleChange} onClick={handleClick}
          value="foundation"
        >
          FOUNDATION
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
              <br />
              <h5 className="dropdown-heading"></h5>
              <br />
              <a href="#"> Perfumes </a>
              <a href="#">Deodorants roll ons</a>
              <a href="#">Body Mist/Spray</a>
            </div>
            <div class="column">
              <h5>
                <img
                  width="300px"
                  src="https://github.com/Harshitmax2022/beauty-bebo/blob/master/toppic4.jpg?raw=true"
                  alt=""
                />
              </h5>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn" onPointerEnter={handleChange} onClick={handleClick} value="lip_liner">
          LIP LINER
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <div class="row">
            <div class="column">
              <br />
              <h5 className="dropdown-heading">NATURAL SKIN CARE</h5>
              <br />
              <a href="#">Body Wash </a>
              <a href="#">Body Lotion</a>
              <a href="#">Lotions & Creams</a>
              <a href="#"> Cleansers </a>
              <a href="#"> Cream</a>
              <a href="#">Eye Care</a>
              <a href="#">Face Wash</a>
              <a href="#">Gel</a>
              <a href="#">Lip Care</a>
              <a href="#">Mask</a>
              <a href="#">Pack</a>
              <a href="#">Scrub</a>
              <a href="#">Sun Protection</a>
            </div>
            <div class="column">
              <br />
              <h5 className="dropdown-heading">ATURAL HAIR CARE</h5>
              <br />
              <a href="#"> Conditioner</a>
              <a href="#"> Hair Oils </a>
              <a href="#"> Hair Serum </a>
              <a href="#"> Hair Gel</a>
              <a href="#"> Shampoo</a>
            </div>
            <div class="column">
              <h5>
                <img
                  width="1000px"
                  src="https://www.beautybebo.com/pub/media/mega-menu/ayurveda_cata.jpg"
                  alt=""
                />
              </h5>

            </div>
          </div>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn" onPointerEnter={handleChange} onClick={handleClick} value="lipstick">
          LIPSTICK
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <div class="brands">
            <h3>Top Brands</h3>
            <h3>View All</h3>
          </div>
          <div class="row brands">
            <div class="column extra">
              <div className="bransformation">
                <div>LAKME</div>
                <div>lOREAL-PARIS</div>
                <div>JOY</div>
                <div>AROMA MAGIC</div>
                <div>LOTUS HERBALS</div>
                <div>BIOTIQUE</div>
                <div>VLCC</div>
                <div>VEGA</div>
                <div>MAYBELLINE</div>
                <div>MAMAEARTH</div>
                <div>CHICCO</div>
                <div>NEUTROGENA</div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div class="dropdown">
        <button class="dropbtn" onPointerEnter={handleChange} onClick={handleClick} value="mascara">
          MASCARA
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <div class="brands">
            <h3>Top Brands</h3>
            <h3>View All</h3>
          </div>
          <div class="row brands">
            <div class="column extra">
              <div className="bransformation">
                <div>LAKME</div>
                <div>lOREAL-PARIS</div>
                <div>JOY</div>
                <div>AROMA MAGIC</div>
                <div>LOTUS HERBALS</div>
                <div>BIOTIQUE</div>
                <div>VLCC</div>
                <div>VEGA</div>
                <div>MAYBELLINE</div>
                <div>MAMAEARTH</div>
                <div>CHICCO</div>
                <div>NEUTROGENA</div>
              </div>

            </div>
          </div>
        </div>
      </div>

      <div class="dropdown">
        <button
          class="dropbtn"
          onPointerEnter={handleChange} onClick={handleClick}
          value="nail_polish"
        >
          NAIL POLISH
          <i class="fa fa-caret-down"></i>
        </button>
        <div class="dropdown-content">
          <div class="brands">
            <h3>Top Brands</h3>
            <h3>View All</h3>
          </div>
          <div class="row brands">
            <div class="column extra">
              <div className="bransformation">
                <div>LAKME</div>
                <div>lOREAL-PARIS</div>
                <div>JOY</div>
                <div>AROMA MAGIC</div>
                <div>LOTUS HERBALS</div>
                <div>BIOTIQUE</div>
                <div>VLCC</div>
                <div>VEGA</div>
                <div>MAYBELLINE</div>
                <div>MAMAEARTH</div>
                <div>CHICCO</div>
                <div>NEUTROGENA</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default DropDownNavbar;
