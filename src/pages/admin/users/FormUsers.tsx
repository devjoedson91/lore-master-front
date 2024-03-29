import { useForm } from 'react-hook-form';
import { Button } from '../../../components/ui/Button';
import { api } from '../../../services/apiClient';
import { toast } from 'react-toastify';

interface FormValues {
   name: string;
   email: string;
   password: string;
   confirmPass: string;
   admin: boolean;
}

interface FormUsersProps {
   listUsers: () => void;
}

export function FormUsers({ listUsers }: FormUsersProps) {
   const {
      register,
      handleSubmit,
      formState: { errors },
      reset,
      watch,
   } = useForm<FormValues>();

   const passwordWatch = watch('password');

   const handleSaveUser = handleSubmit(async (data) => {
      try {
         const response = await api.post('/user', {
            name: data.name,
            email: data.email,
            password: data.password,
            admin: data.admin,
         });

         reset();
         listUsers();

         toast.success('Usuário cadastrado com sucesso!');
      } catch (err) {
         toast.error('Erro ao cadastrar usuário');
         console.log('Erro ao cadastrar usuário: ', err);
      }
   });

   return (
      <form onSubmit={handleSaveUser} className="w-full mb-6">
         <div className="flex flex-wrap -mx-3 mb-6">
            <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
               <label htmlFor="name" className="block tracking-wide text-sm font-medium mb-1">
                  Nome
               </label>
               <input
                  type="text"
                  className={`text-sm appearance-none block w-full max-h-8 bg-gray-200 border rounded py-3 px-4 mb-2 leading-tight focus:outline-none focus:bg-white ${
                     errors.name && 'border-red-600'
                  }`}
                  id="name"
                  placeholder="Digite o nome do usuário"
                  autoFocus={true}
                  {...register('name', { required: true })}
               />
               {errors.name?.type === 'required' && (
                  <p className="text-red-600 text-xs">Campo obrigatório</p>
               )}
            </div>
            <div className="w-full md:w-1/2 px-3">
               <label htmlFor="email" className="block tracking-wide text-sm font-medium mb-1">
                  Email
               </label>
               <input
                  type="email"
                  className={`text-sm mb-2 appearance-none block w-full max-h-8 bg-gray-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${
                     errors.email && 'border-red-600'
                  }`}
                  id="email"
                  placeholder="Digite o email do usuário"
                  {...register('email', { required: true })}
               />
               {errors.email?.type === 'required' && (
                  <p className="text-red-600 mt-0 text-xs">Campo obrigatório</p>
               )}
            </div>
            <div className="w-full md:w-1/2 px-3">
               <label htmlFor="password" className="block tracking-wide text-sm font-medium mb-1">
                  Senha
               </label>
               <input
                  type="password"
                  className={`text-sm mb-2 appearance-none block w-full max-h-8 bg-gray-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${
                     errors.password && 'border-red-600'
                  }`}
                  id="password"
                  placeholder="*************"
                  {...register('password', { required: true, minLength: 4 })}
               />
               {errors.password?.type === 'required' && (
                  <p className="text-red-600 text-xs">Campo obrigatório</p>
               )}
               {errors.password?.type === 'minLength' && (
                  <p className="text-red-600 text-xs">Senha deve ter no mínimo 4 caracteres</p>
               )}
            </div>
            <div className="w-full md:w-1/2 px-3">
               <label htmlFor="password" className="block tracking-wide text-sm font-medium mb-1">
                  Confirmar senha
               </label>
               <input
                  type="password"
                  className={`text-sm mb-2 appearance-none block w-full max-h-8 bg-gray-200 border rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white ${
                     errors.password && 'border-red-600'
                  }`}
                  id="password"
                  placeholder="*************"
                  {...register('confirmPass', {
                     required: true,
                     validate: (value) => value === passwordWatch,
                  })}
               />
               {errors.confirmPass?.type === 'required' && (
                  <p className="text-red-600 mt-0 text-xs">Campo obrigatório</p>
               )}
               {errors.confirmPass?.type === 'validate' && (
                  <p className="text-red-600 mt-0 text-xs">Senha não confere</p>
               )}
            </div>
            <div className="w-full md:w-1/2 px-3 flex items-center mt-3">
               <input
                  type="checkbox"
                  id="admin"
                  value=""
                  className="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-blue-600 dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
                  {...register('admin')}
               />
               <label
                  htmlFor="admin"
                  className="ml-2 tracking-wide text-sm font-medium text-gray-900 dark:text-gray-300"
               >
                  Administrador
               </label>
            </div>
         </div>
         <div className="flex gap-2">
            <Button variant="bg-sky-800" variantHover="hover:bg-sky-600">
               Salvar
            </Button>
            <Button
               variant="bg-slate-600"
               variantHover="hover:bg-slate-400"
               onClick={() => reset()}
            >
               Cancelar
            </Button>
         </div>
      </form>
   );
}
