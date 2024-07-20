import Image from "next/image";
import bg from "../../../../public/background/contact-background.png";
import Form from "@/components/contact/Forms";

export default function Contact() {
  return (
    <>
      <Image
        priority
        sizes="100vw"
        src={bg}
        alt="background-image"
        className=" fixed w-full top-0 left-0 -z-50 h-full object-cover object-center opacity-25"
      />
      <article className=" relative w-full flex flex-col items-center justify-center py-8 sm:py-0 space-y-8">
        <div className=" flex flex-col items-center justify-center space-y-6 w-full sm:w-3/4">
          <h1 className=" text-accent font-semibold text-center text-4xl capitalize">
            Summon the wizard
          </h1>
          <p className=" text-center font-light text-sm xs:text-base">
            Welcome to the circle of enchantment! Here, your words can shape the
            cosmos. Whether you want to collaborate, solve mysteries, or share
            adventures, your messages are valued here. Use the form below to
            send your messages through this magical network and await a
            response.
          </p>
        </div>

        <Form />
      </article>
    </>
  );
}
