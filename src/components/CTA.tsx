import { Button } from "@/components/ui/button";
import { useNavigate } from 'react-router-dom';


export const CTA = () => {
  const navigate = useNavigate();

  return (
    <section className="py-16 px-4 sm:px-6 lg:px-8 bg-primary text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Join hundreds of businesses already succeeding with Revly
        </h2>
        <p className="text-lg sm:text-xl mb-8 opacity-90">
          Start your free trial today and see the difference
        </p>
        <Button
        label="Get Started Now"
  styleType="primary"
  className="lg:text-base sm:text-xs"
  onClick={() => navigate("/signup")}
>
</Button>
      </div>
    </section>
  );
};