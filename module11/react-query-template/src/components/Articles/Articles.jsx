import React from 'react'
import { useSearchParams } from 'react-router-dom';

const dumyArticles = [
  { id: 1, title: "Article 1", category: "education", date: "2023-01-01"},
  { id: 2, title: "Article 2", category: "technology", date: "2023-02-15" },
  { id: 3, title: "Article 3", category: "health", date: "2023-03-10" },
  { id: 4, title: "Article 4", category: "education", date: "2023-04-05" },
  { id: 5, title: "Article 5", category: "technology", date: "2023-05-20" },
]

const Articles = () => {
  const [searchParams, setSearchParms] = useSearchParams();
  // console.log(searchParams, setSearchParms);
  const SortBy = searchParams.get("sortBy");
  const Category = searchParams.get("category");
  const sortByView = searchParams.get("sortByView");

  let filteredArticles = dumyArticles;

  const handleSortyBy = ()=>{
    setSearchParms({sortByView:true, category:"education"})
  }

  if(Category){
    filteredArticles = filteredArticles.filter((article => article.category === Category))
  }
  if(SortBy === true){
    filteredArticles = [...filteredArticles].sort((a,b) => new Date (b.date) - new Date (a.date))
  }

  return (
    <div>
      <h1>Articles componet
      <p>SortBy:{SortBy ?? (sortByView === "true" ? "neway" : "none")} Category: {Category ?? "All"}</p>
      </h1>
      <button onClick={handleSortyBy}>Sort By newest</button>
      <ul>
        {filteredArticles.map((article) => (
          <li key={article.id}>
            {article.title} - {article.category} - {article.date}
          </li>
        ))}
      </ul>
    </div>
  )
}

export default Articles
