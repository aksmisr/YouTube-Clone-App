// Sample video data
const videos = [
    {
        id: 1,
        title: "Building a YouTube Clone from Scratch - Full Tutorial",
        thumbnail: "https://picsum.photos/seed/1/640/360",
        channel: "Web Dev Pro",
        channelImg: "https://picsum.photos/seed/c1/100/100",
        views: "1.2M views",
        time: "2 days ago",
        duration: "25:34",
        subscribers: "1.5M subscribers",
        description: "In this comprehensive tutorial, we'll build a complete YouTube clone using HTML, CSS, and JavaScript. Learn modern web development techniques and best practices."
    },
    {
        id: 2,
        title: "The Future of AI - What to Expect in 2025",
        thumbnail: "https://picsum.photos/seed/2/640/360",
        channel: "Tech Insights",
        channelImg: "https://picsum.photos/seed/c2/100/100",
        views: "856K views",
        time: "1 week ago",
        duration: "18:22",
        subscribers: "2.3M subscribers",
        description: "Explore the cutting-edge developments in artificial intelligence and what they mean for our future. From machine learning to neural networks."
    },
    {
        id: 3,
        title: "10 JavaScript Tips Every Developer Should Know",
        thumbnail: "https://picsum.photos/seed/3/640/360",
        channel: "Code Academy",
        channelImg: "https://picsum.photos/seed/c3/100/100",
        views: "2.1M views",
        time: "3 days ago",
        duration: "12:45",
        subscribers: "890K subscribers",
        description: "Level up your JavaScript skills with these essential tips and tricks. Perfect for beginners and intermediate developers alike."
    },
    {
        id: 4,
        title: "Relaxing Music for Coding - 3 Hours of Focus",
        thumbnail: "https://picsum.photos/seed/4/640/360",
        channel: "Chill Coding",
        channelImg: "https://picsum.photos/seed/c4/100/100",
        views: "5.4M views",
        time: "1 month ago",
        duration: "3:02:15",
        subscribers: "3.2M subscribers",
        description: "Ambient music designed to help you focus while coding or studying. Perfect background music for productivity."
    },
    {
        id: 5,
        title: "React vs Vue vs Angular - Which One to Choose?",
        thumbnail: "https://picsum.photos/seed/5/640/360",
        channel: "Framework Wars",
        channelImg: "https://picsum.photos/seed/c5/100/100",
        views: "1.8M views",
        time: "2 weeks ago",
        duration: "32:18",
        subscribers: "670K subscribers",
        description: "An in-depth comparison of the three most popular JavaScript frameworks. Learn which one is right for your project."
    },
    {
        id: 6,
        title: "How to Land Your First Developer Job in 2024",
        thumbnail: "https://picsum.photos/seed/6/640/360",
        channel: "Career Dev",
        channelImg: "https://picsum.photos/seed/c6/100/100",
        views: "945K views",
        time: "5 days ago",
        duration: "28:55",
        subscribers: "1.1M subscribers",
        description: "Essential tips and strategies for landing your first job as a software developer. From resume building to interview preparation."
    },
    {
        id: 7,
        title: "CSS Grid Masterclass - Complete Guide",
        thumbnail: "https://picsum.photos/seed/7/640/360",
        channel: "CSS Wizardry",
        channelImg: "https://picsum.photos/seed/c7/100/100",
        views: "678K views",
        time: "1 week ago",
        duration: "45:30",
        subscribers: "450K subscribers",
        description: "Master CSS Grid layout with this comprehensive guide. Learn to create complex responsive layouts with ease."
    },
    {
        id: 8,
        title: "Building a REST API with Node.js and Express",
        thumbnail: "https://picsum.photos/seed/8/640/360",
        channel: "Backend Basics",
        channelImg: "https://picsum.photos/seed/c8/100/100",
        views: "1.5M views",
        time: "4 days ago",
        duration: "52:12",
        subscribers: "980K subscribers",
        description: "Learn how to build a robust REST API using Node.js and Express. Includes authentication, database integration, and deployment."
    },
    {
        id: 9,
        title: "Python for Data Science - Crash Course",
        thumbnail: "https://picsum.photos/seed/9/640/360",
        channel: "Data Science Hub",
        channelImg: "https://picsum.photos/seed/c9/100/100",
        views: "3.2M views",
        time: "2 weeks ago",
        duration: "1:15:45",
        subscribers: "2.8M subscribers",
        description: "Get started with Python for data science. Learn pandas, numpy, matplotlib, and more in this comprehensive crash course."
    },
    {
        id: 10,
        title: "Docker Tutorial for Beginners",
        thumbnail: "https://picsum.photos/seed/10/640/360",
        channel: "DevOps Daily",
        channelImg: "https://picsum.photos/seed/c10/100/100",
        views: "892K views",
        time: "6 days ago",
        duration: "38:20",
        subscribers: "720K subscribers",
        description: "Learn Docker from scratch. Understand containers, images, Docker Compose, and how to containerize your applications."
    },
    {
        id: 11,
        title: "TypeScript Deep Dive - Advanced Concepts",
        thumbnail: "https://picsum.photos/seed/11/640/360",
        channel: "TypeScript Pro",
        channelImg: "https://picsum.photos/seed/c11/100/100",
        views: "456K views",
        time: "3 weeks ago",
        duration: "55:40",
        subscribers: "340K subscribers",
        description: "Take your TypeScript skills to the next level with advanced concepts like generics, decorators, and type guards."
    },
    {
        id: 12,
        title: "UI/UX Design Principles for Developers",
        thumbnail: "https://picsum.photos/seed/12/640/360",
        channel: "Design Dev",
        channelImg: "https://picsum.photos/seed/c12/100/100",
        views: "1.1M views",
        time: "1 week ago",
        duration: "22:15",
        subscribers: "1.3M subscribers",
        description: "Essential UI/UX principles every developer should know. Create beautiful and user-friendly interfaces."
    }
];

// DOM Elements
const videosGrid = document.getElementById('videosGrid');
const menuBtn = document.getElementById('menuBtn');
const sidebar = document.getElementById('sidebar');
const mainContent = document.getElementById('mainContent');
const videoModal = document.getElementById('videoModal');
const closeModal = document.getElementById('closeModal');
const searchInput = document.getElementById('searchInput');
const filterChips = document.querySelectorAll('.filter-chip');

// Render videos
function renderVideos(videoList) {
    videosGrid.innerHTML = '';
    
    videoList.forEach(video => {
        const videoCard = document.createElement('div');
        videoCard.className = 'video-card';
        videoCard.innerHTML = `
            <div class="video-thumbnail">
                <img src="${video.thumbnail}" alt="${video.title}">
                <span class="video-duration">${video.duration}</span>
            </div>
            <div class="video-info">
                <div class="channel-avatar">
                    <img src="${video.channelImg}" alt="${video.channel}">
                </div>
                <div class="video-meta">
                    <h3 class="video-title">${video.title}</h3>
                    <p class="video-channel">${video.channel}</p>
                    <p class="video-stats">${video.views} • ${video.time}</p>
                </div>
            </div>
        `;
        
        videoCard.addEventListener('click', () => openVideoModal(video));
        videosGrid.appendChild(videoCard);
    });
}

// Toggle sidebar
menuBtn.addEventListener('click', () => {
    sidebar.classList.toggle('collapsed');
    mainContent.classList.toggle('expanded');
});

// Open video modal
function openVideoModal(video) {
    document.getElementById('modalTitle').textContent = video.title;
    document.getElementById('modalViews').textContent = video.views;
    document.getElementById('modalDate').textContent = video.time;
    document.getElementById('modalChannel').textContent = video.channel;
    document.getElementById('modalSubs').textContent = video.subscribers;
    document.getElementById('modalChannelImg').src = video.channelImg;
    document.getElementById('modalDescription').textContent = video.description;
    
    videoModal.classList.add('active');
    document.body.style.overflow = 'hidden';
}

// Close video modal
closeModal.addEventListener('click', () => {
    videoModal.classList.remove('active');
    document.body.style.overflow = '';
});

videoModal.addEventListener('click', (e) => {
    if (e.target === videoModal) {
        videoModal.classList.remove('active');
        document.body.style.overflow = '';
    }
});

// Search functionality
searchInput.addEventListener('input', (e) => {
    const searchTerm = e.target.value.toLowerCase();
    const filteredVideos = videos.filter(video => 
        video.title.toLowerCase().includes(searchTerm) ||
        video.channel.toLowerCase().includes(searchTerm)
    );
    renderVideos(filteredVideos);
});

// Filter chips
filterChips.forEach(chip => {
    chip.addEventListener('click', () => {
        filterChips.forEach(c => c.classList.remove('active'));
        chip.classList.add('active');
        
        // Simulate filtering (in real app, would filter by category)
        const category = chip.textContent.toLowerCase();
        if (category === 'all') {
            renderVideos(videos);
        } else {
            // Shuffle videos for demo effect
            const shuffled = [...videos].sort(() => Math.random() - 0.5);
            renderVideos(shuffled.slice(0, 6));
        }
    });
});

// Subscribe button functionality
document.addEventListener('click', (e) => {
    if (e.target.classList.contains('subscribe-btn')) {
        if (e.target.textContent === 'Subscribe') {
            e.target.textContent = 'Subscribed';
            e.target.style.backgroundColor = '#272727';
            e.target.style.color = '#fff';
        } else {
            e.target.textContent = 'Subscribe';
            e.target.style.backgroundColor = '#fff';
            e.target.style.color = '#0f0f0f';
        }
    }
});

// Sidebar links
document.querySelectorAll('.sidebar-link').forEach(link => {
    link.addEventListener('click', (e) => {
        e.preventDefault();
        document.querySelectorAll('.sidebar-link').forEach(l => l.classList.remove('active'));
        link.classList.add('active');
    });
});

// Keyboard shortcuts
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape' && videoModal.classList.contains('active')) {
        videoModal.classList.remove('active');
        document.body.style.overflow = '';
    }
    
    if (e.key === '/' && document.activeElement !== searchInput) {
        e.preventDefault();
        searchInput.focus();
    }
});

// Initialize
renderVideos(videos);