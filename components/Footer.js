export default function Footer() {
    return (
      <footer className="bg-blue-700 text-white p-6 text-center mt-10 shadow-lg">
        <p className="text-lg font-semibold">© 2025 My Awesome App. All rights reserved.</p>
        <div className="flex justify-center mt-4">
          <a href="#" className="mx-2 text-white hover:text-gray-300">Privacy Policy</a>
          <a href="#" className="mx-2 text-white hover:text-gray-300">Terms of Service</a>
          <a href="#" className="mx-2 text-white hover:text-gray-300">Contact Us</a>
        </div>
      </footer>
    );
}