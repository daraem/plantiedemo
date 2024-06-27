"use client"

import React, { useRef, useState, useEffect } from 'react';


function MediaCard(props) {

  const wrapperRef = useRef(null)
  const [displayCard, setDisplayCard] = useState([]);
  let shortedDesc;

  function outsideClick(ref) {
    useEffect(() => {
      const handleClickOutside = (e) => {
        if(ref.current && !ref.current.contains(e.target)) {
          setDisplayCard([...displayCard, <span key={displayCard.length}></span>])
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside)
      };
    }, [ref])
  }

  outsideClick(wrapperRef)

  function MediaCardExpanded() {
    return(
      <div className='fixed top-0 left-0 w-[100%] h-[100%] z-50 flex justify-center items-center backdrop-blur-sm'> 
          <div className='bg-[#D8E9A8] rounded-[10px] w-[70vh] h-[75vh] flex flex-col' ref={wrapperRef}>
            <div className='relative'>
              <div className='absolute top-0 right-0 bg-white w-[5vh] h-[5vh] rounded-full mx-[3%] my-[3%]'>
                <div className='w-[100%] h-[100%] flex justify-center items-center hover:cursor-pointer' onClick={() => {setDisplayCard([...displayCard], <span key={displayCard.length}></span>)}}>
                  <svg
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                  >
                  <path
                  d="M6.2253 4.81108C5.83477 4.42056 5.20161 4.42056 4.81108 4.81108C4.42056 5.20161 4.42056 5.83477 4.81108 6.2253L10.5858 12L4.81114 17.7747C4.42062 18.1652 4.42062 18.7984 4.81114 19.1889C5.20167 19.5794 5.83483 19.5794 6.22535 19.1889L12 13.4142L17.7747 19.1889C18.1652 19.5794 18.7984 19.5794 19.1889 19.1889C19.5794 18.7984 19.5794 18.1652 19.1889 17.7747L13.4142 12L19.189 6.2253C19.5795 5.83477 19.5795 5.20161 19.189 4.81108C18.7985 4.42056 18.1653 4.42056 17.7748 4.81108L12 10.5858L6.2253 4.81108Z"
                  fill="currentColor"
                  />
                  </svg>
                </div>
              </div>
            </div>
            <img src={"/" + props.img} className='min-h-[250px] max-h-[250px] rounded-t-[10px]'></img>
            <h1 className='mx-[3%] text-[40px] font-bold'>{props.Name}</h1>
            <div className='relative h-[300px] mx-[3%] z-30'>
            <p className='break-words absolute top-0 left-0 right-0 h-auto' id='plantDesc'>{props.desc}</p>
          </div>
        </div>
      </div>
    )
  }

  if(props.desc) {
    if((props.desc).length > 87) {
      shortedDesc = (props.desc).slice(0, 88)
      shortedDesc = shortedDesc + "...";
    } else {
      shortedDesc = props.desc;
    }
  }

  return (
    <>
    <div id='box' className=''>
      <img src={"/" + props.img} className=' min-h-[150px] max-h-[150px] rounded-t-[10px] z-20 select-none'></img>
      <h1 className='mx-[3%] z-30' id='plantName'>{props.Name}</h1>
      <div className='relative h-[300px] mx-[3%] z-30'>
        <p className='break-words absolute top-0 left-0 right-0 h-auto' id='plantDesc'>{shortedDesc}</p>
        <span className='absolute top-[60%] mx-[2%] left-0 right-0 text-right'>
          <button className='border-4 border-[#D8E9A8] rounded-[10px] w-[110px] h-[40px] transition ease-in-out delay-50' id='plantLM' onClick={() => {setDisplayCard([...displayCard, <MediaCardExpanded key={displayCard.length}></MediaCardExpanded>])}}>LEARN MORE</button>
        </span>
      </div>
    </div>
    {displayCard}
    </>
  );
}

export default function Home() {

  const overFlowRef1 = useRef(null);
  const overFlowRef2 = useRef(null);
  const overFlowRef3 = useRef(null);

  const buttonRef1 = useRef(null);
  const buttonRef2 = useRef(null);
  const buttonRef3 = useRef(null);

  useEffect(() => {

    if(overFlowRef1) {
      if(buttonRef1) {
        if(overFlowRef1.current.scrollHeight > overFlowRef1.current.clientHeight || overFlowRef1.current.scrollWidth > overFlowRef1.current.clientWidth) {

        } else {
          buttonRef1.current.style.display = 'none'
        }
      }
    }

    if(overFlowRef2) {
      if(buttonRef2) {
        if(overFlowRef2.current.scrollHeight > overFlowRef2.current.clientHeight || overFlowRef2.current.scrollWidth > overFlowRef2.current.clientWidth) {

        } else {
          buttonRef2.current.style.display = 'none'
        }
      }
    }

    if(overFlowRef3) {
      if(buttonRef3) {
        if(overFlowRef3.current.scrollHeight > overFlowRef3.current.clientHeight || overFlowRef3.current.scrollWidth > overFlowRef3.current.clientWidth) {

        } else {
          buttonRef3.current.style.display = 'none'
        }
      }
    }

  }, [])

  function forwardButton(id) {
    document.getElementById(id).scrollBy({
      left: 400,
      behavior: 'smooth'
    })
  }

  function backwardButton(id) {
    document.getElementById(id).scrollBy({
      left: -400,
      behavior: 'smooth'
    })
  }

  function Buttons(props) {
    return (
      <>
        <div className='absolute top-0 left-0 w-[100%] h-[100%]' id='inner'>
          <div className='flex justify-start items-center h-[100%] mx-[1%]'>
            <button className='flex justify-center items-center w-10 h-10 bg-white rounded-full z-30' onClick={() => backwardButton(props.id)} ><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M20.3284 11.0001V13.0001L7.50011 13.0001L10.7426 16.2426L9.32842 17.6568L3.67157 12L9.32842 6.34314L10.7426 7.75735L7.49988 11.0001L20.3284 11.0001Z" fill="currentColor" /></svg></button>
          </div>
        </div>
  
        <div className='absolute top-0 left-0 w-[100%] h-[100%]'>
          <div className='flex justify-end items-center h-[100%] mx-[1%]'>
            <button className='flex justify-center items-center w-10 h-10 bg-white rounded-full z-30' onClick={() => forwardButton(props.id)}><svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.0378 6.34317L13.6269 7.76069L16.8972 11.0157L3.29211 11.0293L3.29413 13.0293L16.8619 13.0157L13.6467 16.2459L15.0643 17.6568L20.7079 11.9868L15.0378 6.34317Z" fill="currentColor" /></svg></button>
          </div>
        </div>
      </>
    )
  }
    
  return (
    <>
      <div id="Medicinal Plants" className='relative'>
        <h2>Medicinal Plants</h2>
        <div id='card1' className='card' ref={overFlowRef1}>
          <MediaCard Name = 'Garlic' img="garlic.jpg" desc="A herb growing from a strongly aromatic, rounded bulb composed of around 10 to 20 cloves covered in a papery coat"/>
          <MediaCard Name = 'Aloe Vera' img="aloevera.jpg" desc="A shrubby or arborescent, perennial, xerophytic, succulent, pea- green color plant. It grows mainly in the dry regions of Africa, Asia, Europe and America."/>
          <MediaCard Name = 'Konjac' img="konjac.jpg" desc="Konjac is a root vegetable that grows in parts of Asia. It's known for its starchy corm, a tuber-like part of the stem that grows underground. The corm is used to make a rich source of soluble dietary fiber known as glucomannan."/>
          <MediaCard Name = 'Dong Quai' img="dongquai.png" desc="A fragrant, perennial plant -- a member of the celery family -- has smooth purplish stems and umbrella-shaped clusters of white flowers and winged fruits in July and August."/>
          <MediaCard Name = 'Celery' img="celery.png" desc="It has wide parsley-like green leaves and thick, juicy, ribbed stalks that join at a common base above the root. Celery, at its best, has a juicy and crunchy flesh with a mild salty flavor. Although celery is most often used for its stalks, its leaves are edible as well and have a concentrated celery-flavor."/>
          <MediaCard Name = 'Burdock' img="burdock.png" desc="A stout, common weed with burrs that stick to clothing or animal fur. The plant grows to a height of about 3 to 4 feet. It has purple flowers that bloom between the months of June and October. Burdock has wavy, heart-shaped leaves that are green on top and whitish on the bottom."/>
          <MediaCard Name = 'Arnica' img="arnica.png" desc="A perennial that grows to a height of 1 to 2 feet with yellow-orange flowers similar to daisies. Stems are round and hairy, ending in 1 to 3 flower stalks, with flowers 2 to 3 inches across. Leaves are bright green."/>
        </div>
        <div id='button1' ref={buttonRef1}>
          <Buttons id="card1"/>
        </div>
      </div>

      <div id="Flowers" className='relative'>
        <h2>Flowers</h2>
        <div id='button2' ref={buttonRef2}>
          <Buttons id="card2"/>
        </div>
        <div id='card2' className='card' ref={overFlowRef2}>
          <MediaCard Name="Acacia" img="acacia.png" desc="Acacias are also distinguished by their small, often fragrant flowers, which are arranged in compact globular or cylindrical clusters. The flowers are usually yellow but occasionally white and have many stamens apiece, giving each one a fuzzy appearance."/>
          <MediaCard Name="Amaranth" img="amaranth.png" desc="Amaranth varies in flower, leaf, and stem color with a range of striking pigments from the spectrum of maroon to crimson and can grow longitudinally from 1 to 2.5 metres (3 to 8 feet) tall with a cylindrical, succulent, fibrous stem that is hollow with grooves and bracteoles when mature."/>
          <MediaCard Name="American ash" img="americanash.png" desc="The flowers are primarily dioecious (separate male and female trees) grow in tight panicals. Clusters of apetalous purplish male and female flowers appear on separate trees in April-May before the late-to-emerge foliage. The flowers lack petals."/>
        </div>        
      </div>

      <div id="Flowers" className='relative'>
        <h2>Trees</h2>
        <div id='button3' ref={buttonRef3}>
          <Buttons id="card3" />
        </div>

        <div id='card3' className='card' ref={overFlowRef3}>
          <MediaCard Name="Coconut Tree" img="coconut.png" desc="The coconut palm is a long-lived plant; it has a single trunk, 20-30 metre tall, its bark is smooth and gray, marked by ringed scars left by fallen leaf bases. The tree can live as long as 100 years producing an annual yield of 50 to 100 coconuts."/>
          <MediaCard Name="Oak Tree" img="oaktree.png" desc="An oak is a hardwood tree or shrub in the genus Quercus of the beech family. They have spirally arranged leaves, often with lobed edges, and a nut called an acorn, borne within a cup. The genus is widely distributed in the Northern Hemisphere; it includes some 500 species, both deciduous and evergreen."/>
          <MediaCard Name="Bamboo Tree" img="bamboo.png" desc="Bamboo is a woody plant with a hollow stem that's in the grass family. When bamboo is harvested and processed, it can be used to make things like flooring, paper, and chopsticks. If bamboo is prepared correctly, it can be eaten — you'll find bamboo shoots in many Chinese dishes, for example."/>
          <MediaCard Name="Mangrove" img="mangrove.png" desc="Mangroves are tropical plants that are adapted to loose, wet soils, salt water and being periodically submerged by tides. Four major factors appear to limit the distribution of mangroves: climate, salt water, tidal fluctuation and soil type. There are more that 50 species of mangroves found throughout the world."/>
        </div>        
      </div>
    </>
  );
}
