import Head from "next/head"

const Seo = ({
    title=`Veerock`, 
    description=`Building construction, Renovation, Real Estate, Procurement, Project Management, energy and waste management services with sustainable innovation at a low cost without compromizing efficiency. We are committed to delivering high-quality solutions to our clients by utilizing cutting-edge technology and employing a team of experienced professionals. Our aim is to provide affordable and sustainable solutions that meet the needs of our clients while promoting economic growth and social responsibility.`, 
    ogImg='https://veerock.vercel.app/veerock/worker2.jpeg',
    keyword=`Real Estate, Construction, Building, Waste Management, Rent, Sales, Renewable Energy, Housing, Estate Developement, Property search, Energy, Mining, Manufacturing`
    }) => {


    return (
      <Head>
          <title>{title}</title>
          <link rel="icon" href="favicon.ico" type="image/x-icon" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta httpEquiv="X-UA-Compatible" content="ie=edge" />
          <meta httpEquiv="Content-Type" content="text/html;charset=UTF-8" />
          <meta name="keyword" content={keyword}/>
          <meta name="author" content="Cydam Global"/>
          <meta name="description" content={description} />
          <meta property="og:title" content={title} />
          <meta property="og:description" content={description} />
          <meta property="og:image" content={ogImg } />
          {/* <Script src="https://js.paystack.co/v1/inline.js"/> */}
        </Head>
    )
}

export default Seo


