document.addEventListener('DOMContentLoaded', function () {
  const main = document.querySelector('main');

  async function getJobs() {
    let res = await fetch('../data.json');
    let data = await res.json();
    return data;
  }

  getJobs().then((jobs) => {
    jobs.forEach((job) => console.log(job));
  });
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
