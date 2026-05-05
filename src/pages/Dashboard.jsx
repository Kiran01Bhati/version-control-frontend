import Navbar from "../componenets/navbar/Navbar";
import Sidebar from "../componenets/sidebar/Sidebar";
import RepoCard from "../componenets/repo/RepoCard";

export default function Dashboard() {

  const repositories = [
    {
      id: 1,
      name: "frontend-project",
      description: "A modern GitHub-like version control frontend.",
      stars: 120,
      forks: 35,
      watchers: 540,
      visibility: "Public",
    },

    {
      id: 2,
      name: "backend-api",
      description: "Node.js backend with authentication APIs.",
      stars: 87,
      forks: 22,
      watchers: 300,
      visibility: "Private",
    },

    {
      id: 3,
      name: "apna-git",
      description: "Full MERN stack GitHub clone project.",
      stars: 450,
      forks: 120,
      watchers: 1200,
      visibility: "Public",
    },
  ];

  return (
    <div className="min-h-screen bg-[#0d1117] text-white">

      <Navbar />

      <div className="flex min-h-[calc(100vh-64px)]">

        <Sidebar />

        <main className="flex-1 p-6">

          <h1 className="text-5xl font-bold tracking-tight">
            Your Repositories
          </h1>

          <div className="grid gap-6 mt-8">

            {repositories.map((repo) => (
              <RepoCard
                key={repo.id}
                name={repo.name}
                description={repo.description}
                stars={repo.stars}
                forks={repo.forks}
                watchers={repo.watchers}
                visibility={repo.visibility}
              />
            ))}

          </div>

        </main>
      </div>
    </div>
  );
}