import Image from "next/image";
import ClickPhoto from "@/assets/download.jpeg";
import Processing from "@/assets/ai.jpg";
import Greenry from "@/assets/hh.jpg";
import Header from "@/components/header";
import { siteConfig } from "@/config/site";

export default function HowItWorks() {
  return (
    <section className="container pt-24 px-8">
      <div>
        <Header heading={`How ${siteConfig.name} Works?`} />
      </div>
      <div className="grid md:grid-cols-3 gap-8 w-full mt-16">
        <div>
          <div className="h-72 relative">
            <Image
              src={ClickPhoto}
              // src="https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.freepik.com%2Fpremium-photo%2Fperson-holding-phone-jungle-with-green-leaf-left-hand_42464474.htm&psig=AOvVaw09jEFfy6l4aBysdWgpIE0j&ust=1708851718236000&source=images&cd=vfe&opi=89978449&ved=0CBMQjRxqFwoTCMDZn4TPw4QDFQAAAAAdAAAAABAE"
              alt="A person clicking photo of plant"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="py-4 text-center">
            <p>
              Begin by capturing a high-quality image of a plant leaf displaying
              potential signs of disease. Ensure the image is well-lit and
              sharply focused. Seamlessly upload your image to our platform via
              our intuitive and user-friendly interface.
            </p>
          </div>
        </div>
        <div>
          <div className="h-72 relative">
            <Image
              src={Processing}
              alt="Computer Processing the instruction"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="py-4 text-center">
            <p>
              Greenmind FarmAI harnesses cutting-edge AI technology. Utilizing a
              sophisticated machine learning model, it meticulously processes
              uploaded images, scrutinizing the visual attributes of the leaf
              against a vast database for comprehensive analysis.
            </p>
          </div>
        </div>
        <div>
          <div className="h-72 relative">
            <Image
              src={Greenry}
              alt="Happy and Green Plants"
              fill
              className="object-cover rounded-md"
            />
          </div>
          <div className="py-4 text-center">
            <p>
              Greenmind FarmAI offers a holistic approach to plant health
              management. It accurately identifies plant diseases, provides
              in-depth descriptions of both the plant and the disease, and
              recommends effective remedies for mitigation.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
