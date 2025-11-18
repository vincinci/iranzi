// Simple compilation script to copy compiled JS files
const fs = require('fs');
const path = require('path');

const distDir = './dist';
const targetDir = './';

// Copy compiled files
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
    console.log('✓ Compilation complete!');
} else {
    console.error('dist directory not found. Run "npm run build" first.');
}
