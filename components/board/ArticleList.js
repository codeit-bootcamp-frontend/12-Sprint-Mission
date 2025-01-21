import Link from "next/link";

export default function ArticleList({ articles = [] }) {
  return (
    <div>
      {articles.map((articles) => (
        <div key={articles.title}>
          <Link href={`/boards/${articles.id}`}>
            <p>{articles.title}</p>
          </Link>
          <br />
        </div>
      ))}
    </div>
  );
}
