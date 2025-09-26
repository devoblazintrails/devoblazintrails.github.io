---
title: "Test Form"
layout: splash
permalink: /CECweb-to-lead/
author_profile: false
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

<!-- Success message (initially hidden) -->
<div id="successMessage" style="display: none; background-color: #d4edda; color: #155724; padding: 20px; border-radius: 8px; border: 1px solid #c3e6cb; margin-bottom: 20px; text-align: center;">
    <h3 style="margin: 0; color: #155724;">Thank you for subscribing</h3>
</div>

<!--  NOTE: Please add the following <FORM> element to your page.             -->
<div id="formContent">
    <form id="webToLeadForm" action="https://test.salesforce.com/servlet/servlet.WebToLead?encoding=UTF-8&orgId=00DRt00000GxBuM" method="POST">
        <input type="hidden" name='captcha_settings' value='{"keyname":"LUS","fallback":"true","orgId":"00DRt00000GxBuM","ts":""}'>
        <input type="hidden" name="oid" value="00DRt00000GxBuM">
        <input type="hidden" name="retURL" id="dynamicRetURL" value="">
        
        <!--  NOTE: These fields are optional debugging elements. Please uncomment    -->
        <!--  these lines if you wish to test in debug mode.                          -->
        <!-- <input type="hidden" name="debug" value="1">                               -->
        <!--  <input type="hidden" name="debugEmail"                                  -->
        <!--  value="devo.perezm@loveunited.solutions">                               -->
        
        <label for="last_name">First Name</label>
        <input id="last_name" maxlength="80" name="last_name" size="20" type="text" required/><br>
        
        <label for="email">Email Address</label>
        <input id="email" maxlength="80" name="email" size="20" type="email" required/><br>
        
        Certification Interest:
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
        </select><br>
        
        <input id="lead_source" name="lead_source" type="hidden" value="Newsletter"/>
        <input id="00NHs00000G6o1p" name="00NHs00000G6o1p" type="hidden"/>
        <input id="00NHs00000G6o1u" name="00NHs00000G6o1u" type="hidden"/>
        <input id="00NHs00000G6o1z" name="00NHs00000G6o1z" type="hidden"/>
        <input id="00NHs00000G6r8g" name="00NHs00000G6r8g" type="hidden"/>
        <input id="00NHs00000G6o24" name="00NHs00000G6o24" type="hidden"/>
        
        <!-- reCAPTCHA Widget -->
        <div class="g-recaptcha" data-sitekey="6LfP5ncrAAAAAKteCgCl1uFl8CPxX6-jhdIVORVE"></div><br>
        
        <input type="submit" name="submit" value="Submit Request">
    </form>
</div>

<script>
// Function to set dynamic return URL
function setDynamicReturnURL() {
    try {
        // Get current page URL without any existing parameters
        const currentUrl = window.location.protocol + '//' + window.location.host + window.location.pathname;
        
        // Add success parameter
        const returnUrl = currentUrl + '?success=true';
        
        // Set the return URL in the hidden field
        const retUrlField = document.getElementById('dynamicRetURL');
        if (retUrlField) {
            retUrlField.value = returnUrl;
        }
    } catch (error) {
        console.log('Error setting return URL:', error);
    }
}

// Check if success parameter is in URL
function checkForSuccess() {
    try {
        // Check for success parameter in URL
        const urlParams = new URLSearchParams(window.location.search);
        const success = urlParams.get('success');
        
        if (success === 'true') {
            // Show success message and hide form
            document.getElementById('successMessage').style.display = 'block';
            document.getElementById('formContent').style.display = 'none';
            
            // Clean up URL (remove success parameter)
            if (window.history && window.history.replaceState) {
                const newUrl = window.location.protocol + "//" + window.location.host + window.location.pathname;
                window.history.replaceState({path: newUrl}, '', newUrl);
            }
        }
    } catch (error) {
        console.log('Error checking for success parameter:', error);
    }
}

// Function to reset form and show it again
function resetForm() {
    document.getElementById('successMessage').style.display = 'none';
    document.getElementById('formContent').style.display = 'block';
    
    // Clear form fields
    document.getElementById('webToLeadForm').reset();
    
    // Reset the return URL
    setDynamicReturnURL();
}

// Initialize when page loads
window.addEventListener('load', function() {
    setDynamicReturnURL();
    checkForSuccess();
});

// Set return URL right before form submission
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('webToLeadForm');
    if (form) {
        form.addEventListener('submit', function() {
            setDynamicReturnURL();
        });
    }
});

// Backup: Set return URL immediately when script runs
setDynamicReturnURL();
</script>
