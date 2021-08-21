/* eslint-disable @next/next/no-img-element */
import {
  DesktopComputerIcon,
  DeviceMobileIcon,
  CloudIcon,
} from '@heroicons/react/outline';

const supportLinks = [
  {
    name: 'Web',
    href: '#contact',
    description:
      "I've been building websites for over a decade. My tech stack is always evolving. I love React and Next.js these days.",
    icon: DesktopComputerIcon,
  },
  {
    name: 'Mobile',
    href: '#contact',
    description:
      "Let's make an app! I'm experienced with react-native and flutter.",
    icon: DeviceMobileIcon,
  },
  {
    name: 'Cloud',
    href: '#contact',
    description:
      "Let's geek out with serverless functions and microservices. I can also build and maintain CI/CD and DevOps pipelines.",
    icon: CloudIcon,
  },
];
export default function Hero() {
  return (
    <div className="bg-white mt-10">
      {/* Header */}
      <div className="relative pb-32 bg-gray-800">
        <div className="absolute inset-0 ">
          <img
            className="w-full h-full object-cover"
            src="https://images.unsplash.com/photo-1484807352052-23338990c6c6?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1950&q=80"
            alt=""
          />
          <div
            className="absolute inset-0 bg-gray-800 mix-blend-multiply"
            aria-hidden="true"
          />
        </div>
        <div className="relative max-w-7xl mx-auto py-24 px-4 sm:py-32 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold tracking-tight text-white md:text-5xl lg:text-6xl">
            Get in touch
          </h1>
          <p className="mt-6 max-w-3xl text-xl text-gray-300">
            I build modern and scalable web and mobile experiences.
          </p>
        </div>
      </div>

      {/* Overlapping cards */}
      <section
        className="-mt-32 max-w-7xl mx-auto relative z-10 pb-32 px-4 sm:px-6 lg:px-8"
        aria-labelledby="contact-heading"
      >
        <h2 className="sr-only" id="contact-heading">
          Contact us
        </h2>
        <div className="grid grid-cols-1 gap-y-20 lg:grid-cols-3 lg:gap-y-0 lg:gap-x-8">
          {supportLinks.map((link) => (
            <div
              key={link.name}
              className="flex flex-col bg-white rounded-2xl shadow-xl"
            >
              <div className="flex-1 relative pt-16 px-6 pb-8 md:px-8">
                <div className="absolute top-0 p-5 inline-block bg-indigo-600 rounded-xl shadow-lg transform -translate-y-1/2">
                  <link.icon
                    className="h-6 w-6 text-white"
                    aria-hidden="true"
                  />
                </div>
                <h3 className="text-xl font-medium text-gray-900">
                  {link.name}
                </h3>
                <p className="mt-4 text-base text-gray-500">
                  {link.description}
                </p>
              </div>
              <div className="p-6 bg-gray-50 rounded-bl-2xl rounded-br-2xl md:px-8">
                <a
                  href={link.href}
                  className="text-base font-medium text-indigo-700 hover:text-indigo-600"
                >
                  Contact<span aria-hidden="true"> &rarr;</span>
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
