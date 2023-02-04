import { SelectedPage, BenefitType } from '@/shared/type';
import { motion } from "framer-motion";
import { HomeModernIcon, UserGroupIcon, AcademicCapIcon } from '@heroicons/react/24/solid';
import HText from '@/shared/HText';
import Benefit from './Benefit';
import BenefitsPageGraphic from "@/assets/BenefitsPageGraphic.png";
import ActionButton from '@/shared/ActionButton';

const benefits: Array<BenefitType> = [
    {
        icon: <HomeModernIcon className="h-6 w-6" />,
        title: "State of the Art Facilities",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi eius itaque voluptatum, facere suscipit veritatis laborum facilis dicta perferendis quam reiciendis! Nihil labore tempore error optio quod officiis vitae vel?"
    },
    {
        icon: <UserGroupIcon className="h-6 w-6" />,
        title: "100's of Diverse Classes",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi eius itaque voluptatum, facere suscipit veritatis laborum facilis dicta perferendis quam reiciendis! Nihil labore tempore error optio quod officiis vitae vel?"
    },
    {
        icon: <AcademicCapIcon className="h-6 w-6" />,
        title: "Expert and Pro Trainers",
        description: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Excepturi eius itaque voluptatum, facere suscipit veritatis laborum facilis dicta perferendis quam reiciendis! Nihil labore tempore error optio quod officiis vitae vel?"
    },
];

type Props = {
    setSelectedPage: (value: SelectedPage) => void;
}

const Benefits = ({setSelectedPage}: Props) => {
  return (
    <section 
        id="benefits"
        className="mx-auto min-h-full w-5/6 py-20"
    >
        <motion.div
            onViewportEnter={() => setSelectedPage(SelectedPage.Benefits)}
        >
            <motion.div 
                className="md:my-5 md:w-3/5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5}}
                transition={{ duration: 0.5 }}
                variants={{
                hidden: {opacity: 0, x: -50},
                visible: {opacity: 1, x: 0},
                }}
            >
                <HText>MORE THAN JUST GYM</HText>
                <p className="py-5 text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Autem omnis quos accusamus deleniti voluptas eligendi fugiat tempora voluptate, 
                    hic eveniet nesciunt commodi sint labore iste architecto placeat exercitationem veniam impedit.
                </p>
            </motion.div>

            {/* BENEFITS */}
            <motion.div 
                className="md:flex items-center justify-between gap-8 mt-5"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.5 }}
                variants={{
                    hidden: {},
                    visible: { 
                        transition: {staggerChildren: 0.2}
                    },
                }}
            >
                {benefits.map((benefit: BenefitType) => (
                    <Benefit 
                        key={benefit.title}
                        icon={benefit.icon}
                        title={benefit.title}
                        description={benefit.description}
                        setSelectedPage={setSelectedPage}
                    />
                ))}
            </motion.div>

            {/* GRAPHICS AND DESCRIPTION */}
            <div className="mt-16 md:flex justify-between items-center gap-20 md:mt-28">
                {/* GRAPHIC */}
                <img 
                    src={BenefitsPageGraphic} 
                    alt="benefit-page-graphic" 
                    className="mx-auto"
                />

                {/* DESCRIPTION */}
                <div>
                    {/* TITLE */}
                    <div className='relative'>
                        <div className="before:absolute before:-top-20 before:-left-20 before:z-[-1] before:content-abstractwaves">
                            <motion.div
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, amount: 0.5 }}
                                transition={{ duration: 0.5 }}
                                variants={{
                                    hidden: { opacity: 0, x: 50},
                                    visible: { opacity: 1, x: 0},
                                }}
                            >
                                <HText>
                                    MILLIONS OF HAPPY MEMBERS GETTING {" "}
                                    <span className="text-primary-500">FIT</span>
                                </HText>
                            </motion.div>
                        </div>
                    </div>

                    {/* DESCRIPT */}
                    <motion.div
                        initial="hidden"
                        whileInView="visible"
                        viewport={{ once: true, amount: 0.5 }}
                        transition={{ delay:0.2, duration: 0.5 }}
                        variants={{
                            hidden: { opacity: 0, x: 50},
                            visible: { opacity: 1, x: 0},
                        }}
                    >
                        <p className="my-5">
                            Nascetur aenean massa auctor tincidunt. Iaculis potenti amet
                            egestas ultrices consectetur adipiscing ultricies enim. Pulvinar
                            fames vitae vitae quis. Quis amet vulputate tincidunt at in
                            nulla nec. Consequat sed facilisis dui sit egestas ultrices
                            tellus. Ullamcorper arcu id pretium sapien proin integer nisl.
                            Felis orci diam odio.
                        </p>
                        <p className="mb-5">
                            Fringilla a sed at suspendisse ut enim volutpat. Rhoncus vel est
                            tellus quam porttitor. Mauris velit euismod elementum arcu neque
                            facilisi. Amet semper tortor facilisis metus nibh. Rhoncus sit
                            enim mattis odio in risus nunc.
                        </p>
                    </motion.div>

                    {/* BUTTON */}
                    <div className="relative mt-16">
                        <div className="before:absolute before:content-sparkles before:right-40 before: before:z-[-1]">
                            <ActionButton setSelectedPage={setSelectedPage}>
                                Join Now
                            </ActionButton>
                        </div>
                    </div>

                </div>
                
            </div>

        </motion.div>
    </section>
  )
}

export default Benefits;