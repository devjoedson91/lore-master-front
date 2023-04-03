import { useEffect, useState } from 'react';
import { Pencil, Trash, X, WarningCircle } from 'phosphor-react';
import { api } from '../../../services/apiClient';
import { toast } from 'react-toastify';
import * as Dialog from '@radix-ui/react-dialog';
import { FormUsers } from './FormUsers';

interface UsersProps {
   id: string;
   name: string;
   email: string;
   admin: boolean;
}

export function UserAdmin() {
   const [users, setUsers] = useState<UsersProps[]>([]);

   useEffect(() => {
      listUsers();
   }, []);

   async function listUsers() {
      try {
         const response = await api.get('/users');

         setUsers(response.data);
      } catch (err) {
         toast.error('Erro ao carregar usuários');
         console.log('Erro ao carregar usuários: ', err);
      }
   }

   async function handleUserDelete(user_id: string) {
      try {
         await api.delete(`/user/${user_id}`);

         listUsers();

         toast.success('Usuário excluído com sucesso!');
      } catch (err) {
         toast.error(`Erro ao excluir usuário: ${err}`);
         console.log(`Erro ao excluir usuário: ${err}`);
      }
   }

   return (
      <div className="h-full">
         <FormUsers listUsers={listUsers} />

         <div className="flex flex-col w-full h-40 relative overflow-y-scroll">
            <div className="sm:mx-0.5 lg:mx-0.5">
               <div className="py-2 inline-block min-w-full">
                  <table className="min-w-full">
                     <thead className="bg-white border-b">
                        <tr>
                           <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                           >
                              Nome
                           </th>
                           <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                           >
                              Email
                           </th>
                           <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                           >
                              Administrador
                           </th>
                           <th
                              scope="col"
                              className="text-sm font-medium text-gray-900 px-6 py-4 text-left"
                           >
                              Ações
                           </th>
                        </tr>
                     </thead>
                     <tbody className="[&>*:nth-child(odd)]:bg-white [&>*:nth-child(even)]:bg-gray-200">
                        {users.map((user, idx) => {
                           return (
                              <tr className="border-b" key={user.id}>
                                 <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                    {user.name}
                                 </td>
                                 <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                    {user.email}
                                 </td>
                                 <td className="text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                    {user.admin ? 'Sim' : 'Não'}
                                 </td>
                                 <td className="flex gap-2 text-sm text-gray-900 font-normal px-6 py-4 whitespace-nowrap">
                                    <button className="p-1 rounded bg-amber-400">
                                       <Pencil size={20} />
                                    </button>
                                    <Dialog.Root>
                                       <Dialog.Trigger
                                          type="button"
                                          className="p-1 rounded bg-red-500 border-0"
                                       >
                                          <Trash size={20} color="#fff" />
                                       </Dialog.Trigger>
                                       <Dialog.Portal>
                                          <Dialog.Overlay className="w-screen h-screen bg-black/50 fixed inset-0" />
                                          <Dialog.Content className="absolute py-5 px-14 bg-white rounded-2xl shadow-md max-x-md top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
                                             <Dialog.Close className="absolute right-3 top-2 text-zinc-700 hover:text-zinc-500">
                                                <X size={20} aria-label="Fechar" />
                                             </Dialog.Close>
                                             <div className="flex items-center justify-center flex-col gap-5">
                                                <WarningCircle
                                                   size={70}
                                                   color="rgb(252, 165, 165)"
                                                />
                                                <h1 className="font-medium text-3xl text-zinc-700">
                                                   Exclusão
                                                </h1>
                                                <h1 className="font-medium text-lg text-zinc-700">
                                                   Deseja excluir este usuário?
                                                </h1>
                                                <div className="flex gap-5">
                                                   <Dialog.Close asChild>
                                                      <button
                                                         className="bg-blue-600 py-2 px-6 rounded-md text-white font-medium hover:bg-blue-500"
                                                         onClick={() => handleUserDelete(user.id)}
                                                      >
                                                         Sim
                                                      </button>
                                                   </Dialog.Close>
                                                   <Dialog.Close asChild>
                                                      <button className="bg-red-600 py-2 px-6 rounded-md text-white font-medium hover:bg-red-500">
                                                         Não
                                                      </button>
                                                   </Dialog.Close>
                                                </div>
                                             </div>
                                          </Dialog.Content>
                                       </Dialog.Portal>
                                    </Dialog.Root>
                                 </td>
                              </tr>
                           );
                        })}
                     </tbody>
                  </table>
               </div>
            </div>
         </div>
      </div>
   );
}
