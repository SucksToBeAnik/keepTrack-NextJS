import Header from "@/components/ui/hero/Header";
import Image from "next/image";
import Link from "next/link";

const HomePage = () => {
  return (
    <div className="grid grid-cols-2 w-screen">
      <div className="col-span-2 md:col-span-1 bg-[#FAC670] md:min-h-screen p-4">
        <div className="flex justify-start items-start md:items-center h-full">
          <div>
            <div className="mb-16">
              <Header>
                <span className="text-[#F37925]">Track </span>
                <span>your projects</span>
              </Header>
              <Header>Learn new skills</Header>
              <Header>
                <span>Have </span>
                <span className="text-[#F37925]">Fun</span>
              </Header>
            </div>

            <p className="text-dark text-xl font-semibold">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum
              unde temporibus itaque debitis exercitationem maxime amet. Sunt
              autem laudantium eaque.
            </p>
          </div>
        </div>
      </div>

      <div className="col-span-2 md:col-span-1 min-h-96 md:min-h-screen">
        <div className="flex items-center justify-center h-full">
          <div className="p-4">
            <Image
              src="/hero.png"
              height={700}
              width={700}
              alt="Man woman working on project"
              className="mb-8"
            />
            <div className="flex justify-center">
              <Link
                href={"/projects/trending"}
                className="btn btn-outline btn-md md:btn-lg"
              >
                Trending Projects
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
