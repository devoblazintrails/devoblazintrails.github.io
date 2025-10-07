---
permalink: /web-to-lead/
title: " "
layout: single
classes: wide
author_profile: true
---

<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Newsletter Signup</title>
    
    <script src="https://www.google.com/recaptcha/api.js"></script>
    <script>
     function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 
    </script>
    
    <style>
        body {
            font-family: Arial, sans-serif;
            padding: 20px;
            margin: 0;
        }
        
        #formContainer {
            max-width: 500px;
            margin: 50px auto;
            position: relative;
        }
        
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
        
        #loadingOverlay {
            display: none;
            position: absolute;
            top: 0;
            left: 0;
            right: 0;
            bottom: 0;
            background: white;
            border-radius: 8px;
            z-index: 10;
        }
        
        #loadingOverlay .loading-content {
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100%;
            padding: 40px;
        }
        
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
        
        #submittingText {
            margin: 20px 0 0 0;
            font-size: 20px;
            color: #333;
        }
    </style>
</head>
<body>
    <div id="formContainer">
        <div id="loadingOverlay">
            <div class="loading-content">
                <div class="spinner" id="loadingSpinner"></div>
                <svg class="checkmark" id="checkmark" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 52 52" style="display: none;">
                    <circle class="checkmark-circle" cx="26" cy="26" r="25" fill="none"/>
                    <path class="checkmark-check" fill="none" d="M14.1 27.2l7.1 7.2 16.7-16.8"/>
                </svg>
                <h3 id="submittingText">Submitting...</h3>
            </div>
        </div>

        <div id="formContent">
            <h2>Subscribe to Our Newsletter</h2>
            
            <form id="webToLeadForm" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D300000001Zrp" method="POST">
                <input type="hidden" name='captcha_settings' value='{"keyname":"LU_TestSite","fallback":"true","orgId":"00D300000001Zrp","ts":""}'>
                <input type="hidden" name="oid" value="00D300000001Zrp">
                <input type="hidden" name="retURL" id="dynamicRetURL" value="">
                <input type="hidden" name="lead_source" value="Newsletter"/>
                <input type="hidden" name="00NUV00000qK4fq" id="00NUV00000qK4fq" value=true/>                
                <input type="hidden" name="00NHs00000G6o1p" id="gad_source"/>
                <input type="hidden" name="00NHs00000G6o1u" id="gad_campaignid"/>
                <input type="hidden" name="00NHs00000G6o24" id="gclid"/>
                
                <label for="last_name">First Name</label>
                <input id="last_name" maxlength="80" name="last_name" type="text" required/>
                
                <label for="email">Email Address</label>
                <input id="email" maxlength="80" name="email" type="email" required/>
                
                <label for="00NUV00000P9iuf">Certification Interest</label>
                <select id="00NUV00000P9iuf" name="00NUV00000P9iuf" required>
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
                
                <div class="g-recaptcha" data-sitekey="6LfP5ncrAAAAAKteCgCl1uFl8CPxX6-jhdIVORVE"></div><br>
                
                <input type="submit" value="Submit Request">
                
            </form>
        </div>
    </div>

    <script>
        function setDynamicReturnURL() {
            try {
                const retUrlField = document.getElementById('dynamicRetURL');
                if (retUrlField) {
                    retUrlField.value = window.location.protocol + '//' + window.location.host + window.location.pathname + '?success=true';
                }
            } catch (e) {}
        }

        function captureURLParameters() {
            try {
                const urlParams = new URLSearchParams(window.location.search);
                const params = {'gclid': 'gclid', 'gad_source': 'gad_source', 'gad_campaignid': 'gad_campaignid', 'gbraid': 'gbraid'};
                for (const [param, fieldId] of Object.entries(params)) {
                    const value = urlParams.get(param);
                    const field = document.getElementById(fieldId);
                    if (field && value) field.value = value;
                }
            } catch (e) {}
        }

        function checkSuccess() {
            const urlParams = new URLSearchParams(window.location.search);
            if (urlParams.get('success') === 'true') {
                if (window.history && window.history.replaceState) {
                    window.history.replaceState({}, '', window.location.protocol + "//" + window.location.host + window.location.pathname);
                }
                document.getElementById('webToLeadForm').reset();
                document.getElementById('loadingOverlay').style.display = 'none';
            }
        }

        window.addEventListener('load', function() {
            setDynamicReturnURL();
            captureURLParameters();
            checkSuccess();
        });

        document.addEventListener('DOMContentLoaded', function() {
            const form = document.getElementById('webToLeadForm');
            if (form) {
                form.addEventListener('submit', function() {
                    document.getElementById('loadingOverlay').style.display = 'block';
                    setTimeout(function() {
                        document.getElementById('loadingSpinner').style.display = 'none';
                        document.getElementById('checkmark').style.display = 'block';
                        document.getElementById('submittingText').textContent = 'Success!';
                    }, 800);
                    setDynamicReturnURL();
                    captureURLParameters();
                });
            }
        });

        setDynamicReturnURL();
        captureURLParameters();
    </script>
</body>
</html>
