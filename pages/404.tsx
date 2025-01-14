import { useRouter } from "next/router";
import Button from "components/ui/Button";

const Custom404 = () => {
  const router = useRouter();

  return (
    <>
      <section className="min-h-screen flex flex-col justify-center items-center bg-gradient-to-r from-orange-400 to-yellow-500 text-white text-center px-6">
        <h1 className="text-6xl font-bold mb-4">404</h1>
        <h2 className="text-2xl sm:text-3xl font-semibold mb-6">
          Oops! The page you're looking for doesn't exist.
        </h2>
        <p className="text-lg sm:text-xl mb-8 max-w-xl">
          It seems like you've hit a dead end. Don't worry, let's get you back
          on track!
        </p>
        <Button
          label="Go Back Home"
          styleType="secondary"
          additionalClasses="px-6 py-3 text-lg"
          onClick={() => router.push("/")}
        />
      </section>
    </>
  );
};

export default Custom404;
