import { Lock, Globe2 } from 'lucide-react';
import { Repository } from '../types';

interface RepositoryCardProps {
  repo: Repository;
}

const RepositoryCard = ({ repo }: RepositoryCardProps) => {
  return (
    <div className="p-4 bg-white rounded-lg border border-gray-200 hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <div className="flex-1">
          <div className="flex items-center space-x-3">
            <h3 className="text-xl font-semibold text-blue-600">{repo.name}</h3>
            <span className="px-2 py-1 text-sm rounded-full bg-sky-100 text-sky-800 flex items-center space-x-1">
              {repo.visibility === 'private' ? (
                <><Lock size={14} /> <span>Private</span></>
              ) : (
                <><Globe2 size={14} /> <span>Public</span></>
              )}
            </span>
          </div>
          <p className="text-gray-600 mt-2">{repo.description}</p>
        </div>
      </div>
      <div className="mt-4 flex items-center space-x-4 text-sm text-gray-600">
        <div className="flex items-center space-x-2">
          <span className={`w-3 h-3 rounded-full ${repo.languageColor}`}></span>
          <span>{repo.language}</span>
        </div>
        <span>{repo.size}</span>
        <span>Updated {repo.updatedAt}</span>
      </div>
    </div>
  );
};

export default RepositoryCard;