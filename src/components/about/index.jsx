import clsx from "clsx";


const ItemLayout = ({ children, className }) => {
    return (
        <div
            className={clsx(
                "custom-bg p-6 sm:p-8 rounded-xl flex items-center justify-center space-y-8",
                className
            )}
        >
            {children}
        </div>
    );
};

const AboutDetails = () => {
    return (
        <section className="py-20 w-full">
            <div className=" grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
                <ItemLayout className={"row-span-2 flex-col items-start col-span-full lg:col-span-8"}>
                    <h2 className=" md:text-2xl text-xl text-left w-full capitalize ">
                        Wizard of Web Wonders
                    </h2>
                    <p className="font-light text-xs sm:text-sm md:text-base">
                        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Optio esse
                        explicabo commodi dignissimos modi maxime nesciunt delectus
                        cupiditate iure illum. Deleniti, ea commodi! Enim, error! Autem
                        laborum reiciendis repellat libero amet sint architecto debitis
                        dolores incidunt eveniet totam impedit perferendis nesciunt sed
                        labore, tenetur neque porro odio animi. Autem id eaque et quas sed
                        commodi impedit libero dolorem fugiat dolorum repellendus, debitis
                        sequi vel reiciendis natus labore est error consectetur ea quam
                        velit amet excepturi? Aspernatur veniam quasi beatae illum quos
                        nihil, nobis vel animi dolore est consequuntur ipsam .
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
                <ItemLayout className={" col-span-full  sm:col-span-6 md:col-span-4 !p-0"}>
                    <img
                        src="https://github-readme-stats.vercel.app/api/top-langs/?username=Saqibxyz&theme=transparent&hide_border=true&title_color=FEFE5B&icon_color=FEFE5B&text_color=FFFFFF&text_bold=false"
                        alt="github details"
                        loading="lazy"
                        className="w-full h-auto"
                    />
                </ItemLayout>
                <ItemLayout className={" col-span-full  md:col-span-8 !p-0"}>
                    <img
                        src="https://github-readme-stats.vercel.app/api?username=Saqibxyz&theme=transparent&hide_border=true&title_color=FEFE5B&icon_color=FEFE5B&text_color=FFFFFF&text_bold=false"
                        alt="github details"
                        loading="lazy"
                        className="w-full h-auto"
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


                <ItemLayout className={"col-span-full  md:col-span-full !p-0 "}>
                    <img
                        src="https://github-readme-streak-stats.herokuapp.com?user=Saqibxyz&theme=dark&hide_border=true&type=png&ring=FEFE5B&background=EB545400&currStreakLabel=FEFE5BFE"
                        alt="github details"
                        loading="lazy"
                        className="w-full sm:w-1/2 h-auto"
                    />
                </ItemLayout>

            </div>
        </section>
    );
};

export default AboutDetails;
