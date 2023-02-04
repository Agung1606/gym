import { SelectedPage } from '@/shared/type';
import AnchorLink from 'react-anchor-link-smooth-scroll';
import { motion } from 'framer-motion';

type Props = {
    icon: JSX.Element;
    title: string;
    description: string;
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefit = ({icon, title, description, setSelectedPage}: Props) => {
  return (
    <motion.div 
      className="mt-5 rounded-md border-2 border-gray-100 px-5 py-6 text-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.5 }}
      transition={{ duration: 0.5 }}
      variants={{
        hidden: { opacity: 0, scale: 0.9 },
        visible: { opacity: 1, scale: 1 },
      }}
    >
        <div className="mb-4 flex justify-center">
            <div className="rounded-full border-2 border-gray-100 bg-primary-100 p-4">
                {icon}
            </div>
        </div>
        <h2 className="font-bold">{title}</h2>
        <p className="my-4">{description}</p>
        <AnchorLink
          className="font-semibold text-sm text-primary-500 underline hover:text-secondary-500"
          onClick={() => setSelectedPage(SelectedPage.ContactUs)}
          href={`#${SelectedPage.ContactUs}`}
        >
          Learn More
        </AnchorLink>
    </motion.div>
  )
}

export default Benefit;