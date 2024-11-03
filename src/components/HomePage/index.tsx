import { Footer, Header } from "@/components/Layout";
import MainContent from "@/components/MainContent";

function HomePage() {
  return (
    <div className="flex flex-col h-screen">
      <Header />

      <main className="bg-[#161513] h-full">
        <div className="container mx-auto px-4">
          <MainContent />
        </div>
      </main>

      <Footer />
    </div>
  );
}

export default HomePage;
