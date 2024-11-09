export default function FormComponent() {
  const onSubmit = (event) => {
    event.preventDefault();
    console.log(" -- on submit --");
  };
  return (
    <div className="flex flex-col sm:flex-row justify-between space-x-4 p-2">
      {/* Left Form */}
      <div className="w-full sm:w-[48%] bg-gray-100 p-4 rounded-md shadow-lg">
        <h2 className="text-xl font-bold mb-4  flex flex-row justify-center items-center">
          Sign Up
        </h2>
        <form onSubmit={onSubmit}>
          {/* Name Field */}
          <div className="mb-4">
            <AppInputComponent
              label="Name"
              type="input"
              hint="Enter your name"
            />
          </div>

          {/* Email Field */}
          <div className="mb-4">
            <AppInputComponent
              label="Email"
              type="input"
              hint="Enter your email"
            />
          </div>

          {/* Radio Buttons */}
          <div className="mb-4">
            <span className="block text-sm font-medium text-gray-700">
              Gender
            </span>
            <div className="flex items-center space-x-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="male"
                  className="mr-2"
                />
                Male
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="gender"
                  value="female"
                  className="mr-2"
                />
                Female
              </label>
            </div>
          </div>

          {/* Checkbox */}
          <div className="mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded-md"
              />
              <span className="text-sm">
                I agree to the terms and conditions
              </span>
            </label>
          </div>

          {/* Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Select Country
            </label>
            <select className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md">
              <option value="us">United States</option>
              <option value="ca">Canada</option>
              <option value="uk">United Kingdom</option>
              <option value="aus">Australia</option>
            </select>
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-gray-500 text-white rounded-md"
          >
            Submit
          </button>
        </form>
      </div>

      {/* Right Form */}
      <div className="w-full sm:w-[48%] bg-gray-100 p-4 rounded-md shadow-lg">
        <h2 className="text-xl font-bold mb-4 flex flex-row justify-center items-center">
          Login
        </h2>
        <form onSubmit={onSubmit}>
          {/* Username Field */}
          <AppInputComponent label="Name" type="input" hint="Enter your name" />
          {/* Password Field */}
          <AppInputComponent
            label="Password"
            type="password"
            hint="Enter your password"
          />
          {/* Checkbox */}
          <div className="mb-4">
            <label className="flex items-center space-x-2">
              <input
                type="checkbox"
                className="w-4 h-4 border-gray-300 rounded-md"
              />
              <span className="text-sm">Remember me</span>
            </label>
          </div>
          {/* Radio Buttons */}
          <div className="mb-4">
            <span className="block text-sm font-medium text-gray-700">
              Account Type
            </span>
            <div className="flex items-center space-x-4 mt-2">
              <label className="flex items-center">
                <input
                  type="radio"
                  name="account"
                  value="basic"
                  className="mr-2"
                />
                Basic
              </label>
              <label className="flex items-center">
                <input
                  type="radio"
                  name="account"
                  value="premium"
                  className="mr-2"
                />
                Premium
              </label>
            </div>
          </div>
          {/* Dropdown */}
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700">
              Select Role
            </label>
            <select className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md">
              <option value="admin">Admin</option>
              <option value="user">User</option>
              <option value="guest">Guest</option>
            </select>
          </div>
          {/* Submit Button */}
          <button
            type="submit"
            className="w-full py-2 bg-gray-500 text-white rounded-md"
          >
            Login
          </button>
        </form>
      </div>
    </div>
  );
}

export function AppInputComponent({ label, type, hint }) {
  return (
    <div className="mb-4">
      <label className="block text-sm font-medium text-gray-700">{label}</label>
      <input
        type={type}
        className="w-full px-4 py-2 mt-2 border border-gray-300 rounded-md"
        placeholder={hint}
      />
    </div>
  );
}
