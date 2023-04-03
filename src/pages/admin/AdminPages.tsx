import { ReactNode, useState } from 'react';
import { BaseLayout } from '../BaseLayout';
import { PageTitle } from '../../components/Pagetitle';
import { Gear } from 'phosphor-react';

import { UserAdmin } from './users/UserAdmin';
import { ArticleAdmin } from './ArticleAdmin';
import { CategoryAdmin } from './CategoryAdmin';

export function AdminPages() {
   const [activeTabIndex, setActiveTabIndex] = useState(0);

   const [tabsData, setTabsData] = useState([
      {
         label: 'Artigos',
         content: <ArticleAdmin />,
         isActive: true,
      },
      {
         label: 'Categorias',
         content: <CategoryAdmin />,
         isActive: false,
      },
      {
         label: 'Usuários',
         content: <UserAdmin />,
         isActive: false,
      },
   ]);

   function MainAdmin() {
      function toggleActiveTabs(target: any, idx: number) {
         setActiveTabIndex(idx);

         const tabs = tabsData;

         const tabSelected = target.innerHTML.toLowerCase();

         setTabsData(
            tabs.map((tab) =>
               tab.label.toLocaleLowerCase() === tabSelected
                  ? { ...tab, isActive: true }
                  : { ...tab, isActive: false }
            )
         );
      }

      return (
         <main className="grid-in-main p-4 h-[calc(100vh-80px)] overflow-hidden">
            <PageTitle
               main="Administração do Sistema"
               sub="Cadastros & Cia"
               icon={<Gear size={40} />}
            />

            <div className="mt-4 bg-white p-3 rounded-t-lg h-full">
               <div className="flex space-x-2 border-b border-gray-200">
                  {/* Loop through tab data and render button for each. */}
                  {tabsData.map((tab, idx) => {
                     return (
                        <button
                           key={idx}
                           className={`px-4 py-2 font-medium text-sm text-blue-600 rounded-t-lg  ${
                              tab.isActive ? 'bg-gray-200' : 'bg-white'
                           }`}
                           // Change the active tab on click.
                           onClick={({ target }) => toggleActiveTabs(target, idx)}
                        >
                           {tab.label}
                        </button>
                     );
                  })}
               </div>
               {/* Show active tab content. */}
               <div className="py-4">{tabsData[activeTabIndex].content}</div>
            </div>

            {/* <ul className="flex flex-wrap text-sm font-medium text-center text-gray-500 border-b border-gray-200 dark:border-gray-700 dark:text-gray-400">
                    <li className="mr-2">
                        <a
                            href="#"
                            aria-current="page"
                            className="inline-block p-4 text-blue-600 bg-gray-100 rounded-t-lg active dark:bg-gray-800 dark:text-blue-500"
                        >
                            Artigos
                        </a>
                    </li>
                    <li className="mr-2">
                        <a
                            href="#"
                            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                        >
                            Categorias
                        </a>
                    </li>
                    <li className="mr-2">
                        <a
                            href="#"
                            className="inline-block p-4 rounded-t-lg hover:text-gray-600 hover:bg-gray-50 dark:hover:bg-gray-800 dark:hover:text-gray-300"
                        >
                            Usuários
                        </a>
                    </li>
                </ul> */}
         </main>
      );
   }

   return <BaseLayout content={<MainAdmin />} />;
}
