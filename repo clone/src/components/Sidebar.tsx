import { BookOpen, Bot, Shield, HelpCircle, Settings, HeadphonesIcon, LogOut,User} from 'lucide-react';

const Sidebar = () => {
  const topMenuItems = [
    { icon: <BookOpen size={20} />, label: 'Repositories' },
    { icon: <Bot size={20} />, label: 'AI Code Review' },
    { icon: <Shield size={20} />, label: 'Cloud Security' },
    { icon: <HelpCircle size={20} />, label: 'How to Use' },
    { icon: <Settings size={20} />, label: 'Settings' },
  ];

  const bottomMenuItems = [
    { icon: <HeadphonesIcon size={20} />, label: 'Support' },
    { icon: <LogOut size={20} />, label: 'Logout' },
  ];

  return (
    <div className="h-screen bg-white text-gray-800 w-64 fixed left-0 flex flex-col border-r border-gray-200">
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4 text-gray-900">GitHub Clone</h1>
        
        <div className="flex items-center space-x-3 mb-6 p-3 bg-gray-50 rounded-lg">
          <User size={32} className="text-gray-700" />
          <div>
            <h2 className="font-semibold text-gray-900">Harshit</h2>
            <p className="text-sm text-gray-500">harshit-Repo..</p>
          </div>
        </div>

        <nav className="space-y-2">
          {topMenuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
      <div className="mt-auto p-4 border-t border-gray-200">
        <nav className="space-y-2">
          {bottomMenuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-100 transition-colors"
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
        </nav>
      </div>
    </div>
  );
};

export default Sidebar;