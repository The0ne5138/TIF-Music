import React from 'react';
import NewsList from '../components/News/NewsList';
import NewsForm from '../components/News/NewsForm';

const NewsPage = () => {
  const [isCreating, setIsCreating] = useState(false);

  const handleCreate = () => {
    setIsCreating(true);
  };

  const handleSave = () => {
    setIsCreating(false);
  };

  return (
    <div>
      <h1>News</h1>
      <button onClick={handleCreate}>Create News</button>
      {isCreating ? (
        <NewsForm onSave={handleSave} />
      ) : (
        <NewsList />
      )}
    </div>
  );
};

export default NewsPage;
