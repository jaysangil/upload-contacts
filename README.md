# 🌐 Genesys Cloud Contact Uploader

A web-based tool to upload contacts to a Genesys Cloud Contact List using the Genesys Cloud API.  
This project provides an easy-to-use interface for selecting a contact list and uploading a CSV file.

---

## :pushpin: Features
- ✅ **OAuth Authentication** – Uses Genesys Cloud Implicit Grant Login  
- ✅ **Contact List Selection** – Fetches and displays available contact lists  
- ✅ **CSV Upload Support** – Upload contacts in bulk via a file selection interface  
- ✅ **Stylish UI** – Designed with an aquatic, modern theme  
- ✅ **Error Handling** – Provides alerts for failed uploads and authentication issues  

---

## 🏗 Project Structure


📂 upload-contacts │── 📂 src │ ├── 📄 index.html # Main UI │ ├── 📄 styles.css # Custom Styling │── 📂 server │ ├── 📄 server.js # Node.js Backend (File Upload Handler) │── 📄 .gitignore # Ignores unnecessary files (e.g., node_modules) │── 📄 README.md # Project Documentation


---
## 🚀 Setup & Installation

 1️⃣ Clone the Repository
 
git clone https://github.com/jaysangil/upload-contacts.git

cd upload-contacts

2️⃣ Install Dependencies
bash

npm install

3️⃣ Start the Server
sh

node server.js

4️⃣ Open the Web App

http://localhost:8080

```
```
---
🛠 Tech Stack
Frontend: HTML, CSS, JavaScript (jQuery), Bootstrap 4
Backend: Node.js, Express.js, Multer (for file handling)
API: Genesys Cloud Contact List Import API

---
📜 License

This project is open-source under the MIT License.

---
📧 Contact

For any issues or suggestions, feel free to reach out!

📌 GitHub: jaysangil

