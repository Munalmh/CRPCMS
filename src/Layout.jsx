import { NavLink, Outlet, useLocation } from 'react-router-dom';
import { useState, useEffect, useRef } from 'react';

export default function Layout() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isNotifOpen, setIsNotifOpen] = useState(false);
  const notifRef = useRef(null);
  const location = useLocation();

  const notifications = [
    { id: 1, title: 'New case assigned', body: 'Case CMS-4931 has been assigned to you.', time: '10m ago', unread: true },
    { id: 2, title: 'Follow-up due', body: 'Reintegration follow-up visit due tomorrow.', time: '1h ago', unread: true },
    { id: 3, title: 'Document approved', body: 'Consent form for CMS-4820 was approved.', time: 'Yesterday', unread: false },
  ];
  const unreadCount = notifications.filter((n) => n.unread).length;

  // Close sidebar on mobile when navigating
  useEffect(() => {
    setIsSidebarOpen(false);
  }, [location.pathname]);

  // Close notification dropdown on outside click
  useEffect(() => {
    function handleClickOutside(e) {
      if (notifRef.current && !notifRef.current.contains(e.target)) {
        setIsNotifOpen(false);
      }
    }
    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const navItems = [
    { name: 'Dashboard', path: '/', icon: 'dashboard' },
    { name: 'Organization Management', path: '/organization-management', icon: 'corporate_fare' },
    { name: 'User & Roles', path: '/users-roles', icon: 'group_add' },
    { type: 'divider' },
    { name: 'Case Intake', path: '/case-intake', icon: 'assignment_ind' },
    { name: 'Beneficiary Profile', path: '/beneficiary-profile', icon: 'badge' },
    { name: 'Rescue / Handover', path: '/rescue-handover', icon: 'emergency' },
    { name: 'Assessment', path: '/assessment', icon: 'fact_check' },
    { name: 'Case Planning', path: '/case-planning', icon: 'event_note' },
    { name: 'Support Management', path: '/support-management', icon: 'volunteer_activism' },
    { name: 'Referral & Transfer', path: '/referral-transfer', icon: 'swap_horiz' },
    { name: 'Reintegration', path: '/reintegration', icon: 'u_turn_right' },
    { name: 'Follow-up', path: '/follow-up', icon: 'history_edu' },
    { name: 'Case Closure', path: '/case-closure', icon: 'lock' },
    { type: 'divider' },
    { name: 'Reporting & M&E', path: '/reporting-me', icon: 'analytics' },
    { name: 'Privacy & Audit', path: '/privacy-audit', icon: 'policy' }
  ];

  return (
    <div className="bg-background font-body-md text-on-surface">
      {/* Mobile Sidebar Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-black/50 z-40 md:hidden transition-opacity"
          onClick={() => setIsSidebarOpen(false)}
        ></div>
      )}

      <aside className={`fixed left-0 top-0 h-full w-72 bg-primary z-50 flex flex-col text-on-primary shadow-xl transition-transform duration-300 ease-in-out ${isSidebarOpen ? 'translate-x-0' : '-translate-x-full'} md:translate-x-0`}>
        <div className="p-6 flex items-center justify-between border-b border-primary-container/20">
          <div className="flex items-center gap-3">
            <span className="material-symbols-outlined text-primary-fixed">security</span>
            <div>
              <h1 className="font-headline-sm text-headline-sm leading-tight text-primary-fixed">CRPCMS</h1>
              <p className="font-label-caps text-label-caps opacity-70">PROTECTION SYSTEM</p>
            </div>
          </div>
          <button
            className="md:hidden text-primary-fixed hover:bg-primary-container p-2 rounded-lg transition-colors"
            onClick={() => setIsSidebarOpen(false)}
          >
            <span className="material-symbols-outlined">close</span>
          </button>
        </div>

        <nav className="flex-1 overflow-y-auto px-3 py-4 space-y-1">
          {navItems.map((item, index) => {
            if (item.type === 'divider') {
              return <div key={index} className="h-px bg-primary-container/20 my-4 mx-4"></div>;
            }
            return (
              <NavLink
                key={item.path}
                to={item.path}
                className={({ isActive }) =>
                  `flex items-center px-4 py-2.5 rounded-lg transition-all gap-3 ${isActive
                    ? 'bg-primary-container text-white font-semibold'
                    : 'text-on-primary/70 hover:bg-primary-container/50 hover:text-white'
                  }`
                }
              >
                <span className="material-symbols-outlined text-xl">{item.icon}</span>
                <span className="text-sm">{item.name}</span>
              </NavLink>
            );
          })}
        </nav>
      </aside>

      <div className="md:pl-72 flex flex-col min-h-screen">
        <header className="fixed top-0 left-0 md:left-72 right-0 h-16 bg-surface/80 backdrop-blur-md shadow-[0_1px_8px_rgba(0,0,0,0.04)] z-40 flex items-center justify-between px-4 md:px-8">
          <div className="flex-1 max-w-md flex items-center gap-3">
            <button
              className="md:hidden p-2 text-on-surface-variant hover:bg-surface-container-high rounded-lg transition-colors flex items-center justify-center shrink-0"
              onClick={() => setIsSidebarOpen(true)}
            >
              <span className="material-symbols-outlined">menu</span>
            </button>
            <div className="relative flex-1 flex items-center">
              <span className="material-symbols-outlined absolute left-3 text-outline hidden sm:block">search</span>
              <input
                className="w-full h-9 pl-4 sm:pl-10 pr-4 bg-surface-container-low border border-outline-variant rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="Quick case lookup..."
                type="text"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-6 ml-2 shrink-0">
            <div className="flex items-center gap-1 sm:gap-3">
              <div className="relative" ref={notifRef}>
                <button
                  onClick={() => setIsNotifOpen((v) => !v)}
                  className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors relative hidden sm:block"
                >
                  <span className="material-symbols-outlined">notifications</span>
                  {unreadCount > 0 && (
                    <span className="absolute top-2 right-2 w-2 h-2 bg-error rounded-full"></span>
                  )}
                </button>

                {isNotifOpen && (
                  <div className="absolute right-0 mt-2 w-80 bg-surface rounded-xl shadow-2xl border border-outline-variant/40 overflow-hidden z-50">
                    <div className="flex items-center justify-between px-4 py-3 border-b border-outline-variant/30">
                      <h3 className="text-sm font-semibold text-on-surface">Notifications</h3>
                      {unreadCount > 0 && (
                        <span className="text-[11px] font-medium text-primary">{unreadCount} new</span>
                      )}
                    </div>

                    <div className="max-h-80 overflow-y-auto divide-y divide-outline-variant/20">
                      {notifications.length === 0 ? (
                        <div className="px-4 py-6 text-center text-sm text-on-surface-variant">
                          No notifications
                        </div>
                      ) : (
                        notifications.map((n) => (
                          <div
                            key={n.id}
                            className={`px-4 py-3 flex gap-3 hover:bg-surface-container-low transition-colors cursor-pointer ${n.unread ? 'bg-primary/5' : ''
                              }`}
                          >
                            <span
                              className={`mt-1.5 w-2 h-2 rounded-full shrink-0 ${n.unread ? 'bg-primary' : 'bg-transparent'
                                }`}
                            ></span>
                            <div className="min-w-0">
                              <p className="text-sm font-medium text-on-surface truncate">{n.title}</p>
                              <p className="text-xs text-on-surface-variant mt-0.5">{n.body}</p>
                              <p className="text-[11px] text-outline mt-1">{n.time}</p>
                            </div>
                          </div>
                        ))
                      )}
                    </div>

                    <div className="px-4 py-2.5 border-t border-outline-variant/30 text-center">
                      <button className="text-xs font-medium text-primary hover:underline">
                        View all notifications
                      </button>
                    </div>
                  </div>
                )}
              </div>

              <button className="p-2 text-on-surface-variant hover:bg-surface-container-high rounded-full transition-colors hidden sm:block">
                <span className="material-symbols-outlined">help</span>
              </button>
            </div>
            <div className="h-8 w-px bg-outline-variant hidden sm:block"></div>
            <div className="flex items-center gap-3 sm:pl-2">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-semibold text-on-surface leading-none">John Doe</p>
                <p className="font-label-caps text-[10px] text-primary mt-1">CMS-4920</p>
              </div>
              <img
                alt="Profile"
                className="w-9 h-9 rounded-full object-cover ring-2 ring-surface-container-highest"
                src="https://lh3.googleusercontent.com/aida/AEtjO1W2E9VNXASqqvqflvUSbYcjzDsvJDlBO2SKYrpZ4MZBWWElpw96KwkWgCrdEnEIYhBhK58yT6oH1Q6WtmRt7DuPFtmfJ4lp-OgWTcLRU9QqM0vocOznIb-0o6pND-e8nMh6CeZoMBbkVItyBvHBnsZuK71Toq32KZBLu31JwfPa0brHugHC43iYoIwc58rhQyYDo3h4HMs3OcqUlq8o2CcQVBLFzbHc3w-UyjtBNdsP4AM2y9HV557qlc4"
              />
            </div>
          </div>
        </header>

        <main className="relative pt-16 flex-1 flex flex-col bg-background overflow-x-hidden">
          <Outlet />
        </main>
      </div>
    </div>
  );
}