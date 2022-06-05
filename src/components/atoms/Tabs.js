import { Link, useLocation } from 'react-router-dom';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Tabs({ tabs }) {
  const location = useLocation();

  return (
    <div className="hidden sm:block">
      <div className=" border-gray-200 dark:border-zinc-700 border-b">
        <nav className="-mb-px flex space-x-8" aria-label="Tabs">
          {tabs.map((tab) => (
            <Link
              key={tab.name}
              to={tab.href}
              className={classNames(
                location.pathname === tab.href
                  ? 'border-blue-500 text-blue-600 dark:text-blue-200 dark:font-medium dark:leading-relaxed'
                  : 'border-transparent text-gray-400 hover:text-gray-700 dark:hover:text-gray-300 hover:border-gray-200',
                'whitespace-nowrap flex py-4 px-1 border-b-2 font-medium text-base leading-relaxed transition-all duration-300 ease-in-out',
              )}
              aria-current={
                location.pathname === tab.href ? 'page' : undefined
              }>
              {tab.name}
              {tab.count ? (
                <span
                  className={classNames(
                    tab.current
                      ? 'bg-blue-100 text-blue-600'
                      : 'bg-gray-100 text-gray-900',
                    'hidden ml-3 py-0.5 px-2.5 rounded-full text-xs font-medium md:flex  justify-center items-center',
                  )}>
                  {tab.count}
                </span>
              ) : null}
            </Link>
          ))}
        </nav>
      </div>
    </div>
  );
}
