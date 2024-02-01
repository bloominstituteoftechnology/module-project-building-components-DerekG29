function moduleProject3() {

  // 👉 TASK 1 - Write a `buildNav` component that returns a nav

  function buildNav(links) {
    const nav = document.createElement('nav');

    links.forEach(({ href, textContent, title }) => {
      const navLink = document.createElement('a');

      navLink.href = href;
      navLink.title = title;
      navLink.textContent = textContent;

      nav.appendChild(navLink);
    });

    return nav;
  }

  // ❗ DOM creation using your `buildNav` component (do not change):

  document.querySelector('header').appendChild(buildNav([
    { href: 'https://www.example.com', textContent: 'Home', title: 'Go to the home page' },
    { href: 'https://www.example.com/about', textContent: 'About', title: 'Learn more about our company' },
    { href: 'https://www.example.com/services', textContent: 'Services', title: 'View our available services' },
    { href: 'https://www.example.com/blog', textContent: 'Blog', title: 'Read our latest blog posts' },
    { href: 'https://www.example.com/contact', textContent: 'Contact', title: 'Get in touch with us' },
  ]))


  // 👉 TASK 2A - Write a `buildLearnerCard` component that returns a card

  function buildLearnerCard(learner, languages) {
    const { id, fullName, dateOfBirth, favLanguage } = learner;

    const language = 
      languages.filter(language => language.id === favLanguage)[0].name;

    const card = document.createElement('div');
    const name = document.createElement('p');
    const Id = document.createElement('p');
    const dob = document.createElement('p');
    const lang = document.createElement('p');

    card.classList.add('learner-card');
    name.textContent = fullName;
    Id.textContent = 'Learner ID: ' + id;
    dob.textContent = 'Date of Birth: ' + dateOfBirth;
    lang.textContent = 'Favorite Language: ' + language;

    card.appendChild(name);
    card.appendChild(Id);
    card.appendChild(dob);
    card.appendChild(lang);

    card.addEventListener('click', (e) => {
      e.stopPropagation();
      document.querySelectorAll('.learner-card')
        .forEach(card => card.classList.remove('active'));
      card.classList.add('active');
    });

    return card;
  }

  const section = document.querySelector('section');

  {
    // 👉 TASK 2B - Use the two variables below to make learner Cards, and put them in the DOM

    let languages = [
      { id: 37, name: 'JavaScript', creator: 'Brendan Eich', year: 1995 },
      { id: 82, name: 'Python', creator: 'Guido van Rossum', year: 1991 },
      { id: 12, name: 'Java', creator: 'James Gosling', year: 1995 },
      { id: 53, name: 'C#', creator: 'Microsoft Corporation', year: 2000 },
      { id: 91, name: 'Ruby', creator: 'Yukihiro Matsumoto', year: 1995 }
    ]
    let learners = [
      { id: 24, fullName: 'Kenneth Fisher', dateOfBirth: '1990-01-01', favLanguage: 82 },
      { id: 53, fullName: 'Jess Williams', dateOfBirth: '1985-05-10', favLanguage: 37 },
      { id: 72, fullName: 'Brandon Nguyen', dateOfBirth: '1992-09-15', favLanguage: 53 },
      { id: 41, fullName: 'Sabah Beydoun', dateOfBirth: '1988-03-25', favLanguage: 91 },
      { id: 17, fullName: 'Daniel Castillo', dateOfBirth: '1995-11-05', favLanguage: 12 }
    ]

    
    
    learners.forEach(learner => {
      section.appendChild(buildLearnerCard(learner, languages));
    });
  }

  // 👉 TASK 3 - Write a `buildFooter` component that returns a footer

  function buildFooter(footerData) {
    const footer = document.createElement('footer');

    const companyInfo = document.createElement('div');
      const companyName = document.createElement('p');
      const address = document.createElement('p');
      const email = document.createElement('p');
        const emailLink = document.createElement('a');

    const socials = document.createElement('div');
      const twitter = document.createElement('a');
      const facebook = document.createElement('a');
      const instagram = document.createElement('a');

    const copyright = document.createElement('div');
    const year = new Date().getFullYear();

    companyInfo.classList.add('company-info');
    companyName.classList.add('company-name');
    address.classList.add('address');
    email.classList.add('contact-email');
    socials.classList.add('social-media');

    emailLink.href = 'mailto:' + footerData.contactEmail;
    twitter.href = footerData.socialMedia.twitter;
    facebook.href = footerData.socialMedia.facebook;
    instagram.href = footerData.socialMedia.instagram;

    companyName.textContent = footerData.companyName;
    address.textContent = footerData.address;
    email.textContent = 'Email: ';
    emailLink.textContent = footerData.contactEmail;
    twitter.textContent = 'Twitter';
    facebook.textContent = 'Facebook';
    instagram.textContent = 'Instagram';
    copyright.textContent = '© BLOOM INSTITUTE OF TECHNOLOGY ' + year;

    footer.appendChild(companyInfo);
    footer.appendChild(socials);
    footer.appendChild(copyright);
    companyInfo.appendChild(companyName);
    companyInfo.appendChild(address);
    companyInfo.appendChild(email);
    email.insertAdjacentElement('beforeend', emailLink);
    socials.appendChild(twitter);
    socials.appendChild(facebook);
    socials.appendChild(instagram);

    return footer;
  }

  // ❗ DOM creation using your `buildFooter` component (do not change):
  document.body.appendChild(buildFooter({
    companyName: 'Bloom Institute of Technology',
    address: '123 Main Street, City, Country',
    contactEmail: 'info@example.com',
    socialMedia: {
      twitter: 'https://twitter.com/example',
      facebook: 'https://www.facebook.com/example',
      instagram: 'https://www.instagram.com/example',
    },
  }))

  // 👉 TASK 4 - Clicking on the section should deactivate the active card

  section.addEventListener('click', () => {
    document.querySelectorAll('.learner-card')
      .forEach(card => card.classList.remove('active'));
  });
}

// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
// ❗ DO NOT CHANGE THIS CODE
if (typeof module !== 'undefined' && module.exports) module.exports = { moduleProject3 }
else moduleProject3()
