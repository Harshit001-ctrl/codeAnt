import {X} from 'lucide-react';
import { SidebarItem } from '../types';

interface MobileMenuProps {
  isOpen: boolean;
  onClose: () => void;
  menuItems: SidebarItem[];
  bottomItems: SidebarItem[];
}

const MobileMenu = ({ isOpen, onClose, menuItems, bottomItems }: MobileMenuProps) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-gray-800 bg-opacity-75 z-50">
      <div className="fixed inset-y-0 right-0 max-w-xs w-full bg-white shadow-xl">
        <div className="flex justify-between items-center p-4 border-b">
          <h2 className="text-xl font-semibold">Menu</h2>
          <button onClick={onClose} className="p-2">
            <X size={24} />
          </button>
        </div>
        <nav className="px-4 py-2">
          {menuItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg"
              onClick={onClose}
            >
              {item.icon}
              <span>{item.label}</span>
            </a>
          ))}
          <div className="border-t my-2" />
          {bottomItems.map((item, index) => (
            <a
              key={index}
              href="#"
              className="flex items-center space-x-3 p-3 hover:bg-gray-100 rounded-lg"
              onClick={onClose}
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

export default MobileMenu;