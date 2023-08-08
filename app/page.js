import HeroBanner from "@/components/HeroBanner/HeroBanner";
import { slides } from "@/data/herobannerContent";

export default function Home() {
  return (
    <div className=''>
      <HeroBanner slides={slides} />
    </div>
  )
}
