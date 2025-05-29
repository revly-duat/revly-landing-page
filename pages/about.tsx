import Head from "next/head";
import Button from "components/ui/Button";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";

const seoTitle = "Om Revly - Marknadsföring som driver tillväxt";
const seoDescription =
  "Läs mer om Revlys resa, vision och hur vi hjälper e-handelsföretag att växa på riktigt.";
const seoUrl = "https://www.revly.se/about";
const faviconAlt = "Om Revly - Marknadsföring som driver tillväxt";

const AboutPage = () => {
  const router = useRouter();

  return (
    <>
      <Head>
        <link rel="icon" href="/revly_favicon.png" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
      <NextSeo
        title={seoTitle}
        description={seoDescription}
        openGraph={{
          url: seoUrl,
          title: seoTitle,
          description: seoDescription,
          images: [
            {
              url: "/revly_open_graph.png",
              width: 1200,
              height: 630,
              alt: faviconAlt,
              type: "image/png",
            },
          ],
        }}
      />
      <div className="min-h-screen bg-gray-50">
        <section className="py-40 px-6 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center mb-8">
            <h1 className="text-5xl font-extrabold text-primary mb-6">
              Om Revly
            </h1>
            <p className="text-lg sm:text-xl text-gray-600 leading-relaxed">
              Revly grundades med målet att hjälpa företag växa hållbart och
              effektivt med rätt strategi och rätt partner.
            </p>
          </div>
          <div className="max-w-4xl mx-auto text-gray-600 space-y-8">
            <p className="text-lg leading-relaxed">
              Revly föddes ur en vilja att bygga långsiktiga samarbeten och
              skapa konkret tillväxt för företag. I grunden tror vi på samarbete
              och ömsesidig framgång. När ni växer, växer vi. Det är den
              drivkraften som genomsyrar allt vi gör. Att arbeta nära kunder,
              sätta tydliga mål och se faktiska resultat är det som gör jobbet
              meningsfullt.
            </p>
            <p className="text-lg leading-relaxed">
              Det som gör Revly unikt är vårt helhetsgrepp. Vi fokuserar inte
              bara på en del av marknadsföringen utan vi jobbar med allt som kan
              påverka tillväxten. Från betald annonsering till innehållsstrategi
              och system för recensionshantering (RMS). Oavsett om du vill bygga
              varumärke, skala upp försäljningen eller förbättra kundrelationer
              vi har verktygen och erfarenheten.
            </p>
            <p className="text-lg leading-relaxed">
              Vårt uppdrag är enkelt: hjälpa e-handelsföretag att bli starkare
              digitalt och växa med lönsamhet. Med skräddarsydda lösningar och
              nära samarbete bygger vi något som håller och som gör skillnad, på
              riktigt.
            </p>
          </div>
          <div className="mt-12 text-center">
            <Button
              label="Utforska våra tjänster"
              styleType="primary"
              additionalClasses="px-8"
              onClick={() => router.push("/#services")}
            ></Button>
          </div>
        </section>
      </div>
    </>
  );
};

export default AboutPage;
