type Repo = {
  id: number;
  name: string;
  description: string | null;
  html_url: string;
  language: string | null;
  stargazers_count: number;
  updated_at: string;
  topics: string[];
};

async function getRepos(): Promise<Repo[]> {
  const headers: HeadersInit = {
    Accept: "application/vnd.github+json",
  };
   if (process.env.GITHUB_TOKEN) {
   headers["Authorization"] = `Bearer ${process.env.GITHUB_TOKEN}`;
 }
 const res = await fetch(
  "https://api.github.com/users/Pieterlr96/repos?sort=updated&per_page=6",
  {
    headers,
        next: { revalidate: 3600 },
  }
);
if (!res.ok) {
  console.error("GitHub API error:", res.status, res.statusText);
  return [];
}
  return res.json();
}

function formatDate(dateString: string): string {
  const date = new Date(dateString);
  return date.toLocaleDateString("en-GB", {
    year: "numeric",
    month: "short",
    day: "numeric",
  });
}

function FeedSkeleton() {
  return (
    <div className="projects">
      {[1, 2, 3].map((i) => (
        <div key={i} className="card github-card github-card--skeleton">
          <div className="skeleton-line skeleton-line--title" />
          <div className="skeleton-line skeleton-line--body" />
          <div className="skeleton-line skeleton-line--short" />
        </div>
      ))}
    </div>
  );
}

function EmptyState() {
  return (
    <p className="body-text">
      {">"} no repositories found. check back soon.
    </p>
  );
}

function RepoCard({ repo }: { repo: Repo }) {
  return (
    <a
      href={repo.html_url}
      target="_blank"
      rel="noopener noreferrer"
      className="card github-card"
    >
      <div className="github-card__header">
        <h3 className="card-title">{repo.name}</h3>
        {repo.stargazers_count > 0 && (
          <span className="github-card__stars">
            ★ {repo.stargazers_count}
          </span>
        )}
      </div>

      {repo.description && (
        <p className="body-text github-card__desc">{repo.description}</p>
      )}

      <div className="github-card__footer">
        {repo.language && (
          <span className="skill github-card__lang">{repo.language}</span>
        )}
        <span className="github-card__date body-text">
          updated {formatDate(repo.updated_at)}
        </span>
      </div>
    </a>
  );
}

export default async function GitHubFeed() {
  const repos = await getRepos();

  return (
    <section className="panel">
      <h2 className="heading">{"> GITHUB"}</h2>

      {repos.length === 0 ? (
        <EmptyState />
      ) : (
        <div className="projects">
          {repos.map((repo) => (
            <RepoCard key={repo.id} repo={repo} />
          ))}
        </div>
      )}

      <a
        href="https://github.com/Pieterlr96"
        target="_blank"
        rel="noopener noreferrer"
        className="github-feed__more body-text"
      >
        {">"} view all repositories ↗
      </a>
    </section>
  );
}

