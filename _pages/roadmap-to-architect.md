---
permalink: /fldreamin-roadmap/
title: "Roadmap to Architect"
layout: lu-page
wide: true
description: "Map your path to Salesforce Architect: fill in your goals for each stage, then download your personal roadmap as an image."
---
<!-- NOTE: keep the HTML below free of blank lines. It sits inside a Markdown file, and a blank line can make Markdown rewrite it. -->
<style>
.roadmap{padding:28px}
.roadmap:hover{transform:none;box-shadow:var(--shadow)}
.roadmap .instructions{background:linear-gradient(135deg,var(--brand-navy) 0%,var(--steel) 100%);color:#f4efe6;padding:14px 18px;border-radius:12px;margin-bottom:20px;text-align:center;font-size:.95rem}
.roadmap .instructions strong{color:#f4efe6}
.roadmap .canvas-container{position:relative;width:100%;max-width:1200px;margin:0 auto;background:var(--bg);border-radius:12px;overflow:hidden;border:1px solid var(--line)}
#roadmapCanvas{display:block;width:100%;height:auto;cursor:crosshair}
.roadmap .controls{display:flex;gap:12px;justify-content:center;margin-top:22px;flex-wrap:wrap}
.roadmap .edit-panel{background:var(--bg);padding:20px;border-radius:12px;margin-top:20px;display:none;border:1px solid var(--steel)}
.roadmap .edit-panel.active{display:block}
.roadmap .edit-panel h3{margin-bottom:12px}
.roadmap .edit-panel textarea{width:100%;padding:12px 14px;font:inherit;font-size:1rem;border:1px solid var(--line);border-radius:12px;resize:vertical;min-height:100px;background:#fff;color:var(--ink)}
.roadmap .edit-panel textarea:focus{outline:none;border-color:var(--brand-navy);box-shadow:0 0 0 3px rgba(19,63,105,.15)}
.roadmap .edit-panel .btn{margin-top:12px}
@media (max-width:620px){.roadmap{padding:16px}}
</style>
<section class="page-hero">
  <div class="container">
    <p class="eyebrow">Free tool</p>
    <h1>My Roadmap to Architect</h1>
    <p class="lead">Plot where you are today and where you want to be in the years ahead. Fill in each box, then download your roadmap as an image to keep or share.</p>
  </div>
</section>
<section class="inner">
  <div class="container">
    <div class="card roadmap">
      <div class="instructions"><strong>How to use:</strong> Click any text box to edit it. When you're done, click "Save &amp; Update," then "Download Image" to save your roadmap.</div>
      <div class="canvas-container">
        <canvas id="roadmapCanvas"></canvas>
      </div>
      <div class="edit-panel" id="editPanel">
        <h3>Edit text box</h3>
        <textarea id="editTextarea" placeholder="Enter your text here..."></textarea>
        <button class="btn" type="button" onclick="saveEdit()">Save &amp; Update</button>
        <button class="btn ghost" type="button" onclick="cancelEdit()">Cancel</button>
      </div>
      <div class="controls">
        <button class="btn" type="button" onclick="downloadImage()">Download Image</button>
        <button class="btn ghost" type="button" onclick="resetToDefault()">Reset to Default</button>
      </div>
    </div>
    <p class="after-embed">Want help building the skills on your roadmap? <a href="https://app.usemotion.com/meet/devo-perez/30-min-consultation" target="_blank" rel="noopener">Book a free 30-minute call.</a></p>
  </div>
</section>
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
