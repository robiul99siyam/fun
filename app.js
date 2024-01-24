const ClickNow = () => {
    const yesElement = document.getElementById('yes');
    const noElement = document.getElementById('no');
  
    yesElement.innerText = 'I Love You ';
    noElement.innerText = ''; // Reset the text in the "no" element
  };
  
  const ClickNowEnd = () => {
    const yesElement = document.getElementById('yes');
    const noElement = document.getElementById('no');
  
    yesElement.innerText = ''; // Reset the text in the "yes" element
    noElement.innerText = 'দুরে যাইয়া মর';
  };
  