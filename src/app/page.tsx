import Image from "next/image";
import Navbar from "./Navbar";
import Carousel from "./Carousel";

export default function Page() {
  return (
    <main className="flex flex-col min-h-screen bg-[#f3f3f3] relative">
      {/* Navbar */}
      <Navbar />

      {/* Hero Background Carousel */}
      <Carousel />

      {/* Hero Section */}
      <section className="relative flex items-center justify-between h-[600px] w-full px-13">
        {/* Large Image - Left */}
        <div className="w-[730px] h-[530px] mr-1 bg-white border border-gray-200 rounded-lg shadow-lg dark:bg-gray-800">
          <a href="#">
            <Image
              className="rounded-lg"
              src="/main.png"
              alt="FUO Chair"
              width={730}
              height={530}
            />
          </a>
        </div>

        {/* Right Side - Stacked Images + Text */}
        <div className="flex flex-col items-end space-y-8">
          {/* Smaller Image 1 */}
          <div className="w-[400px] h-[300px] p-10 mb-[-2px] bg-[white] border border-gray-200 rounded-2xl shadow-lg dark:bg-gray-800">
            <a href="#">
              <Image
                className="rounded-lg mt-[-160px]"
                src="/side.png"
                alt="FUO Chair"
                width={350}
                height={700}
              />
            </a>
          </div>

          {/* Text Below Images */}
          <div className="p-6  mt-2 rounded-2xl text-center bg-white shadow-md dark:bg-gray-800 w-[400px]">
            <h1 className="text-3xl font-serif  text-black">Aesthetic.</h1>
            <p className="text-lg text-gray-500 mt-2">
              Aesthetic furniture where every piece tells a story of style.
            </p>
            <button className="mt-6 px-6 py-3 bg-black text-white text-lg rounded-lg shadow-lg hover:bg-gray-800 transition">
              Explore Collection ↓
            </button>
          </div>
        </div>
      </section>
       <div className="stats stats-vertical text-xl text-center text-gray-500 font-bold  flex justify-center space-x-10 mt-0">
        <div className="stat">
          <div className="stat-title p-5 ">10K+</div>
          <div className="stat-value">Total Sales</div>
        </div>

        <div className="stat">
          <div className="stat-title p-5">5K+</div>
          <div className="stat-value">Happy Customers</div>
        </div>

        <div className="stat">
          <div className="stat-title p-5">#3</div>
          <div className="stat-value">In Belgium</div>
        </div>
      </div>
       <section className="relative flex items-center justify-between h-[600px] w-full px-12">
  {/* Text Section - Left */}
  <div className="max-w-lg text-left">
    <h4 className="text-lg font-serif  text-black">
      Elegance * Timeless
    </h4>
    <p className="text-lg text-gray-500 mt-4">
      At FUO Chairs, we believe furniture transcends mere functionality to become an expression of the art of living. Our exclusive collection masterfully blends contemporary innovation with timeless elegance, showcasing chairs that are meticulously crafted to embody style, unparalleled comfort, and refined sophistication. Each piece is designed not just to furnish a space,
      but to elevate your lifestyle—transforming everyday moments into extraordinary experiences.</p>
    <button className="mt-6 px-6 py-3 bg-black text-white text-lg rounded-lg shadow-lg hover:bg-gray-800 transition">
      About Us →
    </button>
  </div>

  {/* Large Chair Image - Right */}
  <div className="w-[500px] h-[300px] bg-white border border-gray-200 rounded-xl shadow-lg dark:bg-gray-800 flex justify-center items-center">
    <Image
      className="rounded-lg"
      src="/arrow.png"
      alt="FUO Chair"
      width={750}
      height={550}
    />
  </div>
</section>
<section className="flex items-center justify-between h-[300px] w-full px-12 bg-transparent">
  {/* Left: Bold Title */}
  <div className="max-w-lg">
    <h1 className="text-5xl font-serif font-extrabold text-black">
      Redefining Chair Comfort
    </h1>
  </div>

  {/* Right: Description & Button */}
  <div className="max-w-lg text-left">
    <p className="text-lg text-gray-500 mt-4">
      At FUO Chairs, comfort is more than just a necessity—it’s an **art form**.  
      Our 2023 <a href="#"><span className="font-bold text-blue-500">collection</span></a> blends sleek, contemporary design with timeless craftsmanship, ensuring every chair elevates your space.
    </p>
    <button className="mt-6 px-6 py-3 bg-black text-white text-lg rounded-lg shadow-lg hover:bg-gray-800 transition">
      View More →
    </button>
  </div>
</section>
<section className="flex items-center justify-center h-[600px] mt-10 w-full px-12 bg-transparent">
  <div className="grid grid-cols-3 gap-4">
    {/* First Row */}
    <div className="flex justify-center">
      <Image className="rounded-lg object-cover" src="/fo.jpg" alt="Blog Image" width={300} height={300} />
    </div>
    <div className="flex justify-center row-span-2">
      <Image className="rounded-lg object-cover" src="/to.png" alt="Blog Image" width={300} height={600} />
    </div>
    <div className="flex justify-center">
      <Image className="rounded-lg object-cover" src="/for.png" alt="Blog Image" width={300} height={300} />
    </div>

    {/* Second Row */}
    <div className="flex justify-center">
      <Image className="rounded-lg object-cover" src="/pi.png" alt="Blog Image" width={300} height={300} />
    </div>
    <div className="flex justify-center">
      <Image className="rounded-lg object-cover" src="/va.jpg" alt="Blog Image" width={300} height={300} />
    </div>
  </div>
</section>

<section className="flex items-center justify-between h-[600px] w-full px-12 bg-[#E8DCCA] text-black">
  {/* Left: Image */}
  <div className="w-[500px] h-[400px]">
    <Image
      className="rounded-lg object-cover"
      src="/furo.jpg"  // Replace with actual image path
      alt="FUO Lifestyle"
      width={500}
      height={400}
    />
  </div>

  {/* Right: Text & Form */}
  <div className="max-w-lg">
    <h1 className="text-5xl font-serif font-extrabold">Engage with Us in Conversation</h1>
    <p className="text-lg text-gray-700 mt-4">
      In a global world based on communication, a brand must look beyond its borders, open up to new experiences, and dare to be different.  
      Meeting the brightest minds of our time is the most effective way to nurture creativity.
    </p>

    {/* Subscription Form */}
    <div className="mt-6 flex items-center space-x-4 bg-white p-4 rounded-lg shadow-md w-[400px]">
      <input
        type="email"
        placeholder="Enter mail address"
        className="flex-grow px-4 py-2 border-none outline-none"
      />
      <button className="bg-black text-white px-6 py-2 rounded-lg hover:bg-gray-800 transition">
        Subscribe
      </button>
    </div>
  </div>
</section>
<footer className="bg-[#181818] text-white px-16 py-10">
  {/* Top: Social Media */}
  <div className="flex justify-center space-x-6 border-b border-gray-700 pb-6">
    <a href="#" className="hover:text-gray-400">LinkedIn</a>
    <a href="#" className="hover:text-gray-400">X (Twitter)</a>
    <a href="#" className="hover:text-gray-400">Facebook</a>
    <a href="#" className="hover:text-gray-400">Instagram</a>
  </div>

  {/* Middle: Sections Grid */}
  <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mt-6">
    {/* Quick Links */}
    <div className="flex flex-col items-start">
      <h3 className="text-lg font-semibold">Quick Links</h3>
      <ul className="mt-2 space-y-2">
        <li><a href="#" className="hover:text-gray-400">Home</a></li>
        <li><a href="#" className="hover:text-gray-400">Package</a></li>
        <li><a href="#" className="hover:text-gray-400">Contact Us</a></li>
        <li><a href="#" className="hover:text-gray-400">About Us</a></li>
        <li><a href="#" className="hover:text-gray-400">Legal Details</a></li>
      </ul>
    </div>

    {/* Features */}
    <div className="flex flex-col items-start">
      <h3 className="text-lg font-semibold">Features</h3>
      <ul className="mt-2 space-y-2">
        <li><a href="#" className="hover:text-gray-400">Editors</a></li>
        <li><a href="#" className="hover:text-gray-400">Infinite Canvas</a></li>
        <li><a href="#" className="hover:text-gray-400">Teams</a></li>
      </ul>
    </div>

    {/* Support */}
    <div className="flex flex-col items-start">
      <h3 className="text-lg font-semibold">Support</h3>
      <ul className="mt-2 space-y-2">
        <li><a href="#" className="hover:text-gray-400">Help Centre</a></li>
        <li><a href="#" className="hover:text-gray-400">Templates</a></li>
        <li><a href="#" className="hover:text-gray-400">Create Designs</a></li>
        <li><a href="#" className="hover:text-gray-400">Tools</a></li>
        <li><a href="#" className="hover:text-gray-400">Licensing</a></li>
      </ul>
    </div>

    {/* Legal */}
    <div className="flex flex-col items-start">
      <h3 className="text-lg font-semibold">Legal</h3>
      <ul className="mt-2 space-y-2">
        <li><a href="#" className="hover:text-gray-400">Privacy Policy</a></li>
        <li><a href="#" className="hover:text-gray-400">Terms of Service</a></li>
        <li><a href="#" className="hover:text-gray-400">Manage Cookies</a></li>
      </ul>
    </div>
  </div>

  {/* Bottom: Copyright */}
  <div className="mt-8 text-center text-gray-500 text-sm">
    © 2025 FUO Chairs. All Rights Reserved.
  </div>
</footer>
    </main>
  );
}