import { features } from "../utils/constanta"
import { layout, styles } from "../utils/style"
import Button from "./button/button"
import FeatureCard from "./feature-card"

const Business = () => {
  return (
    <section id="features" className={layout.section}>
      <div className={layout.sectionInfo}>
        <h2 className={`${styles.heading2}`}>
          Biznesingizni rivojlantiring, <br className="sm:block hidden" /> pulni hal qilamiz
        </h2>
        <p className={`${styles.paragraph} max-w-[550px] mt-5`}>
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consectetur numquam a illum culpa, distinctio nisi sed? Eaque ducimus saepe sunt!
      </p>
      <Button styles={'mt-10'}/>
      </div>

      <div className={`${layout.sectionImage} flex-col`}>
        {features.map((item, ind) => (
          <FeatureCard key={item.id}  {...item} ind={ind} />
        ))}
      </div>
    </section>
  )
}

export default Business