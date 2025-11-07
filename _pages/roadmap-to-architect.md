---
permalink: /fldreamin-roadmap/
title: "Roadmap to Architect"
layout: splash
author_profile: false
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Roadmap to Architect</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Montserrat:wght@600;700&family=Poppins:wght@600;700&family=Open+Sans:wght@400;600&family=Inter:wght@400;600&display=swap" rel="stylesheet">
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Open Sans', 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
            background: #f4efe6;
            padding: 20px;
            min-height: 100vh;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 20px 60px rgba(0,0,0,0.3);
        }

        h1 {
            text-align: center;
            color: #2c2c2c;
            margin-bottom: 30px;
            font-size: 2em;
            font-weight: 700;
            font-family: 'Montserrat', 'Poppins', sans-serif;
        }

        .instructions {
            background: linear-gradient(135deg, #133f69 0%, #728ca3 100%);
            color: white;
            padding: 15px;
            border-radius: 10px;
            margin-bottom: 20px;
            text-align: center;
        }

        .canvas-container {
            position: relative;
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            background: #f4efe6;
            border-radius: 10px;
            overflow: hidden;
            box-shadow: 0 4px 15px rgba(0,0,0,0.1);
        }

        #roadmapCanvas {
            display: block;
            width: 100%;
            height: auto;
            cursor: crosshair;
        }

        .controls {
            display: flex;
            gap: 15px;
            justify-content: center;
            margin-top: 20px;
            flex-wrap: wrap;
        }

        button {
            padding: 12px 30px;
            font-size: 16px;
            border: none;
            border-radius: 8px;
            cursor: pointer;
            font-weight: 600;
            transition: all 0.3s;
            font-family: inherit;
        }

        .download-btn {
            background: #e3c16f;
            color: #2c2c2c;
        }

        .download-btn:hover {
            background: #c2b280;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(227, 193, 111, 0.4);
        }

        .reset-btn {
            background: #133f69;
            color: white;
        }

        .reset-btn:hover {
            background: #0f2f4f;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(19, 63, 105, 0.4);
        }

        .edit-panel {
            background: #f4efe6;
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
            display: none;
            border: 2px solid #728ca3;
        }

        .edit-panel.active {
            display: block;
        }

        .edit-panel h3 {
            margin-bottom: 15px;
            color: #2c2c2c;
            font-weight: 700;
            font-family: 'Montserrat', 'Poppins', sans-serif;
        }

        .edit-panel textarea {
            width: 100%;
            padding: 12px;
            font-size: 16px;
            border: 2px solid #728ca3;
            border-radius: 8px;
            resize: vertical;
            font-family: inherit;
            min-height: 100px;
            transition: border-color 0.3s;
            background: white;
        }

        .edit-panel textarea:focus {
            outline: none;
            border-color: #133f69;
            box-shadow: 0 0 0 3px rgba(19, 63, 105, 0.1);
        }

        .edit-panel button {
            margin-top: 10px;
        }

        @media (max-width: 768px) {
            .container {
                padding: 15px;
            }

            h1 {
                font-size: 1.5em;
            }

            button {
                padding: 10px 20px;
                font-size: 14px;
            }
        }
    </style>
</head>
<body>
    <div class="container">
        <h1>🎯 My Roadmap to Architect</h1>
        
        <div class="instructions">
            <strong>📝 How to use:</strong> Click on any text box to edit it. When done, click "Save & Update" then "Download Image" to save your roadmap!
        </div>

        <div class="canvas-container">
            <canvas id="roadmapCanvas"></canvas>
        </div>

        <div class="edit-panel" id="editPanel">
            <h3>Edit Text Box</h3>
            <textarea id="editTextarea" placeholder="Enter your text here..."></textarea>
            <button class="download-btn" onclick="saveEdit()">Save & Update</button>
            <button class="reset-btn" onclick="cancelEdit()">Cancel</button>
        </div>

        <div class="controls">
            <button class="download-btn" onclick="downloadImage()">📥 Download Image</button>
            <button class="reset-btn" onclick="resetToDefault()">🔄 Reset to Default</button>
        </div>
    </div>

    <script>
        const canvas = document.getElementById('roadmapCanvas');
        const ctx = canvas.getContext('2d');
        
        // Set canvas size
        canvas.width = 1400;
        canvas.height = 800;

        let currentEditBox = null;

        // Love United Solutions official brand colors
        const colors = {
            navyCore: '#133f69',      // Primary brand color
            goldenTaupe: '#c2b280',   // Secondary brand color
            ivoryMist: '#f4efe6',     // Background color
            steelBlue: '#728ca3',     // Accent color
            charcoalText: '#2c2c2c',  // Text color
            warmGoldPop: '#e3c16f',   // CTA/highlight color
            background: '#f4efe6',
            text: '#2c2c2c',
            border: '#2c2c2c'
        };

        // Text box data structure
        const textBoxes = [
            // Top row boxes
            { x: 280, y: 80, width: 240, height: 240, text: '', type: 'rectangle' },
            { x: 720, y: 80, width: 240, height: 240, text: '', type: 'rectangle' },
            
            // Bottom row boxes
            { x: 500, y: 480, width: 240, height: 240, text: '', type: 'rectangle' },
            { x: 940, y: 480, width: 240, height: 240, text: '', type: 'rectangle' },
        ];

        // Timeline hexagons with blue gradient progression from Now to Beyond
        const hexagons = [
            { x: 140, y: 400, text: 'Now', color: '#133f69' },           // Navy Core (darkest)
            { x: 360, y: 400, text: '6 mos - 1\nyr', color: '#1a5080' }, // Slightly lighter navy
            { x: 580, y: 400, text: '1 - 3\nYears', color: '#2a6599' },  // Medium navy-blue
            { x: 800, y: 400, text: '3 - 5\nYears', color: '#4a7aa8' },  // Medium blue
            { x: 1020, y: 400, text: '5 - 7\nYears', color: '#5a88b5' }, // Lighter blue
            { x: 1240, y: 400, text: 'Beyond', color: '#728ca3' },       // Steel Blue (lightest)
        ];

        function drawHexagon(x, y, size, color, text, dashed = false) {
            ctx.save();
            
            // Draw hexagon
            ctx.beginPath();
            for (let i = 0; i < 6; i++) {
                const angle = (Math.PI / 3) * i - Math.PI / 2;
                const hx = x + size * Math.cos(angle);
                const hy = y + size * Math.sin(angle);
                if (i === 0) ctx.moveTo(hx, hy);
                else ctx.lineTo(hx, hy);
            }
            ctx.closePath();
            
            if (dashed) {
                ctx.setLineDash([8, 8]);
                ctx.strokeStyle = colors.border;
                ctx.lineWidth = 2.5;
                ctx.stroke();
            } else {
                ctx.fillStyle = color;
                ctx.fill();
                ctx.strokeStyle = colors.border;
                ctx.lineWidth = 3;
                ctx.stroke();
            }
            
            ctx.setLineDash([]);
            
            // Draw text
            ctx.fillStyle = '#ffffff';
            ctx.font = 'bold 22px Montserrat, Poppins, -apple-system, BlinkMacSystemFont, sans-serif';
            ctx.textAlign = 'center';
            ctx.textBaseline = 'middle';
            
            const lines = text.split('\n');
            const lineHeight = 26;
            const startY = y - ((lines.length - 1) * lineHeight) / 2;
            
            lines.forEach((line, i) => {
                ctx.fillText(line, x, startY + i * lineHeight);
            });
            
            ctx.restore();
        }

        function drawRoundedRect(x, y, width, height, radius) {
            ctx.beginPath();
            ctx.moveTo(x + radius, y);
            ctx.lineTo(x + width - radius, y);
            ctx.quadraticCurveTo(x + width, y, x + width, y + radius);
            ctx.lineTo(x + width, y + height - radius);
            ctx.quadraticCurveTo(x + width, y + height, x + width - radius, y + height);
            ctx.lineTo(x + radius, y + height);
            ctx.quadraticCurveTo(x, y + height, x, y + height - radius);
            ctx.lineTo(x, y + radius);
            ctx.quadraticCurveTo(x, y, x + radius, y);
            ctx.closePath();
        }

        function wrapText(text, maxWidth) {
            const words = text.split(' ');
            const lines = [];
            let currentLine = '';

            words.forEach(word => {
                const testLine = currentLine + (currentLine ? ' ' : '') + word;
                const metrics = ctx.measureText(testLine);
                
                if (metrics.width > maxWidth && currentLine) {
                    lines.push(currentLine);
                    currentLine = word;
                } else {
                    currentLine = testLine;
                }
            });
            
            if (currentLine) {
                lines.push(currentLine);
            }
            
            return lines;
        }

        function drawRoadmap() {
            // Clear canvas with white background
            ctx.fillStyle = colors.background;
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw title in Navy Core
            ctx.fillStyle = '#133f69';
            ctx.font = 'bold 48px Montserrat, Poppins, -apple-system, BlinkMacSystemFont, sans-serif';
            ctx.textAlign = 'right';
            ctx.fillText('MY roadmap', canvas.width - 80, 100);
            ctx.fillText('to architect', canvas.width - 80, 160);
            
            // Draw subtitle in Navy Core
            ctx.fillStyle = '#133f69';
            ctx.font = '20px "Open Sans", Inter, sans-serif';
            ctx.fillText('commitment made 11.7.25', canvas.width - 80, 195);

            // Draw connecting line
            ctx.strokeStyle = colors.border;
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(60, 400);
            ctx.lineTo(canvas.width - 60, 400);
            ctx.stroke();

            // Draw hexagons - all solid and readable
            hexagons.forEach((hex, index) => {
                drawHexagon(hex.x, hex.y, 60, hex.color, hex.text, false);
            });

            // Draw text boxes
            textBoxes.forEach((box, index) => {
                ctx.save();
                
                // Draw rounded rectangle with shadow
                ctx.shadowColor = 'rgba(0, 0, 0, 0.1)';
                ctx.shadowBlur = 10;
                ctx.shadowOffsetX = 0;
                ctx.shadowOffsetY = 4;
                
                drawRoundedRect(box.x, box.y, box.width, box.height, 15);
                ctx.fillStyle = '#ffffff';
                ctx.fill();
                
                ctx.shadowColor = 'transparent';
                ctx.strokeStyle = colors.border;
                ctx.lineWidth = 2.5;
                ctx.stroke();

                // Draw text
                if (box.text) {
                    ctx.fillStyle = colors.text;
                    ctx.font = '18px "Open Sans", Inter, -apple-system, BlinkMacSystemFont, sans-serif';
                    ctx.textAlign = 'left';
                    ctx.textBaseline = 'top';
                    
                    const padding = 15;
                    const maxWidth = box.width - (padding * 2);
                    const lines = wrapText(box.text, maxWidth);
                    const lineHeight = 24;
                    
                    lines.forEach((line, i) => {
                        ctx.fillText(line, box.x + padding, box.y + padding + (i * lineHeight));
                    });
                }
                
                ctx.restore();
            });
        }

        // Click detection
        canvas.addEventListener('click', (e) => {
            const rect = canvas.getBoundingClientRect();
            const scaleX = canvas.width / rect.width;
            const scaleY = canvas.height / rect.height;
            const x = (e.clientX - rect.left) * scaleX;
            const y = (e.clientY - rect.top) * scaleY;

            // Check if click is in a text box
            textBoxes.forEach((box, index) => {
                if (x >= box.x && x <= box.x + box.width &&
                    y >= box.y && y <= box.y + box.height) {
                    editBox(index);
                }
            });
        });

        function editBox(index) {
            currentEditBox = index;
            document.getElementById('editTextarea').value = textBoxes[index].text;
            document.getElementById('editPanel').classList.add('active');
            document.getElementById('editTextarea').focus();
        }

        function saveEdit() {
            if (currentEditBox !== null) {
                textBoxes[currentEditBox].text = document.getElementById('editTextarea').value;
                drawRoadmap();
                cancelEdit();
            }
        }

        function cancelEdit() {
            currentEditBox = null;
            document.getElementById('editPanel').classList.remove('active');
        }

        function downloadImage() {
            const link = document.createElement('a');
            link.download = 'my-roadmap-to-architect.png';
            link.href = canvas.toDataURL('image/png');
            link.click();
        }

        function resetToDefault() {
            if (confirm('Are you sure you want to reset all text boxes?')) {
                textBoxes.forEach(box => box.text = '');
                drawRoadmap();
                cancelEdit();
            }
        }

        // Initial draw
        drawRoadmap();

        // Handle window resize
        window.addEventListener('resize', () => {
            drawRoadmap();
        });
    </script>
</body>
</html>
