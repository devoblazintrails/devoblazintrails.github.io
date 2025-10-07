---
permalink: /web-to-lead/
title: " "
layout: single
classes: wide
author_profile: true
---

<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    
    <!-- reCAPTCHA Script -->
    <script src="https://www.google.com/recaptcha/api.js"></script>
    <script>
     function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 
    </script>
    
    <style>
        /* Your page styles */
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            margin: 0;
        }
        
        /* Modal Overlay */
        .modal-overlay {
            display: none;
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            background-color: rgba(0, 0, 0, 0.7);
            z-index: 9999;
            animation: fadeIn 0.3s ease-in;
        }
        
        .modal-overlay.show {
            display: flex;
            justify-content: center;
            align-items: center;
        }
        
        /* Modal Container */
        .modal-container {
            background: white;
            border-radius: 8px;
            max-width: 500px;
            width: 90%;
            max-height: 90vh;
            overflow-y: auto;
            position: relative;
            animation: slideIn 0.3s ease-out;
            box-shadow: 0 4px 20px rgba(0, 0, 0, 0.3);
        }
        
        /* Close Button */
        .modal-close {
            position: absolute;
            top: 15px;
            right: 15px;
            font-size: 28px;
            font-weight: bold;
            color: #999;
            cursor: pointer;
            background: none;
            border: none;
            padding: 0;
            line-height: 1;
            z-index: 1;
        }
        
        .modal-close:hover {
            color: #333;
        }
        
        /* Modal Content */
        .modal-content {
            padding: 40px 30px 30px 30px;
        }
        
        .modal-content h2 {
            margin-top: 0;
            margin-bottom: 20px;
            color: #333;
        }
        
        /* Form Styles */
        label {
            display: block;
            margin-bottom: 5px;
            font-weight: bold;
            color: #333;
        }
        
        input[type="text"],
        input[type="email"],
        select {
            width: 100%;
            padding: 10px;
            margin-bottom: 15px;
            border: 1px solid #ddd;
            border-radius: 4px;
            box-sizing: border-box;
            font-size: 14px;
        }
        
        input[type="submit"] {
            background-color: #007bff;
            color: white;
            padding: 12px 30px;
            border: none;
            border-radius: 4px;
            cursor: pointer;
            font-size: 16px;
            width: 100%;
            font-weight: bold;
        }
        
        input[type="submit"]:hover {
            background-color: #0056b3;
        }
        
        .disclaimer {
            font-size: 11px;
            color: #666;
            margin-top: 10px;
            text-align: center;
            line-height: 1.4;
        }
        
        /* Success Message */
        #successMessage {
            display: none;
            padding: 60px 20px;
            text-align: center;
        }
        
        #successMessage h3 {
            margin: 20px 0 10px 0;
            font-size: 24px;
            color: #28a745;
        }
        
        #successMessage p {
            margin: 10px 0 0 0;
            color: #666;
        }
        
        /* Loading Spinner */
        .spinner {
            border: 4px solid #f3f3f3;
            border-top: 4px solid #007bff;
            border-radius: 50%;
            width: 50px;
            height: 50px;
            animation: spin 1s linear infinite;
            margin: 0 auto 20px auto;
        }
        
        @keyframes spin {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
        }
        
        /* Checkmark Animation */
        .checkmark {
            width: 60px;
            height: 60px;
            border-radius: 50%;
            display: block;
            stroke-width: 3;
            stroke: #28a745;
            stroke-miterlimit: 10;
            margin: 0 auto 20px auto;
            box-shadow: inset 0px 0px 0px #28a745;
            animation: fill .4s ease-in-out .4s forwards, scale .3s ease-in-out .9s both;
        }
        
        .checkmark-circle {
            stroke-dasharray: 166;
            stroke-dashoffset: 166;
            stroke-width: 3;
            stroke-miterlimit: 10;
            stroke: #28a745;
            fill: none;
            animation: stroke 0.6s cubic-bezier(0.65, 0, 0.45, 1) forwards;
        }
        
        .checkmark-check {
            transform-origin: 50% 50%;
            stroke-dasharray: 48;
            stroke-dashoffset: 48;
            animation: stroke 0.3s cubic-bezier(0.65, 0, 0.45, 1) 0.8s forwards;
        }
        
        @keyframes stroke {
            100% { stroke-dashoffset: 0; }
        }
        
        @keyframes scale {
            0%, 100% { transform: none; }
            50% { transform: scale3d(1.1, 1.1, 1); }
        }
        
        @keyframes fill {
            100% { box-shadow: inset 0px 0px 0px 30px #28a745; }
        }
        
        /* Animations */
        @keyframes fadeIn {
            from { opacity: 0; }
            to { opacity: 1; }
        }
        
        @keyframes slideIn {
            from { 
                opacity: 0;
                transform: translateY(-50px);
            }
            to { 
                opacity: 1;
                transform: translateY(0);
            }
        }
        
        @keyframes fadeOut {
            from { opacity: 1; transform: translateY(0); }
            to { opacity: 0; transform: translateY(-10px); }
        }
        
        .fade-out {
            animation: fadeOut 0.3s ease-out forwards;
        }
    </style>
</head>
<body>
    <!-- Your page content -->
    <h1>Welcome to Our Site</h1>
    <p>This is your main page content. The modal will appear after 5 seconds.</p>
    <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>

    <!-- Modal Overlay -->
    <div id="modalOverlay" class="modal-overlay">
        <div class="modal-container">
            <button class="modal-close" onclick="closeModal()">&times;</button>
            
            <div class="modal-content">
                <!-- Loading/Success overlay (initially hidden) -->
                <div id="loadingOverlay" style="display: none; position: absolute; top: 0; left: 0; right: 0; bottom: 0; background: white; border-radius: 8px; z-index: 10;">
                    <div style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100%; padding: 40px;">
                        <div class="spinner" id="loadingSpinner"></div>
                        <svg class="checkmark" id="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" style="display: none;">
                            <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                            <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                        </svg>
                        <h3 id="submittingText" style="margin: 20px 0 0 0;">Submitting...</h3>
                    </div>
                </div>

                <!-- Form Content -->
                <div id="formContent">
                    <h2>Subscribe to Our Newsletter</h2>
                    
                    <form id="webToLeadForm" action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DRt00000GxBuM" method="POST">
                        <input type="hidden" name='captcha_settings' value='{"keyname":"LUS","fallback":"true","orgId":"00DRt00000GxBuM","ts":""}'>
                        <input type="hidden" name="oid" value="00DRt00000GxBuM">
                        <input type="hidden" name="retURL" id="dynamicRetURL" value="">
                        
                        <label for="last_name">First Name</label>
                        <input id="last_name" maxlength="80" name="last_name" size="20" type="text" required/>
                        
                        <label for="email">Email Address</label>
                        <input id="email" maxlength="80" name="email" size="20" type="email" required/>
                        
                        <label for="00NUV00000P9iuf">Certification Interest</label>
                        <select id="00NUV00000P9iuf" name="00NUV00000P9iuf" title="Area of Interest" required>
                            <option value="">--None--</option>
                            <option value="Self-paced Executive Coaching Certification Programs">Self-paced Executive Coaching Certification Programs</option>
                            <option value="ICF Executive Coaching Certification Programs">ICF Executive Coaching Certification Programs</option>
                            <option value="Team Coaching Certification">Team Coaching Certification</option>
                            <option value="In-Person Seminars for Executive Coaching Certification">In-Person Seminars for Executive Coaching Certification</option>
                            <option value="Accelerated Executive Coaching Certification Programs">Accelerated Executive Coaching Certification Programs</option>
                            <option value="Internal Coach Training">Internal Coach Training</option>
                            <option value="Coach Training for Management Consultants">Coach Training for Management Consultants</option>
                            <option value="Upgrade to PCC">Upgrade to PCC</option>
                        </select>
                        
                        <input id="lead_source" name="lead_source" type="hidden" value="Newsletter"/>
                        <input id="gad_source" name="00NHs00000G6o1p" type="hidden"/>
                        <input id="gad_campaignid" name="00NHs00000G6o1u" type="hidden"/>
                        <input id="gclid" name="00NHs00000G6o24" type="hidden"/>
                        
                        <!-- reCAPTCHA Widget -->
                        <div class="g-recaptcha" data-sitekey="6LfP5ncrAAAAAKteCgCl1uFl8CPxX6-jhdIVORVE"></div><br>
                        
                        <input type="submit" name="submit" value="Submit Request">
                        
                        <p class="disclaimer">
                            By submitting this form, you'll be briefly redirected to confirm your submission.
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>

    <script>
        // Modal functions
        function openModal() {
            document.getElementById('modalOverlay').classList.add('show');
            document.body.style.overflow = 'hidden'; // Prevent background scrolling
        }
        
        function closeModal() {
            document.getElementById('modalOverlay').classList.remove('show');
            document.body.style.overflow = ''; // Restore scrolling
        }
        
        // Close modal when clicking outside the modal container
        document.getElementById('modalOverlay').addEventListener('click', function(event) {
            if (event.target === this) {
                closeModal();
            }
        });
        
        // Close modal with Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === 'Escape') {
                closeModal();
            }
        });
        
        // Check if user is returning from form submission
        function checkIfReturningFromSubmission() {
            const urlParams = new URLSearchParams(window.location.search);
            const success = urlParams.get('success');
            
            if (success === 'true') {
                // User just submitted - clean URL and DON'T show modal
                if (window.history && window.history.replaceState) {
                    const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
                    window.history.replaceState({path: newUrl}, '', newUrl);
                }
                
                // Reset form for next time
                document.getElementById('webToLeadForm').reset();
                document.getElementById('loadingOverlay').style.display = 'none';
                
                return true; // Returning from submission
            }
            return false; // Normal page load
        }
        
        // Show modal after 5 seconds ONLY if not returning from submission
        setTimeout(function() {
            if (!checkIfReturningFromSubmission()) {
                openModal();
            }
        }, 5000);
        
        // Also check immediately on page load
        checkIfReturningFromSubmission();

        // Form submission functions
        function setDynamicReturnURL() {
            try {
                const currentUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;
                const returnUrl = currentUrl + '?success=true';
                const retUrlField = document.getElementById('dynamicRetURL');
                if (retUrlField) {
                    retUrlField.value = returnUrl;
                }
            } catch (error) {
                console.log('Error setting return URL:', error);
            }
        }

        function captureURLParameters() {
            try {
                const urlParams = new URLSearchParams(window.location.search);
                
                const googleAdsParams = {
                    'gclid': 'gclid',
                    'gad_source': 'gad_source',
                    'gad_campaignid': 'gad_campaignid',
                    'gbraid': 'gbraid'
                };
                
                for (const [param, fieldId] of Object.entries(googleAdsParams)) {
                    const value = urlParams.get(param);
                    const field = document.getElementById(fieldId);
                    
                    if (field && value) {
                        field.value = value;
                        console.log('Captured ' + param + ': ' + value);
                    }
                }
            } catch (error) {
                console.log('Error capturing URL parameters:', error);
            }
        }

        // Initialize
        window.addEventListener('load', function() {
            setDynamicReturnURL();
            captureURLParameters();
        });

        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('webToLeadForm');
            if (form) {
                form.addEventListener('submit', function(e) {
                    // Prevent default form submission temporarily
                    e.preventDefault();
                    
                    // Capture parameters before showing loading
                    setDynamicReturnURL();
                    captureURLParameters();
                    
                    // Show loading overlay immediately
                    document.getElementById('loadingOverlay').style.display = 'block';
                    
                    console.log('Form submitting with retURL:', document.getElementById('dynamicRetURL').value);
                    
                    // After 0.8 seconds, show success
                    setTimeout(function() {
                        document.getElementById('loadingSpinner').style.display = 'none';
                        document.getElementById('checkmark').style.display = 'block';
                        document.getElementById('submittingText').textContent = 'Success!';
                        
                        // Wait 1.5 seconds showing success, then actually submit the form
                        setTimeout(function() {
                            // Submit the form for real now
                            e.target.submit();
                        }, 1500);
                    }, 800);
                });
            }
        });

        setDynamicReturnURL();
        captureURLParameters();
    </script>
    </script>
</body>
</html>
