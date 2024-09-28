const links = [
  { href: '#', title: 'Home' },
  { href: '#', title: 'About' },
  { href: '#', title: 'Services' },
  { href: '#', title: 'Contact' },
];

export default function Layout({
  children,
}) {
  return (
    <div>

      <main className="container mx-auto mt-20 flex max-w-7xl justify-center">
        {children}
      </main>
    </div>
  );
}
