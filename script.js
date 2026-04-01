// --- LIYAFANACC PORTFOLIO LOGIC ---

document.addEventListener('DOMContentLoaded', () => {
    const contactBtn = document.querySelector('.contact-btn');
    const emailAddress = "liyafanacc@gmail.com";

    if (contactBtn) {
        contactBtn.addEventListener('click', function(e) {
            // 1. Try to copy the email to the clipboard as a backup for In-App Browsers
            navigator.clipboard.writeText(emailAddress).then(() => {
                
                // 2. Visual Feedback: Change the button text briefly
                const originalText = contactBtn.innerText;
                contactBtn.innerText = "Email Copied!";
                contactBtn.style.backgroundColor = "var(--pink-light)";
                contactBtn.style.color = "var(--plum-dark)";

                // 3. Reset the button back to original after 2 seconds
                setTimeout(() => {
                    contactBtn.innerText = originalText;
                    contactBtn.style.backgroundColor = ""; // Reverts to CSS variable
                    contactBtn.style.color = "";
                }, 2000);
            }).catch(err => {
                console.error('Could not copy text: ', err);
            });

            // Note: The HTML still has the href="mailto:..." 
            // The browser will still attempt to open the mail app 
            // while the code above handles the clipboard backup.
        });
    }

    // --- OPTIONAL: AMBIENT HOVER EFFECTS ---
    // This adds a slight 'lift' to your link cards when they appear
    const links = document.querySelectorAll('.link-card');
    links.forEach((link, index) => {
        link.style.opacity = "0";
        link.style.transform = "translateY(20px)";
        link.style.transition = "all 0.5s ease " + (index * 0.1) + "s";
        
        setTimeout(() => {
            link.style.opacity = "1";
            link.style.transform = "translateY(0)";
        }, 100);
    });
});