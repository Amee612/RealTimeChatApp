// import { useRef, useEffect, useState } from "react";
// import "./AuthPage.css";
// import { useNavigate } from "react-router-dom";
// import { useAppStore } from "../../store";
// import { toast } from "react-toastify";
// import { apiClient } from "../../lib/api-client";
// import { LOGIN_ROUTE, SIGNUP_ROUTE } from "../../utils/constants";

// const AuthPage = () => {
//   const navigate = useNavigate();
//   const { setUserInfo, setActiveIcon } = useAppStore();

//   const [email, setEmail] = useState("");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");

//   const validateLogin = () => {
//     if (!email.length) {
//       toast.warn("Email is required");
//       return false;
//     }
//     if (!password.length) {
//       toast.warn("Password is required");
//       return false;
//     }
//     return true;
//   };

//   const validateSignup = () => {
//     if (!email.length) {
//       toast.warn("Email is required");
//       return false;
//     }
//     if (!password.length) {
//       toast.warn("Password is required");
//       return false;
//     }
//     if (password !== confirmPassword) {
//       toast.warn("Passwords do not match");
//       return false;
//     }
//     return true;
//   };

//   const handleLogin = async (event) => {
//     event.preventDefault();
//     if (validateLogin()) {
//       const response = await apiClient.post(
//         LOGIN_ROUTE,
//         {
//           email,
//           password,
//         },
//         { withCredentials: true }
//       );
//       if (response.data.user.id) {
//         setUserInfo(response.data.user);
//         if (response.data.user.profileSetup) {
//           navigate("/chat");
//         } else {
//           navigate("/profile");
//         }
//         setActiveIcon("chat");
//       }

//       toast.success("Login successful");
//     }
//   };

//   const handleSignup = async (event) => {
//     event.preventDefault();
//     if (validateSignup()) {
//       console.log("validation successful");
//       const response = await apiClient.post(
//         SIGNUP_ROUTE,
//         {
//           email,
//           password,
//         },
//         { withCredentials: true }
//       );
//       if (response.status === 201) {
//         setUserInfo(response.data.user);
//         navigate("/profile");
//       }

//       toast.success("Signup successful");
//     }
//   };

//   const containerRef = useRef(null);
//   const signUpButtonRef = useRef(null);
//   const signInButtonRef = useRef(null);

//   useEffect(() => {
//     const container = containerRef.current;
//     const signUpButton = signUpButtonRef.current;
//     const signInButton = signInButtonRef.current;

//     const handleSignUpClick = () => {
//       container.classList.add("right-panel-active");
//     };

//     const handleSignInClick = () => {
//       container.classList.remove("right-panel-active");
//     };

//     signUpButton.addEventListener("click", handleSignUpClick);
//     signInButton.addEventListener("click", handleSignInClick);

//     // Cleanup event listeners when the component unmounts
//     return () => {
//       signUpButton.removeEventListener("click", handleSignUpClick);
//       signInButton.removeEventListener("click", handleSignInClick);
//     };
//   }, []);

//   return (
//     <div className="auth-page">
//       <div className="container" ref={containerRef} id="container">
//         <div className="form-container sign-up-container">
//           <form onSubmit={handleSignup}>
//             <h1 className="sign-up-heading">Sign up</h1>
//             {/* <div className="social-container">
//               <a href="#" className="social">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a href="#" className="social">
//                 <i className="fab fa-google-plus-g"></i>
//               </a>
//               <a href="#" className="social">
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//             </div>
//             <span>or use your email for registration</span> */}
//             {/* <input type="text" placeholder="Name" /> */}
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Confirm Password"
//               value={confirmPassword}
//               onChange={(e) => setConfirmPassword(e.target.value)}
//             />
//             <button
//               type="submit"
//               className={
//                 email.length && password.length && confirmPassword.length
//                   ? ""
//                   : "disabled-auth-button"
//               }
//             >
//               Sign Up
//             </button>
//           </form>
//         </div>
//         <div className="form-container sign-in-container">
//           <form onSubmit={handleLogin}>
//             <h1 className="sign-in-heading">Sign in</h1>
//             {/* <div className="social-container">
//               <a href="#" className="social">
//                 <i className="fab fa-facebook-f"></i>
//               </a>
//               <a href="#" className="social">
//                 <i className="fab fa-google-plus-g"></i>
//               </a>
//               <a href="#" className="social">
//                 <i className="fab fa-linkedin-in"></i>
//               </a>
//             </div>
//             <span>or use your account</span> */}
//             <input
//               type="email"
//               placeholder="Email"
//               value={email}
//               onChange={(e) => setEmail(e.target.value)}
//             />
//             <input
//               type="password"
//               placeholder="Password"
//               value={password}
//               onChange={(e) => setPassword(e.target.value)}
//             />
//             <a href="#" className="forgot-password-link">
//               Forgot your password?
//             </a>
//             <button
//               type="submit"
//               className={
//                 email.length && password.length ? "" : "disabled-auth-button"
//               }
//             >
//               Sign In
//             </button>
//           </form>
//         </div>
//         <div className="overlay-container">
//           <div className="overlay">
//             <div className="overlay-panel overlay-left">
//               <h1>Welcome Back!</h1>
//               <p>
//                 Already have an account? Please login with your personal info.
//               </p>
//               <button className="ghost" ref={signInButtonRef}>
//                 Sign In
//               </button>
//             </div>
//             <div className="overlay-panel overlay-right">
//               <h1>Hello!</h1>
//               <p>{"Don't"} have an account? Create one!</p>
//               <button className="ghost" ref={signUpButtonRef}>
//                 Sign Up
//               </button>
//             </div>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default AuthPage;

import { useRef, useEffect, useState } from "react";
import "./AuthPage.css";
import { useNavigate } from "react-router-dom";
import { useAppStore } from "../../store";
import { toast } from "react-toastify";
import { apiClient } from "../../lib/api-client";
import { LOGIN_ROUTE, SIGNUP_ROUTE } from "../../utils/constants";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../lib/firebase"; // adjust if the path is different

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: import.meta.env.VITE_FIREBASE_AUTH_DOMAIN,
  projectId: import.meta.env.VITE_FIREBASE_PROJECT_ID,
  storageBucket: import.meta.env.VITE_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: import.meta.env.VITE_FIREBASE_MESSAGING_SENDER_ID,
  appId: import.meta.env.VITE_FIREBASE_APP_ID,
  measurementId: import.meta.env.VITE_FIREBASE_MEASUREMENT_ID,
};

const AuthPage = () => {
  const navigate = useNavigate();
  const { setUserInfo, setActiveIcon } = useAppStore();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const validateLogin = () => {
    if (!email.length) {
      toast.warn("Email is required");
      return false;
    }
    if (!password.length) {
      toast.warn("Password is required");
      return false;
    }
    return true;
  };

  const validateSignup = () => {
    if (!email.length) {
      toast.warn("Email is required");
      return false;
    }
    if (!password.length) {
      toast.warn("Password is required");
      return false;
    }
    if (password !== confirmPassword) {
      toast.warn("Passwords do not match");
      return false;
    }
    return true;
  };

  const handleLogin = async (event) => {
  event.preventDefault();
  if (validateLogin()) {
    try {
      const userCredential = await signInWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User logged in:", user);

      toast.success("Login successful");

      setUserInfo({ email: user.email, uid: user.uid });

      if (user) {
        navigate("/chat");
        setActiveIcon("chat");
      }
    } catch (err) {
      console.error("Firebase login error:", err);
      toast.error(err.message || "Login failed");
    }
  }
};

  
  // const handleLogin = async (event) => {
  //   event.preventDefault();
  //   if (validateLogin()) {
  //     const response = await apiClient.post(
  //       LOGIN_ROUTE,
  //       {
  //         email,
  //         password,
  //       },
  //       { withCredentials: true }
  //     );
  //     if (response.data.user.id) {
  //       setUserInfo(response.data.user);
  //       if (response.data.user.profileSetup) {
  //         navigate("/chat");
  //       } else {
  //         navigate("/profile");
  //       }
  //       setActiveIcon("chat");
  //     }

  //     toast.success("Login successful");
  //   }
  // };

  // const handleSignup = async (event) => {
  //   event.preventDefault();
  //   if (validateSignup()) {
  //     console.log("validation successful");
  //     const response = await apiClient.post(
  //       SIGNUP_ROUTE,
  //       {
  //         email,
  //         password,
  //       },
  //       { withCredentials: true }
  //     );
  //     if (response.status === 201) {
  //       setUserInfo(response.data.user);
  //       navigate("/profile");
  //     }

  //     toast.success("Signup successful");
  //   }
  // };

  const handleSignup = async (event) => {
  event.preventDefault();
  if (validateSignup()) {
    console.log("validation successful");

    try {
      const userCredential = await createUserWithEmailAndPassword(auth, email, password);
      const user = userCredential.user;
      console.log("User signed up:", user);

      toast.success("Signup successful");

      // Optional: Save user info to global store or Firestore
      setUserInfo({ email: user.email, uid: user.uid });

      navigate("/profile"); // or wherever your app needs to go next
    } catch (err) {
      console.error("Firebase signup error:", err);
      toast.error(err.message || "Signup failed");
    }
  }
};


  const containerRef = useRef(null);
  const signUpButtonRef = useRef(null);
  const signInButtonRef = useRef(null);

  useEffect(() => {
    const container = containerRef.current;
    const signUpButton = signUpButtonRef.current;
    const signInButton = signInButtonRef.current;

    const handleSignUpClick = () => {
      container.classList.add("right-panel-active");
    };

    const handleSignInClick = () => {
      container.classList.remove("right-panel-active");
    };

    signUpButton.addEventListener("click", handleSignUpClick);
    signInButton.addEventListener("click", handleSignInClick);

    // Cleanup event listeners when the component unmounts
    return () => {
      signUpButton.removeEventListener("click", handleSignUpClick);
      signInButton.removeEventListener("click", handleSignInClick);
    };
  }, []);

  return (
    <div className="auth-page">
      <div className="container" ref={containerRef} id="container">
        <div className="form-container sign-up-container">
          <form onSubmit={handleSignup}>
            <h1 className="sign-up-heading">Sign up</h1>
            {/* <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your email for registration</span> */}
            {/* <input type="text" placeholder="Name" /> */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <input
              type="password"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
            />
            <button
              type="submit"
              className={
                email.length && password.length && confirmPassword.length
                  ? ""
                  : "disabled-auth-button"
              }
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="form-container sign-in-container">
          <form onSubmit={handleLogin}>
            <h1 className="sign-in-heading">Sign in</h1>
            {/* <div className="social-container">
              <a href="#" className="social">
                <i className="fab fa-facebook-f"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-google-plus-g"></i>
              </a>
              <a href="#" className="social">
                <i className="fab fa-linkedin-in"></i>
              </a>
            </div>
            <span>or use your account</span> */}
            <input
              type="email"
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <a href="#" className="forgot-password-link">
              Forgot your password?
            </a>
            <button
              type="submit"
              className={
                email.length && password.length ? "" : "disabled-auth-button"
              }
            >
              Sign In
            </button>
          </form>
        </div>
        <div className="overlay-container">
          <div className="overlay">
            <div className="overlay-panel overlay-left">
              <h1>Welcome Back!</h1>
              <p>
                Already have an account? Please login with your personal info.
              </p>
              <button className="ghost" ref={signInButtonRef}>
                Sign In
              </button>
            </div>
            <div className="overlay-panel overlay-right">
              <h1>Hello!</h1>
              <p>{"Don't"} have an account? Create one!</p>
              <button className="ghost" ref={signUpButtonRef}>
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AuthPage;

