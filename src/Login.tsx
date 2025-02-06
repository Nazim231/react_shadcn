import { LoginForm } from './components/login-form';
import { GalleryVerticalEnd } from 'lucide-react';
export default function Login() {
  return (
    <div className="grid min-h-svh lg:grid-cols-2">
      <div className="relative hidden bg-zinc-900 lg:block p-10">
        <div className="flex text-white justify-center gap-2 md:justify-start">
          <a href="#" className="flex items-center gap-2 font-medium">
            <div className="flex h-6 w-6 items-center justify-center rounded-md bg-white text-primary-foreground">
              <GalleryVerticalEnd color="black" className="size-4" />
            </div>
            Sample Inc.
          </a>
        </div>
      </div>
      <div className="flex flex-col gap-4 p-6 md:p-10">
        <div className="flex flex-1 items-center justify-center">
          <div className="w-full max-w-xs">
            <LoginForm />
          </div>
        </div>
      </div>
    </div>
  );
}
