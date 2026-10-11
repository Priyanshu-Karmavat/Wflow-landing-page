# NovaFlow — Animated SaaS Landing Page

A modern, responsive SaaS landing page built with the MERN stack. NovaFlow features smooth animations, interactive product showcases, responsive navigation, pricing plans, testimonials, FAQs, and a MongoDB-backed contact form.

## ✨ Features

- **Modern UI** — Dark theme, gradient accents, glassmorphism, and responsive layouts.
- **Smooth animations** — Scroll reveals, floating cards, animated statistics, and transitions with Framer Motion.
- **Responsive navigation** — Sticky navbar, active-section highlighting, scroll progress, and mobile menu.
- **Interactive product showcase** — Switch between Projects, Analytics, and Automation dashboards.
- **Animated logo marquee** — Horizontally scrolling logo strip.
- **Use cases** — Interactive tabs for Product, Marketing, Engineering, and Operations teams.
- **Features section** — Highlights the core platform capabilities.
- **How it works** — Explains the product in three steps.
- **Testimonials** — Customer review cards with animated entrances.
- **Pricing section** — Starter, Growth, and Scale plan layouts.
- **FAQ accordion** — Expandable answers with smooth transitions.
- **Contact form** — Sends submissions to an Express API and stores them in MongoDB.
- **Responsive footer** — Navigation links and social link placeholders.
- **No Lucide dependency** — Uses CSS, text symbols, and SVG graphics for visual elements.

## 🛠️ Tech Stack

### Frontend
- React
- Vite
- Framer Motion
- CSS3
- JavaScript (ES Modules)

### Backend
- Node.js
- Express.js
- MongoDB
- Mongoose
- CORS
- dotenv

## 📁 Project Structure

```text
novaflow/
├── client/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Hero.jsx
│   │   │   ├── LogoMarquee.jsx
│   │   │   ├── Stats.jsx
│   │   │   ├── Features.jsx
│   │   │   ├── HowItWorks.jsx
│   │   │   ├── ProductShowcase.jsx
│   │   │   ├── UseCases.jsx
│   │   │   ├── Testimonials.jsx
│   │   │   ├── Pricing.jsx
│   │   │   ├── FAQ.jsx
│   │   │   ├── CTA.jsx
│   │   │   └── Footer.jsx
│   │   ├── App.jsx
│   │   ├── main.jsx
│   │   └── index.css
│   ├── index.html
│   ├── package.json
│   └── vite.config.js
│
├── server/
│   ├── models/
│   │   └── Contact.js
│   ├── routes/
│   │   └── contact.js
│   ├── .env.example
│   ├── package.json
│   └── server.js
│
├── .gitignore
├── package.json
└── README.md
```

## ⚙️ Prerequisites

Install the following before starting:

- [Node.js](https://nodejs.org/) and npm
- [Git](https://git-scm.com/)
- [MongoDB Community Server](https://www.mongodb.com/try/download/community) or a [MongoDB Atlas](https://www.mongodb.com/atlas) database

## 🚀 Getting Started

### 1. Clone the repository

Replace `YOUR-USERNAME` with your GitHub username.

```bash
git clone https://github.com/YOUR-USERNAME/novaflow.git
cd novaflow
```

### 2. Install dependencies

From the project root, run:

```bash
npm run install-all
```

This installs the root dependencies and the dependencies for both the frontend and backend.

### 3. Configure environment variables

Create a `.env` file inside the `server` folder.

Copy the contents of `server/.env.example` into it:

```env
PORT=5000
MONGO_URI=mongodb://127.0.0.1:27017/novaflow
CLIENT_URL=http://localhost:5173
```

**Important:** Ensure your local MongoDB server is running when using the local connection string.

If you use MongoDB Atlas, replace `MONGO_URI` with your Atlas connection string and make sure your database user and network access are configured correctly.

Never commit your actual `.env` file or expose database credentials in your public repository.

### 4. Start the application

From the project root, run:

```bash
npm run dev
```

The application starts both the frontend and backend.

| Service | URL |
|---|---|
| React frontend | http://localhost:5173 |
| Express backend | http://localhost:5000 |
| API health check | http://localhost:5000/api/health |

Vite proxies requests from `/api` to the Express backend during local development.

## 🔌 API Endpoints

### Health check

**GET** `/api/health`

Checks whether the backend API is running.

Example response:

```json
{
  "success": true,
  "message": "NovaFlow API is running."
}
```

### Submit a contact message

**POST** `/api/contact`

Accepts a contact form submission.

Request body:

```json
{
  "name": "Jane Doe",
  "email": "jane@example.com",
  "message": "I would like to learn more about NovaFlow."
}
```

Successful submissions are stored in MongoDB through Mongoose.

The API performs basic required-field and email validation. Additional rate limiting, spam protection, and production-grade validation should be added before a public production launch.

## 🧪 Available Scripts

Run these commands from the project root.

| Command | Description |
|---|---|
| `npm run install-all` | Install all project dependencies |
| `npm run dev` | Start the frontend and backend in development mode |
| `npm run client` | Start the frontend only |
| `npm run server` | Start the backend in development mode |
| `npm run build` | Build the frontend for production |
| `npm start` | Start the backend in production mode |

The frontend and backend can also be started independently from their respective folders using their local npm scripts.

## 🎨 Customization

### Change the branding
Update the NovaFlow name, logo mark, page title, and brand colors to match your project.

### Customize the styling
Edit `client/src/index.css` to change:
- Colors and gradients
- Typography
- Layout and spacing
- Animation styles
- Responsive breakpoints

### Update content
Edit the relevant component files to customize:
- Hero heading and CTA
- Features and use cases
- Product showcase tabs
- Testimonials
- Pricing plans
- FAQ answers
- Contact information

**Note:** The company names, testimonial identities, pricing, and animated statistics currently use demo content. Replace them with accurate information before publishing.

## 📦 Production Build

Build the frontend with:

```bash
npm run build
```

Vite generates the production frontend files in:

```text
client/dist/
```

The Express API is a separate service in the current configuration. For deployment, configure frontend hosting, backend hosting, production environment variables, MongoDB access, and the production API URL.

## 🔒 Security Notes

- Keep all secrets in environment variables.
- Never commit `.env` files or MongoDB credentials.
- Configure CORS to allow only your intended frontend origins.
- Add API rate limiting and stronger request validation before launch.
- Use HTTPS in production.
- Keep dependencies updated and review security advisories.

## 🌐 Deployment

A possible deployment setup is:

- **Frontend:** [Vercel](https://vercel.com/) or [Netlify](https://www.netlify.com/)
- **Backend:** A Node.js hosting provider such as [Render](https://render.com/)
- **Database:** [MongoDB Atlas](https://www.mongodb.com/atlas)

The production frontend needs to call the deployed Express API rather than rely on Vite's local development proxy. Configure the appropriate production API URL when deploying.

## 🤝 Contributing

Contributions, suggestions, and improvements are welcome.

1. Fork the repository.
2. Create a feature branch.
3. Make your changes.
4. Test the application.
5. Submit a pull request.

## 📄 License

Choose and add an appropriate open-source license before distributing this project. Until a license is added, assume that the project is not granted an open-source license by default.

---

**Built with React, Vite, Framer Motion, Express, and MongoDB.**
