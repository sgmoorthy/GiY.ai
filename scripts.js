document.addEventListener('DOMContentLoaded', function() {
    // Sample project data
    const projects = [
        {
            title: 'AI Image Recognition',
            description: 'Build an image recognition system using Raspberry Pi and TensorFlow Lite.',
            difficulty: 'Intermediate',
            category: 'Computer Vision'
        },
        {
            title: 'Voice Assistant',
            description: 'Create your own voice assistant using Python and natural language processing.',
            difficulty: 'Beginner',
            category: 'NLP'
        },
        {
            title: 'Smart Home Automation',
            description: 'Develop an AI-powered home automation system with Raspberry Pi.',
            difficulty: 'Advanced',
            category: 'IoT'
        }
    ];

    // Sample forum topics
    const forumTopics = [
        {
            title: 'Getting Started with TensorFlow on Raspberry Pi',
            author: 'AI_Enthusiast',
            replies: 15,
            lastUpdate: '2 hours ago'
        },
        {
            title: 'Best Practices for Model Optimization',
            author: 'OptimizationGuru',
            replies: 23,
            lastUpdate: '1 day ago'
        },
        {
            title: 'Troubleshooting Common Pi Camera Issues',
            author: 'PiExpert',
            replies: 8,
            lastUpdate: '3 hours ago'
        }
    ];

    // Sample resources
    const resources = [
        {
            title: 'Complete Guide to AI on Raspberry Pi',
            type: 'PDF',
            size: '2.5 MB'
        },
        {
            title: 'Model Training Workshop Recording',
            type: 'Video',
            size: '150 MB'
        },
        {
            title: 'Python Code Examples Collection',
            type: 'ZIP',
            size: '5 MB'
        }
    ];

    // Load projects
    const projectGallery = document.getElementById('projectGallery');
    if (projectGallery) {
        projects.forEach(project => {
            const projectElement = document.createElement('div');
            projectElement.className = 'col-md-4';
            projectElement.innerHTML = `
                <div class="card project-card">
                    <div class="card-body">
                        <h5 class="card-title">${project.title}</h5>
                        <p class="card-text">${project.description}</p>
                        <div class="project-meta">
                            <span class="badge bg-primary">${project.difficulty}</span>
                            <span class="badge bg-secondary">${project.category}</span>
                        </div>
                        <a href="#" class="btn btn-outline-primary mt-3">View Project</a>
                    </div>
                </div>
            `;
            projectGallery.appendChild(projectElement);
        });
    }

    // Load forum topics
    const forumTopicsContainer = document.getElementById('forumTopics');
    if (forumTopicsContainer) {
        forumTopics.forEach(topic => {
            const topicElement = document.createElement('div');
            topicElement.className = 'forum-topic';
            topicElement.innerHTML = `
                <h5>${topic.title}</h5>
                <div class="topic-meta">
                    <span>By ${topic.author}</span>
                    <span>${topic.replies} replies</span>
                    <span>Last update: ${topic.lastUpdate}</span>
                </div>
            `;
            forumTopicsContainer.appendChild(topicElement);
        });
    }

    // Load resources
    const resourcesList = document.getElementById('resourcesList');
    if (resourcesList) {
        resources.forEach(resource => {
            const resourceElement = document.createElement('div');
            resourceElement.className = 'resource-item';
            resourceElement.innerHTML = `
                <div class="resource-info">
                    <h5>${resource.title}</h5>
                    <span>${resource.type} - ${resource.size}</span>
                </div>
                <a href="#" class="btn btn-sm btn-outline-primary">Download</a>
            `;
            resourcesList.appendChild(resourceElement);
        });
    }

// Note: This import statement should be moved to the top of the file
// Keeping this line as a reference to where it was previously located
import('./email-config.js').then(config => {
    const { PUBLIC_KEY, TEMPLATE_ID, SERVICE_ID } = config;
    // Initialize EmailJS after config is loaded
    emailjs.init(PUBLIC_KEY);
});

    // Initialize EmailJS with the public key
    emailjs.init(PUBLIC_KEY);

    // Handle volunteer form submission
    document.getElementById('volunteerForm').addEventListener('submit', function(e) {
        e.preventDefault();
    
        const formData = {
            name: this.name.value,
            email: this.email.value,
            expertise: this.expertise.value
        };
    
        // Send email using EmailJS
        emailjs.send(SERVICE_ID, TEMPLATE_ID, formData)
            .then(function(response) {
                console.log('Email sent successfully:', response);
                alert('Thank you for volunteering! We will contact you soon.');
                document.getElementById('volunteerForm').reset();
            })
            .catch(function(error) {
                console.error('Email sending failed:', error);
                alert('Sorry, there was an error sending your application. Please try again later.');
            });
    });

    // Smooth scrolling for navigation links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
});