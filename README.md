Sure! Here's your complete `README.md` file — all in one place, ready to copy and paste into your GitHub repository:

---

```markdown
# 🩺 Doscy — Medical Doctor Finder Website

**Doscy** is a full-stack medical website that helps users find doctors, search by name or specialty, and submit contact information easily. Designed for simplicity and usability, it features a clean UI and responsive design.

> 🔗 **Live Site**: [www.doscy.me](https://www.doscy.me) / [doscy.me](https://doscy.me)  
> 💻 **GitHub Repo**: [https://github.com/YuvrajD02/Doscy](https://github.com/YuvrajD02/Doscy)

---

## 🚀 Features

- 👨‍⚕️ Doctor Cards with name, specialization, and images
- 🔍 Real-time search functionality
- 📬 Contact form to collect user details
- 💾 Stores form data in MongoDB
- 📱 Fully responsive across devices
- 🌐 Hosted live with a custom domain

---

## 🛠️ Tech Stack

| Frontend                   | Backend              | Database | Hosting      | Domain       |
|----------------------------|----------------------|----------|--------------|--------------|
| HTML, CSS, JavaScript, EJS | Node.js, Express.js  | MongoDB  | Render.com   | Namecheap.com |

---

## 📁 Project Structure

```

Doscy/
├── public/            # Static assets (CSS, images)
├── views/             # EJS templates
├── routes/            # Express route handlers
├── models/            # Mongoose schemas
├── server.js          # Main Express server
├── .env               # Environment variables (Mongo URI etc.)
└── README.md          # Project documentation

```

---

## 📷 Screenshot

> You can add a screenshot like this:

```

![Screenshot](https://www.doscy.me/preview.png)

````

(Replace the link above with your actual screenshot if available)

---

## 📝 Contact Form

**Fields Captured**:
- Name
- Email
- Phone
- Message

Submitted details are stored securely in MongoDB via Mongoose.

---

## ⚙️ Setup Instructions

### 1. Clone the Repository
```bash
git clone https://github.com/YuvrajD02/Doscy.git
cd Doscy
````

### 2. Install Dependencies

```bash
npm install
```

### 3. Create a `.env` File

```
MONGODB_URI=your_mongodb_connection_string
```

### 4. Start the Server

```bash
node server.js
# or
nodemon server.js
```

Visit: [http://localhost:3000](http://localhost:3000)

---

## 🌍 Deployment Details

* App is deployed using [Render](https://render.com)
* GitHub is connected for CI/CD
* Domain registered via [Namecheap](https://namecheap.com)
* Custom domain: [www.doscy.me](https://www.doscy.me)

---

## 🙌 Credits

Created by [Yuvraj D](https://www.linkedin.com/in/your-link)
Special thanks to open-source tools and the developer community!

---

## 📃 License

Licensed under the [MIT License](LICENSE).

```

---

Let me know if you also want:
- A `.env.example` file
- A working preview screenshot added
- Badges (tech, license, etc.) on top of the README

I can generate all of that too!
```
