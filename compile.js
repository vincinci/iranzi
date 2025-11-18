// Simple compilation script to copy compiled JS files
const fs = require('fs');
const path = require('path');

const distDir = './dist';
const targetDir = './';
const publicDir = './public';

// Create public directory
if (!fs.existsSync(publicDir)) {
    fs.mkdirSync(publicDir);
}

// Copy compiled files to root
if (fs.existsSync(distDir)) {
    const files = fs.readdirSync(distDir);
    files.forEach(file => {
        if (file.endsWith('.js')) {
            const srcPath = path.join(distDir, file);
            const destPath = path.join(targetDir, file);
            fs.copyFileSync(srcPath, destPath);
            console.log(`Copied ${file} to root directory`);
        }
    });
}

// Copy necessary files to public directory
const filesToCopy = [
    'index.html',
    'styles.css',
    'app.js',
    'particles.js',
    'theme.js',
    'typing.js',
    'resume.js',
    'animations.js'
];

filesToCopy.forEach(file => {
    if (fs.existsSync(file)) {
        fs.copyFileSync(file, path.join(publicDir, file));
        console.log(`Copied ${file} to public directory`);
    }
});

console.log('✓ Compilation complete!');
