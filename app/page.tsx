import ActionButton from "@/components/ActionButton";
import ContentBlock from "@/components/ContentBlock";
import ContentNavigator from "@/components/ContentNavigator";
import Hero from "@/components/Hero";
import SimpleToggle from "@/components/SimpleToggle";

export default function Home() {
  return (
    <main>
      <Hero />
      <div className="max-w-[1596px] m-auto">
        <ContentBlock
          leadText="Explore our wide variety of categories"
          subText="Whether you're looking for a comedy to make you laugh, a drama to make you think, or a documentary to learn something new"
          actionComponent={<ContentNavigator pages={4} />}
          children
        />
        <ContentBlock
          leadText="We Provide you streaming experience across various devices."
          subText="With StreamVibe, you can enjoy your favorite movies and TV shows anytime, anywhere. Our platform is designed to be compatible with a wide range of devices, ensuring that you never miss a moment of entertainment."
          children
        />
        <ContentBlock
          leadText="Frequently Asked Questions"
          subText="Got questions? We've got answers! Check out our FAQ section to find answers to the most common questions about StreamVibe."
          actionComponent={<ActionButton buttonText='Ask a Question' /> }
          children
        />
        <ContentBlock
          leadText="Choose the plan that's right for you"
          subText="Join StreamVibe and select from our flexible subscription options tailored to suit your viewing preferences. Get ready for non-stop entertainment!"
          actionComponent={<SimpleToggle optionsArray={['Yearly', 'Monthly']} />}
          children
        />
      </div>
    </main>
  );
}
