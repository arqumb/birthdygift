const express = require('express');
const cors = require('cors');
const helmet = require('helmet');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Security middleware
app.use(helmet({
    contentSecurityPolicy: {
        directives: {
            defaultSrc: ["'self'"],
            styleSrc: ["'self'", "'unsafe-inline'", "https://fonts.googleapis.com", "https://cdnjs.cloudflare.com"],
            fontSrc: ["'self'", "https://fonts.gstatic.com", "https://cdnjs.cloudflare.com"],
            scriptSrc: ["'self'", "'unsafe-inline'"],
            scriptSrcAttr: ["'unsafe-inline'"], // Allow inline event handlers
            imgSrc: ["'self'", "data:", "https://images.unsplash.com"],
            connectSrc: ["'self'"]
        }
    }
}));

// CORS middleware
app.use(cors());

// Body parsing middleware
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Serve static files with proper MIME types
app.use(express.static(path.join(__dirname), {
    index: false, // Disable directory indexing
    setHeaders: (res, path) => {
        if (path.endsWith('.js')) {
            res.setHeader('Content-Type', 'application/javascript');
        } else if (path.endsWith('.css')) {
            res.setHeader('Content-Type', 'text/css');
        } else if (path.endsWith('.html')) {
            res.setHeader('Content-Type', 'text/html');
        } else if (path.endsWith('.mp3')) {
            res.setHeader('Content-Type', 'audio/mpeg');
        } else if (path.endsWith('.mp4')) {
            res.setHeader('Content-Type', 'video/mp4');
        } else if (path.endsWith('.jpeg') || path.endsWith('.jpg')) {
            res.setHeader('Content-Type', 'image/jpeg');
        } else if (path.endsWith('.png')) {
            res.setHeader('Content-Type', 'image/png');
        }
        // Add cache headers for better performance
        res.setHeader('Cache-Control', 'public, max-age=3600');
    }
}));

// Specific routes for main files
app.get('/script.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile(path.join(__dirname, 'script.js'));
});

app.get('/styles.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'styles.css'));
});

app.get('/welcome-script.js', (req, res) => {
    res.setHeader('Content-Type', 'application/javascript');
    res.sendFile(path.join(__dirname, 'welcome-script.js'));
});

app.get('/welcome-styles.css', (req, res) => {
    res.setHeader('Content-Type', 'text/css');
    res.sendFile(path.join(__dirname, 'welcome-styles.css'));
});

// Routes
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'welcome.html'));
});

app.get('/welcome', (req, res) => {
    res.sendFile(path.join(__dirname, 'welcome.html'));
});

app.get('/celebration', (req, res) => {
    res.sendFile(path.join(__dirname, 'index.html'));
});

app.get('/index.html', (req, res) => {
    // Redirect to welcome page if accessing index.html directly
    res.redirect('/');
});

// API endpoint to store user data (optional)
app.post('/api/user-data', (req, res) => {
    try {
        const userData = req.body;
        // In a real app, you might want to store this in a database
        // For now, we'll just return success
        res.json({ 
            success: true, 
            message: 'User data received',
            data: userData 
        });
    } catch (error) {
        res.status(500).json({ 
            success: false, 
            message: 'Error processing user data' 
        });
    }
});

// Health check endpoint for Render
app.get('/health', (req, res) => {
    res.json({ 
        status: 'OK', 
        timestamp: new Date().toISOString(),
        message: 'Birthday website is running! 🎉'
    });
});

// Debug endpoint to check file existence
app.get('/debug/files', (req, res) => {
    const fs = require('fs');
    const files = fs.readdirSync(__dirname);
    res.json({
        currentDir: __dirname,
        files: files,
        scriptExists: fs.existsSync(path.join(__dirname, 'script.js')),
        stylesExists: fs.existsSync(path.join(__dirname, 'styles.css')),
        indexExists: fs.existsSync(path.join(__dirname, 'index.html')),
        welcomeExists: fs.existsSync(path.join(__dirname, 'welcome.html'))
    });
});

// 404 handler
app.use((req, res) => {
    res.status(404).sendFile(path.join(__dirname, 'welcome.html'));
});

// Error handler
app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).json({ 
        error: 'Something went wrong!',
        message: 'Please try again later'
    });
});

// Start server
app.listen(PORT, () => {
    console.log(`🎉 Birthday website server is running on port ${PORT}`);
    console.log(`🌐 Open your browser and go to: http://localhost:${PORT}`);
    console.log(`🎂 Welcome page: http://localhost:${PORT}/welcome`);
    console.log(`🎈 Celebration page: http://localhost:${PORT}/celebration`);
});

// Graceful shutdown
process.on('SIGTERM', () => {
    console.log('SIGTERM received, shutting down gracefully');
    process.exit(0);
});

process.on('SIGINT', () => {
    console.log('SIGINT received, shutting down gracefully');
    process.exit(0);
});
