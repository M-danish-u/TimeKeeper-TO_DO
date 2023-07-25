import { useState } from "react";


const Login = () => {

    const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleEmailChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email || !password) {
      setErrorMessage('Please enter both email and password.');
      return;
    }
    // Add your login action here if the form is valid
    // For example, you can call an authentication API endpoint
    setErrorMessage('');
  };
  return (
    <div className="mx-2">
       <form className="w-80 max-w-xs p-8 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-semibold mb-6">Login</h2>
      <div className="space-y-4">
        <div>
          <label htmlFor="email" className="block text-gray-700 font-semibold">
            Email
          </label>
          <input
            type="text"
            id="email"
            placeholder="Enter your email"
            value={email}
            onChange={handleEmailChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
          />
        </div>
        <div>
          <label htmlFor="password" className="block text-gray-700 font-semibold">
            Password
          </label>
          <input
            type="password"
            id="password"
            placeholder="Enter your password"
            value={password}
            onChange={handlePasswordChange}
            className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:border-blue-400"
          />
        </div>
        {errorMessage && <p className="text-red-500 text-sm">{errorMessage}</p>}
        <button
          type="submit"
          onClick={handleSubmit}
          className="w-full bg-[#f5b760] text-white font-semibold px-4 py-2 rounded hover:bg-blue-600 focus:outline-none focus:bg-blue-600"
        >
          Login
        </button>
        <p className="text-slate-400">Already have an account?<span className="text-[#f5b760]"> sign in</span></p>
      </div>
    </form>
    </div>
  )
}

export default Login