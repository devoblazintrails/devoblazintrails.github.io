---
permalink: /web-to-lead/
title: " "
layout: single
classes: wide
author_profile: true
---

<!--  NOTE: Please add the following <META> element to your page <HEAD>.      -->
<!--  If necessary, please modify the charset parameter to specify the        -->
<!--  character set of your HTML page.                                        -->
<META HTTP-EQUIV="Content-type" CONTENT="text/html; charset=UTF-8">

<!-- reCAPTCHA Script -->
<script src="https://www.google.com/recaptcha/api.js"></script>
<script>
 function timestamp() { var response = document.getElementById("g-recaptcha-response"); if (response == null || response.value.trim() == "") {var elems = JSON.parse(document.getElementsByName("captcha_settings")[0].value);elems["ts"] = JSON.stringify(new Date().getTime());document.getElementsByName("captcha_settings")[0].value = JSON.stringify(elems); } } setInterval(timestamp, 500); 
</script>

<!-- Status message (initially hidden) -->
<div id="statusMessage" style="display:none;text-align:center;padding:20px;"></div>

<!--  NOTE: Please add the following <FORM> element to your page.             -->
<form id="webToLeadForm" action="https://webto.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00D300000001Zrp" method="POST">

<input type="hidden" name='captcha_settings' value='{"keyname":"LUS_TestSite","fallback":"true","orgId":"00D300000001Zrp","ts":""}'>
<input type="hidden" name="oid" value="00D300000001Zrp">
<input type="hidden" name="retURL" id="dynamicRetURL" value="">

<!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
<!--  these lines if you wish to test in debug mode.                          -->
<!-- <input type="hidden" name="debug" value="1">                               -->
<!-- <input type="hidden" name="debugEmail"                                     -->
<!--  value="your-email@example.com">                                          -->

<input type="hidden" name="lead_source" value="Newsletter"/>
<input type="hidden" name="00NUV00000qK4fq" value="true"/>
<input type="hidden" name="00NHs00000G6o1p" id="gad_source"/>
<input type="hidden" name="00NHs00000G6o1u" id="gad_campaignid"/>
<input type="hidden" name="00NHs00000G6o24" id="gclid"/>

<label for="last_name">First Name</label><input id="last_name" maxlength="80" name="last_name" size="20" type="text" required/><br>

<label for="email">Email</label><input id="email" maxlength="80" name="email" size="20" type="text" required/><br>

<label for="00NUV00000P9iuf">Certification Interest</label><select id="00NUV00000P9iuf" name="00NUV00000P9iuf" title="Certification Interest" required><option value="">--None--</option><option value="Self-paced Executive Coaching Certification Programs">Self-paced Executive Coaching Certification Programs</option><option value="ICF Executive Coaching Certification Programs">ICF Executive Coaching Certification Programs</option><option value="Team Coaching Certification">Team Coaching Certification</option><option value="In-Person Seminars for Executive Coaching Certification">In-Person Seminars for Executive Coaching Certification</option><option value="Accelerated Executive Coaching Certification Programs">Accelerated Executive Coaching Certification Programs</option><option value="Internal Coach Training">Internal Coach Training</option><option value="Coach Training for Management Consultants">Coach Training for Management Consultants</option><option value="Upgrade to PCC">Upgrade to PCC</option></select><br>

<div class="g-recaptcha" data-sitekey="6LfP5ncrAAAAAKteCgCl1uFl8CPxX6-jhdIVORVE"></div><br>

<input type="submit" name="submit">

</form>

<script>
// Function to set dynamic return URL
function setDynamicReturnURL() {
    try {
        const retUrlField = document.getElementById('dynamicRetURL');
        if (retUrlField) {
            retUrlField.value = window.location.protocol + '//' + window.location.host + window.location.pathname + '?success=true';
            console.log('Return URL set to:', retUrlField.value);
        }
    } catch (error) {
        console.log('Error setting return URL:', error);
    }
}

// Function to capture URL parameters (Google Ads)
function captureURLParameters() {
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const params = {
            'gclid': 'gclid',
            'gad_source': 'gad_source',
            'gad_campaignid': 'gad_campaignid',
            'gbraid': 'gbraid'
        };
        
        for (const [param, fieldId] of Object.entries(params)) {
            const value = urlParams.get(param);
            const field = document.getElementById(fieldId);
            if (field && value) {
                field.value = value;
                console.log('Captured ' + param + ':', value);
            }
        }
    } catch (error) {
        console.log('Error capturing URL parameters:', error);
    }
}

// Check if success parameter is in URL
function checkSuccess() {
    const urlParams = new URLSearchParams(window.location.search);
    if (urlParams.get('success') === 'true') {
        // Show success message and hide form
        document.getElementById('statusMessage').innerHTML = 'Success, thank you!';
        document.getElementById('statusMessage').style.display = 'block';
        document.getElementById('webToLeadForm').style.display = 'none';
        
        // Clean up URL (remove success parameter)
        if (window.history && window.history.replaceState) {
            window.history.replaceState({}, '', window.location.protocol + "//" + window.location.host + window.location.pathname);
        }
        
        console.log('Form submission successful');
    }
}

// Initialize when page loads
window.addEventListener('load', function() {
    setDynamicReturnURL();
    captureURLParameters();
    checkSuccess();
});

// Handle form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('webToLeadForm');
    if (form) {
        form.addEventListener('submit', function() {
            // Show processing message and hide form
            document.getElementById('statusMessage').innerHTML = 'Processing...';
            document.getElementById('statusMessage').style.display = 'block';
            document.getElementById('webToLeadForm').style.display = 'none';
            
            console.log('Form submitting...');
        });
    }
});

// Backup: Run initialization immediately
setDynamicReturnURL();
captureURLParameters();
</script>
