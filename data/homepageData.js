import { FaBuilding, FaDraftingCompass, FaCity, FaColumns, FaRecycle, FaWifi, FaHome, FaCouch, FaTools, FaHammer, FaLeaf,  FaLightbulb  } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';

export const homepageData = () => {
    const headline = [
        {
            heading: 'SUSTAINABLE AND INNOVATIVE CONSTRUCTION',
            description: "We Build Your Dream With Passion",
            image: '/man-woman-engineer-pointing.jpg',
            button2Text: 'All Projects',
            button1Text: 'Contact Us',   
            link2: '/projects',
            link1: '/contact'
        },
        {
            heading: 'SMART TECHNOLOGY ON LOW BUDGET',
            description: "Contact Us For Your Building Projects",
            button2Text: 'Get Quote',
            button1Text: 'Contact Us',
            image: '/engineer-man-office.jpg',
            link2: '/quote',
            link1: '/contact'
        },
        {
            heading: 'UNMATCHED CREDIBLITY AND EXCELLENCE',
            description: "Trust Us To Streamline Your Bogus Project",
            button1Text: 'Contact Us',
            image: '/man-woman-engineer-explaing.jpg',
            button2Text: 'Learn More',
            link2: '/about',
            link1: '/contact'
        }
    ]

    const credibility = [
        {
            heading: "We Take Pride in Our Craft, Delivering Quality. Building a Better Tomorrow.",
            description: "From towering architectural marvels to intricate interior designs, each endeavor is meticulously executed, showcasing our dedication to impeccable craftsmanship.",
            imgUrl: `/man-engineer-with-paper.jpg`,
            imgAlt: `credibility`
            
        },
        [
            {
                icon: <FaBuilding/>,
                heading: "Construction Excellence",
                description: "We build your dreams with passion and resilience.",
                slug: "innovative-solutions-sustainable-construction",
            },
            {
                icon: <FaHome/>,
                heading: " Real Estate Today",
                description: "Where innovation meets comfort and timeless value, ",
            slug: "future-of-real-estate-innovation",

            },
            {
                icon: <AiOutlineClockCircle/>,
                heading: "Redefining Efficiency",
                description: "We save you time and budget without any compromise",
                slug: "redefining-efficiency-time-budget",

            },
            {
                icon: <FaCity/>,
                heading: " Architectural Brilliance ",
                description: "Our designs blend creativity with eco-smart solutions.",
                slug: "timeless-elegance-architectural-design",
            },
            
        ],
    ]

    const aboutSection = {
        title: 'ABOUT US',
        heading: 'We Save You Time And Budget',
        description: "Revolutionizing construction services with sustainable innovation at a low cost without compromizing efficiency. Our key strength sets us apart",
        strength: [ "Innovative Technolgy", 
        "Holistic Lifestyle Integration", "Sustainability Champions", "Experienced Team And Partners", "Quality Project Management", "Cost-Effective Delivery",            
        ],
        imgUrl: `/woman-engineer.jpg`
    }

    const howItWorks = {
      title: "How It Works",
      heading: "Our Streamlined Process",
      steps: [
        {
          title: "Step 1: Conceptualization",
          description: "Our experts collaborate with you to conceptualize and define your project goals and scope.",
          icon: <FaLightbulb />
        },
        {
          title: "Step 2: Innovative Design",
          description: "Our skilled architects craft functional blueprints of your idea while ensuring structural integrity.",
          icon: <FaDraftingCompass />
        },
        {
          title: "Step 3: Sustainable Planning",
          description: "We prioritize sustainability in our planning, choosing durable materials and efficient practices",
          icon: <FaLeaf />
        },
        {
          title: "Step 4: Precision Construction",
          description: "Our experienced construction team meticulously follows the plans, execute the project.",
          icon: <FaTools />
        },
        {
          title: "Step 5: Finishing Touches",
          description: "From interior finishes to exterior landscaping, we add the final details that elevate the project.",
          icon: <FaHammer />
        },
        {
          title: "Step 6: Handover and Beyond",
          description: "Upon completion,our commitment extends beyond delivery, we provide ongoing support and maintenance.",
          icon: <FaBuilding />
        }
      ]
    }
    
         
      const servicesSection = {
        title: "BEST SERVICES",
        heading: "Unvarying Quality Services",
        list: [
          {
            title: "Construction and Maintenance",
            description: "Skilled construction and maintenance for structures built to last.",
            icon: <FaTools />,
            link: '/services/#construction'
          },
            {
              title: "Real Estate Development",
              description: "Creating thriving, culturally rich communities.",
              icon: <FaBuilding />,
              link: '/services/#real-estate'
            },
            {
              title: "Architectural Designs",
              description: "Visionary designs that harmonize form and function.",
              icon: <FaDraftingCompass />,
              link: '/services/#architecture'
            },
            {
              title: "Interior Designs",
              description: "Transforming spaces into personalized urban havens.",
              icon: <FaCouch />,
              link: '/services/#interior'
            },
            {
              title: "Waste-to-Energy Solutions",
              description: "Shaping sustainable urban landscapes with innovative energy solutions.",
              icon: <FaRecycle />,
              link: '/services/#energy'
            },
            {
              title: "Smart Technology Integration",
              description: "Infusing urban living with seamless connectivity and efficiency.",
              icon: <FaWifi />,
              link: '/services/#smart-technology'
            }
          ],
          imgUrl: '/estate_view1.jpeg'
          
      }
      
      const projectsPortfolio = {
        title: "Our Projects Portfolio",
        heading: "Explore Our Diverse Urban Creations",
        items: [
          {
            name: "Cityscape Residences",
            category: "Residential",
            imageUrl: ["/veerock/designs_6.jpeg",  '/veerock/biulding.jpeg', "/veerock/construction.jpeg", "/veerock/boss.jpeg" ],
            description: "Elegant urban living spaces offering a blend of comfort and modern design.",
          },
          {
            name: "Metropolis Towers",
            category: "Commercial",
            imageUrl: ["/veerock/construction5.jpeg", "/veerock/construction_sky.jpeg", "/veerock/structure04.jpeg", "/veerock/structure01.jpeg", "/veerock/structure04.jpeg", "/veerock/structure4.jpeg", "/veerock/structure3.jpeg", "/veerock/worker2.jpeg" ],
            description: "A towering emblem of corporate excellence and urban sophistication."
          },
          {
            name: "Presidential Plaza",
            category: "Mixed-Use",
            imageUrl: ["/veerock/designs_3.jpeg", "/veerock/designs_7.jpeg", "/veerock/designs_6.jpeg", "/veerock/designs_4.jpeg", "/veerock/designs7.jpeg",  '/veerock/construction_3.jpeg',  '/veerock/house_2.jpeg', '/veerock/house_1.jpeg',],
            description: "A dynamic space where commerce, culture, and community converge.",
          },
          {
            name: "Eco-Resort Oasis",
            category: "Hospitality",
            imageUrl: ["/veerock/design_special2.jpeg", "/veerock/design_special.jpeg", "/veerock/design_special3.jpeg" ],
            description: "A sustainable haven of relaxation and luxury, seamlessly integrated into nature."
          },
          {
            name: "Swimming Pool Plaza",
            category: "Mixed-Use",
            imageUrl: ["/veerock/swimmingpool4.jpeg","/veerock/swimmingpool2.jpeg","/veerock/swimmingpool3.jpeg","/veerock/swimmingpool1.jpeg",  ],
            description: "A dynamic space where commerce, culture, and community converge."
          },
          {
            name: "Multi-flat Complex",
            category: "Mixed-Use",
            imageUrl: ["/veerock/estate_view3.jpeg", "/veerock/estate_view1.jpeg", "/veerock/estate_view2.jpeg", "/veerock/estate_view5.jpeg", ],
            description: "A dynamic space where commerce, culture, and community converge."
          },
          {
            name: "Interior Convenience",
            category: "Mixed-Use",
            imageUrl: [ "/veerock/convenience4.jpeg", "/veerock/convenience1.jpeg", "/veerock/convenience2.jpeg","/veerock/convenience3.jpeg","/veerock/convenience5.jpeg","/veerock/convenience6.jpeg","/veerock/convenience8.jpeg", ],
            description: "A dynamic space where commerce, culture, and community converge."
          },
          {
            name: "Exquisite Residence",
            category: "Homely",
            imageUrl: [ "/veerock/design1.jpeg", "/veerock/design.jpeg", "/veerock/design_2.jpeg","/veerock/design_5.jpeg","/veerock/construction2.jpeg", ],
            description: "A dynamic space where commerce, culture, and community converge."
          },
          {
            name: "Kitchen Complex",
            category: "Kitchen Complexes",
            imageUrl: [ "/veerock/kitchen3.jpeg", "/veerock/kitchen1.jpeg","/veerock/kitchen2.jpeg","/veerock/kitchen4.jpeg","/veerock/kitchen5.jpeg","/veerock/kitchen6.jpeg", ],
            description: "A dynamic space where commerce, culture, and community converge."
          },
          {
            name: "Mural Designs",
            category: "Interior Designs",
            imageUrl: [ "/veerock/mural_floor1.jpeg",  "/veerock/mural_wall.jpeg", "/veerock/mural_ceiling.jpeg",  "/veerock/mural_wall.jpeg",  "/veerock/mural_wall2.jpeg",  "/veerock/mural_wall3.jpeg",  "/veerock/mural_wall4.jpeg",],
            description: "A dynamic space where commerce, culture, and community converge."
          },
          // Add more portfolio items as needed
        ]
      };
      
      const testimonialsData = {
        title: "Client Testimonials",
        heading : "What Our Clients Are Saying",
        items: [
          {
            name: "Chiamaka Adekunle",
            title: "CEO, TechFusion Ltd.",
            content: "Veerock transformed our office space into a modern and functional environment that perfectly aligns with our company's image.",
            imageUrl: "url_to_image_1.jpg"
          },
          {
            name: "Olumide Okafor",
            title: "Managing Director, EcoBuilders",
            content: "The waste-to-energy solution provided by Veerock not only reduced our operational costs but also significantly improved our environmental footprint.",
            imageUrl: "url_to_image_2.jpg"
          },
          {
            name: "Nneka Okonkwo",
            title: "Founder, GreenTech Innovations",
            content: "Veerock's commitment to sustainability is truly remarkable. Their innovative solutions have set a new standard in the construction industry.",
            imageUrl: "url_to_image_3.jpg"
          },
          {
            name: "Abdul Ibrahim",
            title: "Director, UrbanEstate Developments",
            content: "Working with Veerock was a pleasure from start to finish. Their attention to detail and quality craftsmanship are unmatched.",
            imageUrl: "url_to_image_4.jpg"
          },
          {
            name: "Amina Bello",
            title: "Architect, A+ Designs",
            content: "Collaborating with Veerock on architectural projects has been inspiring. Their dedication to design excellence is evident in every project.",
            imageUrl: "url_to_image_5.jpg"
          },
          {
            name: "Emeka Nwosu",
            title: "Hotel Manager, Oasis Retreat",
            content: "Veerock's eco-resort concept brought our vision to life. Our guests now enjoy a sustainable oasis that exceeds their expectations.",
            imageUrl: "url_to_image_6.jpg"
          }
          // Add more testimonials as needed
        ],

        ads1: `Renovating and building modern houses and palaces at a low budget!`,
        imgUrl1: '/palace2.jpeg',
        imgUrl2: '/mural_wall4.jpeg',
        ads2: `Perfect interior designs with easthetics that brings comfort.`,
        getQoute: `Trust us to deliver your bogus project at a low cost.`
      };
      
    const advert1 = {
        heading: 'We Offer The Most Complete House Renovating Services.',
        description: ' Witness the magic of turning houses into personalized dream residences. Our complete renovating services are designed to create homes that encapsulate your aspirations.',
        imgUrl: '/veerock/design02.jpeg',
      }
      
      const advert2 = {
        heading: `We're Turning Vision Into Superior Value`,
        title: 'PROVEN CAPACITY & COMPETENCE',
        details: 'Our track record speaks for itself, underscoring our adeptness in bringing ambitious projects to fruition. Step into a realm where sizeable undertakings are met with unwavering expertise, turning monumental visions into remarkable realities.',
        imgUrl: '/veerock/construction4.jpeg'
        
      }



  return { headline, advert1, credibility, aboutSection, servicesSection, howItWorks, projectsPortfolio, testimonialsData, advert2

  }
}
 





