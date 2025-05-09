import TV from "@/public/tv.png";
import Hero from "@/components/Hero";
import Tablet from "@/public/tablet.png";
import Laptop from "@/public/laptop.png";
import VRHeadset from "@/public/vr-headset.png";
import Smartphone from "@/public/smartphone.png";
import ActionButton from "@/components/ActionButton";
import SimpleToggle from "@/components/SimpleToggle";
import ContentBlock from "@/components/ContentBlock";
import GradientBlock from "@/components/GradientBlock";
import GameController from "@/public/game-controller.png";
import ContentNavigator from "@/components/ContentNavigator";

export default function Home() {
  const repetetiveText = 'StreamVibe is optimized for both Android and iOS smartphones. Download our app from the Google Play Store or the Apple App Store';
  return (
    <main>
      <Hero />
      <div className="max-w-[1596px] m-auto">
        <ContentBlock
          leadText="Explore our wide variety of categories"
          subText="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
          actionComponent={<ContentNavigator pages={4} />}
        >
          {/* unique child content for content block */}
        </ContentBlock>
        <ContentBlock
          leadText="We Provide you streaming experience across various devices."
          subText="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
          >
          {/* unique child content for content block */}
          <div className="flex flex-row flex-wrap justify-evenly gap-5 my-[50px]">
            <GradientBlock
              icon={Smartphone}
              title='Smartphones'
              text={repetetiveText}
            />
            <GradientBlock
              icon={Tablet}
              title='Tablet'
              text={repetetiveText}
            />
            <GradientBlock
              icon={TV}
              title='Smart TV'
              text={repetetiveText}
            />
            <GradientBlock
              icon={Laptop}
              title='Laptop'
              text={repetetiveText}
            />
            <GradientBlock
              icon={GameController}
              title='Gaming Consoles'
              text={repetetiveText}
            />
            <GradientBlock
              icon={VRHeadset}
              title='VR Headset'
              text={repetetiveText}
            />
          </div>
        </ContentBlock>
        <ContentBlock
          leadText="Frequently Asked Questions"
          subText="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
          actionComponent={<ActionButton buttonText='Ask a Question' /> }
          >
          {/* unique child content for content block */}
        </ContentBlock>
        <ContentBlock
          leadText="Choose the plan that's right for you"
          subText="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
          actionComponent={<SimpleToggle optionsArray={['Yearly', 'Monthly']} />}
        >
        </ContentBlock>
      </div>
    </main>
  );
}
