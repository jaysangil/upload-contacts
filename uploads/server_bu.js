const express = require('express');
const cors = require('cors');
const path = require('path');
const multer = require('multer');
const axios = require('axios');

const app = express();
const port = 8080;

// Enable CORS and JSON/form parsing
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Use multer with in-memory storage for file uploads
const upload = multer({ storage: multer.memoryStorage() });

// Serve static files from the "src" folder
app.use(express.static(path.join(__dirname, 'src')));

// Endpoint to handle file uploads
app.post('/upload-contacts', upload.single('file'), async (req, res) => {
  const { contactListId } = req.body;
  const file = req.file;
  if (!contactListId || !file) {
    return res.status(400).json({ error: 'Missing contactListId or file' });
  }

  // Retrieve the access token from the custom header
  const accessToken = req.headers['x-access-token'];
  if (!accessToken) {
    return res.status(400).json({ error: 'Missing access token' });
  }

  // Genesys Cloud Upload Contacts API endpoint
  const uploadUrl = 'https://apps.usw2.pure.cloud/uploads/v2/contactlist';

  // Build form-data using the 'form-data' package
  const FormData = require('form-data');
  const formData = new FormData();
  formData.append('file', file.buffer, { filename: file.originalname });
  formData.append('fileType', 'contactlist');
  formData.append('contact-id-name', 'Contact ID');

  try {
    const response = await axios.post(uploadUrl, formData, {
      headers: {
        'Authorization': `Bearer ${accessToken}`,
        ...formData.getHeaders()
      }
    });
    res.json(response.data);
  } catch (error) {
    console.error('Upload Error:', error.response ? error.response.data : error.message);
    res.status(500).json({ error: 'Failed to upload file' });
  }
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});
