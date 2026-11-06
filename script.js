document.addEventListener('DOMContentLoaded', () => {
  // Set copyright year
  const yearElement = document.getElementById('year');
  if(yearElement) {
    yearElement.textContent = new Date().getFullYear();
  }

  // Handle WhatsApp Enquiry Form
  const form = document.getElementById('enquiryForm');
  if(form) {
    form.addEventListener('submit', (e) => {
      e.preventDefault();
      
      const name = document.getElementById('customerName').value;
      const phone = document.getElementById('customerPhone').value;
      const area = document.getElementById('customerArea').value;
      const address = document.getElementById('customerAddress').value;
      const pkg = document.getElementById('packageChoice').value;
      
      // Format message for WhatsApp
      const message = `*New Flash Fiber Enquiry*\n\n*Name:* ${name}\n*Phone:* ${phone}\n*Area:* ${area}\n*Address:* ${address}\n*Interested in:* ${pkg}`;
      
      // Target WhatsApp number
      const targetNumber = '923457273322';
      const whatsappUrl = `https://wa.me/${targetNumber}?text=${encodeURIComponent(message)}`;
      
      window.open(whatsappUrl, '_blank');
    });
  }

  // Populate Service Areas dynamically
  const serviceAreas = [
    "Mumtazabad",
    "Vehari Road",
    "Shah Shams Colony",
    "Sabzwari Town",
    "Mujtaba Canal View",
    "Fareed Canal View",
    "Hashmi Canal View",
    "Inam City",
    "Marhaba Canal View",
    "Gulistan-e-Ashar",
    "Green View Colony",
    "Al-Quresh Phase I & II"
  ];
  
  const areaSelect = document.getElementById('customerArea');
  if(areaSelect) {
    serviceAreas.forEach(area => {
      const option = document.createElement('option');
      option.value = area;
      option.textContent = area;
      areaSelect.appendChild(option);
    });
  }
});
