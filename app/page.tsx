import Image from 'next/image';
import Icon from '../components/Icon';

const FEATURES = [
  {
    icon: 'filter_alt',
    title: 'Catálogo con filtros',
    body: 'Buscá por género, cantidad de páginas y disponibilidad; ordená por título, autor o popularidad.',
  },
  {
    icon: 'swap_horiz',
    title: 'Reservas y préstamos',
    body: 'Pedí prestado lo que quieras leer y llevá el registro de a quién le prestaste tus propios libros.',
  },
  {
    icon: 'hub',
    title: 'Persistencia políglota',
    body: 'PostgreSQL para usuarios y préstamos, MongoDB para el catálogo, Redis cacheando el top de libros más populares.',
  },
  {
    icon: 'reviews',
    title: 'Reseñas de la comunidad',
    body: 'Cada libro suma calificaciones y comentarios de otros lectores.',
  },
  {
    icon: 'lock',
    title: 'Auth con JWT',
    body: 'Spring Security protege el perfil y las operaciones de préstamo.',
  },
  {
    icon: 'api',
    title: 'API documentada',
    body: 'REST con Swagger UI y un endpoint GraphQL (Netflix DGS) en paralelo.',
  },
];

const STACK = [
  'Kotlin',
  'Spring Boot 3.3',
  'Spring Security (JWT)',
  'Spring Data JPA / MongoDB / Redis',
  'GraphQL DGS',
  'PostgreSQL',
  'MongoDB',
  'Redis',
  'React 19',
  'TypeScript',
  'Vite',
  'Tailwind CSS v4',
];

export default function Home() {
  return (
    <main>
      {/* Hero */}
      <section className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6 pb-16 pt-20 text-center md:pt-28">
        <div className="flex items-center gap-2 rounded-full border border-outline-variant bg-surface px-4 py-1.5">
          <Icon name="auto_stories" filled className="text-primary" />
          <span className="text-sm font-bold text-primary">BookLibre</span>
        </div>
        <h1 className="max-w-3xl font-display text-4xl font-extrabold leading-tight text-on-surface md:text-6xl">
          Una comunidad para prestar, reservar y descubrir tu próxima lectura
        </h1>
        <p className="max-w-2xl text-lg text-on-surface-variant">
          Explorá el catálogo con filtros por género, páginas y disponibilidad, reservá el libro
          que quieras leer y gestioná lo que vos mismo prestás a la comunidad — con persistencia
          políglota (PostgreSQL + MongoDB + Redis) detrás. Proyecto académico grupal (UNSAM).
        </p>
        <div className="flex flex-wrap items-center justify-center gap-3">
          <a
            href="https://lorengrz.github.io/BookLibre/"
            className="flex items-center gap-2 rounded-xl bg-primary px-6 py-3 font-bold text-on-primary shadow-md transition-transform hover:scale-[1.02]"
          >
            <Icon name="open_in_new" />
            Probar la app
          </a>
          <a
            href="https://github.com/LorenGrz/BookLibre"
            className="flex items-center gap-2 rounded-xl border border-outline-variant px-6 py-3 font-bold text-primary transition-colors hover:bg-surface"
          >
            <Icon name="code" />
            Ver el código
          </a>
          <a
            href="#features"
            className="flex items-center gap-2 rounded-xl border border-outline-variant px-6 py-3 font-bold text-primary transition-colors hover:bg-surface"
          >
            Cómo funciona
          </a>
        </div>
        <p className="text-sm text-on-surface-variant">
          Explorá el catálogo sin crear cuenta — el login solo hace falta para reservar o prestar.
        </p>
      </section>

      {/* Screenshot gallery */}
      <section className="bg-surface py-16">
        <div className="mx-auto flex max-w-6xl flex-col items-center gap-8 px-6">
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-outline-variant shadow-lg">
            <Image
              src="/screenshot-catalogo.png"
              alt="Catálogo de BookLibre con filtros por género y disponibilidad"
              width={910}
              height={513}
              className="w-full"
            />
          </div>
          <div className="w-full max-w-4xl overflow-hidden rounded-2xl border border-outline-variant shadow-lg">
            <Image
              src="/screenshot-detalle.png"
              alt="Detalle de un libro con sinopsis, reseñas y reserva"
              width={910}
              height={513}
              className="w-full"
            />
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="mb-3 text-center font-display text-3xl font-bold text-primary">
          Cómo funciona
        </h2>
        <p className="mx-auto mb-12 max-w-xl text-center text-on-surface-variant">
          Del catálogo a la reserva, pensado para una comunidad que comparte lo que lee.
        </p>
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {FEATURES.map((f) => (
            <div
              key={f.title}
              className="rounded-2xl border border-outline-variant bg-surface p-6 shadow-sm"
            >
              <div className="mb-4 flex h-11 w-11 items-center justify-center rounded-xl bg-primary/15">
                <Icon name={f.icon} className="text-primary" />
              </div>
              <h3 className="mb-2 font-bold text-on-surface">{f.title}</h3>
              <p className="text-sm text-on-surface-variant">{f.body}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Stack */}
      <section className="bg-primary py-20 text-on-primary">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-3 font-display text-3xl font-bold">Stack full-stack dockerizado</h2>
          <p className="mx-auto mb-10 max-w-2xl text-on-primary/80">
            Backend en Kotlin + Spring Boot con tres motores de persistencia, frontend en React,
            todo levantado con Docker Compose.
          </p>
          <div className="flex flex-wrap justify-center gap-3">
            {STACK.map((item) => (
              <span
                key={item}
                className="rounded-full border border-on-primary/20 bg-on-primary/10 px-4 py-2 text-sm font-semibold"
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="mx-auto flex max-w-6xl flex-col items-center gap-4 px-6 py-12 text-center">
        <div className="flex items-center gap-1.5">
          <Icon name="auto_stories" filled className="text-primary" />
          <span className="font-display font-bold text-primary">BookLibre</span>
        </div>
        <p className="text-sm text-on-surface-variant">
          Proyecto de portfolio — Lorenzo Graizzaro. Proyecto académico grupal — UNSAM.
        </p>
        <a
          href="mailto:lorenzograizzaro55@gmail.com"
          className="text-sm font-semibold text-primary underline underline-offset-4"
        >
          lorenzograizzaro55@gmail.com
        </a>
      </footer>
    </main>
  );
}
