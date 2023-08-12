import { FaBuilding, FaDraftingCompass,  FaRecycle, FaWifi, FaHome, FaCouch, FaTools,    } from 'react-icons/fa';
import { GiDoricColumn } from 'react-icons/gi';
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
                icon: '',
                heading: " Architectural Brilliance ",
                description: "Our designs blend creativity with eco-smart solutions.",
                slug: "timeless-elegance-architectural-design",
            },
            
        ],
    ]

    const aboutSection = {
        title: 'ABOUT US',
        heading: 'We are re-inventing urban lifestyle',
        strength: [ "Innovative Urban Visionaries", 
        "Holistic Lifestyle Integration", "Sustainability Champions", "Smart Technology Pioneers", "Quality Project Management", "Cost-Effective Delivery",            
        ]
    }

    const servicesSection = [
        {
          title: "Construction and Maintenance",
          description: "Skilled construction and maintenance for structures built to last.",
          icon: <FaTools />
        },
        {
          title: "Real Estate Development",
          description: "Creating thriving, culturally rich communities.",
          icon: <FaBuilding />
        },
        {
          title: "Architectural Designs",
          description: "Visionary designs that harmonize form and function.",
          icon: <FaDraftingCompass />
        },
        {
          title: "Interior Designs",
          description: "Transforming spaces into personalized urban havens.",
          icon: <FaCouch />
        },
        {
          title: "Waste-to-Energy Solutions",
          description: "Shaping sustainable urban landscapes with innovative energy solutions.",
          icon: <FaRecycle />
        },
        {
          title: "Smart Technology Integration",
          description: "Infusing urban living with seamless connectivity and efficiency.",
          icon: <FaWifi />
        }
      ];
      

      const howItWorks = {
        title: "How It Works",
        heading: "Our Streamlined Process",
        list: [
            {
              title: "Building Construction and Maintenance",
              description: "Expert construction and upkeep for enduring structures.",
              icon: <FaTools />
            },
            {
              title: "Real Estate Development",
              description: "Creating thriving, culturally rich communities.",
              icon: <FaBuilding />
            },
            {
              title: "Architectural Designs",
              description: "Visionary designs that harmonize form and function.",
              icon: <FaDraftingCompass />
            },
            {
              title: "Interior Designs",
              description: "Transforming spaces into personalized urban havens.",
              icon: <FaCouch />
            },
            {
              title: "Waste-to-Energy Solutions",
              description: "Shaping sustainable urban landscapes with innovative energy solutions.",
              icon: <FaRecycle />
            },
            {
              title: "Smart Technology Integration",
              description: "Infusing urban living with seamless connectivity and efficiency.",
              icon: <FaWifi />
            }
          ],
          
      }
      
      const projectsPortfolio = {
        heading: "Our Projects Portfolio",
        title: "Explore Our Diverse Urban Creations",
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
          }
          // Add more portfolio items as needed
        ]
      };
      
      const testimonialsData = {
        heading: "Client Testimonials",
        title: "What Our Clients Are Saying",
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
        getQoute: `Trust us to deliver your bogus project with lost cost. Get Quote.`
      };
      
      
      


  return { headline, credibility, aboutSection, servicesSection, howItWorks, projectsPortfolio, testimonialsData, 

  }
}
 





