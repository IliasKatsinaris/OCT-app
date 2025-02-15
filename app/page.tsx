import { buttonVariants } from '@/components/ui/button';
import { page_routes } from '@/lib/routes-config';
import Link from 'next/link';

export default function Home() {
  return (
    <div className='flex sm:min-h-[85.5vh] min-h-[85vh] flex-col items-center justify-center text-center px-2 sm:py-8 py-12'>
      <h1 className='text-3xl font-bold mb-4 sm:text-6xl'>
        Dive Into the World of Optical Coherence Tomography
      </h1>
      <p className='mb-8 sm:text-lg max-w-[800px] text-muted-foreground'>
        A Digital Educational Platform to Understand OCT and Self-Evaluate
        Through Interactive Quizzes
      </p>
      <div className='flex flex-row items-center gap-5'>
        <Link
          href={`/docs${page_routes[0].href}`}
          className={buttonVariants({ className: 'px-6', size: 'lg' })}
        >
          Learn About OCT
        </Link>
        <Link
          href='/quiz'
          className={buttonVariants({
            variant: 'secondary',
            className: 'px-6',
            size: 'lg',
          })}
        >
          Start quiz
        </Link>
      </div>
    </div>
  );
}
