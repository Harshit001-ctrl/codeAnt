import  { useState } from 'react';
import { RefreshCw, Plus, Menu } from 'lucide-react';
import RepositoryCard from './RepositoryCard';
import MobileMenu from './MobileMenu';
import { Repository } from '../types';
import { initialRepositories } from '../data/initialRepositories';
import { topMenuItems, bottomMenuItems } from '../data/menuItems';

const RepositoryList = () => {
  const [repositories, setRepositories] = useState(initialRepositories);
  const [searchQuery, setSearchQuery] = useState('');
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const handleRefreshAll = () => {
    setIsRefreshing(true);
    setTimeout(() => {
      const updatedRepos = repositories.map(repo => ({
        ...repo,
        updatedAt: '2 weeks ago'
      }));
      setRepositories(updatedRepos);
      setIsRefreshing(false);
    }, 1000);
  };

  const handleAddRepository = () => {
    const newRepo: Repository = {
      name: 'new-project',
      description: 'A new repository',
      language: 'JavaScript',
      visibility: 'private',
      updatedAt: 'just now',
      languageColor: 'bg-yellow-400',
      size: '0 KB'
    };
    setRepositories([newRepo, ...repositories]);
  };

  const filteredRepositories = repositories.filter(repo =>
    repo.name.toLowerCase().includes(searchQuery.toLowerCase())
  );

  return (
    <div className="p-4 md:p-6">
      {/* Mobile Menu Button */}
      <div className="md:hidden flex justify-end mb-4">
        <button
          onClick={() => setIsMobileMenuOpen(true)}
          className="p-2 hover:bg-gray-100 rounded-lg"
        >
          <Menu size={24} />
        </button>
      </div>

      <MobileMenu
        isOpen={isMobileMenuOpen}
        onClose={() => setIsMobileMenuOpen(false)}
        menuItems={topMenuItems}
        bottomItems={bottomMenuItems}
      />

      {/* Repository Count */}
      <div className="mb-4">
        <h2 className="text-xl font-semibold">Repositories ({filteredRepositories.length})</h2>
      </div>

      {/* Action Buttons */}
      <div className="flex flex-col sm:flex-row gap-3 mb-4">
        <button 
          className={`flex items-center justify-center space-x-2 px-4 py-2 bg-gray-800 text-white rounded-lg hover:bg-gray-700 ${isRefreshing ? 'opacity-75 cursor-not-allowed' : ''}`}
          onClick={handleRefreshAll}
          disabled={isRefreshing}
        >
          <RefreshCw size={16} className={isRefreshing ? 'animate-spin' : ''} />
          <span>{isRefreshing ? 'Refreshing...' : 'Refresh All'}</span>
        </button>
        <button 
          className="flex items-center justify-center space-x-2 px-4 py-2 bg-green-600 text-white rounded-lg hover:bg-green-700"
          onClick={handleAddRepository}
        >
          <Plus size={16} />
          <span>Add Repository</span>
        </button>
      </div>

      {/* SearchBar */}
      <div className="mb-6">
        <input
          type="text"
          placeholder="Find a repository..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="w-full px-4 py-2 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent"
        />
      </div>

      {/* Repository List */}
      <div className="space-y-4">
        {filteredRepositories.map((repo, index) => (
          <RepositoryCard key={index} repo={repo} />
        ))}
      </div>
    </div>
  );
};

export default RepositoryList;