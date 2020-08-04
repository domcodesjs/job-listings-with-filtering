document.addEventListener('DOMContentLoaded', function () {
  const main = document.querySelector('main');

  getJobs().then((jobs) => {
    jobs.forEach((job) => {
      // create job card
      let jobCard = document.createElement('div');
      jobCard.classList.add('job-card');

      if (job.featured) {
        jobCard.classList.add('job-card--featured');
      }

      // create job card info
      let jobCardInfo = document.createElement('div');
      jobCardInfo.classList.add('job-card__info');

      // create company logo
      let logo = document.createElement('img');
      logo.classList.add('job-card__logo');
      logo.src = job.logo;

      // create job card tags element and add tags
      let jobCardTags = document.createElement('ul');
      let jobCardTagsRole = document.createElement('li');
      let jobCardTagsLevel = document.createElement('li');
      jobCardTags.classList.add('job-card__tags');
      jobCardTagsRole.innerText = job.role;
      jobCardTagsLevel.innerText = job.level;
      jobCardTags.appendChild(jobCardTagsRole);
      jobCardTags.appendChild(jobCardTagsLevel);

      if (job.languages.length) {
        job.languages.forEach((language) => {
          let li = document.createElement('li');
          li.innerText = language;
          jobCardTags.appendChild(li);
        });
      }

      if (job.tools.length) {
        job.tools.forEach((tool) => {
          let li = document.createElement('li');
          li.innerText = tool;
          jobCardTags.appendChild(li);
        });
      }

      // create company header
      let company = document.createElement('ul');
      company.classList.add('job-card__info__company');
      let companyLi = document.createElement('li');
      companyLi.innerText = job.company;
      company.appendChild(companyLi);
      jobCardInfo.appendChild(company);

      if (job.new) {
        let li = document.createElement('li');
        li.classList.add('job-card__info__company--new');
        li.innerText = 'NEW!';
        company.appendChild(li);
      }

      if (job.featured) {
        let li = document.createElement('li');
        li.classList.add('job-card__info__company--featured');
        li.innerText = 'FEATURED!';
        company.appendChild(li);
      }

      // create job position
      let position = document.createElement('h1');
      position.innerText = job.position;
      jobCardInfo.appendChild(position);

      // append stuff to the job card and then append it all to main
      jobCard.appendChild(logo);
      jobCard.appendChild(jobCardInfo);
      jobCard.appendChild(jobCardTags);
      main.appendChild(jobCard);
    });
  });

  // retrieves job listing data
  async function getJobs() {
    let res = await fetch('../data.json');
    let data = await res.json();
    return data;
  }
});

// {
//     "id": 1,
//     "company": "Photosnap",
//     "logo": "./images/photosnap.svg",
//     "position": "Senior Frontend Developer",
//     "role": "Frontend",
//     "level": "Senior",
//     "postedAt": "1d ago",
//     "contract": "Full Time",
//     "location": "USA Only",
//     "languages": ["HTML", "CSS", "JavaScript"],
//     "tools": []
//   }
