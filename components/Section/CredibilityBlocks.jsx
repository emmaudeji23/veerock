import SimpleCard from '../Cards/SimpleCard'
import Link from 'next/link'

const CredibilityBlocks = ({content}) => {
  return (
    <div className=" w-full grid sm:grid-cols-2 gap-1">
            {content?.map(({heading, icon, description, slug})=> (
                <Link href={`#`} key={slug}>
                  <SimpleCard icon={icon} text={description} title={heading}/>
                </Link>
            ))}
      </div>
  )
}

export default CredibilityBlocks