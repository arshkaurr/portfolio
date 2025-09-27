import { Button } from "./ui/button";

export function Navigation() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({behavior: 'smooth'});
  };

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-background border-b-4 border-black">
      <div className="max-w-6xl mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          <div 
            className="text-2xl font-black cursor-pointer hover:text-pink-500 transition-colors"
            onClick={() => scrollToSection('hero')}
          >
            AK
          </div>
          
          <div className="hidden md:flex space-x-2">
            {[
              { label: 'ABOUT', id: 'about' },
              { label: 'WORK', id: 'experience' },
              { label: 'PROJECTS', id: 'projects' },
              { label: 'NAIL ART', id: 'nailart' },
              { label: 'CONTACT', id: 'contact' }
            ].map((item, index) => (
              <Button
                key={item.id}
                variant="ghost"
                className="font-black text-sm hover:bg-pink-100 hover:text-pink-600 border-2 border-transparent hover:border-black"
                onClick={() => scrollToSection(item.id)}
              >
                {item.label}
              </Button>
            ))}
          </div>
          
          <div className="md:hidden">
            <Button
              variant="ghost"
              className="font-black text-lg"
              onClick={() => {
                const menu = document.getElementById('mobile-menu');
                menu?.classList.toggle('hidden');
              }}
            >
              ☰
            </Button>
          </div>
        </div>
        
        {/* Mobile menu */}
        <div id="mobile-menu" className="hidden md:hidden mt-4 space-y-2">
          {[
            { label: 'ABOUT', id: 'about' },
            { label: 'WORK', id: 'experience' },
            { label: 'PROJECTS', id: 'projects' },
            { label: 'NAIL ART', id: 'nailart' },
            { label: 'CONTACT', id: 'contact' }
          ].map((item) => (
            <Button
              key={item.id}
              variant="ghost"
              className="w-full font-black text-left justify-start hover:bg-pink-100 hover:text-pink-600"
              onClick={() => {
                scrollToSection(item.id);
                document.getElementById('mobile-menu')?.classList.add('hidden');
              }}
            >
              {item.label}
            </Button>
          ))}
        </div>
      </div>
    </nav>
  );
}
