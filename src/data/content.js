// ===================================================
//  S. RAMYA — REAL PORTFOLIO DATA (from screenshots)
// ===================================================

export const PERSONAL = {
  name: "S. Ramya",
  firstName: "Ramya",
  role: "Frontend Developer",
  tagline: "I BUILD FOR THE WEB",
  subline: "I build responsive and scalable web applications using React and modern JavaScript. Passionate about clean UI, performance and real-world problem solving.",
  email: "ramyasathish851@gmail.com",
  location: "Salem, India",
  available: true,
  socials: {
    github:   "https://github.com/RamyaSathish-rgv",
    linkedin: "https://www.linkedin.com/in/ramya-sathish-89b937383/",
  },
};

export const ABOUT = {
  bio1: "I am a B.Tech Information Technology (Final Year) student with a strong foundation in Full Stack Development and Machine Learning. I am passionate about building scalable web applications and exploring intelligent systems powered by data.",
  bio2: "Through hands-on internships, I have worked on CUDA deployment on NVIDIA boards and implemented secure cloud storage solutions using Virtual Private Cloud (VPC) and Amazon S3. These experiences strengthened my understanding of GPU computing, cloud infrastructure, and performance optimization.",
  bio3: "My goal is to become a highly skilled Full Stack Developer and Machine Learning Engineer, building scalable web applications and intelligent systems that create real-world impact.",
  education: "B.Tech — Information Technology (Final Year)",
  coreSkills: "Python, Java, MERN Stack, Cloud Computing, Machine Learning",
  careerGoal: "To become a highly skilled Full Stack Developer and Machine Learning Engineer, building scalable systems and intelligent solutions.",
  facts: [
  { number: "4+", label: "Internships & Certifications" },
  { number: "5+", label: "Projects Built" },
  { number: "12+", label: "Technologies" },
  { number: "Final", label: "Years of Study" },
],
};

// SVG skill logos (inline, no external dependency)
export const SKILLS = [
  {
    name: "Python",
    color: "#4B8BBE",
    bg: "#1a2a3a",
    logo: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><linearGradient id="pya" x1="70.252" y1="1237.476" x2="170.659" y2="1151.089" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#5A9FD4"/><stop offset="1" stop-color="#306998"/></linearGradient><linearGradient id="pyb" x1="209.474" y1="1098.811" x2="173.62" y2="1149.537" gradientUnits="userSpaceOnUse" gradientTransform="matrix(.563 0 0 -.568 -29.215 707.817)"><stop offset="0" stop-color="#FFD43B"/><stop offset="1" stop-color="#FFE873"/></linearGradient><path fill="url(#pya)" d="M63.391 1.988c-4.222.02-8.252.379-11.8 1.007-10.45 1.846-12.346 5.71-12.346 12.837v9.411h24.693v3.137H29.977c-7.176 0-13.46 4.313-15.426 12.521-2.268 9.405-2.368 15.275 0 25.096 1.755 7.311 5.947 12.519 13.124 12.519h8.491V67.234c0-8.151 7.051-15.34 15.426-15.34h24.665c6.866 0 12.346-5.654 12.346-12.548V15.833c0-6.693-5.646-11.72-12.346-12.837-4.244-.706-8.645-1.027-12.866-1.008zM50.037 9.557c2.55 0 4.634 2.117 4.634 4.721 0 2.593-2.083 4.69-4.634 4.69-2.56 0-4.633-2.097-4.633-4.69-.001-2.604 2.073-4.721 4.633-4.721z"/><path fill="url(#pyb)" d="M91.682 28.38v10.966c0 8.5-7.208 15.655-15.426 15.655H51.591c-6.756 0-12.346 5.783-12.346 12.549v23.515c0 6.691 5.818 10.628 12.346 12.547 7.816 2.297 15.312 2.713 24.665 0 6.216-1.801 12.346-5.423 12.346-12.547v-9.412H63.938v-3.138h37.012c7.176 0 9.852-5.005 12.348-12.519 2.578-7.735 2.467-15.174 0-25.096-1.774-7.145-5.161-12.521-12.348-12.521h-9.268zM77.809 87.927c2.561 0 4.634 2.097 4.634 4.692 0 2.602-2.074 4.719-4.634 4.719-2.55 0-4.633-2.117-4.633-4.719 0-2.595 2.083-4.692 4.633-4.692z"/></svg>`,
  },
  {
    name: "Java",
    color: "#ED8B00",
    bg: "#1a2010",
    logo: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#0074BD" d="M47.617 98.12s-4.767 2.774 3.397 3.71c9.892 1.13 14.947.968 25.845-1.092 0 0 2.871 1.795 6.873 3.351-24.439 10.47-55.308-.607-36.115-5.969zm-2.988-13.665s-5.348 3.959 2.823 4.805c10.567 1.091 18.91 1.18 33.354-1.6 0 0 1.993 2.025 5.132 3.131-29.542 8.64-62.446.68-41.309-6.336z"/><path fill="#EA2D2E" d="M69.802 61.271c6.025 6.935-1.58 13.17-1.58 13.17s15.289-7.891 8.269-17.777c-6.559-9.215-11.587-13.792 15.635-29.58 0 .001-42.731 10.67-22.324 34.187z"/><path fill="#0074BD" d="M102.123 108.229s3.529 2.91-3.888 5.159c-14.102 4.272-58.706 5.56-71.094.171-4.451-1.938 3.899-4.625 6.526-5.192 2.739-.593 4.303-.485 4.303-.485-4.953-3.487-32.013 6.85-13.743 9.815 49.821 8.076 90.817-3.637 77.896-9.468zM49.912 70.294s-22.686 5.389-8.033 7.348c6.188.828 18.518.638 30.011-.326 9.39-.789 18.813-2.474 18.813-2.474s-3.308 1.419-5.704 3.053c-23.042 6.061-67.544 3.238-54.731-2.958 10.832-5.239 19.644-4.643 19.644-4.643zm40.697 22.747c23.421-12.167 12.591-23.86 5.032-22.285-1.848.385-2.677.72-2.677.72s.688-1.079 2-1.543c14.953-5.255 26.451 15.503-4.823 23.725 0-.002.359-.327.468-.617z"/><path fill="#EA2D2E" d="M76.491 1.587S89.459 14.563 64.188 34.51c-20.266 16.006-4.621 25.13-.007 35.559-11.831-10.673-20.509-20.07-14.688-28.815C58.041 28.42 81.722 22.195 76.491 1.587z"/><path fill="#0074BD" d="M52.214 126.021c22.476 1.437 57-.8 57.817-11.436 0 0-1.571 4.032-18.577 7.231-19.186 3.612-42.854 3.191-56.887.874 0 .001 2.875 2.381 17.647 3.331z"/></svg>`,
  },
  {
    name: "HTML",
    color: "#E34F26",
    bg: "#1f1208",
    logo: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#E44D26" d="M19.037 113.876L9.032 1.661h109.936l-10.016 112.198-45.019 12.48z"/><path fill="#F16529" d="M64 116.8l36.378-10.086 8.559-95.878H64z"/><path fill="#EBEBEB" d="M64 52.455H45.788L44.53 38.361H64V24.599H29.489l.33 3.692 3.382 37.927H64zm0 35.743l-.061.017-15.327-4.14-.979-10.975H33.816l1.928 21.609 28.193 7.826.063-.017z"/><path fill="#fff" d="M63.952 52.455v13.763h16.947l-1.597 17.849-15.35 4.143v14.319l28.215-7.82.207-2.325 3.234-36.233.335-3.696h-3.708zm0-27.856v13.762h33.244l.276-3.092.628-6.978.329-3.692z"/></svg>`,
  },
  {
    name: "CSS",
    color: "#1572B6",
    bg: "#071428",
    logo: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#1572B6" d="M18.814 114.123L9.05 1.664h109.9l-9.782 112.459-45.67 12.659-44.684-12.659z"/><path fill="#33A9DC" d="M64.001 117.062l36.931-10.243 8.332-93.181H64.001v103.424z"/><path fill="#fff" d="M64.001 51.429h18.302l1.264-14.163H64.001V23.435h34.682l-.332 3.711-3.4 38.114h-30.95V51.429z"/><path fill="#EBEBEB" d="M64.083 87.349l-.061.018-15.403-4.159-.985-11.031H33.752l1.937 21.717 28.331 7.863.063-.018v-14.39z"/><path fill="#fff" d="M81.127 64.675l-1.666 18.522-15.426 4.164v14.39l28.354-7.858.208-2.337 2.406-26.881H81.127z"/><path fill="#EBEBEB" d="M64.048 23.435v13.831H30.128l-.277-3.108-.63-7.012-.331-3.711h35.158zm-.047 27.994v13.831H48.792l-.277-3.108-.631-7.012-.33-3.711h16.447z"/></svg>`,
  },
  {
    name: "JavaScript",
    color: "#F7DF1E",
    bg: "#1a1a00",
    logo: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#F7DF1E" d="M1.408 1.408h125.184v125.185H1.408z"/><path fill="#323330" d="M116.347 96.736c-.917-5.711-4.641-10.508-15.672-14.981-3.832-1.761-8.104-3.022-9.377-5.926-.452-1.69-.512-2.642-.226-3.665.821-3.32 4.784-4.355 7.925-3.403 2.023.678 3.938 2.237 5.093 4.724 5.402-3.498 5.391-3.475 9.163-5.879-1.381-2.141-2.118-3.129-3.022-4.045-3.249-3.629-7.676-5.498-14.756-5.355l-3.688.477c-3.534.893-6.902 2.748-8.877 5.235-5.926 6.724-4.236 18.492 2.975 23.335 7.119 5.7 17.524 6.951 18.9 12.354.668 5.478-4.059 7.249-9.082 6.63-3.822-.935-5.926-3.188-8.404-7.592l-9.089 5.998c1.106 2.652 2.355 3.829 4.249 5.816 9.439 9.083 33.057 9.524 37.864-1.676.225-.674.924-2.736.734-5.947l.006.01zm-31.055-50.479h-9.074c0 6.427-.011 12.81 0 19.242.011 4.093.252 7.826-.457 8.976-1.166 2.226-4.045 1.924-5.378 1.498-1.178-.542-1.943-1.271-2.693-2.428-.169-.308-.591-1.094-.734-1.416l-9.163 5.644c1.558 3.169 3.781 5.904 6.75 7.699 4.536 2.652 10.675 3.498 17.146 1.998 4.179-1.106 7.499-3.391 9.322-7.317 2.869-5.901 2.249-13.186 2.249-20.054.002-4.486 0-8.972 0-13.459.002 0 .035 0 .032 0z"/></svg>`,
  },
  {
    name: "React",
    color: "#61DAFB",
    bg: "#001520",
    logo: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.8-.2-2.2 2.9-4.5 5.7-6.8 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.8.2 2.2-2.9 4.5-5.7 6.8-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2-2.2-4.1-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9.5-17c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6-.1 4.7-5.8 9.7-15.7 13.4z"/></g></svg>`,
  },
  {
    name: "Node.js",
    color: "#68A063",
    bg: "#0a1a0a",
    logo: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#83CD29" d="M112.771 30.334L68.674 5.601a9.943 9.943 0 00-9.348 0L15.229 30.334C11.351 32.524 9 36.602 9 40.981V90.02c0 4.379 2.327 8.445 6.205 10.658l44.096 24.733c3.877 2.19 8.695 2.19 12.524 0l44.096-24.733c3.877-2.19 6.205-6.279 6.205-10.658V40.981a12.048 12.048 0 00-6.355-10.647z"/><path fill="#404137" d="M115.123 32.24l-44.1-24.74a11.44 11.44 0 00-2.6-.93v122.8c.894-.144 1.784-.42 2.6-.88l44.1-24.74c3.88-2.19 6.21-6.28 6.21-10.66V42.9a12.05 12.05 0 00-6.21-10.66z" opacity=".15"/><path d="M64.001 20.101L38.44 84.402h9.58l5.152-13.592h21.656l5.152 13.592h9.58L64.001 20.1zm6.34 42.315H57.661l6.34-16.724 6.34 16.724z" fill="#fff"/></svg>`,
  },
  {
    name: "MongoDB",
    color: "#47A248",
    bg: "#081408",
    logo: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#599636" d="M88.038 42.812c1.605 4.643 2.761 9.383 3.141 14.296.472 6.095.256 12.147-1.029 18.142-1.317 6.12-3.664 11.807-7.826 16.649-1.65 1.93-3.198 3.93-4.935 5.775-3.479 3.718-7.071 7.292-10.671 10.893-1.257 1.257-2.478 2.515-3.337 4.105-.138.259-.198.554-.298.831l-.634-.643c-1.075-2.446-2.781-4.433-4.652-6.302-3.287-3.285-6.636-6.507-9.874-9.847-2.508-2.59-4.903-5.282-6.947-8.229-3.127-4.486-5.491-9.329-6.479-14.765-.761-4.179-1.128-8.391-.927-12.625.21-4.433.938-8.757 2.43-12.927l.128.205c1.868 3.957 4.436 7.295 7.783 10.024 3.826 3.11 8.3 5.107 12.871 6.876a44.217 44.217 0 0012.52 2.645c.724.047 1.051-.243 1.138-.938.199-1.6.509-3.187.843-4.769.628-2.986 1.951-5.578 4.023-7.774 2.257-2.39 5.045-3.831 8.268-4.317.16-.023.312-.12.462-.179l2.281-.022z"/><path fill="#6CAC48" d="M63.958 109.744c-.033-.278-.066-.556-.112-.813-.268-1.471-.943-2.733-1.976-3.798-2.627-2.731-5.327-5.389-7.999-8.073-1.346-1.351-2.694-2.7-4.018-4.072-3.588-3.714-6.674-7.788-8.947-12.477-1.917-3.997-3.083-8.198-3.622-12.581-.354-2.944-.441-5.917-.36-9.994.289-4.874 1.162-9.652 2.961-14.234.047-.121.107-.237.172-.381-.606 1.181-1.244 2.348-1.817 3.543-1.947 4.073-3.217 8.331-3.837 12.78-.391 2.804-.501 5.628-.467 8.457.041 3.373.466 6.7 1.211 9.986 1.368 6.037 3.952 11.582 7.501 16.67 2.023 2.916 4.376 5.578 6.84 8.133 3.188 3.338 6.499 6.556 9.76 9.822 1.616 1.611 3.099 3.327 4.031 5.459l.019.044.124-.087a9.958 9.958 0 00-.465-8.184z"/><path fill="#C2BFBF" d="M64.577 20.671c-.1-.127-.2-.276-.313-.415C58.973 13.958 52.135 9.516 43.981 7.392c-2.601-.682-5.25-1.063-7.934-1.147-1.147-.036-2.294-.034-3.441-.05.069.041.138.08.207.12 4.386 2.599 7.813 6.146 10.401 10.51 2.589 4.367 4.028 9.12 4.625 14.143.198 1.672.282 3.356.283 5.043.001 1.63-.092 3.258-.277 4.879-.048.418.063.563.47.672 2.243.607 4.475 1.25 6.571 2.273 3.518 1.724 6.183 4.233 7.733 7.919.31.738.526 1.509.756 2.272.061.203.152.274.368.257.712-.058 1.425-.111 2.138-.155.634-.038.675-.061.675-.693 0-.641-.055-1.286-.147-1.921-.3-2.063-.998-3.974-1.988-5.784-1.516-2.757-3.503-5.096-5.834-7.111z" opacity=".45"/></svg>`,
  },
  {
    name: "GitHub",
    color: "#aaaaaa",
    bg: "#111111",
    logo: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#aaa" d="M64 5.103c-33.347 0-60.388 27.035-60.388 60.388 0 26.682 17.303 49.317 41.297 57.303 3.017.56 4.125-1.31 4.125-2.905 0-1.44-.056-6.197-.082-11.243-16.8 3.653-20.345-7.125-20.345-7.125-2.747-6.98-6.705-8.836-6.705-8.836-5.48-3.748.413-3.67.413-3.67 6.063.425 9.257 6.223 9.257 6.223 5.386 9.23 14.127 6.562 17.573 5.02.542-3.903 2.107-6.568 3.834-8.076-13.413-1.525-27.514-6.704-27.514-29.843 0-6.593 2.36-11.98 6.223-16.21-.628-1.52-2.695-7.662.584-15.98 0 0 5.07-1.623 16.61 6.19C53.7 35 58.867 34.327 64 34.304c5.13.023 10.3.694 15.127 2.033 11.526-7.813 16.59-6.19 16.59-6.19 3.287 8.317 1.22 14.46.593 15.98 3.872 4.23 6.215 9.617 6.215 16.21 0 23.194-14.127 28.3-27.574 29.796 2.167 1.874 4.097 5.55 4.097 11.183 0 8.08-.07 14.583-.07 16.572 0 1.607 1.088 3.49 4.148 2.897 23.98-7.994 41.263-30.622 41.263-57.294C124.388 32.14 97.35 5.104 64 5.104z"/></svg>`,
  },
  {
    name: "AWS",
    color: "#FF9900",
    bg: "#1a0e00",
    logo: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#FF9900" d="M40.258 55.765c0 1.14.122 2.06.34 2.733.245.674.553 1.408 1.011 2.205.16.245.221.49.221.71 0 .306-.185.612-.58.918l-1.925 1.285c-.275.183-.55.275-.796.275-.306 0-.612-.152-.918-.428-.428-.458-.796-.948-1.103-1.44a23.95 23.95 0 01-.948-1.835c-2.389 2.818-5.39 4.226-8.999 4.226-2.572 0-4.62-.735-6.118-2.205-1.5-1.47-2.267-3.428-2.267-5.879 0-2.603.918-4.713 2.787-6.3 1.866-1.59 4.347-2.39 7.487-2.39 1.041 0 2.113.092 3.245.245 1.133.153 2.297.396 3.521.673v-2.236c0-2.327-.49-3.95-1.437-4.898-.98-.948-2.634-1.408-4.99-1.408-1.072 0-2.174.122-3.307.397-1.133.275-2.235.612-3.307 1.04-.49.215-.856.337-1.072.397-.215.06-.366.092-.49.092-.428 0-.643-.306-.643-.95v-1.498c0-.49.062-.856.215-1.07.152-.215.428-.43.856-.643 1.072-.55 2.36-.979 3.858-1.347a18.628 18.628 0 014.928-.612c3.763 0 6.515.856 8.287 2.572 1.743 1.714 2.633 4.317 2.633 7.81v10.281zm-12.426 4.653c1.01 0 2.051-.184 3.154-.55 1.1-.368 2.083-.979 2.907-1.865.49-.581.857-1.224 1.04-1.958.184-.734.306-1.622.306-2.664v-1.285a25.526 25.526 0 00-2.817-.52 23.16 23.16 0 00-2.878-.183c-2.052 0-3.552.397-4.562 1.224-1.01.826-1.5 1.988-1.5 3.521 0 1.438.368 2.51 1.133 3.247.734.704 1.805 1.072 3.216 1.072v-.04zm24.57 3.307c-.55 0-.917-.092-1.163-.306-.245-.184-.459-.612-.643-1.194L43.87 37.985c-.184-.612-.276-1.01-.276-1.225 0-.49.245-.765.735-.765h2.999c.581 0 .979.092 1.194.307.245.184.428.612.611 1.193l5.573 21.974 5.175-21.974c.153-.612.337-1.01.581-1.193.245-.184.674-.307 1.224-.307h2.45c.582 0 .98.092 1.225.307.245.183.459.612.581 1.193l5.237 22.25 5.757-22.25c.184-.612.397-1.01.612-1.193.245-.184.643-.307 1.193-.307h2.848c.49 0 .765.245.765.765 0 .154-.031.307-.062.49-.03.184-.092.429-.215.766l-7.974 24.238c-.184.611-.398 1.01-.643 1.193-.246.184-.643.306-1.163.306h-2.633c-.581 0-.979-.092-1.225-.307-.245-.214-.459-.612-.581-1.224L60.59 42.24l-5.144 20.26c-.153.612-.337 1.01-.581 1.225-.245.215-.674.307-1.225.307h-2.633zm42.52.948c-1.59 0-3.185-.184-4.713-.581-1.531-.397-2.726-.826-3.52-1.316-.49-.275-.826-.581-.948-.856a2.15 2.15 0 01-.184-.857v-1.56c0-.643.245-.949.704-.949.184 0 .368.031.55.093.184.06.459.183.766.306a16.7 16.7 0 003.46 1.072c1.255.245 2.48.367 3.735.367 1.989 0 3.521-.337 4.562-1.01 1.04-.674 1.59-1.652 1.59-2.91 0-.857-.276-1.561-.826-2.144-.551-.582-1.59-1.103-3.093-1.591l-4.44-1.378c-2.236-.704-3.889-1.744-4.898-3.122-1.01-1.347-1.53-2.848-1.53-4.44 0-1.285.276-2.42.826-3.4.551-.98 1.285-1.836 2.205-2.51.92-.704 1.97-1.224 3.185-1.59a13.367 13.367 0 013.918-.55c.673 0 1.378.03 2.051.122.704.092 1.347.215 1.989.367.611.184 1.193.368 1.744.582.55.214.98.428 1.285.643.428.275.734.55.917.857.184.275.276.643.276 1.101v1.438c0 .643-.245.98-.704.98-.245 0-.643-.123-1.163-.368-1.744-.796-3.704-1.194-5.88-1.194-1.805 0-3.215.306-4.194.95-.979.641-1.469 1.62-1.469 2.969 0 .856.307 1.59.92 2.174.612.58 1.744 1.162 3.368 1.682l4.347 1.377c2.205.703 3.796 1.682 4.745 2.94.948 1.255 1.408 2.695 1.408 4.286 0 1.316-.276 2.511-.796 3.552-.551 1.04-1.286 1.957-2.236 2.693-.95.765-2.083 1.316-3.368 1.713-1.347.428-2.756.643-4.256.643zm4.714-42.18c-11.876 8.776-29.128 13.43-43.978 13.43-20.808 0-39.529-7.7-53.694-20.502-1.103-.98-.122-2.327 1.224-1.56 15.31 8.898 34.214 14.258 53.756 14.258 13.186 0 27.69-2.726 41.03-8.41 2.02-.857 3.704 1.316 1.663 2.785zm4.714-5.39c-1.53-1.96-10.097-1.224-13.953-.612-1.163.153-1.347-1.224-.306-2.021 6.82-4.806 18.022-3.399 19.337-1.806 1.316 1.622-.367 12.886-6.758 18.267-1.01.826-1.957.4-1.53-.704 1.438-3.644 4.714-11.154 3.21-13.124z"/></svg>`,
  },
  {
    name: "Machine\nLearning",
    color: "#E07B6A",
    bg: "#1a0808",
    logo: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><circle cx="64" cy="30" r="12" fill="none" stroke="#E07B6A" stroke-width="5"/><circle cx="20" cy="98" r="12" fill="none" stroke="#E07B6A" stroke-width="5"/><circle cx="108" cy="98" r="12" fill="none" stroke="#E07B6A" stroke-width="5"/><circle cx="64" cy="64" r="14" fill="#E07B6A" opacity=".2" stroke="#E07B6A" stroke-width="3"/><line x1="64" y1="42" x2="64" y2="50" stroke="#E07B6A" stroke-width="3"/><line x1="27" y1="90" x2="55" y2="72" stroke="#E07B6A" stroke-width="3"/><line x1="101" y1="90" x2="73" y2="72" stroke="#E07B6A" stroke-width="3"/><circle cx="64" cy="64" r="6" fill="#E07B6A"/></svg>`,
  },
  {
    name: "Flask",
    color: "#aaaaaa",
    bg: "#111111",
    logo: `<svg viewBox="0 0 128 128" xmlns="http://www.w3.org/2000/svg"><path fill="#aaa" d="M54.4 8.1C42 8.7 30.9 14.4 23.3 23.4c-7.6 9-11.3 20.9-10.2 32.8 1.1 12.9 7.4 24.8 17.3 33 8.4 7.1 19.2 11.3 30.3 11.5h2c11.1-.2 21.9-4.4 30.3-11.5 9.9-8.2 16.2-20.1 17.3-33 1.1-11.9-2.6-23.8-10.2-32.8C92.6 14.4 81.5 8.7 69.1 8.1h-14.7zM64 11.5c6.7 0 13.3 1.4 19.5 4.1L64 24.2l-19.5-8.6c6.2-2.7 12.8-4.1 19.5-4.1zm-23 6.3l21 9.3-21 9.3-21-9.3 21-9.3zm46 0l21 9.3-21 9.3-21-9.3 21-9.3zM18.5 32.2l21 9.3v18.7l-21-9.3V32.2zm87 0v18.7l-21 9.3V41.5l21-9.3zM41.5 42.8l21 9.3v18.7l-21-9.3V42.8zm46 0v18.7l-21 9.3V52.1l21-9.3zM18.5 55.5l21 9.3v18.7l-21-9.3V55.5zm87 0v18.7l-21 9.3V64.8l21-9.3zM41.5 66.1l21 9.3v18.7l-21-9.3V66.1zm46 0v18.7l-21 9.3V75.4l21-9.3zM18.5 78.8l21 9.3V106l-14.5-6.4C18.9 93.9 16.7 86.3 18.5 78.8zm87 0c1.8 7.5-.4 15.1-6.5 20.8L85 106V88.1l21-9.3z" opacity=".6"/></svg>`,
  },
];

export const EXPERIENCE = [
  {
    company: "ADVI Group of Companies",
    role: "Intern — Deployment of CUDA Python on NVIDIA Board",
    type: "Internship",
    color: "#367D8A",
    points: [
      "Deployed CUDA-enabled Python applications on NVIDIA boards.",
      "Optimized GPU acceleration for performance improvement.",
      "Configured CUDA drivers and execution environments.",
      "Worked with parallel computing techniques.",
    ],
  },
  {
    company: "Livewire",
    role: "Intern — Storage in Virtual Private Cloud using S3",
    type: "Internship",
    color: "#FBBF24",
    points: [
      "Configured secure storage using Amazon S3.",
      "Implemented storage inside a Virtual Private Cloud (VPC).",
      "Managed bucket policies and access control.",
      "Strengthened cloud infrastructure understanding.",
    ],
  },
  {
    company: "KrishNova LLP",
    role: "Associate Software Engineer Intern",
    type: "Current Internship",
    color: "#8B5CF6",
    points: [
      "Working on real-world software development and application building.",
      "Collaborating with development teams on scalable solutions.",
      "Learning industry-level workflows and development practices.",
      "Enhancing problem-solving and technical implementation skills.",
    ],
  },
];

export const PROJECTS = [
  {
    id: "08",
    title: "WanderIndia",
    category: "Frontend",
    desc: "An AI-powered smart travel planner for exploring India. Features custom itinerary generation, vibe-based travel matching, local budget tracking, and an interactive cinematic Reels player.",
    tags: ["React", "Gemini API", "Wouter", "Tailwind CSS", "Framer Motion", "Shadcn/UI"],
    color: "#c95064",
    github: "https://github.com/crishh007/TOURS-AND-TRAVELS",
    demo: "https://wander-india-frontend-hbta.onrender.com/",
    details: {
      overview: "WanderIndia is a futuristic, dark-themed AI Travel Planner application designed to curate custom travel experiences across India. Built with smooth micro-animations and a premium, responsive layout, it resolves backend database limits by executing a triple-safe client-side processing model.",
      features: [
        "AI Itinerary Planner: Generates day-by-day travel plans (with local meals, stay recommendations, and insider tips) customized by destination, duration, mood, and budget.",
        "Mood Travel Engine: Reads the traveler's emotional state (stressed, relaxed, energetic, etc.) and recommends 4 ideal destinations, activities, and a custom packing list.",
        "AI Travel Chatbot: A 24/7 travel guide powered directly by the Gemini API with conversational history, suggested follow-ups, and offline rule-based fallbacks.",
        "Cinematic Reels Feed: An interactive, custom-styled vertical video player with categorized travel reels (Beach, Heritage, Nature, Mountains) featuring like/save interactions.",
        "Local Budget Tracker: Tracks per-trip expenses, generates spending progress bars, and summarizes financial metrics for active trips."
      ],
      challenges: [
        "Triple-Safe Resiliency: Designed client-side fallback engines (using local rule-based generators and direct browser fetch logic) to ensure the AI Planner, Chatbot, and Mood recommendations work 100% of the time, even when backend servers are disconnected.",
        "Axios/Fetch Robustness: Refactored API client handlers to intercept non-JSON payloads (like server-down HTML pages) and automatically swap to offline mock sessions.",
        "Interactive Sizing Layouts: Optimized custom CSS and viewport-height calculations (h-[calc(100vh-160px)]) to lock the cinematic reels container within screen boundaries, eliminating vertical browser scrollbars."
      ]
    }
  },
  {
    id: "09",
    title: "WanderTamil",
    category: "Full Stack",
    desc: "A South India travel platform to explore destinations, watch travel reels, find nearby hotels & restaurants, and plan trips using Google Gemini AI.",
    tags: ["React", "Gemini API", "Tailwind CSS", "Vite"],
    color: "#FBBF24",
    github: "#",
    demo: "https://tours-travels-app-ri9h.onrender.com/",
    details: {
      overview: "WanderTamil is an immersive travel platform focused on South India travel. It connects tourists with local destinations, culinary hotspots, and accommodations, and features an integrated AI assistant to craft personalized travel itineraries.",
      features: [
        "Smart Exploration: Powerful destination search with tag, category, and regional filters.",
        "TikTok-Style Reels: A modern, immersive vertical video feed for travel content with social reactions.",
        "Directory Search: Instant discovery of nearby hotels, stays, and restaurants with real-time feedback.",
        "Google Gemini Planner: Interactive AI trip planner generating customized, day-by-day itineraries.",
        "Offers & Deals System: Integrated portal showcasing current seasonal travel packages and discounts.",
        "Role-Based Portals: Dual dashboard experiences tailored for both tourists (booking/saving) and sellers (listing management).",
        "Cost Estimator: Dynamic travel cost calculator including trains, lodging, meals, and emergency reserves."
      ],
      challenges: [
        "Performance Optimization: Managed multiple API feeds (destinations, stays, videos) by implementing local cache boundaries and React State virtualization.",
        "Dual-Dashboard Routing: Developed secure role-based access rules and dynamic route redirection using React Router.",
        "Conversational State: Implemented contextual message history inside the Gemini chatbot UI to support fluid travel Q&A."
      ]
    }
  },
  {
    id: "01",
    title: "SMS Spam Detection",
    category: "Machine Learning",
    desc: "Machine learning web app using SVM + Flask backend. Detects spam messages with high confidence scoring.",
    tags: ["Python", "SVM", "Flask", "ML"],
    color: "#367D8A",
    github: "https://github.com/RamyaSathish-rgv/sms-spam",
    demo: "https://project-sigma-six-67.vercel.app/",
  },
  {
    id: "02",
    title: "Food Delivery App",
    category: "Frontend",
    desc: "Responsive React-based food ordering interface with cart management and order tracking.",
    tags: ["React", "Node.js", "MongoDB", "CSS"],
    color: "#FBBF24",
    github: "https://github.com/RamyaSathish-rgv/delivery",
    demo: "https://delivery-delta-tawny.vercel.app",
  },
  {
    id: "03",
    title: "Currency Converter",
    category: "Frontend",
    desc: "Interactive currency converter using live exchange rate API with real-time conversions.",
    tags: ["JavaScript", "REST API", "HTML", "CSS"],
    color: "#E07B6A",
    github: "https://github.com/RamyaSathish-rgv/CurrencyCon",
    demo: "https://food-del-y92v.vercel.app/",
  
  },
  {
  id: "04",
  title: "Customer Churn Prediction",
  category: "Machine Learning",
  desc: "Built an end-to-end machine learning pipeline to predict customer churn using preprocessing, feature engineering, and Random Forest classification.",
  tags: [
    "Python",
    "Machine Learning",
    "Random Forest",
    "Pandas",
    "Scikit-learn",
  ],
  color: "#8B5CF6",
  github: "https://github.com/RamyaSathish-rgv/customerchum",
  demo: "",
},
{
  id: "05",
  title: "Movie Genre Prediction",
  category: "Machine Learning",
  desc: "NLP-based machine learning project that predicts movie genres from plot descriptions using TF-IDF vectorization and text classification techniques.",
  tags: [
    "Python",
    "NLP",
    "TF-IDF",
    "Machine Learning",
    "Scikit-learn",
  ],
  color: "#EC4899",
  github: "",
  demo: "",
},
{
  id: "06",
  title: "AI Tourism Recommender",
  category: "Machine Learning",
  desc: "Smart travel engine suggesting destinations based on seasonality, popularity, and user preferences using Scikit-learn.",
  tags: ["Python", "ML", "React", "Flask"],
  color: "#10B981", // Emerald Green vibe
  github: "https://github.com/RamyaSathish-rgv/tourism-ml",
  demo: "https://ai-tourism-demo.vercel.app",
},
{
  id: "07",
  title: "LifeFlow Donor Portal",
  category: "Frontend",
  desc: "A real-time emergency blood donation platform connecting donors and seekers via location-based matching.",
  tags: ["MongoDB", "Express", "React", "Node"],
  color: "#EF4444", // Red emergency vibe
  github: "https://github.com/RamyaSathish-rgv/blooddoner",
  demo: "https://lifeflow-mern.vercel.app",
},
{
  id: "09",
  title: "Travelora",
  category: "Frontend",
  desc: "AI-powered tourism platform for exploring South India.",
  tags: ["React", "Vite", "Tailwind CSS", "Gemini API"],
  color: "#e076db",
  github: "https://github.com/RamyaSathish-rgv/tourism-app",
  demo: "https://tours-travels-app-ri9h.onrender.com/",
  details: {
    overview:
      "Tourism web app with AI trip planning, destination discovery, travel reels, hotels, restaurants, and travel cost estimation.",

    features: [
      "AI Trip Planner",
      "Travel Reels",
      "Hotels & Restaurants",
      "Travel Cost Estimator",
      "Role-based Portal"
    ],

    challenges: [
      "Gemini API integration",
      "Responsive UI",
      "Role-based authentication"
    ]
  }
}
];

export const TECH_TICKER = [
  "Python", "Java", "JavaScript", "React", "Node.js",
  "MongoDB", "HTML", "CSS",
  "AWS S3", "Machine Learning", "GitHub",
];
export const CERTIFICATIONS = [
  {
    id: "01",
    title: "Deployment of CUDA Python on NVIDIA Boards",
    issuer: "ADVI Group of Companies",
    type: "Internship-Cum-Training",
    color: "#367D8A",
    desc: "Completed Internship-Cum-Training focused on deploying CUDA-enabled Python applications on NVIDIA boards and understanding GPU acceleration and parallel computing techniques.",
    skills: [
      "CUDA",
      "Python",
      "GPU Programming",
      "Parallel Computing",
      "NVIDIA Boards",
    ],
  },

  {
    id: "02",
    title: "Storage in Virtual Private Cloud using S3",
    issuer: "Livewire, Salem",
    type: "Internship",
    color: "#FBBF24",
    desc: "Gained hands-on experience with Amazon S3 storage, Virtual Private Cloud (VPC) environments, bucket policies, and secure cloud infrastructure concepts.",
    skills: [
      "AWS S3",
      "Virtual Private Cloud",
      "Cloud Computing",
      "Storage Management",
      "Access Control",
    ],
  },

  {
    id: "03",
    title: "Oracle Cloud Infrastructure 2025 Certified Foundations Associate",
    issuer: "Oracle University",
    type: "Certification",
    color: "#E07B6A",
    desc: "Learned cloud computing fundamentals and Oracle Cloud Infrastructure services through Oracle University certification training.",
    skills: [
      "Oracle Cloud",
      "Cloud Computing",
      "OCI Services",
      "Infrastructure",
    ],
  },

  {
    id: "04",
    title: "Machine Learning Virtual Internship",
    issuer: "CodSoft",
    type: "Internship Offer",
    color: "#4B8BBE",
    desc: "Selected for a Machine Learning Virtual Internship focused on practical machine learning concepts and real-world problem solving.",
    skills: [
      "Machine Learning",
      "Python",
      "Data Science",
      "Model Building",
    ],
  },
];
