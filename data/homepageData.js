import { FaBuilding, FaDraftingCompass, FaCity, FaColumns, FaRecycle, FaWifi, FaHome, FaCouch, FaTools, FaHammer, FaLeaf,  FaLightbulb  } from 'react-icons/fa';
import { AiOutlineClockCircle } from 'react-icons/ai';

export const homepageData = () => {
    const headline = [
        {
            heading: 'SUSTAINABLE AND INNOVATIVE CONSTRUCTION',
            description: "We Build Your Dream With Passion",
            image: '/fake1.jpg',
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
            image: '/fake2.jpg',
            link2: '/quote',
            link1: '/contact'
        },
        {
            heading: 'UNMATCHED CREDIBLITY AND EXCELLENCE',
            description: "Trust Us To Streamline Your Complex Project",
            button1Text: 'Contact Us',
            image: '/fake3.jpg',
            button2Text: 'Learn More',
            link2: '/about',
            link1: '/contact'
        }
    ]

    const credibility = [
        {
            heading: "We Take Pride in Our Craft, Delivering Quality. Building a Better Tomorrow.",
            description: "From towering architectural marvels to intricate interior designs, each endeavor is meticulously executed, showcasing our dedication to impeccable craftsmanship.",
            
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
        heading: 'We are re-inventing urban lifestyle',
        description: "Revolutionizing construction services with human-centered design and sustainable innovation. Our key strength sets us apart",
        strength: [ "Innovative Urban Visionaries", 
        "Holistic Lifestyle Integration", "Sustainability Champions", "Smart Technology Pioneers", "Quality Project Management", "Cost-Effective Delivery",            
        ]
    }

    const howItWorks = {
      title: "How It Works",
      heading: "Our Streamlined Process",
      steps: [
        {
          title: "Step 1: Conceptualization",
          description: "We begin by understanding your vision, goals, and requirements. Our experts collaborate with you to conceptualize and outline the project scope.",
          icon: <FaLightbulb />
        },
        {
          title: "Step 2: Innovative Design",
          description: "Our skilled architects and designers craft innovative and functional blueprints. We incorporate your ideas while ensuring structural integrity and aesthetics.",
          icon: <FaDraftingCompass />
        },
        {
          title: "Step 3: Sustainable Planning",
          description: "We prioritize sustainability in our planning, choosing eco-friendly materials and energy-efficient practices to reduce environmental impact.",
          icon: <FaLeaf />
        },
        {
          title: "Step 4: Precision Construction",
          description: "Our experienced construction team meticulously follows the plans, using advanced techniques and tools to ensure precision and quality.",
          icon: <FaTools />
        },
        {
          title: "Step 5: Finishing Touches",
          description: "We add the final details that elevate the project to excellence. From interior finishes to exterior landscaping, every element is thoughtfully executed.",
          icon: <FaHammer />
        },
        {
          title: "Step 6: Handover and Beyond",
          description: "Upon completion, we hand over the project and ensure your satisfaction. Our commitment extends beyond delivery, as we provide ongoing support and maintenance.",
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
          
      }
      
      const projectsPortfolio = {
        title: "Our Projects Portfolio",
        heading: "Explore Our Diverse Urban Creations",
        items: [
          {
            name: "Cityscape Residences",
            category: "Residential",
            imageUrl: ["url_to_image_10.jpg", ],
            description: "Elegant urban living spaces offering a blend of comfort and modern design."
          },
          {
            name: "Metropolis Tower",
            category: "Commercial",
            imageUrl: ["url_to_image_10.jpg", ],
            description: "A towering emblem of corporate excellence and urban sophistication."
          },
          {
            name: "Cultural Hub Plaza",
            category: "Mixed-Use",
            imageUrl: ["url_to_image_10.jpg", ],
            description: "A dynamic space where commerce, culture, and community converge."
          },
          {
            name: "Eco-Resort Oasis",
            category: "Hospitality",
            imageUrl: ["url_to_image_10.jpg", ],
            description: "A sustainable haven of relaxation and luxury, seamlessly integrated into nature."
          },
          {
            name: "Cultural Hub Plaza",
            category: "Mixed-Use",
            imageUrl: ["url_to_image_10.jpg", ],
            description: "A dynamic space where commerce, culture, and community converge."
          },
          {
            name: "Cultural Hub Plaza",
            category: "Mixed-Use",
            imageUrl: ["url_to_image_10.jpg", ],
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

        ads1: `Let's Renovate Incomplete Dreams, That Must Be Fulfilled!`,
        ads2: `Transforming Creativity into best Construction services`,
        getQoute: `Trust us to deliver your bogus project at a low cost.`
      };
      
      const advert2 = {
        heading: `We're Turning Vision Into Superior Value`,
        title: 'HIGH PERFORMANCE',
        details: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Omnis, obcaecati nesciunt quia delectus itaque vero nihil quos aperiam eaque id suscipit aliquam explicabo dignissimos odit illum error iure saepe expedita.',
        
      }
      


  return { headline, credibility, aboutSection, servicesSection, howItWorks, projectsPortfolio, testimonialsData, advert2

  }
}
 





