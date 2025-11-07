---
permalink: /fldreamin-roadmap/
title: "Roadmap to Architect"
layout: splash
author_profile: false
---
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>My Roadmap to Architect - Editor</title>
    <style>
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            font-family: 'Comic Sans MS', 'Chalkboard SE', 'Comic Neue', cursive, sans-serif;
            background: linear-gradient(135deg, #f5f7fa 0%, #c3cfe2 100%);
            padding: 20px;
            min-height: 100vh;
        }

        .container {
            max-width: 1400px;
            margin: 0 auto;
            background: white;
            border-radius: 20px;
            padding: 30px;
            box-shadow: 0 10px 40px rgba(0,0,0,0.1);
        }

        h1 {
            text-align: center;
            color: #333;
            margin-bottom: 30px;
            font-size: 2em;
        }

        .instructions {
            background: #e3f2fd;
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
            background: #f0f0f0;
            border-radius: 10px;
            overflow: hidden;
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
            font-weight: bold;
            transition: all 0.3s;
        }

        .download-btn {
            background: #4CAF50;
            color: white;
        }

        .download-btn:hover {
            background: #45a049;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(76, 175, 80, 0.4);
        }

        .reset-btn {
            background: #ff9800;
            color: white;
        }

        .reset-btn:hover {
            background: #e68900;
            transform: translateY(-2px);
            box-shadow: 0 4px 12px rgba(255, 152, 0, 0.4);
        }

        .edit-panel {
            background: #fff3e0;
            padding: 20px;
            border-radius: 10px;
            margin-top: 20px;
            display: none;
        }

        .edit-panel.active {
            display: block;
        }

        .edit-panel h3 {
            margin-bottom: 15px;
            color: #e65100;
        }

        .edit-panel textarea {
            width: 100%;
            padding: 10px;
            font-size: 16px;
            border: 2px solid #ff9800;
            border-radius: 5px;
            resize: vertical;
            font-family: inherit;
            min-height: 80px;
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
        <h1>🏗️ My Roadmap to Architect</h1>
        
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

        // Text box data structure
        const textBoxes = [
            // Top row boxes
            { x: 280, y: 80, width: 240, height: 240, text: '', type: 'rectangle' },
            { x: 720, y: 80, width: 240, height: 240, text: '', type: 'rectangle' },
            
            // Bottom row boxes
            { x: 500, y: 480, width: 240, height: 240, text: '', type: 'rectangle' },
            { x: 940, y: 480, width: 240, height: 240, text: '', type: 'rectangle' },
        ];

        // Timeline hexagons (not editable, but we'll draw them)
        const hexagons = [
            { x: 140, y: 400, text: 'Now', color: '#7ba3d6' },
            { x: 360, y: 400, text: '6 mos - 1\nyr', color: '#6ec5c5' },
            { x: 580, y: 400, text: '1 - 3\nYears', color: '#a8c97f' },
            { x: 800, y: 400, text: '3 - 5\nYears', color: '#f7d977' },
            { x: 1020, y: 400, text: '5 - 7\nYears', color: '#e8a5c9' },
            { x: 1240, y: 400, text: 'Beyond', color: '#b9a5dc' },
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
                ctx.strokeStyle = '#333';
                ctx.lineWidth = 2;
                ctx.stroke();
            } else {
                ctx.fillStyle = color;
                ctx.fill();
                ctx.strokeStyle = '#333';
                ctx.lineWidth = 3;
                ctx.stroke();
            }
            
            ctx.setLineDash([]);
            
            // Draw text
            ctx.fillStyle = '#000';
            ctx.font = 'bold 22px Comic Sans MS';
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
            // Clear canvas
            ctx.fillStyle = '#f0f0f0';
            ctx.fillRect(0, 0, canvas.width, canvas.height);

            // Draw title
            ctx.fillStyle = '#000';
            ctx.font = 'bold 48px Comic Sans MS';
            ctx.textAlign = 'right';
            ctx.fillText('MY roadmap', canvas.width - 80, 100);
            ctx.fillText('to architect', canvas.width - 80, 160);

            // Draw connecting line
            ctx.strokeStyle = '#333';
            ctx.lineWidth = 3;
            ctx.beginPath();
            ctx.moveTo(60, 400);
            ctx.lineTo(canvas.width - 60, 400);
            ctx.stroke();

            // Draw hexagons
            hexagons.forEach((hex, index) => {
                const dashed = index === 1 || index === 3 || index === 5;
                drawHexagon(hex.x, hex.y, 60, hex.color, hex.text, dashed);
            });

            // Draw text boxes
            textBoxes.forEach((box, index) => {
                ctx.save();
                
                // Draw rounded rectangle
                drawRoundedRect(box.x, box.y, box.width, box.height, 20);
                ctx.fillStyle = '#ffffff';
                ctx.fill();
                ctx.strokeStyle = '#333';
                ctx.lineWidth = 3;
                ctx.stroke();

                // Draw text
                if (box.text) {
                    ctx.fillStyle = '#000';
                    ctx.font = '18px Comic Sans MS';
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
