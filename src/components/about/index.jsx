

import ItemLayout from "./ItemLayout";



const AboutDetails = () => {
    return (
        <section className="py-20 w-full">
            <div className=" grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
                <ItemLayout className={"row-span-2 flex-col items-start col-span-full lg:col-span-8"}>
                    <h2 className=" md:text-2xl text-xl text-left w-full capitalize text-accent font-semibold ">
                        Wizard of Web Wonders
                    </h2>
                    <p className="font-light text-xs sm:text-sm md:text-base">
                        My journey in web development is powered by an array of mystical tools and languages, with JavaScript casting the core of my enchantments. As a fresher, I am beginning to wield frameworks like React.js and Next.js with growing precision, learning to craft seamless portals (websites) that connect realms (users) across the digital universe. The ancient arts of the Jamstack empower me to create fast, secure, and dynamic experiences, while my budding design skills ensure every creation is not only functional but visually captivating. Join me as I continue to explore new spells and technologies to shape the future of the web.
                    </p>
                </ItemLayout>
                <ItemLayout className={"lg:col-span-4 col-span-full xs:col-span-6 text-accent"}>
                    <p className=" font-semibold w-full text-left text-2xl  sm:text-5xl ">
                        1<sub className="font-semibold text-base">clients</sub>
                    </p>
                </ItemLayout>
                <ItemLayout className={"lg:col-span-4 col-span-full xs:col-span-6 text-accent"}>
                    <p className=" font-semibold w-full text-left text-2xl  sm:text-5xl ">
                        4
                        <sub className="font-semibold text-base">
                            months of internship experience
                        </sub>
                    </p>
                </ItemLayout>
                <ItemLayout className={" col-span-full  md:col-span-8 !p-0"}>
                    <img
                        src="https://github-readme-stats.vercel.app/api?username=Saqibxyz&theme=transparent&hide_border=true&title_color=FEFE5B&icon_color=FEFE5B&text_color=FFFFFF&text_bold=false"
                        alt="github details"
                        loading="lazy"
                        className="w-full h-auto"
                    />
                </ItemLayout>
                <ItemLayout className={" col-span-full  sm:col-span-6 md:col-span-4 !p-0"}>
                    <img
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Saqibxyz&theme=transparent&hide_border=true&title_color=FEFE5B&icon_color=FEFE5B&text_color=FFFFFF&text_bold=false"
                        alt="github details"
                        loading="lazy"
                        className="w-full h-auto"

                    />
                </ItemLayout>




                <ItemLayout className={"col-span-full  md:col-span-full !p-0 "}>
                    <img
                        src="https://github-readme-streak-stats.herokuapp.com/?user=Saqibxyz&theme=dark&hide_border=true&ring=FEFE5B&background=EB545400&currStreakLabel=FEFE5BFE"
                        alt="github details"
                        loading="lazy"
                        className="w-full sm:w-1/2 h-auto"
                    />
                </ItemLayout>
                <ItemLayout className={"col-span-full md:col-span-full  !p=0"}>
                    <img
                        src="https://skillicons.dev/icons?i=js,html,bootstrap,css,express,react,nextjs,tailwind,wordpress,jquery,github,git,linkedin,npm,php,postman,py,c,cpp,java,codepen,vscode,ts,"
                        alt="github details"
                        loading="lazy"
                        className="w-full h-auto"
                    />
                </ItemLayout>
                {/* leetcode */}
                <ItemLayout className={"col-span-full  md:col-span-full !p-0 "}>
                    <img
                        src=" https://leetcard.jacoblin.cool/Saqib_xyz?ext=heatmap&theme=dark&width=500&border=0&radius=10&animation=true"
                        alt="leet-code"
                        loading="lazy"
                        className="w-full sm:w-1/2 h-auto p-4 sm:p-6"
                    />
                </ItemLayout>







            </div>
        </section>
    );
};

export default AboutDetails;
